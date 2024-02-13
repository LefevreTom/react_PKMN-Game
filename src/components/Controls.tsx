import { useContext } from "react";
import { AnimationContext, PokemonContext, TextContext } from "./Context";
import { TextValue } from '../enum';

function calculateDamages(attacker: Pokemon, defender: Pokemon, move: Move) {
    const critical = Math.random() < 0.0625;
    const type = 1; // TODO: calculate type effectiveness
    const random = Math.random() * (1 - 0.85) + 0.85;
    const stab = attacker.type === move.type ? 1.5 : 1;
    const effectiveness = 1;
    const modifier = critical ? 2 : 1;
    const damage = Math.floor(
      (((2 * attacker.level + 10) / 250) *
        (attacker.power / defender.defense) *
        move.power +
        2) *
        type *
        random *
        stab *
        effectiveness *
        modifier
    );
    return {damage, modifier};
  }


interface ControlProps {
    moves: Move[];
}

const Controls = ({moves}: ControlProps) => {

    if (moves.length === 0) return (<div className="textbox">No moves available</div>);
    if (moves.length > 4) throw new Error("A pokemon can't have more than 4 moves");

    const { setAnim, setPkmnNb } = useContext(AnimationContext);
    const { pokemon1, pokemon2, hp1, setHp1 } = useContext(PokemonContext);    
    const { text, setText } = useContext(TextContext);

    const attack = (move: Move) => {
        setText(TextValue.YouAttack);
        setAnim("attack");
        setPkmnNb(2);
        let {damage, modifier} = calculateDamages(pokemon1, pokemon2, move);
        if (modifier === 2) setText(TextValue.CriticalHit);
        
        let leftHp = hp1 - damage;

        console.log(`${pokemon1.name} HPs are : ${hp1} - ${damage} = ${leftHp}`);
        
        if (leftHp < 0) {  
            setHp1(0);
            setText(TextValue.YouWin);
        }
        else {
            setHp1(leftHp);
        }
    }

    return (
        <div className="textbox">
            <div className="info">{text}</div>
            <div className="attacks">
                {moves.map(move => (
                    <button
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