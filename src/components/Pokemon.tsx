import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { PokeCard } from './PokemonCard';

export interface PokemonDetails {
    id: string,
    number: string,
    name: string,
    weight: {
        minimum: string,
        maximum: string
    },
    height: {
        minimum: string,
        maximum: string
    },
    classification: string,
    types: [
        string
    ],
    resistant: [
        string
    ],
    weaknesses: [
        string
    ],
    fleeRate: number,
    maxCP: number,
    maxHP: number,
    image: string
}
const getPokemon = gql`
query pokemons($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
  `;

const ShowPokemon: React.FC = () => {
    const [total, setTotal] = useState(20);
    const [isLoad, setIsLoad] = useState(true);

    const { loading, data, error } = useQuery(getPokemon,
        {
            variables: { first: 151 },
        });

    if (error) {
        return (
            <div className="flex flex-col items-center max-w-4xl mx-auto mt-14 mb-6">
                <h2 className="justify-center m-12 text-5xl text-center text-white">Houston we have problems, try reloading the page.</h2>
                <button
                    className="font-mono text-lg mb-4 h-12 w-48 py-0 px-6 text-center mx-4 text-white bg-gray-500 rounded-lg"
                    onClick={() => window.location.reload()}>
                    Reload
              </button>
            </div>
        );
    }
    if (loading) return <h2>LOADING.....</h2>;
    const { pokemons } = data;
    const loadMore = () => {
        setTotal(151);
        setIsLoad(!isLoad);
    }

    return (
        <>
            <div className="content-center items-center mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 my-8 max-w-6xl">
                {pokemons && pokemons.slice(0, total).map((pokemon: PokemonDetails) => {
                    return (
                        <PokeCard key={pokemon.id} details={pokemon}></PokeCard>
                    )
                })
                }
            </div>
            {isLoad &&
                <div className="justify-center mx-auto h-48">
                    <button
                        className="font-mono text-lg mt-8 h-12 w-48 py-0 px-6 text-center mx-auto text-white bg-gray-500 rounded-lg"
                        onClick={() => loadMore()}>
                        Get'm all!
              </button>
                </div>
            }
        </>
    )
}

export { ShowPokemon };