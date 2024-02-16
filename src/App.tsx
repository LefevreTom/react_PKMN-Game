import { useMemo, useState, useEffect} from 'react'
import BattleArena from './components/BattleArena'
import {AnimationContext, PokemonContext, TextContext} from './components/Context'
import Controls from './components/Controls'
import { TextValue } from './enum';
import { pokemon1, pokemon2 } from './pokemons';
import { GameState } from './enum';
import { calculateDamages } from './utils';

function App() {

  const [gameState, setGameState] = useState(GameState.None);
  const [text, setTextState] = useState(TextValue.CanMove);
  const [anim, setAnim] = useState("none");
  const [pkmnNb, setPkmnNb] = useState(0);
  const [hp1, setHp1] = useState(pokemon1.baseHp);
  const [hp2, setHp2] = useState(pokemon2.baseHp);
  useEffect(() => {
    console.log("Game State changed to : ", gameState);
    
    if (gameState === GameState.None) {
      setGameState( pokemon1.speed > pokemon2.speed ? GameState.Player1 : GameState.Player2);
    }
    if (gameState === GameState.Player1) {
      setText(TextValue.YouAttack);
      setAnim("attack");
      setPkmnNb(1);

      let move = pokemon1.moves[Math.floor(Math.random() * pokemon1.moves.length)];

      let {damage, modifier} = calculateDamages(pokemon1, pokemon2, move);
      if (modifier === 2) setText(TextValue.CriticalHit);
      
      let leftHp = hp2 - damage;

      console.log(`${pokemon2.name} HPs are : ${hp2} - ${damage} = ${leftHp}`);
      
      setHp2( leftHp < 0 ? 0 : leftHp);
    }
  }, [gameState]);

  let setText = (value: TextValue) => {
    if (text !== TextValue.YouWin && text !== TextValue.EnemyWin) {
      setTextState(value);
    }
  }

  const animation = useMemo(() => {return {anim, setAnim, pkmnNb, setPkmnNb}}, [anim, setAnim, pkmnNb, setPkmnNb]);
  const pokemonState = useMemo(() => {return {pokemon1, pokemon2, hp1, setHp1, hp2, setHp2}}, [pokemon1, pokemon2, hp1, setHp1, hp2, setHp2]);

  return (
    <TextContext.Provider value={{text, setText}}>
      <PokemonContext.Provider value={pokemonState}>
        <AnimationContext.Provider value={animation}>
          <div className="game">
            <BattleArena setGameState={setGameState}/>
            <Controls moves={pokemon2.moves} gameState={gameState} setGameState={setGameState}/>
          </div>
        </AnimationContext.Provider>
      </PokemonContext.Provider>
    </TextContext.Provider>
  )
}

export default App
