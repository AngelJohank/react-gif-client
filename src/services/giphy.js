import axios from 'axios';

const API_URL = 'https://api.giphy.com/v1/gifs/';
const API_KEY = 'nRUEN8kR2qWiH4rwLi9Ilotbm7mEO5wk';

const METHOD = {
  search: 'search',
  trending: 'trending',
};

const defaultParams = {
  api_key: API_KEY,
  rating: 'g',
};

const searchGifs = async (q, limit, state) => {
  const response = await axios.get(API_URL + METHOD.search, {
    params: {
      ...defaultParams,
      q,
      limit,
      lang: 'en',
    },
  });

  state(response.data.data);
};

const getTrends = async (limit, state) => {
  const response = await axios.get(API_URL + METHOD.trending, {
    params: {
      ...defaultParams,
      limit,
    },
  });

  state(response.data.data);
};

export { searchGifs, getTrends };
