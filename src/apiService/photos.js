import axios from 'axios';
export const fetchUnsplash = async ({ query, page, per_page = 12 }) => {
  const accessKey = '8_8sodKPxiolFkYrfqUjMUwizh86FyVeWy_c_fADcCw';
  axios.defaults.baseURL = axios.defaults.headers.common['Authorization'] =
    accessKey;
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      asset_type: 'photo',
      orientation: 'landscape',
      query,
      page,
      per_page,
    },
    headers: {
      Authorization: `Client-ID ${accessKey}`,
      'Accept-Version': 'v1',
    },
  });
  console.log('response :>> ', response);
  return response;
};
