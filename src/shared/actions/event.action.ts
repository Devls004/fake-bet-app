import API from '../../client/client';
import { API_KEY } from '../../main.config';

export const eventGetter = async () => {
  let response = await API.get(`/${API_KEY}`);
  return response.data;
};
