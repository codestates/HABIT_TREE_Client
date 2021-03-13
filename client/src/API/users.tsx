import axios from 'axios';

axios.defaults.withCredentials = true;

export const login = async (username: string, password: string) => {
  if (!username || !password) {
    return;
  }
  try {
    const res = await axios.post('http://localhost:5000/users/login', {
      username,
      password,
    });
    return res.data.access_token;
  } catch (err) {
    return console.log(err);
  }
};

export const getUsers = async () => {
  let token = localStorage.getItem('access_token');
  if (!token) {
    return;
  } else {
    try {
      const result = await axios.get('http://localhost:5000/users/findAll', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return result;
    } catch (err) {
      return console.log(err);
    }
  }
};

export const getUser = async () => {
  let token = localStorage.getItem('access_token');
  if (!token) {
    return;
  } else {
    try {
      const result = await axios.post(
        'http://localhost:5000/users/findOne',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return result;
    } catch (err) {
      return console.log(err);
    }
  }
};

export const removeUser = async () => {
  let token = localStorage.getItem('access_token');
  if (!token) {
    return;
  } else {
    try {
      const res = await axios.delete('http://localhost:5000/users/remove', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch (err) {
      return console.log(err);
    }
  }
};

export const getHabits = async () => {
  let token = String(localStorage.getItem('access_token'));

  if (!token) {
    return;
  } else {
    return await axios
      .post(
        'http://localhost:5000/users/getHabits',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
};

export const signUp = async (
  username: string | null | undefined,
  password: string | null | undefined,
  email: string | null | undefined,
  nickname: string | null | undefined
) => {
  if (!email || !password || !nickname || !username) {
    return;
  }
  try {
    const result = await axios.post('http://localhost:5000/users/create', {
      username,
      password,
      email,
      nickname,
    });
    return result;
  } catch (err) {
    return err;
  }
};

export const updateUser = async (password: string) => {
  if (!password) {
    return;
  }
  try {
    const result = await axios.post('http://localhost:5000/users/update', {
      password,
    });
    return result;
  } catch (err) {
    return console.log(err);
  }
};
