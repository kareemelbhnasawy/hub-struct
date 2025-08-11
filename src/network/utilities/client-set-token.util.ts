import client from './client.util';

const clientSetToken = (
  token: string | undefined,
  includeBearer: boolean = true,
) => {
  client.defaults.headers.common.Authorization = includeBearer
    ? `Bearer ${token}`
    : token;
};

export default clientSetToken;
