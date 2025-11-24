import type { Movie } from "../models/movie";


export const createHtml = (movies: Movie[]) => {
    const app = document.getElementById("app");

    movies.forEach((movie) => {
        const title = document.createElement("h2");
        const poster = document.createElement("img");
        const year = document.createElement("p");

        title.innerHTML = movie.Title;
        poster.src = movie.Poster;
        year.innerHTML = movie.Year;

        app?.appendChild(title);
        app?.appendChild(poster);
        app?.appendChild(year);
    });
}