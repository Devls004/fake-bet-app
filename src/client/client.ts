import axios from 'axios';
import { API_URL } from '../main.config';

export default axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Access-Control-Allow-Headers': 'Content-Type,X-Api-Key,Access-Control-Allow-Headers,Authorization,X-Requested-With',
    'Content-Type': 'application/json',
  }
});