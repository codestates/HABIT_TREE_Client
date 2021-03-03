import axios from 'axios';

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

export const getUsers = () => {
  let token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('not Authorized');
  } else {
    return axios
      .get('https://habittree.gq/users/findAll', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => result)
      .catch((err) => console.log(err));
  }
};

export const getUser = () => {
  let token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('not Authorized');
  } else {
    return axios
      .post('https://habittree.gq/users/findOne', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => result)
      .catch((err) => console.log(err));
  }
};

export const removeUser = () => {
  let token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('not Authorized');
  } else {
    return axios
      .delete('https://habittree.gq/users/remove', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res)
      .catch((err) => console.log(err));
  }
};

export const getHabits = () => {
  let token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('not Authorized');
  } else {
    return axios
      .post('https://habittree.gq/users/getHabits', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => result)
      .catch((err) => console.log(err));
  }
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

export const updateUser = (password: string) => {
  if (!password) {
    throw new Error('빈 칸이 있습니다');
  }
  return axios
    .post('https://habittree.gq/users/update', {
      password,
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};
