import { matchRoutes } from "@umijs/max";
import { PROJECT_CONFIG } from "./constants/global";

export function onRouteChange({ clientRoutes, location }: any) {
  // ANTI DEBUGGER
  document.oncontextmenu = function () {
    return false;
  };
  function block() {
    setInterval(() => {
      Function('debugger')();
    }, 50);
  }
  try {
    block();
  } catch (err) { }

  const route: any = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
  if (route) {
    document.title = route.title
      ? `${route.title} | ${PROJECT_CONFIG.name}`
      : PROJECT_CONFIG.name;
  }
}
