import axios from 'axios';
import { Platform } from 'react-native';

const api = axios.create({
  baseURL: Platform.OS === 'android' 
    ? 'http://192.168.15.58:3000/api'  // Android precisa de IP local
    : 'http://localhost:3000/api',    // Web pode usar localhost
});

export default api;