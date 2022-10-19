import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3010',
  withCredentials: true, // so it can accept cookies
});

export default Axios;
