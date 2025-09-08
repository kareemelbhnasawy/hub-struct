import React from 'react';
import { View } from 'react-native';
import { Paragraph, LucideIcon, Headline } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import StatCardProps, { StatIntent } from './interface';

const intentBgKey: Record<StatIntent, keyof ReturnType<typeof styles>> = {
  success: 'successBg',
  error: 'errorBg',
  brand: 'brandBg',
  warning: 'warningBg',
  info: 'infoBg',
  gray: 'grayBg',
};

const StatCard = ({
  testId,
  titleProps,
  value,
  iconName,
  intent = 'brand',
  containerStyle,
  valueProps,
}: StatCardProps) => {
  const { getThemedStyles } = useThemeStore();
  const themed = getThemedStyles(styles);

  return (
    <View
      testID={`${testId}-stat-card`}
      style={[themed.container, containerStyle]}>
      <View style={themed.row}>
        <LucideIcon
          testId={`${testId}-icon`}
          name={iconName}
          isCircle
          containerStyle={themed[intentBgKey[intent]]}
          size={20}
          // color={intentColorToken[intent]}
        />
        <View style={themed.textBlock}>
          <Paragraph
            size="lg"
            weight="Regular"
            {...titleProps}
            testId={`${testId}-title`}
          />
          <Headline
            testId={`${testId}-value`}
            isTranslated={false}
            style={themed.value}
            size="lg"
            weight="Medium"
            text={String(value)}
            {...valueProps}
          />
        </View>
      </View>
    </View>
  );
};

export default StatCard;
