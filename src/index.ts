import { image } from "./components/img-juego/index";
import { initTextGame } from "./components/text-game/index";
import { button } from "./components/boton-component/index";
import { initRouter } from "./router";
import { playRound, initialState, Move } from "./state/state";
import { timerGame } from "./components/timer-game/index";
import { resultGame } from "./components/resultado-game/index";
import { gameScore } from "./components/score-game/index";

const fondoUrl = new URL("./fondo.png", import.meta.url).href;

const style = document.createElement("style");
style.textContent = `
  .root.with-background {
    background-image: url("${fondoUrl}");
  }
`;
document.head.appendChild(style);

//  Estado global
let state = initialState;

//  NUEVO: jugada pendiente del jugador
let pendingMove: Move | null = null;

//  Registrar Web Components
timerGame();
image();
initTextGame();
button();
resultGame();
gameScore();

//  Router
const root = document.querySelector(".root");
if (!root) throw new Error("No se encontró el contenedor .root");
initRouter(root);

//  Escuchar elección del jugador
document.addEventListener("choice", (e: Event) => {
  pendingMove = (e as CustomEvent).detail;
  console.log("Jugador eligió:", pendingMove);
});

//  exportamos para que juego.ts pueda usarlo
export function resolveRound() {
  if (!pendingMove) pendingMove = "piedra";

  state = playRound(state, pendingMove);

  pendingMove = null;
  return state.history.at(-1);
}

export function getState() {
  return state;
}

//IMPORTANTE!!!
//si después quiero cambiar el fondo por ruta
// const fondos = {
//   welcome: new URL("./fondo.png", import.meta.url).href,
//   juego: new URL("./fondo-juego.png", import.meta.url).href,
// };

// style.textContent = `
//   .root.with-background {
//     background-image: url("${fondos.welcome}");
//   }
// `;
