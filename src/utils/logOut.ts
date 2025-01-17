import apiClient from '../util/apiClient';

const logOut = async () => {
  try {
    await apiClient.post('/auth/logout');
    sessionStorage.removeItem('token');
    window.location.href = '/login';
  } catch (error) {
    console.error(error);
  }
};
export default logOut;
