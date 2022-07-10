import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['secura-token'] = token;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['secura-token'];
    localStorage.removeItem('token');
  }
};
export default setAuthToken;
