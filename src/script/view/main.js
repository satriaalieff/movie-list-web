import "../components/movie-list.js";
import "../components/slide-list.js";
import "../components/search-bar.js";
import "@splidejs/splide/css";
import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Data from "../data/data.js";

// Load data when website opened
const main = async () => {
  try {
    const movieListNowPlayingElement = document.createElement("slide-list");
    movieListNowPlayingElement.setAttribute("id", "now-playing");
    const nowPlayingResult = await Data.dataMovies("now_playing");
    movieListNowPlayingElement.movies = nowPlayingResult;
    movieListNowPlayingElement.category = "Now Playing";

    const movieListPopularElement = document.createElement("movie-list");
    movieListPopularElement.setAttribute("id", "popular");
    const popularResult = await Data.dataMovies("popular");
    movieListPopularElement.movies = popularResult;
    movieListPopularElement.category = "Popular";

    const movieListTopRatedElement = document.createElement("movie-list");
    movieListTopRatedElement.setAttribute("id", "top-rated");
    const topRatedResult = await Data.dataMovies("top_rated");
    movieListTopRatedElement.movies = topRatedResult;
    movieListTopRatedElement.category = "Top Rated";

    const main = document.querySelector("main");
    main.append(
      movieListNowPlayingElement,
      movieListPopularElement,
      movieListTopRatedElement
    );

    console.log(document.querySelector("main"));

    // Slider
    new Splide(".splide", {
      focus: "center",
      drag: "free",
      lazyLoad: "nearby",
      snap: "true",
      perPage: 4,
      perMove: 3,
      autoScroll: {
        rewind: true,
        speed: 1,
      },
      breakpoints: {
        1024: {
          perPage: 3,
          perMove: 2,
          autoScroll: {
            speed: 0.5,
          },
        },
        640: {
          focus: "center",
          perPage: 2,
        },
      },
    }).mount({ AutoScroll });
  } catch (e) {
    console.log(e);
  }
};

// Search menu function
const search = () => {
  const searchElement = document.querySelector("search-bar");
  const movieListSearchElement = document.createElement("movie-list");

  const searchButtonClicked = async () => {
    try {
      const searchResult = await Data.searchMovies(searchElement.value);
      movieListSearchElement.movies = searchResult;
      movieListSearchElement.category = `Results for: ${searchElement.value}`;

      const main = document.querySelector("main");
      while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }
      main.appendChild(movieListSearchElement);
    } catch (e) {
      console.log(e);
    }
  };

  searchElement.clickEvent = searchButtonClicked;
};

export { main, search };
