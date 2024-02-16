/// <reference types="vite/client" />

type Pokemon = {
    isEnemy: boolean;
    name: string;
    image: string;
    type: string;
    level: number;
    baseHp: number;
    setHp: (hp: number) => void;
    power: number;
    defense: number;
    special: number;
    speed: number;
    moves: Move[];
}

type Move = {
    name: string;
    type: string;
    power: number;
    basepp: number;
    pp: number;
}

type BattleArena = {
    pokemon1: Pokemon;
    pokemon2: Pokemon;
}

//TODO: Change it to 'enum.ts' if possible
enum TextValue {
    None = "none",
    CanMove = "Choose an move...",
    YouAttack = "You attack !",
    EnemyAttack = "Enemy attack !",
    CriticalHit = "It's a critical hit !",
    YouWin = "You win !",
    EnemyWin = "You lose !",
}

type TextState = {
    text: TextValue;
    setText: (text: TextValue) => void;
}

type AnimationState = {
    anim: string;
    setAnim: React.Dispatch<React.SetStateAction<string>>;
    pkmnNb: number;
    setPkmnNb: React.Dispatch<React.SetStateAction<number>>;
}

type PokemonState = {
    pokemon1: Pokemon;
    pokemon2: Pokemon;
    hp1: number;
    setHp1: React.Dispatch<React.SetStateAction<number>>;
    hp2: number;
    setHp2: React.Dispatch<React.SetStateAction<number>>;
}