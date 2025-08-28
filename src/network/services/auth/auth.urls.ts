const AUTH_URLS = {
  LOGIN_START: '/auth/v1/login/start',
  LOGIN_FINISH: '/auth/v1/login/finish',
  REFRESH_TOKEN: '/auth/v1/refresh',
  LOGOUT: 'auth/v1/logout',
  CHALLENGE: 'auth/v1/challenge',
  BIO_LOGIN: 'auth/v1/biometric/login',
  PIN_LOGIN: 'auth/v1/pin-code/login',
  // TODO: should it be in users urls or profile urls
  SET_BIO: 'auth/v1/users/public-key',
  SET_PIN: 'auth/v1/users/pin-code',
} as const;

export default AUTH_URLS;
