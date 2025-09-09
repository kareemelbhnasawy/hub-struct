import { ConfirmPinScreenParams } from '@/screens/profile/confirm-pin/types';
import { KunyaCrudScreenParams } from '@/screens/profile/kunya-crud/interface';
import { QualificationDetailsScreenParams } from '@/screens/profile/qualification-details/interface';

export type ProfileStackParamList = {
  Profile: undefined;
  MyProfile: undefined;
  PersonDetails: undefined;
  BusinessDetails: undefined;
  ProfileSettings: undefined;
  EditBackground: undefined;
  KunyaCrud: KunyaCrudScreenParams;
  Qualifications: undefined;
  SetPin: undefined;
  ConfirmPin: ConfirmPinScreenParams;
  QualificationDetails: QualificationDetailsScreenParams;
  Convenant: undefined;
};
