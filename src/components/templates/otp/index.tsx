import { View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';
import { Headline } from '@/components/atoms';
import { useNavigation } from '@/hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'OTP'>;

export default function OtpConfirmationScreen({ route }: Props) {
  const { replaceToScreen, resetToStack } = useNavigation();
  const { nextScreen, nextScreenParams, mobile, resetAppNav } = route.params;

  const onOtpSuccess = () => {
    if (!nextScreen) return;
    if (resetAppNav) {
      resetToStack('App', 'Home');
    } else {
      replaceToScreen(nextScreen, nextScreenParams);
    }
  };

  return (
    <View>
      {/* Your PinCode + Typography components here */}
      {mobile && <Headline testId="" text={mobile} />}
      <Button title="Confirm OTP" onPress={onOtpSuccess} />
    </View>
  );
}
