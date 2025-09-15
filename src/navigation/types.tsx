import { ScreenName } from '@/hooks/use-navigation';
import { Config } from '@/network/types/api-method-args-with-extras.type';
import { AxiosError, AxiosResponse } from 'axios';

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
    config: Config;
    showSuccessToast?: (arg0: AxiosResponse) => {
      text: string;
      textProps?: object;
    };
    hideErrorToast?: (arg0: AxiosError) => boolean;
    isBack?: boolean;
  };
};
