class SlideItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const imageUrl = `https://image.tmdb.org/t/p/w500${this._movie.poster_path}`;
    this.innerHTML = `
        <div class="overflow-hidden mx-1">
          <div style="background-image: url('${imageUrl}')" class="aspect-[2/3] flex flex-col justify-end bg-cover bg-center overflow-hidden relative group hover:scale-95 transition-all ease-in-out duration-200 rounded">
              <div class="absolute inset-y-0 inset-x-0 text-center bg-bg p-1 md:p-3 lg:px-5 flex flex-col justify-center scale-150 opacity-0 group-hover:opacity-80 group-hover:scale-100  transition-transform duration-200 ease-in-out">
                  <h3 class="text-sm xl:text-lg font-semibold text-center">${this._movie.title}</h3>
                  <h4 class="text-xs xl:text-sm mb-3 text-center">Rating : ${this._movie.vote_average}</h4>
                  <p class="hidden md:block text-xs xl:text-sm text-left">(${this._movie.overview})</p>
              </div>
          </div>
        </div>
      `;
  }
}

customElements.define("slide-item", SlideItem);
