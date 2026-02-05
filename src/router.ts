import { initWelcome } from "../src/pages/welcome";
import { initInstrucciones } from "../src/pages/intrucciones";
import { initJuego } from "../src/pages/juego";
import { initResultado } from "../src/pages/resultado";

// 🔹 Cambiá esto solo si cambia el nombre del repo
const BASE_PATH = "/piedra-papel-o-tijeras-vs-CPU";

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

// 🔹 Limpia el pathname tanto en local como en producción
function getCleanPathFromURL() {
  const fullPath = window.location.pathname;

  // Producción (gh-pages)
  if (fullPath.startsWith(BASE_PATH)) {
    const cleanPath = fullPath.replace(BASE_PATH, "");
    return cleanPath === "" ? "/" : cleanPath;
  }

  // Localhost
  return fullPath;
}

export function initRouter(container: Element) {
  function goTo(path: string) {
    const cleanPath = path === "/" ? BASE_PATH + "/" : BASE_PATH + path;

    history.pushState({}, "", cleanPath);
    handleRoute(path);
  }

  function handleRoute(route: string) {
    console.log("El handleRoute recibió una nueva ruta", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        // Fondo ON / OFF
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

  const currentPath = getCleanPathFromURL();

  if (currentPath === "/") {
    goTo("/welcome");
  } else {
    handleRoute(currentPath);
  }

  window.onpopstate = function () {
    handleRoute(getCleanPathFromURL());
  };
}
