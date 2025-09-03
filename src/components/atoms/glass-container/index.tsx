import React, { PropsWithChildren, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import GlassContainerProps from './interface';
import { Radius } from '@/style';

export const GlassContainer = ({
  testId,
  borderRadius = Radius.FULL,
  containerStyle,
  isContentCentered = true,
  onPress,
  children,
}: PropsWithChildren<GlassContainerProps>) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles(borderRadius));
  const translateX = useSharedValue(-200);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(200, { duration: 6000, easing: Easing.linear }), // ✅ move easing here
      -1,
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Pressable
      testID={`${testId}-glass-container`}
      style={[themedStyles.container, containerStyle]}
      onPress={onPress}>
      <BlurView
        testID={`${testId}-glass-container-blur`}
        style={themedStyles.absoluteFill}
        blurType="light"
        blurAmount={1}
      />
      <MaskedView
        testID={`${testId}-glass-container-mask`}
        style={themedStyles.absoluteFill}
        maskElement={<View style={themedStyles.borderMask} />}>
        <Animated.View
          style={animatedStyle}
          testID={`${testId}-glass-container-animated-view`}>
          <LinearGradient
            testID={`${testId}-glass-container-linear-gradient`}
            colors={['transparent', '#ffffffaa', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={themedStyles.shimmerGradient}
          />
        </Animated.View>
      </MaskedView>
      <View
        testID={`${testId}-glass-container-inner`}
        style={[
          isContentCentered && themedStyles.centerContent,
          themedStyles.width100,
        ]}>
        {children}
      </View>
    </Pressable>
  );
};
