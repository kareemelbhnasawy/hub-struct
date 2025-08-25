import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Paragraph } from '@/components/atoms';
import Toast from './toast';
import { ToastService } from './toast-provider';

const ToastDemo = () => {
  const handleActionPress = () => {
    console.log('Action pressed');
  };

  const handleClosePress = () => {
    console.log('Close pressed');
  };

  const showToasts = () => {
    ToastService.success('Operation completed successfully!', {
      actionLabel: 'View Details',
      onActionPress: () => console.log('Success action pressed'),
    });
    
    setTimeout(() => {
      ToastService.error('Something went wrong. Please try again.', {
        actionLabel: 'Retry',
        onActionPress: () => console.log('Error action pressed'),
      });
    }, 1000);

    setTimeout(() => {
      ToastService.info('New updates are available for download.', {
        actionLabel: 'Download',
        onActionPress: () => console.log('Info action pressed'),
      });
    }, 2000);

    setTimeout(() => {
      ToastService.warning('Your session will expire in 5 minutes.', {
        actionLabel: 'Extend',
        onActionPress: () => console.log('Warning action pressed'),
      });
    }, 3000);
  };

  const showRTLToasts = () => {
    ToastService.success('تم إكمال العملية بنجاح!', {
      isRTL: true,
      actionLabel: 'عرض التفاصيل',
      onActionPress: () => console.log('RTL Success action pressed'),
    });
    
    setTimeout(() => {
      ToastService.error('حدث خطأ ما. يرجى المحاولة مرة أخرى.', {
        isRTL: true,
        actionLabel: 'إعادة المحاولة', 
        onActionPress: () => console.log('RTL Error action pressed'),
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Paragraph 
        testId="demo-title"
        text="Toast Component Demo"
        size="lg" 
        weight="SemiBold" 
        style={styles.title}
      />

      <View style={styles.section}>
        <Paragraph 
          testId="demo-section-static"
          text="Static Toasts (LTR)"
          size="md" 
          weight="Medium" 
          style={styles.sectionTitle}
        />
        
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
        <Paragraph 
          testId="demo-section-rtl"
          text="Static Toasts (RTL)"
          size="md" 
          weight="Medium" 
          style={styles.sectionTitle}
        />
        
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
        <Pressable style={styles.button} onPress={showToasts}>
          <Paragraph 
            testId="demo-button-ltr"
            text="Show LTR Toast Notifications"
            size="md" 
            weight="Medium" 
            style={styles.buttonText}
          />
        </Pressable>

        <Pressable style={styles.button} onPress={showRTLToasts}>
          <Paragraph 
            testId="demo-button-rtl"
            text="Show RTL Toast Notifications"
            size="md" 
            weight="Medium" 
            style={styles.buttonText}
          />
        </Pressable>
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
    fontWeight: '600',
  },
  buttonSection: {
    alignItems: 'center',
    marginTop: 16,
    gap: 12,
  },
  button: {
    backgroundColor: '#1570EF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 200,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ToastDemo;
