import "./movie-item.js";

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
  }

  set category(category) {
    this._category = category;
    this.render();
  }

  render() {
    if (this._movies.length === 0) {
      this.renderZero();
      return;
    } else {
      this.innerHTML = `
          <section class="mt-10 rounded pt-5">
              <h2 class="text-2xl mx-1 border-l border-accent px-3">${this._category}</h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-1 py-2"></div>
          </section>
      `;
      this._movies.forEach((movie) => {
        const movieItemElement = document.createElement("movie-item");
        movieItemElement.movie = movie;
        const movieItemPlace = this.querySelector("section div");
        movieItemPlace.appendChild(movieItemElement);
      });
    }
  }

  // Render if search value = '' or null
  renderZero() {
    this.innerHTML = `
      <section class="mb-10 rounded  pt-5">
        <h2 class="text-2xl mx-1 mb-5 border-l border-accent px-3">No Result</h2>
        <h2 class="text-sm mx-1 px-3">You can :</h2>
        <h2 class="text-sm mx-1 px-3"> - Try another keyword</h2>
        <h2 class="text-sm mx-1 px-3"> - Click home button to go back</h2>
      </section>
    `;
  }
}

customElements.define("movie-list", MovieList);
