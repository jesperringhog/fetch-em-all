const getMovies = async() => {
    const response = await fetch("https:omdbapi.com?apikey=3cf50f5c&s=transform");
    const data = response.json();
    createHtml(data.Search);
}