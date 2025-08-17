import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import React, { useCallback, useMemo } from 'react';
import PageProps from './interface';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeStore } from '@/store/theme';
import { Portal } from '@gorhom/portal';
import styles from './styles';
import { PageHeader } from '@/components/organisms';
import { PageHeaderVariants } from './constants';

const Page = ({
  children,
  backgroundImage,
  isLoading,
  renderCustomHeader,
  renderStickyBottom,
  scrollEnabled = true,
  testId,
  pageHeaderVariant,
  pageHeaderProps,
  hasHeader = true,
  mainWrapperStyle,
  mainWrapperContentContainerStyle,
  innerPageStyle,
  safeAreaStyle,
  stickyBottomContainerStyle,
}: PageProps) => {
  const { getThemedStyles, getThemeColor, theme } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const prefixTestId = `${testId}-page`;

  // PAGE MAIN WRAPPER
  const PageMainWrapper = useMemo(
    () => (scrollEnabled ? ScrollView : View),
    [scrollEnabled],
  );
  // PAGE MAIN WRAPPER

  //

  // INNER PAGE WRAPPER
  const InnerPageWrapper: React.ElementType = useMemo(
    () => (backgroundImage ? ImageBackground : View),
    [backgroundImage],
  );
  // INNER PAGE WRAPPER

  const renderHeader = useCallback(() => {
    switch (pageHeaderVariant) {
      case PageHeaderVariants.BackWithTitle:
        return (
          <PageHeader
            testId={prefixTestId}
            startIcon={{ name: 'ArrowLeft' }}
            {...pageHeaderProps}
          />
        );
      case PageHeaderVariants.XWithTitle:
        return (
          <PageHeader
            testId={prefixTestId}
            startIcon={{ name: 'X' }}
            {...pageHeaderProps}
          />
        );
      default:
        return <PageHeader testId={prefixTestId} {...pageHeaderProps} />;
    }
  }, [pageHeaderProps, pageHeaderVariant, prefixTestId]);

  return (
    <SafeAreaView
      testID={`${prefixTestId}-safe-area-view`}
      style={[themedStyles.safeAreaStyle, safeAreaStyle]}>
      {/* Header */}
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      {hasHeader
        ? renderCustomHeader
          ? renderCustomHeader()
          : renderHeader()
        : null}
      {/* Header */}

      {/*  */}

      {/* Main Page */}
      <PageMainWrapper
        testID={`${prefixTestId}-main-wrapper`}
        style={[themedStyles.mainWrapperViewStyle, mainWrapperStyle]}
        contentContainerStyle={[
          themedStyles.mainWrapperContentContainerStyle,
          mainWrapperContentContainerStyle,
        ]}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled>
        {/*  */}

        {/* Content */}
        <InnerPageWrapper
          testID={`${prefixTestId}-inner-wrapper`}
          style={[themedStyles.innerPageStyle, innerPageStyle]}>
          {children}
        </InnerPageWrapper>
        {/* Content */}

        {/*  */}
      </PageMainWrapper>
      {/* Main Page */}

      {isLoading && (
        <Portal name={`${prefixTestId}-loader-portal`}>
          <View
            testID={`${prefixTestId}-loader-wrapper`}
            style={themedStyles.loading}>
            <ActivityIndicator
              testID={`${prefixTestId}-loader`}
              color={getThemeColor('iconPrimary')}
            />
          </View>
        </Portal>
      )}

      {renderStickyBottom ? (
        <View style={[themedStyles.stickyBottom, stickyBottomContainerStyle]}>
          {renderStickyBottom()}
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Page;
