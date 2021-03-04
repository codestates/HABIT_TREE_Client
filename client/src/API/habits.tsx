import axios from 'axios';

axios.defaults.withCredentials = true;

export const uploadHabit = async (title: string) => {
  const token = localStorage.getItem('access_token');
  try {
    const result = await axios.post(
      'https://habittree.gq/habits/upload',
      {
        title,
      },
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
};

export const getAllHabits = async () => {
  const token = localStorage.getItem('access_token');

  try {
    const result = await axios.post('https://habittree.gq/habits/findAll', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (err) {
    return console.log(err);
  }
};

export const getHabit = async () => {
  const token = localStorage.getItem('access_token');

  try {
    const result = await axios.post('https://habittree.gq/habits/findOne', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (err) {
    return console.log(err);
  }
};

export const removeHabit = async (id: number) => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('not Authorized');
  } else {
    try {
      const result = await axios.delete('https://habittree.gq/habits/remove', {
        data: { id },
      });
      return result;
    } catch (err) {
      return console.log(err);
    }
  }
};

export const updateHabit = async (id: number) => {
  const token = localStorage.getItem('access_token');

  try {
    const result = await axios.post(
      'https://habittree.gq/habits/update',
      { id },
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
};
