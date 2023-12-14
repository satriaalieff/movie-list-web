class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const imageUrl = `https://image.tmdb.org/t/p/w500${this._movie.poster_path}`;
    this.innerHTML = `
      <a href="" target="_blank">
        <div style="background-image: url('${imageUrl}')" class="aspect-[2/3] flex flex-col justify-end bg-cover bg-center rounded-xl overflow-hidden relative">
          <div class="absolute top-0 left-0 bg-accent py-0.5 px-1.5 sm:py-1 sm:px-2 rounded-br text-xs">${this._movie.vote_average}</div>
          <div class="text-center bg-bg bg-opacity-75 lg:bg-opacity-85 py-2 lg:py-3 px-2 flex flex-col gap-1 justify-between shadow-inner">
              <h3 class="text-sm">${this._movie.title}</h3>
              <p class="text-xs text-secondary">(${this._movie.release_date})</p>
          </div>
        </div>
      </a>
    `;
  }
}

customElements.define('movie-item', MovieItem);
