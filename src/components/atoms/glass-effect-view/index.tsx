import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { SHADOWS } from '@/style';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const FrostedGlass = () => {
  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(200, { duration: 6000 }),
      -1,
      true,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    easing: Easing.linear,
  }));

  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blurView}
        blurType="light"
        blurAmount={1}
        reducedTransparencyFallbackColor="white"
      />
      <MaskedView
        style={StyleSheet.absoluteFillObject}
        maskElement={<View style={styles.borderMask} />}>
        <Animated.View style={animatedStyle}>
          <LinearGradient
            colors={['transparent', '#ffffffaa', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.shimmerGradient}
          />
        </Animated.View>
      </MaskedView>
      <View style={styles.innerBox}>
        <Text style={styles.text}>Glass Zeft</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    ...SHADOWS.sm,
  },
  borderMask: {
    flex: 1,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
  },
  shimmerGradient: {
    width: 400,
    height: '100%',
  },
  innerBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default FrostedGlass;
