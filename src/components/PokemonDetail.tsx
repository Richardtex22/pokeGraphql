import { useQuery, gql } from "@apollo/client";
import { Console } from "console";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { typeColor } from "../helpers/getColorByType";

interface MatchParams {
  match: string;
}
const getPokemonById = gql`
  query pokemon($id: String) {
    pokemon(id: $id) {
      id
      number
      name
      weight {
        maximum
        minimum
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
const PokemonDetails: RouteComponentProps<MatchParams> = ({ match }) => {
  const [open, setOpen] = useState(false);
  const {
    params: { id },
  } = match;

  const { loading, error, data } = useQuery(getPokemonById, {
    variables: { id: id },
  });

  if (error) {
    return <h2 className="text-5xl">This pokemon is not in the Pokedex</h2>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  const {
    image,
    weight,
    classification,
    name,
    fleeRate,
    maxCP,
    maxHP,
    types,
    number: num,
  } = data.pokemon;
  console.log(data.pokemon);
  return (
    <>
      <div
        className="flex m-8 sm:my-4 sm:ml-12 opacity-70"
        style={{ color: `${typeColor(types[0])}` }}
      >
        <Link to="/">
          <button
            className="w-24 px-2 flex justify-around items-center hover:border-white border-2 rounded-lg"
            style={{ borderColor: `${typeColor(types[0])}` }}
          >
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg tracking-normal">Return</span>
          </button>
        </Link>
      </div>
      <div
        className="grid grid-cols-2 w-full min-h-screen mx-auto p-8 opacity-70"
        style={{ backgroundColor: `${typeColor(types[0])}` }}
      >
        <div className="m-4 relative w-72 h-72 z-50 justify-self-center">
          <img className="w-full h-auto rounded-lg" src={image} alt="pokemon" />
        </div>
        <div className="text-lg text-black flex flex-row h-1/2 py-4 justify-self-start">
          <div className="w-full">
            <h2 className="text-2xl ">{name.toUpperCase()}</h2>
            <ul className="list-none">
              <li className="list-none font-bold border-t-2 py-2">
                <span className="text-gray-500 pr-4">Number</span> {`#${num}`}
              </li>
              <li className="list-none font-bold border-t-2 py-2">
                <div className="grid grid-cols-3 gap-x-2">
                  <span className="text-gray-500 pr-4">Type</span>
                  {types &&
                    types.map((type) => {
                      const color =
                        type === "Normal" ? "darkgray" : typeColor(type);
                      return (
                        <div
                          key={`id-${type}`}
                          className="w-20 h-7 pt-1 rounded-3xl text-center text-sm px-2"
                          style={{ backgroundColor: `${color}` }}
                        >
                          <p className="text-gray-100 ">{type}</p>
                        </div>
                      );
                    })}
                </div>
              </li>
              <li className="list-none font-bold text-justify border-t-2 py-2">
                <span className="text-gray-500 pr-4">Species</span>{" "}
                {classification}
              </li>
              <li className="list-none font-bold border-t-2 py-2">
                <span className="text-gray-500 pr-4">Weight</span>{" "}
                {`${weight.minimum}-${weight.maximum}`}
              </li>
            </ul>
          </div>
          <div className="p-1 ml-4">
            <h2 className="text-xl">Stats</h2>
            <ul>
              <li className="list-none font-bold border-t-2 py-2">
                <span className="text-gray-500 pr-4">Fleerate</span>
                {fleeRate}
              </li>
              <li className="list-none font-bold border-t-2 py-2">
                <span className="text-gray-500 pr-4">MaxHp</span>
                {maxHP}
              </li>
              <li className="list-none font-bold border-t-2 py-2">
                <span className="text-gray-500 pr-4">MaxCP</span>
                {maxCP}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
