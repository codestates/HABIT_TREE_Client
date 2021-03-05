import axios from 'axios';

axios.defaults.withCredentials = true;

export const getForest = async () => {
  let token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('not Authorized');
  } else {
    try {
      const result = await axios.post(
        'https://habittree.gq/forest/findAll',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return result.data;
    } catch (err) {
      return console.log(err);
    }
  }
};
