import "./slide-item.js";

class SlideList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
  }

  set category(category) {
    this._category = category;
    this.render();
  }

  render() {
    this.innerHTML = `
            <h2 class="text-2xl mx-1 mb-2 mt-5 border-l border-accent px-3">${this._category}</h2>
            <section id="splide" class="splide px-1.5" aria-label="slider">
                <div class="splide__track">
                    <ul id="item-place" class="splide__list">
                    </ul>
                </div>
            </section>
      `;
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("slide-item");
      movieItemElement.movie = movie;
      const movieItemPlace = this.querySelector("#item-place");

      // Make slider child element
      const movieItemList = document.createElement("li");
      movieItemList.classList.add("splide__slide");
      movieItemList.appendChild(movieItemElement);

      movieItemPlace.appendChild(movieItemList);
    });
  }
}

customElements.define("slide-list", SlideList);
