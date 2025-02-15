import apiClient from './apiClient.ts';

const logOut = async () => {
  try {
    await apiClient.post('/auth/logout');
    sessionStorage.clear();
    window.location.href = '/login';
  } catch (error: any) {
    console.log(error);
  }
};
export default logOut;
