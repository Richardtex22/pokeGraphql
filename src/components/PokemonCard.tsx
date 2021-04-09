import React from 'react';
import { PokemonDetails } from './Pokemon';
import p from './assets/pokebola.png';

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

 const cardStyle = {
    borderRadius: '15px 80px 80px 15px'
 }
const PokeCard: React.FC<TDetails> = ({ details }) => {
    const { image, id, name, number } = details;
    return (
        <>
            <div className="relative w-80 h-auto flex flex-row justify-between justify-self-center bg-gradient-to-r from-gray-300 to-gray-100" style={cardStyle}>
                <div className="grid grid-flow-row auto-rows-max gap-4 justify-start p-4 text-left text-gray-800 rounded-l-lg">
                    <p>{`#${number}`}</p>
                    <p>{name}</p>
                </div>
                <div className="w-1/2 hover:opacity-70 overflow-hidden">
                    <div className="relative w-42 h-40">
                    <img className="z-10 absolute h-full w-full object-fill rounded-full transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-0" src={image} alt="" />
                    <img className="justify-center opacity-90 transform scale-50 -translate-x-2" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/240px-Pokebola-pokeball-png-0.png' alt="poke" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { PokeCard };