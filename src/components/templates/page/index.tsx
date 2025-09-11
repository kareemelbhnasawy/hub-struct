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
import InfoBackground from '@/assets/images/background/info_bg.png';

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
  noPaddings,
  stickyBottomContainerStyle,
  disableSafeAreaTop = false,
  includeRenderStickyBottomStyles = true,
  isWhiteOverlay,
  useInfoBackground,
  imageStyle,
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

  // Resolve optional background image (built-in or custom)
  const resolvedBg = useMemo(
    () => (useInfoBackground ? InfoBackground : backgroundImage),
    [useInfoBackground, backgroundImage],
  );
  // BIG WRAPPER BACKGROUND
  const BackgroundWrapper: React.ElementType = useMemo(
    () => (resolvedBg ? ImageBackground : View),
    [resolvedBg],
  );
  // BIG WRAPPER BACKGROUND

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

  const Wrapper = disableSafeAreaTop ? View : SafeAreaView;

  return (
    <BackgroundWrapper
      testId={`${prefixTestId}-background-wrapper`}
      {...(resolvedBg ? { source: resolvedBg, imageStyle } : {})}
      style={themedStyles.backgroundWrapper}>
      <Wrapper
        testID={`${prefixTestId}-safe-area-view`}
        style={[
          themedStyles.safeAreaStyle,
          !useInfoBackground && themedStyles.pageColor,
          safeAreaStyle,
        ]}>
        {/* Header */}
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={'transparent'}
        />
        {hasHeader
          ? renderCustomHeader
            ? renderCustomHeader()
            : renderHeader()
          : null}
        {/* Header */}

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
          {/* Content */}
          <View
            testID={`${prefixTestId}-inner-wrapper`}
            style={[
              !noPaddings && themedStyles.innerPageStylePaddings,
              themedStyles.innerPageStyle,
              innerPageStyle,
            ]}>
            {children}
          </View>
          {/* Content */}
        </PageMainWrapper>
        {/* Main Page */}

        {isLoading && (
          <Portal name={`${prefixTestId}-loader-portal`}>
            <View
              testID={`${prefixTestId}-loader-wrapper`}
              style={[
                themedStyles.loading,
                isWhiteOverlay && themedStyles.whiteOverlay,
              ]}>
              <ActivityIndicator
                testID={`${prefixTestId}-loader`}
                color={getThemeColor('iconPrimary')}
              />
            </View>
          </Portal>
        )}

        {renderStickyBottom ? (
          <View
            style={[
              includeRenderStickyBottomStyles && themedStyles.stickyBottom,
              stickyBottomContainerStyle,
            ]}>
            {renderStickyBottom()}
          </View>
        ) : null}
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default Page;
