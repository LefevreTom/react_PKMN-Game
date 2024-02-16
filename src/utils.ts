export function calculateDamages(attacker: Pokemon, defender: Pokemon, move: Move) {
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