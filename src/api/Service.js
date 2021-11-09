import axios from 'axios';

export const getData = (path) => {
  return axios.get(path).then(response => response.data).catch((error) => {
    console.log(error);
  });
};

export const postData = (path, body) => {
  return axios.post(path, body, {
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

