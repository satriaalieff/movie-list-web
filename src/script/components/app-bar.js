import "./search-bar.js";

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="flex gap-3 items-center">
            <div id="hamburger-button" class="fixed w-6 h-6 flex flex-col justify-evenly cursor-pointer z-50 group md:hidden">
                <span class="block w-full h-0.5 bg-secondary rounded"></span>
                <span class="block w-2/3 h-0.5 bg-secondary rounded group-hover:bg-accent"></span>
                <span class="block w-full h-0.5 bg-secondary rounded"></span>
            </div>
            <div class="w-6 h-6 md:hidden"></div>
            <h1 class="flex-grow text-center text-2xl md:text-3xl font-secondary text-accent cursor-pointer"><span id="home-button">MOVIES</span></h1>
            <ul id="#hamburger-menu" class="fixed md:static z-40 inset-y-0 w-full -left-full flex flex-col md:flex-row items-center justify-evenly md:justify-start md:gap-5 lg:gap-10 text-xl md:text-sm lg:px-5 bg-bg md:bg-transparent md:text-secondary bg-opacity-95 transition-all duration-200">
                <li><a class="hover:text-accent md:hidden" href="#">Home</a></li>
                <li><a class="hover:text-accent" href="#now-playing">Now Playing</a></li>
                <li><a class="hover:text-accent" href="#popular">Popular</a></li>
                <li><a class="hover:text-accent" href="#top-rated">Top Rated</a></li>
            </ul>
            <div class="md:hidden w-6 h-6 flex items-center justify-center">
                <button id="search-toggle" class="cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#9e9e9e" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941Z"/>
                  </svg>
                </button>
            </div>
            
        </div>
    `;

    // Home Button
    const homeButtonElement = this.querySelector("#home-button");
    homeButtonElement.addEventListener("click", () => location.reload());

    // Hamburger Button Clicked
    const hamburgerMenuElement = this.querySelector("div ul");
    const hamburgerButtonElement = this.querySelector("#hamburger-button");
    hamburgerButtonElement.addEventListener("click", () => {
      hamburgerMenuElement.classList.toggle("-left-full");
      hamburgerMenuElement.classList.toggle("left-0");
    });

    // Hamburger Menu Close
    const navigation = hamburgerMenuElement.querySelectorAll("li");
    for (let i of navigation) {
      i.addEventListener("click", () => {
        hamburgerMenuElement.classList.add("-left-full");
        hamburgerMenuElement.classList.remove("left-0");
      });
    }

    // Search Button Clicked
    const searchToggleElement = this.querySelector("#search-toggle");
    searchToggleElement.addEventListener("click", () => {
      const searchBarElement = document.getElementById("search-container");
      if (searchBarElement.classList.contains("hidden")) {
        searchToggleElement.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0035" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>
          </svg>
        `;

        // Search Menu Open
        searchBarElement.classList.remove("hidden");
        searchBarElement.classList.add("flex");
        return;
      } else {
        searchToggleElement.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#9e9e9e" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941Z"/>
          </svg>
        `;

        // Search Menu Closed
        searchBarElement.classList.remove("flex");
        searchBarElement.classList.add("hidden");
        return;
      }
    });
  }
}

customElements.define("app-bar", AppBar);
