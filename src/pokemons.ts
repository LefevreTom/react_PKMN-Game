
const pokemonName1 = `dragonite`;
const pokemonName2 = `arcanine`;

export const pokemon1 : Pokemon = {
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
  export const pokemon2 : Pokemon = {
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