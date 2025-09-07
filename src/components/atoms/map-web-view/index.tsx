import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import MapWebViewProps from './interface';
import { useMemo } from 'react';
import { generateMapUrl } from './utils';
import {} from 'lucide-react-native';
import { useThemeStore } from '@/store/theme';
import styles from './styles';

export default function MapWebView({
  testId,
  latitude,
  longitude,
  containerStyle,
}: MapWebViewProps) {
  const mapUrl = useMemo(
    () => generateMapUrl(latitude, longitude),
    [latitude, longitude],
  );

  const { getThemedStyles } = useThemeStore();

  const themedStyles = getThemedStyles(styles);
  return (
    <View
      testID={`${testId}-map-web-view-container`}
      style={[themedStyles.container, containerStyle]}>
      <WebView
        testID={`${testId}-map-web-view`}
        source={{ uri: mapUrl }}
        style={themedStyles.flex1}
      />
    </View>
  );
}
