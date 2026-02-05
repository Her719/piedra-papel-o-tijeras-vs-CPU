// Tipos posibles de jugadas
export type Move = "piedra" | "papel" | "tijera";

//  Resultado posible de una partida
export type Result = "jugador" | "cpu" | "empate";

//  Estructura de una partida individual
export interface GameRound {
  playerMove: Move;
  cpuMove: Move;
  result: Result;
}

//  El estado global del juego
export interface Score {
  jugador: number;
  cpu: number;
  empates: number;
}

export interface GameState {
  history: GameRound[];
  score: Score;
}

//  Estado inicial
export const initialState: GameState = {
  history: [],
  score: {
    jugador: 0,
    cpu: 0,
    empates: 0,
  },
};

//  Función para obtener una jugada aleatoria de la CPU
export function getRandomMove(): Move {
  const moves: Move[] = ["piedra", "papel", "tijera"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

// Función que decide quién gana
export function getResult(playerMove: Move, cpuMove: Move): Result {
  if (playerMove === cpuMove) {
    return "empate";
  }

  if (
    (playerMove === "piedra" && cpuMove === "tijera") ||
    (playerMove === "papel" && cpuMove === "piedra") ||
    (playerMove === "tijera" && cpuMove === "papel")
  ) {
    return "jugador";
  }

  return "cpu";
}

//  Función para crear una nueva ronda
export function playRound(state: GameState, playerMove: Move): GameState {
  let cpuMove: Move;
  let result: Result;

  do {
    cpuMove = getRandomMove();
    result = getResult(playerMove, cpuMove);
  } while (result === "empate");

  const newRound: GameRound = {
    playerMove,
    cpuMove,
    result,
  };

  return {
    history: [...state.history, newRound],
    score: {
      jugador: state.score.jugador + (result === "jugador" ? 1 : 0),
      cpu: state.score.cpu + (result === "cpu" ? 1 : 0),
      empates: state.score.empates, // no se suman empates
    },
  };
}
