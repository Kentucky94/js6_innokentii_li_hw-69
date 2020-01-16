import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://js6-innokentii-li-hw-69.firebaseio.com/'
});

export default axiosOrders