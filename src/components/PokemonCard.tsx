import React, { useState } from 'react';
import { PokemonDetails } from './Pokemon';
import './PokemonCard.module.scss';

type TDetails = {
    details: PokemonDetails;
}

const cardStyle = {
    borderRadius: '15px 80px 80px 15px'
}

const ColorType = {
    Fire: "firebrick",
    Water: "blue",
    Poison: "violet",
    Ghost: "black",
    Flying: "lightskyblue",
    Grass: "green",
    Electric: "khaki",
    Psychic: "indigo",
    Bug: "limegreen",
    Ground: "darkgoldenrod",
    Normal: "lightgray",
    Fairy: "lightpink",
    Fighting: "lightsalmon",
    Rock: "darkslategrey",
    Ice: "aqua",
    Dragon: "geekblue",
    Steel: "dimgray"
};

const typeColor = (type: string) => {
    let bgColor = "";
    const valColor = Object.entries(ColorType).forEach(([key, value]) => {
        if (type === key) {
            bgColor = value;
        } else return "";
    });
    return bgColor;
}


const PokeCard: React.FC<TDetails> = ({ details }) => {
    const { image, name, number, types } = details;

    return (
        <>
            <div className="relative w-80 max-h-xs flex flex-row justify-between justify-self-center bg-gradient-to-r from-gray-200 to-gray-100" style={cardStyle}>
                <div className="w-auto ml-4 grid justify-start p-2 text-left rounded-l-lg">
                    <p className="text-gray-600 font-bold text-lg">{`#${number}`}</p>
                    <p className="text-gray-800">{name}</p>
                    {types && types.map(type => {
                        return <div
                            key={`id-${type}`}
                            className="w-20 h-7 pt-1 rounded-3xl text-center text-sm self-center" style={{backgroundColor: `${typeColor(type)}`}}>
                            <p className="text-gray-100 ">{type}</p>
                        </div>
                    })}
                </div>
                <div className="w-1/2 h-auto hover:opacity-70 overflow-hidden">
                    <div className="relative w-42 h-40">
                        <img className="z-10 absolute h-full w-full object-fill rounded-full transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-0" src={image} alt="poke" />
                        <img className="justify-center opacity-90 transform scale-50 -translate-x-2" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/240px-Pokebola-pokeball-png-0.png' alt="poke" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { PokeCard };