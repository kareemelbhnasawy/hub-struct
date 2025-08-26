export interface LoginStartRequest {
  email: string;
  password: string;
  deviceId: string;
}

export interface LoginStartResponse {
  expiresIn: string;
  mobileNumber: string;
}

export interface LoginFinishRequest {
  otp: string;
  deviceId: string;
}

export interface AuthorizationTokenResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: string;
  scope: string;
}
