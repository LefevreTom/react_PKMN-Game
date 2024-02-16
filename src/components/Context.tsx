import { createContext } from 'react';
import { TextValue } from '../enum';

const TextContext = createContext<TextState>({ text: TextValue.None, setText: () => {}});
const AnimationContext = createContext<AnimationState>({ anim: "none", setAnim: () => {} , pkmnNb: 0, setPkmnNb: () => {}});
const PokemonContext = createContext<PokemonState>(
    { 
        pokemon1: {} as Pokemon, 
        pokemon2: {} as Pokemon, 
        hp1: 0, 
        setHp1: () => {}, 
        hp2: 0, 
        setHp2: () => {}
    }
);

export  { AnimationContext, PokemonContext, TextContext};