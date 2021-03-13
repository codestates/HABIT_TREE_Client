import axios from 'axios';

axios.defaults.withCredentials = true;
type Habits = {
  id: number;
  title: string;
  pass: number;
  clicked: number;
  achieve: number;
  treeType: string;
  userId: number;
  createdAt: Date;
};
export const uploadHabit = async (title: string) => {
  const token = localStorage.getItem('access_token');
  try {
    const result = await axios.post(
      'http://localhost:5000/habits/upload',
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
    const result = await axios.post<Habits[]>(
      'http://localhost:5000/habits/findAll',
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
};

export const getHabit = async () => {
  const token = localStorage.getItem('access_token');

  try {
    const result = await axios.post(
      'http://localhost:5000/habits/findOne',
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
};

export const removeHabit = async (id: number) => {
  const token = localStorage.getItem('access_token');
  if (!token) {
  } else {
    try {
      const result = await axios.post(
        'http://localhost:5000/habits/remove',
        {
          id: id,
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
  }
};

export const updateHabit = async (id: number) => {
  const token = localStorage.getItem('access_token');

  try {
    const result = await axios.post(
      'http://localhost:5000/habits/update',
      { id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(result);
    console.log(result.data);
    return result.data;
  } catch (err) {
    return console.log(err);
  }
};
