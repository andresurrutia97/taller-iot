import axios from 'axios';

export const getData = async () => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
  } catch (error) {
    console.log(error);
  }
};
