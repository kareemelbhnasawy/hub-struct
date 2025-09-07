import { ConfirmPinScreenParams } from '@/screens/profile/confirm-pin/types';
import { MyProfileScreenParams } from '@/screens/profile/my-profile/interface';
import { PersonDetailsScreenParams } from '@/screens/profile/person-details/interface';
import { ProfileScreenParams } from '@/screens/profile/profile/interface';
import { KunyaCrudScreenParams } from '@/screens/profile/kunya-crud/interface';

export type ProfileStackParamList = {
  Profile: ProfileScreenParams;
  MyProfile: MyProfileScreenParams;
  PersonDetails: PersonDetailsScreenParams;
  EditBackground: undefined;
  KunyaCrud: KunyaCrudScreenParams;
  Qualifications: undefined;
  ProfileSettings: undefined;
  SetPin: undefined;
  ConfirmPin: ConfirmPinScreenParams;
};
