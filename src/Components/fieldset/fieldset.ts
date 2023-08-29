export function init() {
  class Fieldset extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("aria-label");

      var fieldsetEl = document.createElement("div");
      fieldsetEl.classList.add("fieldset");
      shadow.appendChild(fieldsetEl);

      var style = document.createElement("style");
      style.textContent = `
                      .fieldset{
                        display: flex;
                        flex-direction: column;
                        Width: calc(100% - 40px);
                        Height: 80px;
                        margin-top: 20px;
                      }

                      .label{
                        font-size: 18px;
                        font-family: "Roboto";
                        font-weight: 400;
                      }

                      .input{
                        width: 100%;
                        height: 55px;
                        padding: 17px 13px;
                        font-size: 18px;
                        font-family: "Roboto";
                        font-weight: 400;
                        margin-top: 4px;
                        border: solid 2px;
                        border-radius: 4px;
                      }
                      `;
      shadow.appendChild(style);

      fieldsetEl.innerHTML = `
      <label class="label" for="Nombre">${label}</label>
      <input class="input" type="text" placeholder="Ingrese su ${label}">
      `;
    }
  }

  customElements.define("mi-fieldset", Fieldset);
}
