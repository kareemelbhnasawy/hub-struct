import { View } from 'react-native';
import React, { useCallback } from 'react';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import { Headline, LucideIcon } from '@/components/atoms';
import PageHeaderProps from './interface';

const PageHeader = ({
  isTitleCentered = true,
  hasStartIcon = true,
  startIcon,
  titleProps,
  endIcon,
  testId,
}: PageHeaderProps) => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const prefixTestId = 'page-header';

  const renderEndIcons = useCallback(() => {
    if (!endIcon) return null;
    if (Array.isArray(endIcon)) {
      return endIcon.map((endIconSingleProp) => (
        <LucideIcon
          key={endIconSingleProp.name}
          color={getThemeColor('textDefault')}
          {...endIconSingleProp}
          hasWrapper={endIcon.length < 1}
        />
      ));
    }
    return (
      <LucideIcon
        color={getThemeColor('textDefault')}
        {...endIcon}
        hasWrapper
      />
    );
  }, [endIcon]);

  return (
    <View
      testID={`${testId}-${prefixTestId}-wrapper`}
      style={themedStyles['headerMain']}>
      {/* Start Icon */}
      <View style={themedStyles['iconWrapper']}>
        {hasStartIcon ? (
          <LucideIcon
            color={getThemeColor('textDefault')}
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
        testID={`${testId}-${prefixTestId}-title-wrapper`}
        style={themedStyles['textWrapper']}>
        {titleProps ? (
          <Headline
            {...titleProps}
            style={[
              themedStyles['fontColor'],
              titleProps.style,
              isTitleCentered &&
                (!endIcon || (Array.isArray(endIcon) && endIcon.length <= 1)) && // force title to be NOT center if more than 1 endIcon
                themedStyles['titleAlignCenter'],
            ]}
          />
        ) : null}
      </View>
      {/* Title Wrapper */}

      {/*  */}

      {/* End Icons View Wrapper */}
      <View
        style={[themedStyles['endIconsWrapper'], themedStyles['iconWrapper']]}>
        {renderEndIcons()}
      </View>
      {/* End Icons View Wrapper */}
    </View>
  );
};

export default PageHeader;
