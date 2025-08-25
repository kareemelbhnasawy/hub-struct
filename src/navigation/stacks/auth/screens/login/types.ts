import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/types';
import { AuthStackParamList } from '../../types';

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Auth'
> &
  NativeStackNavigationProp<AuthStackParamList, 'Login'>;
