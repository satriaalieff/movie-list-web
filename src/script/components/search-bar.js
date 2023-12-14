class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(e) {
    this._clickEvent = e;
    this.render();
  }

  get value() {
    return this.querySelector("#search-value").value;
  }

  render() {
    this.innerHTML = `
        <div id="search-container" class="hidden md:flex md:w-72 xl:w-96 md:absolute top-3 right-5 bg-bgcontainer py-1 px-3 rounded mt-3 z-50">
            <input
            id="search-value"
            type="search"
            placeholder="Film Title"
            class="flex-grow outline-none rounded-l px-3 bg-transparent"
            />
            <button id="search-button" class="w-6 h-6 bg-transparent rounded-r">
              <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path fill="#9e9e9e" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941Z"/>
              </svg>
            </button>
        </div>
    `;

    this.querySelector("#search-button").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
