import axios, { AxiosResponse } from 'axios';

axios.defaults.withCredentials = true;

export const uploadHabit = (title: string, token: string | null) => {
  return axios
    .post(
      'https://habittree.gq/habits/upload',
      {
        title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const getAllHabits = (token: string | null) => {
  return axios
    .post('https://habittree.gq/habits/findAll', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const getHabit = (token: string | null) => {
  return axios
    .post('https://habittree.gq/habits/findOne', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const removeHabit = (
  token: string | null
): Promise<void | AxiosResponse<any>> => {
  return axios
    .delete('https://habittree.gq/habits/remove', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const updateHabit = (token: string | null) => {
  return axios
    .post('https://habittree.gq/habits/update', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};
