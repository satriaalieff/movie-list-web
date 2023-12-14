class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="flex h-10">
            <a
            target="_blank"
            class="m-auto text-xs text-secondary"
            href="https://www.linkedin.com/in/satriaalieff/"
            >satriaalief</a
            >
        </div>
        `;
  }
}

customElements.define("footer-bar", FooterBar);
