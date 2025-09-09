import { Dimensions, View, Image } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Path } from 'react-native-svg';
import CurvedHeroProps from './interface';
import DefaultBannerImage from '@/assets/images/riyadh.png';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import { useNavigation, useTranslate } from '@/hooks';
import { GlassIcon } from '@/components/molecules';
import { GlassContainer } from '../glass-container';
const { width: screenWidth } = Dimensions.get('window');

const CurvedHeroImage = ({
  testId,
  source,
  children,
  hasBackButton = false,
  customGlassComponent,
  ...props
}: CurvedHeroProps) => {
  const imageHeight = screenWidth * 0.55;
  const ltrPath = `M0 ${0.46 * screenWidth} C${0.2 * screenWidth} ${0.525 * screenWidth} ${0.78 * screenWidth} ${imageHeight} ${screenWidth} ${imageHeight} V0H0 V${0.46 * screenWidth}Z`;
  const rtlPath = `M${screenWidth} ${0.46 * screenWidth}C${0.8 * screenWidth} ${0.525 * screenWidth} ${0.22 * screenWidth} ${imageHeight} 0 ${imageHeight}V0H${screenWidth}V${0.46 * screenWidth}Z`;

  const { getThemedStyles } = useThemeStore();
  const { isRTL } = useTranslate();
  const themedStyles = getThemedStyles(styles(screenWidth, imageHeight));
  const navigation = useNavigation();

  return (
    <View style={themedStyles.container}>
      <MaskedView
        testID={`${testId}-curved-hero`}
        style={themedStyles.maskView}
        maskElement={
          <Svg
            width={screenWidth}
            height={imageHeight}
            viewBox={`0 0 ${screenWidth} ${imageHeight}`}>
            <Path fill={'#000'} d={isRTL ? rtlPath : ltrPath} />
          </Svg>
        }
        {...props}>
        {hasBackButton && (
          <View style={themedStyles.iconWrapper}>
            <GlassIcon
              testId={`${testId}-back`}
              name="ChevronLeft"
              isRTLMirrored
              onPress={() => navigation.goBack()}
            />
          </View>
        )}
        {customGlassComponent && (
          <GlassContainer
            containerStyle={themedStyles.customIconWrapper}
            testId={'curved-hero-cutom-glass'}>
            {customGlassComponent}
          </GlassContainer>
        )}
        <Image
          source={source || DefaultBannerImage}
          style={themedStyles.image}
          resizeMode="cover"
        />
      </MaskedView>
      {children}
    </View>
  );
};

export default CurvedHeroImage;
