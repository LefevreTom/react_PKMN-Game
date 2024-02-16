
export enum TextValue {
    None = "none",
    CanMove = "Choose an move...",
    YouAttack = "You attack !",
    EnemyAttack = "Enemy attack !",
    CriticalHit = "It's a critical hit !",
    YouWin = "You win !",
    EnemyWin = "You lose !",
}

export enum GameState {
    None = 0,
    Player1 = 1,
    Player2 = 2,
    Transition = 3,
    End = 4,
}