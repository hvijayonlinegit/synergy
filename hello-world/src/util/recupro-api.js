import axios from 'axios';

const BASE_URL = 'https://desolate-coast-24989.herokuapp.com';

export {getAccounts};

function getAccounts() {
  const url = `${BASE_URL}/api/v1/todos`;
  return axios.get(url).then(response => response.data);
}
