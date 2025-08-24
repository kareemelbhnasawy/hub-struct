import {
  useNavigation as useRNNavigation,
  useRoute as useRNRoute,
  NavigationProp,
  RouteProp,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Adjust these imports to match where you define your param lists
// If you already export them from a central file (e.g. "@/navigation"), keep it as-is.
import { RootStackParamList } from '@/navigation';
import { AppStackParamList } from '@/navigation/stacks/app/types';
import { AuthStackParamList } from '@/navigation/stacks/auth/types';

/**
 * Combine all route param lists into one big map of route -> params
 * Intersection (&) merges the keys so TS knows every screen name.
 */
type CombinedParamList = RootStackParamList &
  AppStackParamList &
  AuthStackParamList;

/** All valid screen names across the app */
type ScreenName = keyof CombinedParamList;

/**
 * One hook to rule them all.
 *
 * Usage:
 *   const nav = useNavigation(); // unscoped (all screens)
 *   nav.navigateTo('Profile', { userId: '42' });
 *
 *   // with route typing:
 *   const nav = useNavigation<'Profile'>(); // TRoute = 'Profile'
 *   const { params } = nav; // strongly typed to CombinedParamList['Profile']
 */
const useNavigation = <TRoute extends ScreenName = ScreenName>() => {
  const navigation = useRNNavigation<
    NavigationProp<CombinedParamList, TRoute>
  >() as NativeStackNavigationProp<CombinedParamList, TRoute>;

  // Route/params are optional—only defined inside screen components
  const route = useRNRoute<RouteProp<CombinedParamList, TRoute>>();

  /** Typed helpers */
  const navigateTo = <K extends ScreenName>(
    screen: K,
    params?: CombinedParamList[K],
  ) => navigation.navigate<K>(screen, params);

  const pushTo = <K extends ScreenName>(
    screen: K,
    params?: CombinedParamList[K],
  ) => navigation.dispatch(StackActions.push(screen, params));

  const replaceWith = <K extends ScreenName>(
    screen: K,
    params?: CombinedParamList[K],
  ) => navigation.dispatch(StackActions.replace(screen, params));

  const resetTo = <K extends ScreenName>(
    screen: K,
    params?: CombinedParamList[K],
  ) =>
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: screen, params }],
      }),
    );

  const pop = (count = 1) => navigation.dispatch(StackActions.pop(count));
  const popToTop = () => navigation.dispatch(StackActions.popToTop());
  const goBack = () => navigation.goBack();
  const canGoBack = () => navigation.canGoBack();

  return {
    /** raw navigation object (typed) */
    ...navigation,

    /** current route & params (typed if you pass TRoute) */
    route,
    params: route?.params as TRoute extends ScreenName
      ? CombinedParamList[TRoute]
      : CombinedParamList[ScreenName],

    /** convenience methods (typed) */
    navigateTo,
    pushTo,
    replaceWith,
    resetTo,
    pop,
    popToTop,
    goBack,
    canGoBack,
  };
};

export { useNavigation };
