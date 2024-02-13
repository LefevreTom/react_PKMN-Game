import { useContext } from "react";
import {AnimationContext, PokemonContext, TextContext} from "./Context";
import { TextValue } from '../enum';

interface PokemonProps {
    isEnemy: boolean;
}

const Pokemon = ({isEnemy}:PokemonProps) => {
    
    const { anim, setAnim, pkmnNb, setPkmnNb } = useContext(AnimationContext);
    const { pokemon1, pokemon2, hp1, hp2 } = useContext(PokemonContext);
    const { setText } = useContext(TextContext);

    if (isEnemy) {
        return (
            <div className="pokemon1"> 
              <div className="interface">
                <div className="name">
                    {pokemon1.name}
                    <div className="lvl">lv {pokemon1.level}</div>
                </div>
                <div className="hp">HP<div className="hp__bar" style={{"--hpBar__size": `${hp1/pokemon1.baseHp*100}%`}}></div></div>
                <div className="hp__label">{hp1}/{pokemon1.baseHp}</div>
              </div>
              <img 
                src={pokemon1.image} 
                alt={pokemon1.name} 
                className={pkmnNb === 1 ? anim : ''}
                onAnimationEnd={() => {setAnim("none"); setPkmnNb(0); setText(TextValue.CanMove);}}
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
                    onAnimationEnd={() => {setAnim("none"); setPkmnNb(0); setText(TextValue.CanMove);}} 
                />
                <div className="interface">
                    <div className="name">
                        {pokemon2.name}
                        <div className="lvl">lv {pokemon2.level}</div>
                    </div>
                    <div className="hp">HP<div className="hp__bar" style={{"--hpBar__size": `${hp2/pokemon2.baseHp*100}%`}}></div></div>
                    <div className="hp__label">{hp2}/{pokemon2.baseHp}</div>
                </div>
            </div>
        );
    }
}

export default Pokemon;