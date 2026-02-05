type PageParams = {
  goTo: (path: string) => void;
};

export function initWelcome(params: PageParams) {
  const div = document.createElement("div");
  div.innerHTML = `
      <style>
        .titulo-game{
          width: 308px;
          height: 219px;
        }
        
      

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
        <span class="titulo-game" slot="titulo">Piedra, Papel o Tijera</span>
      </text-game>

        
        <btn-component action="next">
          Empezar
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
        params.goTo("/instrucciones");
      }
    });
  });

  return div;
}
