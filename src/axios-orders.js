import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-caf97-default-rtdb.firebaseio.com/'
});

export default instance;