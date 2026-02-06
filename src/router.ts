import { initWelcome } from "../src/pages/welcome";
import { initInstrucciones } from "../src/pages/intrucciones";
import { initJuego } from "../src/pages/juego";
import { initResultado } from "../src/pages/resultado";

const routes = [
  {
    path: /^\/welcome$/,
    component: initWelcome,
    background: true,
  },
  {
    path: /^\/instrucciones$/,
    component: initInstrucciones,
    background: true,
  },
  {
    path: /^\/juego$/,
    component: initJuego,
    background: true,
  },
  {
    path: /^\/resultado$/,
    component: initResultado,
    background: false,
  },
];

function getRouteFromHash() {
  const hash = window.location.hash.replace("#", "");
  return hash || "/welcome";
}

export function initRouter(container: Element) {
  function goTo(path: string) {
    window.location.hash = path;
  }

  function handleRoute(route: string) {
    console.log("Ruta actual:", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        container.classList.toggle("with-background", r.background);

        const el = r.component({ goTo });

        container.replaceChildren(el);
      }
    }
  }

  // Primera carga
  handleRoute(getRouteFromHash());

  // Escuchar cambios
  window.addEventListener("hashchange", () => {
    handleRoute(getRouteFromHash());
  });
}
