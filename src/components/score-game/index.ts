export function gameScore() {
  class GameScore extends HTMLElement {
    private shadow: ShadowRoot;

    private jugador = 0;
    private cpu = 0;
    private empates = 0;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
      return ["jugador", "cpu", "empates"];
    }

    attributeChangedCallback(
      name: string,
      _oldValue: string,
      newValue: string,
    ) {
      const value = Number(newValue) || 0;

      if (name === "jugador") this.jugador = value;
      if (name === "cpu") this.cpu = value;
      if (name === "empates") this.empates = value;

      this.render();
    }

    connectedCallback() {
      this.jugador = Number(this.getAttribute("jugador")) || 0;
      this.cpu = Number(this.getAttribute("cpu")) || 0;
      this.empates = Number(this.getAttribute("empates")) || 0;

      this.render();
    }

    private render() {
      this.shadow.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: sans-serif;
          }

          .score {
            display: flex;
            gap: 24px;
            background: #222;
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            justify-content: center;
          }

          .item {
            text-align: center;
          }

          .label {
            font-size: 14px;
            opacity: 0.7;
          }

          .value {
            font-size: 32px;
            font-weight: bold;
          }
        </style>

        <div class="score">
          <div class="item">
            <div class="label">Jugador</div>
            <div class="value">${this.jugador}</div>
          </div>

          <div class="item">
            <div class="label">CPU</div>
            <div class="value">${this.cpu}</div>
          </div>

          </div>
      `;
    }
  }

  if (!customElements.get("game-score")) {
    customElements.define("game-score", GameScore);
  }
}
//METODO DE USO:
//<game-score jugador="0" cpu="0" ></game-score>
