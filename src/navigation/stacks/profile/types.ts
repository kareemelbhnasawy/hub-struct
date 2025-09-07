import { ConfirmPinScreenParams } from '@/screens/profile/confirm-pin/types';
import { KunyaCrudScreenParams } from '@/screens/profile/kunya-crud/interface';

export type ProfileStackParamList = {
  Profile: undefined;
  MyProfile: undefined;
  PersonDetails: undefined;
  BusinessDetails: undefined;
  ProfileSettings: undefined;
  EditBackground: undefined;
  KunyaCrud: KunyaCrudScreenParams;
  SetPin: undefined;
  ConfirmPin: ConfirmPinScreenParams;
};
