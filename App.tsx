/* eslint-disable */
import { I18nManager } from 'react-native';
import { getCrashlytics, log } from '@react-native-firebase/crashlytics';
import { useCallback, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { checkPermissions } from '@/utilities/permissions';
import { requestNotifications } from 'react-native-permissions';
import AppRoot from '@/apps/app-root';
import { Page } from '@/components/templates';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { PortalProvider } from '@gorhom/portal';
import { Paragraph } from '@/components/atoms';

const App = () => {
  const crashlytics = getCrashlytics();

  useEffect(() => {
    if (crashlytics) log(crashlytics, 'App mounted.');
    checkPermissions();

    requestNotifications();
  }, [crashlytics]);

  const stickyBottom = useCallback(() => {
    return <Paragraph testId="sticky-bottom" text="Sticky Bottom!" />;
  }, []);

  return (
    <SafeAreaProvider style={{ direction: I18nManager.isRTL ? 'rtl' : 'ltr' }}>
      <PortalProvider>
        <Page
          // hasHeader={false}
          pageHeaderVariant={PageHeaderVariants.XWithTitle}
          pageHeaderProps={{
            isTitleCentered: false,
            titleProps: { text: 'Page Header' },
            // endIcon: [{ name: 'AArrowDown' }],
          }}
          renderStickyBottom={stickyBottom}
          testId="main-app-page-example">
          <AppRoot />
        </Page>
      </PortalProvider>
    </SafeAreaProvider>
  );
};

export default App;
