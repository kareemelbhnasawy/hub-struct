import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph } from '@/components/atoms';
import Toast from './index';
import { ToastService } from './toast-provider';

const ToastDemo = () => {
  const handleActionPress = () => {
    console.log('Action pressed');
  };

  const handleClosePress = () => {
    console.log('Close pressed');
  };

  const showToasts = () => {
    ToastService.success('Operation completed successfully!');
    
    setTimeout(() => {
      ToastService.error('Something went wrong. Please try again.');
    }, 1000);

    setTimeout(() => {
      ToastService.info('New updates are available for download.');
    }, 2000);

    setTimeout(() => {
      ToastService.warning('Your session will expire in 5 minutes.');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Paragraph size="lg" weight="SemiBold" style={styles.title}>
        Toast Component Demo
      </Paragraph>

      <View style={styles.section}>
        <Paragraph size="md" weight="Medium" style={styles.sectionTitle}>
          Static Toasts (LTR)
        </Paragraph>
        
        <Toast
          testId="demo-success"
          type="success"
          message="Additional content is written here in case the notification or alert"
          onActionPress={handleActionPress}
          onClosePress={handleClosePress}
        />

        <Toast
          testId="demo-error"
          type="error"
          message="Additional content is written here in case the notification or alert"
          onActionPress={handleActionPress}
          onClosePress={handleClosePress}
        />

        <Toast
          testId="demo-info"
          type="info"
          message="Additional content is written here in case the notification or alert"
          onActionPress={handleActionPress}
          onClosePress={handleClosePress}
        />

        <Toast
          testId="demo-warning"
          type="warning"
          message="Additional content is written here in case the notification or alert"
          onActionPress={handleActionPress}
          onClosePress={handleClosePress}
        />
      </View>

      <View style={styles.section}>
        <Paragraph size="md" weight="Medium" style={styles.sectionTitle}>
          Static Toasts (RTL)
        </Paragraph>
        
        <Toast
          testId="demo-success-rtl"
          type="success"
          message="يكتب المحتوى الإضافي هنا في حال ان رسالة الاشعار أو التنبيه تحتاج الى شرح"
          isRTL={true}
          actionLabel="اكشن"
          onActionPress={handleActionPress}
          onClosePress={handleClosePress}
        />

        <Toast
          testId="demo-error-rtl"
          type="error"
          message="يكتب المحتوى الإضافي هنا في حال ان رسالة الاشعار أو التنبيه تحتاج الى شرح"
          isRTL={true}
          actionLabel="اكشن"
          onActionPress={handleActionPress}
          onClosePress={handleClosePress}
        />
      </View>

      <View style={styles.buttonSection}>
        <Paragraph 
          size="md" 
          weight="Medium" 
          style={styles.button}
          onPress={showToasts}
        >
          Show Toast Notifications
        </Paragraph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  buttonSection: {
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#1570EF',
    color: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    textAlign: 'center',
    overflow: 'hidden',
  },
});

export default ToastDemo;
