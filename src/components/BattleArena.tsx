
import { useContext } from "react";
import Pokemon from "./Pokemon";
import { PokemonContext } from "./Context";
import { GameState } from "../enum";
interface BattleArenaProps {
    setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const BattleArena = ({setGameState}: BattleArenaProps) => {
    const { pokemon1, pokemon2 } = useContext(PokemonContext);

    return (
        <>
            <Pokemon isEnemy={pokemon1.isEnemy} setGameState={setGameState}/>
            <Pokemon isEnemy={pokemon2.isEnemy} setGameState={setGameState}/>
        </>
    );
}

export default BattleArena;