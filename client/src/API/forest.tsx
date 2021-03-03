import axios, { AxiosResponse } from 'axios';

axios.defaults.withCredentials = true;

export const getForest = (token: string | null) => {
  return axios
    .post('https://habittree.gq/forest/findAll', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};
