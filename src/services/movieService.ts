import type { OmdbResponse } from "../models/OmdbResponse";
import { get } from "./baseService";



export const getMovies = async(searchText: string) => {
    const response = await get<OmdbResponse>("https:omdbapi.com?apikey=3cf50f5c&s=" + searchText);
    return response.Search;
}