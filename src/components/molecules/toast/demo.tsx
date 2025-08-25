/* eslint-disable no-console */
import { View, StyleSheet, Pressable } from 'react-native';
import { Paragraph } from '@/components/atoms';
import Toast from './toast';
import { ToastService } from './toast-service';

const ToastDemo = () => {
  const handleActionPress = () => {
    console.log('Action pressed');
  };

  const handleClosePress = () => {
    console.log('Close pressed');
  };

  const showToasts = () => {
    ToastService.success({
      props: {
        messageProps: { text: 'Saved' },
        actionProps: {
          text: 'Undo',
        },
        onActionPress: () => console.log('Undo changes'),
        testId: '',
        type: 'success',
      },
    });

    setTimeout(() => {
      ToastService.error({
        props: {
          messageProps: { text: 'Failed to save' },
          actionProps: {
            text: 'Retry',
          },
          onActionPress: () => console.log('Retry saving'),
          testId: '',
          type: 'error',
          showClose: false,
        },
      });
    }, 1000);

    setTimeout(() => {
      ToastService.info({
        props: {
          messageProps: { text: 'Updates available' },
          actionProps: {
            text: 'Install',
          },
          onActionPress: () => console.log('Install updates'),
          testId: '',
          type: 'info',
        },
      });
    }, 2000);
  };

  const showRTLToasts = () => {
    ToastService.success({
      props: {
        messageProps: { text: 'تم الحفظ' },
        actionProps: {
          text: 'تراجع',
        },
        onActionPress: () => console.log('Undo RTL'),
        testId: '',
        type: 'success',
        showClose: false,
      },
    });

    setTimeout(() => {
      ToastService.error({
        props: {
          messageProps: { text: 'فشل الحفظ' },
          actionProps: {
            text: 'إعادة المحاولة',
          },
          onActionPress: () => console.log('Retry RTL'),
          testId: '',
          type: 'error',
        },
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Paragraph
        testId="demo-title"
        text="Toast Component Demo"
        size="lg"
        weight="Semibold"
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
          messageProps={{
            text: 'Additional content is written here in case the notification or alert',
          }}
          onActionPress={handleActionPress}
          onClosePress={handleClosePress}
        />

        <Toast
          testId="demo-error"
          type="error"
          messageProps={{
            text: 'Additional content is written here in case the notification or alert',
          }}
          onActionPress={handleActionPress}
          onClosePress={handleClosePress}
        />

        <Toast
          testId="demo-info"
          type="info"
          messageProps={{
            text: 'Additional content is written here in case the notification or alert',
          }}
          onActionPress={handleActionPress}
          onClosePress={handleClosePress}
        />

        <Toast
          testId="demo-warning"
          type="warn"
          messageProps={{
            text: 'Additional content is written here in case the notification or alert',
          }}
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
          messageProps={{
            text: 'يكتب المحتوى الإضافي هنا في حال ان رسالة الاشعار أو التنبيه تحتاج الى شرح',
          }}
          onActionPress={handleActionPress}
          onClosePress={handleClosePress}
        />

        <Toast
          testId="demo-error-rtl"
          type="error"
          messageProps={{
            text: 'يكتب المحتوى الإضافي هنا في حال ان رسالة الاشعار أو التنبيه تحتاج الى شرح',
          }}
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
