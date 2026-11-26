import axios from 'axios';

const baseUrl = '/api/contact-messages';

const create = (newMessage) => {
  const request = axios.post(baseUrl, newMessage);
  return request.then((response) => response.data);
};

export default { create };
