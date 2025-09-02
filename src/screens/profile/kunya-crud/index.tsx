import { View } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import {
  Avatar,
  BaseButton,
  BrandToggle,
  TextInput,
} from '@/components/molecules';
import { useState } from 'react';

const KunyaCrudScreen = () => {
  const screenTestId = 'kunya-crud-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [isToggleActive, setIsToggleActive] = useState(false);
  //   const { navigate } = useNavigation();

  return (
    <Page testId={screenTestId} hasHeader={false} isLoading={false}>
      <View style={themedStyles.container}>
        <Spacer space={40} />
        <View style={themedStyles.toggleSectionWrapper}>
          <View style={themedStyles.headlineWrapper}>
            <Headline
              size="2xs"
              weight="Semibold"
              text="profile.activateKunya"
              testId={screenTestId}
            />
            <Paragraph
              text="profile.activateKunyaSubtitle"
              testId={screenTestId}
            />
          </View>
          <BrandToggle
            value={isToggleActive}
            testId={screenTestId}
            onValueChange={setIsToggleActive}
          />
        </View>

        <Spacer space={30} />
        {isToggleActive && <View>
          <TextInput
            testId={screenTestId}
            labelProps={{
              text: 'profile.kunyaPrompt',
              size: '2xs',
              weight: 'Medium',
            }}
            isRequired
            placeholder="ابو ألفطي"
          />

          <Spacer space={30} />

          <View style={themedStyles.kunyaPreviewWrapper}>
            <Headline
              text="profile.howKunyaAppears"
              weight="Medium"
              size="2xs"
              testId={''}
            />
            <Avatar
              size="lg"
              // image={avatarUrl ?? null}
              name={'name aboo'}
              status={'active'}
              testId={screenTestId}
            />
            <View style={themedStyles.isCentered}>
              <Headline
                text={'displayName'}
                weight="Bold"
                size="xs"
                testId={screenTestId}
              />
              <Paragraph
                text={'displayTitle'}
                weight="Medium"
                size="lg"
                testId={screenTestId}
              />
            </View>
          </View>
          <Spacer space={40} />
          <BaseButton testId={screenTestId} textProps={{ text: 'Save' }} />
        </View>}
      </View>
    </Page>
  );
};

export default KunyaCrudScreen;
