import axios, { AxiosResponse } from 'axios';

axios.defaults.withCredentials = true;

export const getForest = () => {
  let token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('not Authorized');
  } else {
    return axios
      .post('https://habittree.gq/forest/findAll', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => result)
      .catch((err) => console.log(err));
  }
};
