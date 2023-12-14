class Data {
  // Get data based on category(auto)
  static dataMovies = async (type) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=a17de4761d067fd44aba2ce3b58a0567`
      );
      const responseJSON = await response.json();
      return responseJSON.results;
    } catch (e) {
      return e;
    }
  };

  // Get data based on keyword(user)
  static searchMovies = async (keyword) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=a17de4761d067fd44aba2ce3b58a0567&query=${keyword}`
      );
      const responseJSON = await response.json();
      return responseJSON.results;
    } catch (e) {
      return e;
    }
  };
}

export default Data;
