import React from 'react';
import { PokemonDetails } from './Pokemon';

type TDetails = {
    details: PokemonDetails;
}
/**
 * 
 * @param param0 
 * background: #F2F2F2;
    float: left;
    display: block;
    position: relative;
    border-radius: 5px;
    width: 100%;
    padding-top: 100%;
 */
const PokeCard: React.FC<TDetails> = ( {details} ) => {
    console.log(details);
    const {image, id, name, number} = details;
    return (
        <>
        <div className="w-48 h-96">
            <figure>
                <img className="h-48 w-full object-cover rounded-lg" src={image} alt="" />
            </figure>
            <div className="grid grid-flow-row auto-rows-max gap-4 justify-start p-4 text-left text-white">
            <p>{`#${number}`}</p>
            <p>{name}</p>
            </div>
        </div>
        </>
    )
}

export { PokeCard };