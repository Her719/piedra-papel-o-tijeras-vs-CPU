import { initWelcome } from "../src/pages/welcome";
import { initInstrucciones } from "../src/pages/intrucciones";
import { initJuego } from "../src/pages/juego";
import { initResultado } from "../src/pages/resultado";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
    background: true,
  },
  {
    path: /\/instrucciones/,
    component: initInstrucciones,
    background: true,
  },
  {
    path: /\/juego/,
    component: initJuego,
    background: true,
  },
  {
    path: /\/resultado/,
    component: initResultado,
    background: false,
  },
];

export function initRouter(container: Element) {
  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route: string) {
    console.log("El handleRoute recibio una nueva ruta", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        // fondo ON / OFF
        if (r.background) {
          container.classList.add("with-background");
        } else {
          container.classList.remove("with-background");
        }

        const el = r.component({ goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
