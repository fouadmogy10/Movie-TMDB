import axios from "axios";
const base_url = axios.create({ baseURL: `${import.meta.env.VITE_API_URL}` });
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await base_url.get(`${url}`, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export default base_url;
