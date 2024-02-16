import { useContext } from "react";
import { AnimationContext, PokemonContext, TextContext } from "./Context";
import { TextValue } from '../enum';
import { GameState } from "../enum";
import { calculateDamages } from "../utils";

interface ControlProps {
    moves: Move[];
    gameState: GameState;
    setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const Controls = ({moves, gameState, setGameState}: ControlProps) => {

    if (moves.length === 0) return (<div className="textbox">No moves available</div>);
    if (moves.length > 4) throw new Error("A pokemon can't have more than 4 moves");

    const { setAnim, setPkmnNb } = useContext(AnimationContext);
    const { pokemon1, pokemon2, hp1, setHp1 } = useContext(PokemonContext);    
    const { text, setText } = useContext(TextContext);

    const attack = (move: Move) => {
        setGameState(GameState.Transition);
        setText(TextValue.YouAttack);
        setAnim("attack");
        setPkmnNb(2);
        let {damage, modifier} = calculateDamages(pokemon2, pokemon1, move);
        if (modifier === 2) setText(TextValue.CriticalHit);
        
        let leftHp = hp1 - damage;

        console.log(`${pokemon1.name} HPs are : ${hp1} - ${damage} = ${leftHp}`);
        
        setHp1( leftHp < 0 ? 0 : leftHp);
    }

    return (
        <div className="textbox">
            <div className="info">{text}</div>
            <div className="attacks">
                {moves.map(move => (
                    <button
                    {...(gameState !== GameState.Player2 ? {disabled: true} : {}) }
                    key={move.name} 
                    className="attack"
                    onClick={() => attack(move)}
                    >
                        <div className="attack__wrapper">
                            <div className="name">{move.name}</div>
                            <div className="power">{move.power}</div>
                        </div>
                        <div className="pp">{move.pp}/{move.basepp}</div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Controls;