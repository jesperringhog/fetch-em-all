
import { getMovies } from './services/movieService';
import './style.css'
import { createHtml } from './utils/htmlUtils';

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const input = document.getElementById("superInput");

    let searchText = "";
    if(input) {
        searchText = (input as HTMLInputElement).value;
    }
    const movies = await getMovies(searchText);
    createHtml(movies);
});
