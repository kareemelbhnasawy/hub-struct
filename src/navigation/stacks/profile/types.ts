import { ConfirmPinScreenParams } from '@/screens/profile/confirm-pin/types';
import { MyProfileScreenParams } from '@/screens/profile/my-profile/interface';
import { PersonDetailsScreenParams } from '@/screens/profile/person-details/interface';
import { ProfileScreenParams } from '@/screens/profile/profile/interface';

export type ProfileStackParamList = {
  Profile: ProfileScreenParams;
  MyProfile: MyProfileScreenParams;
  PersonDetails: PersonDetailsScreenParams;
  ProfileSettings: undefined;
  SetPin: undefined;
  ConfirmPin: ConfirmPinScreenParams;
};
