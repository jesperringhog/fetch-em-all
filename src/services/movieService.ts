import type { OmdbResponse } from "../models/OmdbResponse";
import { createHtml } from "../utils/htmlUtils";

export const getMovies = async() => {
    const response = await fetch("https:omdbapi.com?apikey=3cf50f5c&s=transformers");
    const data: OmdbResponse = await response.json();
    createHtml(data.Search);
}