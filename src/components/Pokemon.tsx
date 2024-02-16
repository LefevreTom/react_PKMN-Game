import { useContext } from "react";
import {AnimationContext, PokemonContext, TextContext} from "./Context";
import { TextValue } from '../enum';
import { GameState } from "../enum";

interface PokemonProps {
    isEnemy: boolean;
    setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const Pokemon = ({isEnemy, setGameState}:PokemonProps) => {
    
    const { anim, setAnim, pkmnNb, setPkmnNb } = useContext(AnimationContext);
    const { pokemon1, pokemon2, hp1, hp2 } = useContext(PokemonContext);
    const { setText } = useContext(TextContext);

    const pkmn1AnimEnd = () => {
        setAnim("none"); 
        setPkmnNb(0); 
        setText(TextValue.CanMove); 
        if (hp2 <= 0) 
        {
            setText(TextValue.EnemyWin); 
            setGameState(GameState.End);
        }
        else setGameState(GameState.Player2);
    }

    const pkmn2AnimEnd = () => {
        setAnim("none"); 
        setPkmnNb(0); 
        setText(TextValue.CanMove); 
        if (hp1 <= 0) 
        {
            setText(TextValue.YouWin); 
            setGameState(GameState.End);
        }
        else setGameState(GameState.Player1);
    }

    if (isEnemy) {
        return (
            <div className="pokemon1"> 
            <div className="interface">
                <div className="name">
                    {pokemon1.name}
                    <div className="lvl">lv {pokemon1.level}</div>
                </div>
                <div className="hp">HP<div className="hp__bar" style={{ "--hpBar__size": `${hp1 / pokemon1.baseHp * 100}%` } as React.CSSProperties}></div></div>
                <div className="hp__label">{hp1}/{pokemon1.baseHp}</div>
            </div>
              <img 
                src={pokemon1.image} 
                alt={pokemon1.name} 
                className={pkmnNb === 1 ? anim : ''}
                onAnimationEnd={() => {pkmn1AnimEnd()}}
                />
            </div>
        );
    }
    else {
        return (
            <div className="pokemon2">
                <img 
                    src={pokemon2.image} 
                    alt={pokemon2.name}
                    className={pkmnNb === 2 ? anim : ''}
                    onAnimationEnd={() => {pkmn2AnimEnd()}} 
                />
                <div className="interface">
                    <div className="name">
                        {pokemon2.name}
                        <div className="lvl">lv {pokemon2.level}</div>
                    </div>
                    <div className="hp">HP<div className="hp__bar" style={{ "--hpBar__size": `${hp2 / pokemon2.baseHp * 100}%` } as React.CSSProperties}></div></div>
                    <div className="hp__label">{hp2}/{pokemon2.baseHp}</div>
                </div>
            </div>
        );
    }
}

export default Pokemon;