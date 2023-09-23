import axios from "axios";

const API_KEY = "39603904-54e1726f85aaa96ca931f61d5";
axios.defaults.baseURL = `https://pixabay.com/api/`;

async function fetch(value, page, perPage) {
  return await axios.get(`?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
}

export { fetch }