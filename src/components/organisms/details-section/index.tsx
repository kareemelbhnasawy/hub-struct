import React from 'react';
import { View } from 'react-native';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import { DescriptiveIcon, List } from '@/components/molecules';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import DetailsSectionProps, { DetailsItem } from './interface';

const DetailsSection = ({
  testId,
  title,
  icon,
  iconContainerStyle,
  data,
  renderItem,
  spacerProps,
  containerStyle,
}: DetailsSectionProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const defaultRenderItem = ({ item }: { item: DetailsItem; index: number }) => (
    <View style={themedStyles.row}>
      <Paragraph
        text={item.label}
        size="xl"
        weight="Medium"
        testId={`${testId}-${item.key}-label`}
      />
      <Headline
        text={item.value}
        weight="Medium"
        size="2xs"
        testId={`${testId}-${item.key}-value`}
      />
    </View>
  );

  return (
    <View style={containerStyle}>
      <DescriptiveIcon
        testId={`${testId}-header`}
        iconProps={{
          name: icon,
          size: 18,
          isCircle: true,
          containerStyle: iconContainerStyle,
        }}
        textProps={{
          text: title,
          size: 'xs',
          weight: 'Medium',
        }}
      />
      <Spacer space={'xl'} />
      <List<DetailsItem>
        testId={`${testId}-list`}
        data={data}
        keyField="key"
        renderItem={renderItem ?? defaultRenderItem}
        scrollEnabled={false}
        spacerProps={spacerProps ?? { isDivider: true, space: 0 }}
      />
    </View>
  );
};

export default DetailsSection;

