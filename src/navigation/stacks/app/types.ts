import { SetPinScreenParams } from '@/screens/profile/confirm-pin/types';
import { HomeScreenParams } from './screens/home/types';
import { ProfileScreenParams } from './screens/profile/types';

export type AppStackParamList = {
  // Example if screen has known params
  Home: HomeScreenParams;
  Profile: ProfileScreenParams;
  Biometrics: undefined;
  SetPin: undefined;
  ConfirmPin: SetPinScreenParams;
};
