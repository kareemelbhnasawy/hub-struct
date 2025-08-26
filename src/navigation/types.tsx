import { ScreenName } from '@/hooks/use-navigation';

// Root stack parameter list for the super app
export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
  OTP: {
    nextScreen: ScreenName;
    nextScreenParams?: object;
    mobile?: string;
    resetAppNav?: boolean;
    url: string;
    body: object;
    onConfirmOtp?: (res: unknown) => void;
    expiresIn?: number; // in seconds
  };
};
