import { createThemedStyles } from '@/utilities';

// Styles consumed by MaterialTopTabNavigator screenOptions
export const styles = createThemedStyles({
  container: {
    base: {
      alignSelf: 'stretch',
      width: '100%',
    },
  },
  tabBar: {
    base: {
      backgroundColor: 'backgroundMenu',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 1,
      borderBottomColor: 'borderSecondary',
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
});
