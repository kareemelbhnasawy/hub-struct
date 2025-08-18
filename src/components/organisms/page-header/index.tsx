import { View } from 'react-native';
import { useCallback } from 'react';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import { Headline, LucideIcon } from '@/components/atoms';
import PageHeaderProps from './interface';

const PageHeader = ({
  isTitleCentered,
  hasBackIcon = true,
  startIcon,
  titleProps,
  endIcon,
  containerStyle,
  testId,
  fontColor,
}: PageHeaderProps) => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const prefixTestId = `${testId}-page-header`;

  const renderEndIcons = useCallback(() => {
    if (!endIcon) return null;
    if (Array.isArray(endIcon)) {
      return endIcon.map((endIconSingleProp, index) => (
        <LucideIcon
          testId={`${prefixTestId}-end-icon-${index}`}
          key={endIconSingleProp.name}
          color={fontColor ?? getThemeColor('textDefault')}
          {...endIconSingleProp}
          hasWrapper={endIcon.length <= 1}
        />
      ));
    }
    return (
      <LucideIcon
        testId={`${prefixTestId}-end-icon`}
        color={fontColor ?? getThemeColor('textDefault')}
        {...endIcon}
        hasWrapper
      />
    );
  }, [endIcon, fontColor, getThemeColor, prefixTestId]);

  return (
    <View
      testID={`${prefixTestId}-wrapper`}
      style={[themedStyles.headerMain, containerStyle]}>
      {/* Start Icon */}
      <View style={[themedStyles.startIconsWrapper, themedStyles.iconWrapper]}>
        {hasBackIcon || startIcon ? (
          <LucideIcon
            testId={`${prefixTestId}-`}
            color={fontColor ?? getThemeColor('textDefault')}
            name="ArrowLeft"
            hasWrapper
            // onPress={() => console.log('TODO: Go back!!')} TODO
            {...startIcon}
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
            style={[
              themedStyles.fontColor,
              fontColor ? { color: fontColor } : null,
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
