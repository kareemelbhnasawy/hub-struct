interface AuthState {
  email: string;
  password: string;
  userId: string;
  quickLoginType: string;
  invalidAttemptCount: number;
  isAccountSuspended: boolean;
  incrementInvalidAttemptCount: () => void;
  setIsAccountSuspended: (value: boolean) => void;
  getInvalidAttemptCount: () => number;
  setEmail: (email: string) => void;
  getEmail: () => string;
  setPassword: (password: string) => void;
  getPassword: () => string;
  getUserId: () => string;
  setUserId: (id: string) => void;
  setLoginCredentials: (credentials: {
    email: string;
    password: string;
  }) => void;
  setQuickLoginType: (type: string) => void;
  getQuickLoginType: () => string;
  resetLoginCredentials: () => void;
  getLoginCredentials: () => {
    email: string;
    password: string;
  };
  resetStore: () => void;
}
export default AuthState;
