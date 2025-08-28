import API_HEADER_ACCEPT_LANGUAGE from '../constants/api-header-accept-lang.constant';
import client from './client.util';

const clientSetHeadersLang = (langKey: string) => {
  client.defaults.headers[API_HEADER_ACCEPT_LANGUAGE] = langKey;
};

export default clientSetHeadersLang;
