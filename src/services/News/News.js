import axios from 'axios';

export const getNews = () => new Promise((resolve, reject) => {
  axios.get('https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2')
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err.data);
    });
});