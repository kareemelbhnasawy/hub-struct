import { SetPinScreenParams } from '@/screens/profile/confirm-pin/types';
import { HomeScreenParams } from '@/screens/profile/home/types';
import { ProfileScreenParams } from '@/screens/profile/profile/types';

export type AppStackParamList = {
  Home: HomeScreenParams;
  Profile: ProfileScreenParams;
  Biometrics: undefined;
  SetPin: undefined;
  ConfirmPin: SetPinScreenParams;
};
