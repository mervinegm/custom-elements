import { init as initHeaderEl } from "./Components/header/header";
import { init as initLargeTextpEl } from "./Components/large/large";
import { init as initTituloEl } from "./Components/titulo/titulo";
import { init as initBodyEl } from "./Components/body/body";
import { init as initSubtituloEl } from "./Components/subtitulo/subtitulo";
import { init as initBodyContainerEl } from "./Components/body-container/body-container";
import { init as initFieldsetEl } from "./Components/fieldset/fieldset";
import { init as initButtonEl } from "./Components/button/button";
import { init as initoutlinedEl } from "./Components/outlined/outlined";
import { init as initFooterEl } from "./Components/footer/footer";

function main() {
  initHeaderEl();
  initLargeTextpEl();
  initTituloEl();
  initBodyEl();
  initSubtituloEl();
  initBodyContainerEl();
  initFieldsetEl();
  initButtonEl();
  initoutlinedEl();
  initFooterEl();
}

main();
