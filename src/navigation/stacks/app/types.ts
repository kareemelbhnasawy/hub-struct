import { HomeScreenParams } from '@/screens/profile/home/types';
import { ProfileScreenParams } from '@/screens/profile/profile/interface';

export type AppStackParamList = {
  Home: HomeScreenParams;
  ProfileStack: ProfileScreenParams;
  QuickLogin: undefined;
};
