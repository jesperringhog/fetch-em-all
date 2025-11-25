import type { Movie } from "../models/movie";

export const createHtml = (movies: Movie[]) => {
  const section = document.getElementById("movieContainer");

  if (section) {
    section.innerHTML = "";
  }

  movies.forEach((movie) => {
    const title = document.createElement("h2");
    const poster = document.createElement("img");
    const year = document.createElement("p");

    title.innerHTML = movie.Title;
    poster.src = movie.Poster;
    year.innerHTML = movie.Year;

    section?.appendChild(title);
    section?.appendChild(poster);
    section?.appendChild(year);
  });
};
