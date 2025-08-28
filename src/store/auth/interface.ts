interface AuthState {
    email: string;
    password: string;
    username: string;
    quickLoginType: string;
    biometricType: string;
    invalidAttemptCount: number;
    isAccountSuspended: boolean;
    incrementInvalidAttemptCount: () => void;
    setIsAccountSuspended: (value: boolean) => void;
    getInvalidAttemptCount: () => number;
    setEmail: (email: string) => void;
    getEmail: () => string;
    setPassword: (password: string) => void;
    getPassword: () => string;
    setLoginCredentials: (credentials: { email: string; password: string }) => void;
    setUsername: (username: string) => void;
    getUsername: () => string;
    setQuickLoginType: (type: string) => void;
    getQuickLoginType: () => string;
    setBiometricType: (enabled: string) => void;
    getBiometricType: () => string;
    resetLoginCredentials: () => void;
    getLoginCredentials: () => { email: string; password: string; username: string };
    resetStore: () => void;
}
export default AuthState;
