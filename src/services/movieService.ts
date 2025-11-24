import type { OmdbResponse } from "../models/OmdbResponse";
import { createHtml } from "../utils/htmlUtils";
import { get } from "./baseService";

export const getMovies = async() => {
    const response = await get<OmdbResponse>("https:omdbapi.com?apikey=3cf50f5c&s=guardians");
    createHtml(response.Search);
}