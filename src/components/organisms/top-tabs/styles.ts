import { createThemedStyles } from '@/utilities';
import { Dimensions } from 'react-native';

// Styles consumed by MaterialTopTabNavigator screenOptions
const IND_HEIGHT = 5;
const IND_RADIUS = 2;
const IND_MH = Dimensions.get('window').width * 0.44; // IND_MH
// const IND_MH3 = -Dimensions.get('window').width * 0.2; // IND_MH
const styles = createThemedStyles({
  container: {
    base: {
      alignSelf: 'stretch',
      width: '100%',
    },
  },
  tabBar: {
    base: {
      backgroundColor: 'tabBarBackground',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 1,
      borderBottomColor: 'borderNeutralPrimary',
    },
  },
  tabItem: {
    base: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
    },
  },
  iconWrapper: {
    base: {
      marginBottom: 6, // space between stacked icon and label
    },
  },
  labelRow: {
    base: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      flexDirection: 'row',
      alignSelf: 'stretch',
      width: '100%',
    },
  },
  indicator: {
    base: {
      height: 4,
      backgroundColor: 'backgroundBrandPrimary',
      borderRadius: 24,
      // width: '40%',
    },
  },
  tabLabelContainer: {
    base: {
      position: 'relative',
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      width: IND_MH,
    },
  },
  rtlIndicator: {
    base: {
      position: 'absolute',
      // left: IND_MH, // IND_MH
      // right: IND_MH, // IND_MH
      width: '100%',
      bottom: -13,
      height: IND_HEIGHT, // IND_HEIGHT
      borderRadius: IND_RADIUS, // IND_RADIUS
      // backgroundColor will be set dynamically
    },
  },
  rtlIndicator3: {
    base: {
      position: 'absolute',
      // left: IND_MH3, // IND_MH3
      // right: IND_MH3, // IND_MH3
      marginStart: 4,
      width: '68%',
      bottom: -13,
      height: IND_HEIGHT, // IND_HEIGHT
      borderRadius: IND_RADIUS, // IND_RADIUS
      // backgroundColor will be set dynamically
    },
  },
});
export default styles;
