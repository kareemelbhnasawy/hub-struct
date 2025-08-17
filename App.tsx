/* eslint-disable */
import { I18nManager } from 'react-native';
import { getCrashlytics, log } from '@react-native-firebase/crashlytics';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { checkPermissions } from '@/utilities/permissions';
import { requestNotifications } from 'react-native-permissions';
import AppRoot from '@/apps/app-root';
import React from 'react';
import { Page } from '@/components/templates';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { PortalProvider } from '@gorhom/portal';

const App = () => {
  const crashlytics = getCrashlytics();

  useEffect(() => {
    if (crashlytics) log(crashlytics, 'App mounted.');
    checkPermissions();

    requestNotifications();
  }, [crashlytics]);

  return (
    <SafeAreaProvider style={{ direction: I18nManager.isRTL ? 'rtl' : 'ltr' }}>
      <PortalProvider>
        <Page
          hasHeader={false}
          pageHeaderVariant={PageHeaderVariants.XWithTitle}
          pageHeaderProps={{
            titleProps: { text: 'Page Header' },
          }}
          testId="main-app-page-example">
          <AppRoot />
        </Page>
      </PortalProvider>
    </SafeAreaProvider>
  );
};

export default App;
