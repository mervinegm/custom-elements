import { init as initHeaderEl } from "./Components/header/header";
import { init as initLargeTextpEl } from "./Components/large/large";
import { init as initTituloEl } from "./Components/titulo/titulo";
import { init as initBodyEl } from "./Components/body/body";
import { init as initSubtituloEl } from "./Components/subtitulo/subtitulo";
import { init as initBodyContainerEl } from "./Components/body-container/body-container";

function main() {
  initHeaderEl();
  initLargeTextpEl();
  initTituloEl();
  initBodyEl();
  initSubtituloEl();
  initBodyContainerEl();
}

main();
