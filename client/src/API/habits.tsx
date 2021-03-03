import axios from 'axios';

axios.defaults.withCredentials = true;

export const uploadHabit = (title: string) => {
  const token = localStorage.getItem('access_token');
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

export const getAllHabits = () => {
  const token = localStorage.getItem('access_token');

  return axios
    .post('https://habittree.gq/habits/findAll', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const getHabit = () => {
  const token = localStorage.getItem('access_token');

  return axios
    .post('https://habittree.gq/habits/findOne', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const removeHabit = (id: number) => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('not Authorized');
  } else {
    return axios
      .delete('https://habittree.gq/habits/remove', { data: { id } })
      .then((result) => result)
      .catch((err) => console.log(err));
  }
};

export const updateHabit = (id: number) => {
  const token = localStorage.getItem('access_token');

  return axios
    .post(
      'https://habittree.gq/habits/update',
      { id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((result) => result)
    .catch((err) => console.log(err));
};
