import axios, { AxiosResponse } from 'axios';

axios.defaults.withCredentials = true;

export const login = (username: string, password: string) => {
  if (!username || !password) {
    return;
  }
  return axios
    .post('https://habittree.gq/users/login', {
      username,
      password,
    })
    .then((res) => {
      const { data } = res;
      return data.access_token;
    })
    .catch((err) => console.log(err));
};

export const getUsers = (token: string | null) => {
  return axios
    .get('https://habittree.gq/users/findAll', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const getUser = (token: string | null) => {
  return axios
    .post('https://habittree.gq/users/findOne', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const removeUser = (token: string | null) => {
  return axios
    .delete('https://habittree.gq/users/remove', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const getHabits = (token: string | null) => {
  return axios
    .post('https://habittree.gq/users/getHabits', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const signUp = (
  username: string | null | undefined,
  password: string | null | undefined,
  email: string | null | undefined,
  nickname: string | null | undefined
) => {
  if (!email || !password || !nickname || !username) {
    throw new Error('빈 칸이 있습니다');
  }
  return axios
    .post('https://habittree.gq/users/getHabits', {
      username,
      password,
      email,
      nickname,
    })
    .then((result) => result)
    .catch((err) => err);
};
