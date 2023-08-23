export function init() {
  class BodyContainer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var bodyContainerEl = document.createElement("div");
      bodyContainerEl.classList.add("bodyContainer");
      shadow.appendChild(bodyContainerEl);

      var style = document.createElement("style");
      style.textContent = `
                      .bodyContainer{
                          width: auto;
                          margin: 0 10px 0 10px;
                          padding: 0 10px 0 10px;
                      }
                      `;
      shadow.appendChild(style);

      /*       if (this.children) {
        for (var i of this.children) {
          console.log(i);
          bodyContainerEl.appendChild(i);
        }
      } */

      for (var i of this.children) {
        if (i) {
          console.log(i);
          bodyContainerEl.appendChild(i);
        }
      }
    }
  }

  customElements.define("mi-bodycontainer", BodyContainer);
}
