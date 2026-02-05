import { resolveRound } from "../../index";

type PageParams = {
  goTo: (path: string) => void;
};

export function initJuego(params: PageParams) {
  const div = document.createElement("div");
  div.style.flex = "1";
  div.style.display = "flex";

  div.innerHTML = `
    <style>
      .conteiner {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

    </style>

    <div class="conteiner">
      <timer-game></timer-game>
      <img-juego mode="interactive"></img-juego>
    </div>
  `;

  const timer = div.querySelector("timer-game");
  const imgJuego = div.querySelector("img-juego");

  timer?.addEventListener("timeout", () => {
    const lastRound = resolveRound();
    if (!lastRound) return;

    // mostrar jugadas finales
    imgJuego?.setAttribute("mode", "static");
    imgJuego?.setAttribute("player", lastRound.playerMove);
    imgJuego?.setAttribute("cpu", lastRound.cpuMove);

    // pequeño delay para que se vea la jugada de la cpu y jugador
    setTimeout(() => {
      params.goTo("/resultado");
    }, 1500);
  });

  return div;
}
