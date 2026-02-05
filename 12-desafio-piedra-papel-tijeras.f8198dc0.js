var e={};e=import.meta.resolve("iQNoI");var t={};t=import.meta.resolve("2Fo44");var i={};i=import.meta.resolve("T1vHv");let s="/piedra-papel-o-tijeras-vs-CPU",o=[{path:/\/welcome/,component:function(e){let t=document.createElement("div");return t.innerHTML=`
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
    `,t.querySelectorAll("btn-component").forEach(t=>{t.addEventListener("btn-click",t=>{"back"===t.detail.action&&window.history.back(),"next"===t.detail.action&&e.goTo("/instrucciones")})}),t},background:!0},{path:/\/instrucciones/,component:function(e){let t=document.createElement("div");return t.innerHTML=`
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
        <span class="subtitulo-game" slot="subtitle1">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</span>
      </text-game>

        
        <btn-component action="next">
          Jugar!!
        </btn-component>


        <img-juego mode="static"></img-juego>
        </div>
    `,t.querySelectorAll("btn-component").forEach(t=>{t.addEventListener("btn-click",t=>{"back"===t.detail.action&&window.history.back(),"next"===t.detail.action&&e.goTo("/juego")})}),t},background:!0},{path:/\/juego/,component:function(e){let t=document.createElement("div");t.style.flex="1",t.style.display="flex",t.innerHTML=`
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
  `;let i=t.querySelector("timer-game"),s=t.querySelector("img-juego");return i?.addEventListener("timeout",()=>{let t=(u||(u="piedra"),d=function(e,t){let i,s;do{var o;s=t===(o=i=function(){let e=["piedra","papel","tijera"],t=Math.floor(Math.random()*e.length);return e[t]}())?"empate":"piedra"===t&&"tijera"===o||"papel"===t&&"piedra"===o||"tijera"===t&&"papel"===o?"jugador":"cpu"}while("empate"===s)let n={playerMove:t,cpuMove:i,result:s};return{history:[...e.history,n],score:{jugador:e.score.jugador+ +("jugador"===s),cpu:e.score.cpu+ +("cpu"===s),empates:e.score.empates}}}(d,u),u=null,d.history.at(-1));t&&(s?.setAttribute("mode","static"),s?.setAttribute("player",t.playerMove),s?.setAttribute("cpu",t.cpuMove),setTimeout(()=>{e.goTo("/resultado")},1500))}),t},background:!0},{path:/\/resultado/,component:function(e){let t=document.createElement("div"),i=d,s=i.history.at(-1);return s?(t.innerHTML=`
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
      
    <result-game result="${s.result}">
      <game-score
            jugador="${i.score.jugador}"
            cpu="${i.score.cpu}"
      ></game-score>  

      <btn-component action="next">
            Jugar de nuevo
      </btn-component>
      <btn-component action="welcome">
            Inicio
      </btn-component>
    </result-game>
    

    </div>
  `,t.querySelectorAll("btn-component").forEach(t=>{t.addEventListener("btn-click",t=>{"next"===t.detail.action&&e.goTo("/juego"),"welcome"===t.detail.action&&e.goTo("/welcome")})})):t.innerHTML="<p>No hay resultados</p>",t},background:!1}];function n(){let e=window.location.pathname;if(e.startsWith(s)){let t=e.replace(s,"");return""===t?"/":t}return e}var r={};r=import.meta.resolve("g9SP2");var a={};a=import.meta.resolve("7B5Zj");let l=new URL(import.meta.resolve("hhOer")).href,c=document.createElement("style");c.textContent=`
  .root.with-background {
    background-image: url("${l}");
  }
`,document.head.appendChild(c);let d={history:[],score:{jugador:0,cpu:0,empates:0}},u=null;class m extends HTMLElement{shadow;time=3;intervalId=null;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.start()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}start(){this.intervalId=window.setInterval(()=>{this.time--,this.updateNumber(),this.time<0&&(this.stop(),this.classList.add("hidden"),this.dispatchEvent(new CustomEvent("timeout",{bubbles:!0,composed:!0})))},1e3)}stop(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}updateNumber(){let e=this.shadow.querySelector(".number");e&&(e.textContent=this.time>=0?String(this.time):"")}render(){let e=2*Math.PI*45;this.shadow.innerHTML=`
        <style>
          :host {
            display: block;
          }

          :host(.hidden) {
            display: none;
          }

          .container {
            width: 120px;
            height: 120px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          svg {
            position: absolute;
            transform: rotate(-90deg);
          }

          circle {
            fill: none;
            stroke-width: 8;
            stroke: #000;
            stroke-dasharray: ${e};
            stroke-dashoffset: 0;
            animation: countdown 3s linear forwards;
          }

          @keyframes countdown {
            from {
              stroke-dashoffset: 0;
            }
            to {
              stroke-dashoffset: ${e};
            }
          }

          .number {
            font-size: 48px;
            font-weight: bold;
          }
        </style>

        <div class="container">
          <svg width="120" height="120">
            <circle cx="60" cy="60" r="45" />
          </svg>
          <div class="number">${this.time}</div>
        </div>
      `}}customElements.get("timer-game")||customElements.define("timer-game",m);class h extends HTMLElement{shadow;selectedMove=null;piedraUrl=new URL(e).href;papelUrl=new URL(t).href;tijeraUrl=new URL(i).href;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}static get observedAttributes(){return["mode","player","cpu"]}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}getImgByMove(e){return"piedra"===e?this.piedraUrl:"papel"===e?this.papelUrl:this.tijeraUrl}render(){let e=this.getAttribute("mode")??"static",t=this.getAttribute("player"),i=this.getAttribute("cpu");if("static"===e&&t&&i){this.shadow.innerHTML=`
  <style>
    :host {
      display: block;
      height: 100%;
    }

    .result {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 24px 0;
      box-sizing: border-box;
    }

    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    img {
      width: 80px;
    }

    span {
      font-family: "Permanent Marker", cursive;
      font-size: 18px;
    }

    .cpu img {
      transform: rotate(180deg);
    }
  </style>
  
  <div class="result">
    <div class="column cpu">
      <img src="${this.getImgByMove(i)}" />
      <span>CPU</span>
    </div>

    <div class="column player">
      <span>Jugador</span>
      <img src="${this.getImgByMove(t)}" />
    </div>
  </div>
`;return}this.shadow.innerHTML=`
        <style>
          footer {
            display: flex;
            justify-content: space-around;
            gap: 24px;
          }

          img {
            width: 50px;
            cursor: pointer;
            transition: transform 0.2s ease;
          }

          img.selected {
            transform: scale(1.3);
          }
        </style>

        <footer>
          <img data-move="piedra" src="${this.piedraUrl}" />
          <img data-move="papel" src="${this.papelUrl}" />
          <img data-move="tijera" src="${this.tijeraUrl}" />
        </footer>
      `,this.addEvents()}addEvents(){let e=this.shadow.querySelectorAll("img");e.forEach(t=>{t.addEventListener("click",()=>{let i=t.getAttribute("data-move");this.selectedMove=i,e.forEach(e=>e.classList.toggle("selected",e===t)),this.dispatchEvent(new CustomEvent("choice",{detail:i,bubbles:!0,composed:!0}))})})}}customElements.get("img-juego")||customElements.define("img-juego",h);class p extends HTMLElement{root;constructor(){super(),this.root=this.attachShadow({mode:"open"})}hideEmptySlots(){this.root.querySelectorAll(".hide-if-empty").forEach(e=>{let t=Array.from(e.querySelectorAll("slot")).some(e=>e.assignedElements({flatten:!0}).length>0);e.style.display=t?"":"none"})}connectedCallback(){this.render()}render(){this.root.innerHTML=`
    <style>
      :host {
        display: flex;
      }
      h1, h2, p{
      margin: 0;
      }
      
      .titulo{
        font-size: 80px;
        font-weight: 700;
        color: #009048;
        text-align: center;
        font-family: Permanent Marker;
        max-width: 308px;
        height: 219px;
        }
        

      
      
      .subtitle1{
        font-size: 40px;
        font-weight: 600;
        color: #000000;
        text-align: center;
        font-family: Permanent Marker;
        max-width: 317px;
        min-width: 300px;
        height: 240px;
      }
      
      .intro{
      font-size: 18px;
      font-weight: 400;
      }
      
      .info-destacada{
      font-size: 22px;
      font-weight: 500;
      }

      
    </style>
      <h1 class="hide-if-empty titulo">
        <slot name="titulo"></slot>
      </h1>

      <h2 class="hide-if-empty subtitle1">
        <slot name="subtitle1"></slot>
      </h2>

      <p class="hide-if-empty subtitle1">
        <slot name="subtitle1-p1"></slot>
      </p>

  `,this.hideEmptySlots(),this.root.querySelectorAll("slot").forEach(e=>{e.addEventListener("slotchange",()=>this.hideEmptySlots())})}}customElements.get("text-game")||customElements.define("text-game",p);class g extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("button"),i=document.createElement("style"),s=this.getAttribute("action")??"next";t.className="root",t.textContent=this.textContent??"",t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("btn-click",{bubbles:!0,composed:!0,detail:{action:s}}))}),i.innerHTML=`
        .root{
          font-family: Odibee Sans;
          font-size: 45px;
          font-weight: 400;
          min-width: 322px;
          min-height: 87px;
          border-radius: 10px;
          color: #D8FCFC;
          background-color: #006CFC;
          border:10px solid #001997;
          margin-top: 30px;
        }
      `,e.append(t,i)}}customElements.get("btn-component")||customElements.define("btn-component",g);let f=new URL(r).href,b=new URL(a).href;class v extends HTMLElement{shadow;result=null;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}static get observedAttributes(){return["result"]}attributeChangedCallback(e,t,i){"result"===e&&(this.result=i,this.render())}connectedCallback(){this.result=this.getAttribute("result"),this.render()}render(){if(!this.result)return;let e="",t="",i="";"jugador"===this.result&&(e="#4CAF50",t=f,i="Ganaste"),"cpu"===this.result&&(e="#8B5A2B",t=b,i="Perdiste"),"empate"===this.result&&(e="#999",i="Empate"),this.shadow.innerHTML=`
    <style>
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      .container {
        width: 100%;
        min-height: 100vh;
        background-color: ${e};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 24px;
        box-sizing: border-box;
      }

      .result {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        max-width: 70%;
      }

      ::slotted(*) {
        z-index: 1;
      }
    </style>

    <div class="container">
      <div class="result">
        ${t?`<img src="${t}" alt="${i}" />`:'<div class="text">EMPATE</div>'}
      </div>

      <!-- ac\xe1 entran tus componentes -->
      <slot></slot>
    </div>
  `}}customElements.get("result-game")||customElements.define("result-game",v);class y extends HTMLElement{shadow;jugador=0;cpu=0;empates=0;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}static get observedAttributes(){return["jugador","cpu","empates"]}attributeChangedCallback(e,t,i){let s=Number(i)||0;"jugador"===e&&(this.jugador=s),"cpu"===e&&(this.cpu=s),"empates"===e&&(this.empates=s),this.render()}connectedCallback(){this.jugador=Number(this.getAttribute("jugador"))||0,this.cpu=Number(this.getAttribute("cpu"))||0,this.empates=Number(this.getAttribute("empates"))||0,this.render()}render(){this.shadow.innerHTML=`
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
      `}}customElements.get("game-score")||customElements.define("game-score",y);let x=document.querySelector(".root");if(!x)throw Error("No se encontró el contenedor .root");function w(e){history.pushState({},"","/"===e?s+"/":s+e),E(e)}function E(e){for(let t of(console.log("El handleRoute recibió una nueva ruta",e),o))if(t.path.test(e)){t.background?x.classList.add("with-background"):x.classList.remove("with-background");let e=t.component({goTo:w});x.firstChild&&x.firstChild.remove(),x.appendChild(e)}}let j=n();"/"===j?w("/welcome"):E(j),window.onpopstate=function(){E(n())},document.addEventListener("choice",e=>{console.log("Jugador eligió:",u=e.detail)});
//# sourceMappingURL=12-desafio-piedra-papel-tijeras.f8198dc0.js.map
