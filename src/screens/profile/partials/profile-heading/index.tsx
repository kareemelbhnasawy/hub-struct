import React from 'react';
import { View } from 'react-native';
import {
  CurvedHeroImage,
  Headline,
  Paragraph,
  Spacer,
} from '@/components/atoms';
import { Avatar } from '@/components/molecules';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import { getBackgroundImageById } from '../../edit-background/constants';
import ProfileHeadingProps from './interface';

const ProfileHeading: React.FC<ProfileHeadingProps> = ({
  testId,
  bannerId,
  avatarUrl,
  name,
  displayName,
  displayTitle,
  status,
  containerStyle,
  customGlassComponent,
}) => {
  const { getThemedStyles } = useThemeStore();
  const themed = getThemedStyles(styles);
  return (
    <View style={[themed.container, containerStyle]}>
      <CurvedHeroImage
        testId={testId}
        source={getBackgroundImageById(bannerId)}
        hasBackButton={true}
        customGlassComponent={customGlassComponent}>
        <Avatar
          size="lg"
          image={avatarUrl ?? null}
          name={name}
          status={status}
          testId={testId}
          containerStyle={themed.avatar}
        />
      </CurvedHeroImage>
      <Spacer />
      <View style={themed.titleWrapper}>
        <Headline
          isTranslated={false}
          text={displayName}
          weight="Bold"
          size="xs"
          testId={testId}
        />
        <Paragraph
          isTranslated={false}
          text={displayTitle}
          weight="Medium"
          size="lg"
          testId={testId}
        />
      </View>
    </View>
  );
};

export default ProfileHeading;
