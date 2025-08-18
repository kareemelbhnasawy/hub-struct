import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { SHADOWS } from '@/style';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const FrostedGlass = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 3000 }), // 3s for full rotation
      -1, // infinite
      false,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blurView}
        blurType="light"
        blurAmount={1}
        reducedTransparencyFallbackColor="white"
      />
      <Animated.View style={[styles.border, animatedStyle]}>
        <View style={styles.innerBox}>
          <Text style={styles.text}>Glass Zeft</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 75,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e5e7eb',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderStartWidth: 2,
    ...SHADOWS.sm,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  border: {
    padding: 4, // border thickness
    borderWidth: 4,
    borderColor: 'blue',
    borderRadius: 100,
  },
  innerBox: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FrostedGlass;
