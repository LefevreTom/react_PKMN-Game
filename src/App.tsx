import { useMemo, useState } from 'react'
import BattleArena from './components/BattleArena'
import {AnimationContext, PokemonContext, TextContext} from './components/Context'
import Controls from './components/Controls'
import { TextValue } from './enum';

const pokemonName1 = `dragonite`;
const pokemonName2 = `arcanine`;

function App() {
  const pokemon1 : Pokemon = {
    isEnemy: true,
    name: pokemonName1.charAt(0).toUpperCase() + pokemonName1.slice(1),
    image: `https://img.pokemondb.net/sprites/red-blue/normal/${pokemonName1}-color.png`,
    type: 'dragon',
    level: 100,
    baseHp : 292,
    setHp: () => {},
    power: 245,
    defense: 175,
    special : 184,
    speed: 148,
    moves: [{ name: "Dragon Rage", type: "dragon", power: 60, basepp: 20, pp: 20 },
      { name: "Water Gun", type: "water", power: 40, basepp: 20, pp: 20 },
      { name: "Hyper Beam", type: "normal", power: 150, basepp: 20, pp: 20 },
      { name: "Fire Blast", type: "fire", power: 120, basepp: 20, pp: 20 }
    ],
  }
  const pokemon2 : Pokemon = {
    isEnemy: false,
    name: pokemonName2.charAt(0).toUpperCase() + pokemonName2.slice(1),
    image: `https://img.pokemondb.net/sprites/red-blue/back-normal/${pokemonName2}-color.png`,
    type: 'fire',
    level: 100,
    baseHp : 384,
    setHp: () => {},
    power: 350,
    defense: 284,
    special : 300,
    speed: 300,
    moves: [{ name: "Dig", type: "ground", power: 100, basepp: 20, pp: 20 },
      { name: "Fire Blast", type: "fire", power: 120, basepp: 20, pp: 20 },
      { name: "Bite", type: "normal", power: 60, basepp: 20, pp: 20 },
      { name: "Flamethrower", type: "fire", power: 95, basepp: 20, pp: 20 }
    ],
  }

  const [text, setTextState] = useState(TextValue.CanMove);
  const [anim, setAnim] = useState("none");
  const [pkmnNb, setPkmnNb] = useState(0);
  const [hp1, setHp1] = useState(pokemon1.baseHp);
  const [hp2, setHp2] = useState(pokemon2.baseHp);

  let setText = (value: TextValue) => {
    if (text !== TextValue.YouWin && text !== TextValue.EnemyWin) {
      setTextState(value);
    }
  }

  const animation = useMemo(() => {return {anim, setAnim, pkmnNb, setPkmnNb}}, [anim, setAnim, pkmnNb, setPkmnNb]);
  const firstTurn = pokemon1.speed > pokemon2.speed ? 1 : 2;
  const pokemonState = useMemo(() => {return {pokemon1, pokemon2, hp1, setHp1, hp2, setHp2, firstTurn}}, [pokemon1, pokemon2, hp1, setHp1, hp2, setHp2, firstTurn]);

  

  return (
    <TextContext.Provider value={{text, setText}}>
      <PokemonContext.Provider value={pokemonState}>
        <AnimationContext.Provider value={animation}>
          <div className="game">
            <BattleArena/>
            <Controls moves={pokemon1.moves}/>
          </div>
        </AnimationContext.Provider>
      </PokemonContext.Provider>
    </TextContext.Provider>
  )
}

export default App
