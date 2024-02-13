
import { useContext } from "react";
import Pokemon from "./Pokemon";
import { PokemonContext } from "./Context";

const BattleArena = () => {
    const { pokemon1, pokemon2 } = useContext(PokemonContext);

    return (
        <>
            <Pokemon isEnemy={pokemon1.isEnemy} />
            <Pokemon isEnemy={pokemon2.isEnemy} />
        </>
    );
}

export default BattleArena;