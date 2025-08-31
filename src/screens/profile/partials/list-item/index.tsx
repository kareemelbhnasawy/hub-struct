import { useThemeStore } from '@/store/theme';
import { styles } from './style';
import useTranslate from '@/hooks/use-translate';
import { Pressable } from 'react-native';
import { DescriptiveIcon } from '@/components/molecules';
import { LucideIcon } from '@/components/atoms';
import ListItemProps from './interface';

const ListItem = ({ testId, textProps, iconProps, onPress }: ListItemProps) => {
  const { isRTL } = useTranslate();
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  return (
    <Pressable style={themedStyles.listItemContainer} onPress={onPress}>
      <DescriptiveIcon
        iconProps={{
          size: 18,
          isCircle: true,
          ...iconProps,
        }}
        textProps={{
          weight: 'Semibold',
          size: '2xs',
          ...textProps,
        }}
        testId={testId}
      />
      <LucideIcon
        testId={testId}
        name={`Chevron${isRTL ? 'Left' : 'Right'}`}
        size={24}
      />
    </Pressable>
  );
};

export default ListItem;
