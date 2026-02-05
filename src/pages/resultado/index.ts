import { getState } from "../../index";

type PageParams = {
  goTo: (path: string) => void;
};

export function initResultado(params: PageParams) {
  const div = document.createElement("div");

  const state = getState();
  const lastRound = state.history.at(-1);

  if (!lastRound) {
    div.innerHTML = `<p>No hay resultados</p>`;
    return div;
  }

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
      
    <result-game result="${lastRound.result}">
      <game-score
            jugador="${state.score.jugador}"
            cpu="${state.score.cpu}"
      ></game-score>  

      <btn-component action="next">
            Jugar de nuevo
      </btn-component>
      <btn-component action="welcome">
            Inicio
      </btn-component>
    </result-game>
    

    </div>
  `;

  const buttons = div.querySelectorAll("btn-component");
  buttons.forEach((btn) => {
    btn.addEventListener("btn-click", (e: any) => {
      if (e.detail.action === "next") {
        params.goTo("/juego");
      }

      if (e.detail.action === "welcome") {
        params.goTo("/welcome");
      }
    });
  });

  return div;
}
