/* eslint-disable */
import {
  useNavigation as useRNNavigation,
  useRoute as useRNRoute,
  NavigationProp,
  RouteProp,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation';
import { AppStackParamList } from '../navigation/stacks/app/types';
import { AuthStackParamList } from '../navigation/stacks/auth/types';
import { ProfileStackParamList } from '../navigation/stacks/profile/types';
import { AxiosResponse } from 'axios';

/** Merge all route param lists into one */
type CombinedParamList = RootStackParamList &
  AppStackParamList &
  AuthStackParamList &
  ProfileStackParamList;

/** All valid screen names across the app */
export type ScreenName = keyof CombinedParamList;

/**
 * Describe the parent-navigator path for each screen.
 * Each entry is the chain of navigator *screen names* you must step through
 * to reach the target. Example for a deeply nested screen:
 *   ['App', 'ShopStack', 'ProductStack']
 *
 * For a screen directly inside App: ['App']
 * For a root-level stack like 'Auth' or 'App' themselves: []
 */
type StackPath = string[];

const stackMap: Record<ScreenName, StackPath> = {
  // Root stacks themselves
  Auth: [],
  App: [],
  OTP: [],

  // Auth flow
  Login: ['Auth'],

  // App flow
  Home: ['App'],
  ProfileStack: ['App'],
  Profile: ['App', 'ProfileStack'],
  MyProfile: ['App', 'ProfileStack'],
  PersonDetails: ['App', 'ProfileStack'],
  KunyaCrud: ['App', 'ProfileStack'],
  EditBackground: ['App', 'ProfileStack'],
  BusinessDetails: ['App', 'ProfileStack'],
  ProfileSettings: ['App', 'ProfileStack'],
  SetPin: ['App', 'ProfileStack'],
  ConfirmPin: ['App', 'ProfileStack'],
};

const getScreenStackPath = (screenName: ScreenName): StackPath => {
  if (!(screenName in stackMap)) {
    throw new Error(`Screen "${String(screenName)}" not found in stackMap`);
  }
  return stackMap[screenName];
};

/**
 * Build nested params for navigation:
 *   navigate('App', { screen: 'Home', params: { ... } })
 * For deeper nesting it becomes:
 *   navigate('App', { screen: 'ShopStack', params: { screen: 'ProductStack', params: { screen: 'ProductDetails', params: {...} }}})
 */
const buildNestedParams = (
  stackPath: StackPath,
  finalScreen: ScreenName,
  params?: CombinedParamList[ScreenName],
) => {
  // Start with the leaf screen
  let nested: any = { screen: finalScreen, params };

  // Wrap inside each parent stack from deepest to shallowest,
  // BUT we leave the first element (stackPath[0]) for the navigate() name.
  for (let i = stackPath.length - 1; i >= 1; i--) {
    nested = { screen: stackPath[i], params: nested };
  }

  return nested; // to be passed as the 'params' to navigate(stackPath[0], nested)
};

const useNavigation = <TRoute extends ScreenName = ScreenName>() => {
  const navigation = useRNNavigation<
    NavigationProp<CombinedParamList, TRoute>
  >() as NativeStackNavigationProp<CombinedParamList, TRoute>;

  const route = useRNRoute<RouteProp<CombinedParamList, TRoute>>();

  /** Typed helpers */
  const navigateTo = <K extends ScreenName>(
    screen: K,
    params?: CombinedParamList[K],
  ) => navigation.navigate(screen as never, params as never);

  const pushTo = <K extends ScreenName>(
    screen: K,
    params?: CombinedParamList[K],
  ) => navigation.dispatch(StackActions.push(screen as string, params));

  const replaceWith = <K extends ScreenName>(
    screen: K,
    params?: CombinedParamList[K],
  ) => navigation.dispatch(StackActions.replace(screen as string, params));

  const resetTo = <K extends ScreenName>(
    screen: K,
    params?: CombinedParamList[K],
  ) =>
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: screen as string, params }],
      }),
    );

  /**
   * Reset to a root stack ('Auth' | 'App') and land on a child screen.
   * Use this when switching flows (e.g., after login).
   */
  const resetToStack = <K extends ScreenName>(
    stack: 'App' | 'Auth',
    screen: K,
    params?: CombinedParamList[K],
  ) =>
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: stack,
            params: { screen: screen as string, params },
          },
        ],
      }),
    );

  /**
   * Navigate anywhere, even across stacks, with the correct nested params shape.
   * - If the target is a root stack itself (path=[]), just navigate to it.
   * - If the target is inside one parent (path=['App']), do: navigate('App', { screen: target })
   * - If deeper nesting, params are nested accordingly.
   */
  const navigateToScreen = <K extends ScreenName>(
    screen: K,
    params?: CombinedParamList[K],
    index?: number,
  ) => {
    const path = getScreenStackPath(screen);

    if (path.length === 0) {
      // The screen is a root-level stack/screen — simple navigate
      return navigation.navigate(screen as never, params as never);
    }

    // Top-most parent we call navigate() on
    const top = path[0];

    // If only one parent, it's navigate('App', { screen: screen, params })
    if (path.length === 1) {
      return navigation.navigate(
        top as never,
        { screen: screen as string, params, index } as never,
      );
    }

    // Deeper nesting: navigate('App', { screen: path[1], params: { screen: path[2], ... screen: final }})
    const nested = buildNestedParams(path, screen, params as any);
    return navigation.navigate(top as never, nested as never);
  };

  const replaceToScreen = <K extends ScreenName>(
    screen: K,
    params?: CombinedParamList[K],
  ) => {
    const path = getScreenStackPath(screen);

    if (path.length === 0) {
      // The screen is a root-level stack/screen — simple navigate
      return navigation.navigate(screen as never, params as never);
    }

    // Top-most parent we call navigate() on
    const top = path[0];

    // If only one parent, it's navigate('App', { screen: screen, params })
    if (path.length === 1) {
      return navigation.replace(
        top as never,
        { screen: screen as string, params } as never,
      );
    }

    // Deeper nesting: navigate('App', { screen: path[1], params: { screen: path[2], ... screen: final }})
    const nested = buildNestedParams(path, screen, params as any);
    return navigation.navigate(top as never, nested as never);
  };

  const navigateToOTP = <K extends ScreenName>({
    nextScreen,
    mobile,
    nextScreenParams,
    resetAppNav,
    url,
    body,
    onConfirmOtp,
    expiresIn,
    showSuccessToast,
    isBack = false,
  }: {
    nextScreen: K;
    mobile?: string;
    nextScreenParams?: CombinedParamList[K];
    resetAppNav?: boolean;
    url: string;
    body: object;
    onConfirmOtp?: (res: unknown) => void;
    expiresIn?: number; // in seconds
    showSuccessToast?: (arg0: AxiosResponse) => {
      text: string;
      textProps?: object;
    };
    isBack?: boolean;
  }) => {
    navigateTo('OTP', {
      nextScreen,
      mobile,
      nextScreenParams,
      resetAppNav,
      url,
      body,
      onConfirmOtp,
      expiresIn,
      showSuccessToast,
      isBack,
    });
  };

  const pop = (count = 1) => navigation.dispatch(StackActions.pop(count));
  const popToTop = () => navigation.dispatch(StackActions.popToTop());
  const goBack = () => navigation.goBack();
  const canGoBack = () => navigation.canGoBack();

  return {
    // raw navigation object (typed)
    ...navigation,

    // current route & params (typed if you pass TRoute)
    route,
    params: route?.params as TRoute extends ScreenName
      ? CombinedParamList[TRoute]
      : CombinedParamList[ScreenName],

    navigateTo,
    pushTo,
    replaceWith,
    resetTo,
    resetToStack,
    navigateToScreen,
    pop,
    popToTop,
    goBack,
    canGoBack,
    getScreenStackPath,
    replaceToScreen,
    navigateToOTP,
  };
};

export { useNavigation };
