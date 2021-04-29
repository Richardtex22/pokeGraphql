import bg from "../assets/salamHD.png";
import { ShowPokemon } from "./Pokemon";

const Homepage: React.FC = () => {
    return (
        <header className="min-h-screen bg-fixed bg-no-repeat pt-6 pb-12" style={{backgroundImage: `url(${bg})`}}>
            <h2 className="text-white text-xl my-8 font-mono">Welcome to your pokeApp</h2>
            <ShowPokemon />
        </header>
    )
}

export default Homepage;