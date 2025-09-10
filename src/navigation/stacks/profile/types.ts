import { ConfirmPinScreenParams } from '@/screens/profile/confirm-pin/types';
import { CovenantDetailsParams } from '@/screens/profile/covenants/interface';
import { KunyaCrudScreenParams } from '@/screens/profile/kunya-crud/interface';
import { QualificationDetailsScreenParams } from '@/screens/profile/qualification-details/interface';

export type ProfileStackParamList = {
  Profile: undefined;
  MyProfile: undefined;
  MyTeam: undefined;
  TeamMemberProfile: {
    userId: string;
    name: string;
    position: string;
    avatarImage?: string | null;
    status?: 'Online' | 'Away' | 'Offline';
  };
  PersonDetails: undefined;
  BusinessDetails: undefined;
  ProfileSettings: undefined;
  EditBackground: undefined;
  KunyaCrud: KunyaCrudScreenParams;
  Qualifications: undefined;
  SetPin: undefined;
  ConfirmPin: ConfirmPinScreenParams;
  QualificationDetails: QualificationDetailsScreenParams;
  Covenant: undefined;
  CovenantDetails: CovenantDetailsParams;
  MySkills: undefined;
};
