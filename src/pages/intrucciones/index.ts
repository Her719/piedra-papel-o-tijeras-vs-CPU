type PageParams = {
  goTo: (path: string) => void;
};

export function initInstrucciones(params: PageParams) {
  const div = document.createElement("div");
  div.innerHTML = `
      <style>

      .subtitulo-game{}

      .conteiner{
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
      } 

      </style>

      <div class="conteiner">
      <text-game >
        <span class="subtitulo-game" slot="subtitle1">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</span>
      </text-game>

        
        <btn-component action="next">
          Jugar!!
        </btn-component>


        <img-juego mode="static"></img-juego>
        </div>
    `;

  const buttons = div.querySelectorAll("btn-component");

  buttons.forEach((btn) => {
    btn.addEventListener("btn-click", (e: any) => {
      if (e.detail.action === "back") {
        window.history.back();
      }

      if (e.detail.action === "next") {
        params.goTo("/juego");
      }
    });
  });

  return div;
}
