import client from './client.util';

const clientSetBaseURL = (baseURL: string) => {
  client.defaults.baseURL = baseURL;
};

export default clientSetBaseURL;
