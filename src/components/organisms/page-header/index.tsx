import { View } from 'react-native';
import { useCallback } from 'react';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import { Headline, LucideIcon } from '@/components/atoms';
import PageHeaderProps from './interface';
import { useNavigation } from '@/hooks';
import { GlassIcon } from '@/components/molecules';

const PageHeader = ({
  isTitleCentered,
  hasBackIcon = true,
  startIcon,
  titleProps,
  endIcon,
  testId,
}: PageHeaderProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const prefixTestId = `${testId}-page-header`;
  const navigation = useNavigation();

  const renderEndIcons = useCallback(() => {
    if (!endIcon) return null;
    if (Array.isArray(endIcon)) {
      return endIcon.map((endIconSingleProp, index) => (
        <LucideIcon
          testId={`${prefixTestId}-end-icon-${index}`}
          key={endIconSingleProp.name}
          color={'textDefault'}
          {...endIconSingleProp}
          hasWrapper={endIcon.length <= 1}
        />
      ));
    }
    return (
      <LucideIcon
        testId={`${prefixTestId}-end-icon`}
        color={'textDefault'}
        {...endIcon}
        hasWrapper
      />
    );
  }, [endIcon, prefixTestId]);

  return (
    <View testID={`${prefixTestId}-wrapper`} style={themedStyles.headerMain}>
      {/* Start Icon */}
      <View style={[themedStyles.startIconsWrapper, themedStyles.iconWrapper]}>
        {hasBackIcon || startIcon ? (
          <GlassIcon
            testId={`${testId}-back`}
            name="ChevronLeft"
            isRTLMirrored
            onPress={() => navigation.goBack()}
          />
        ) : null}
      </View>
      {/* Start Icon */}

      {/*  */}

      {/* Title Wrapper */}
      <View
        testID={`${prefixTestId}-title-wrapper`}
        style={themedStyles.textWrapper}>
        {titleProps ? (
          <Headline
            testId={`${prefixTestId}-title`}
            {...titleProps}
            weight='Semibold'
            style={[
              themedStyles.fontColor,
              titleProps.style,
              isTitleCentered && themedStyles.titleAlignCenter,
            ]}
          />
        ) : null}
      </View>
      {/* Title Wrapper */}

      {/*  */}

      {/* End Icons View Wrapper */}
      <View style={[themedStyles.endIconsWrapper, themedStyles.iconWrapper]}>
        {renderEndIcons()}
      </View>
      {/* End Icons View Wrapper */}
    </View>
  );
};

export default PageHeader;
