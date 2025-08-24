import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph } from '@/components/atoms';
import { BaseButton } from '@/components/atoms';
import { useAppToast } from './provider';

const ToastDemo = () => {
  const toast = useAppToast();

  const showSuccessToast = () => {
    toast.success('Operation completed successfully!', {
      title: 'Success',
      actionLabel: 'View Details',
      onActionPress: () => console.log('Action pressed'),
      duration: 5000,
    });
  };

  const showErrorToast = () => {
    toast.error('An error occurred while processing your request.', {
      title: 'Error',
      actionLabel: 'Retry',
      onActionPress: () => console.log('Retry pressed'),
    });
  };

  const showInfoToast = () => {
    toast.info(
      'Additional content is written here in case the notification or alert needs explanation.',
      {
        title: 'Information',
        actionLabel: 'Learn More',
        onActionPress: () => console.log('Learn more pressed'),
      },
    );
  };

  const showWarningToast = () => {
    toast.warning('Please review your settings before continuing.', {
      title: 'Warning',
      actionLabel: 'Review',
      onActionPress: () => console.log('Review pressed'),
    });
  };

  const showCustomToast = () => {
    toast.show({
      variant: 'success',
      message:
        'يكتب المحتوى الإضافي هنا في حال ان رسالة الاشعار أو التنبيه تحتاج الى شرح',
      actionLabel: 'اكشن',
      onActionPress: () => console.log('RTL Action pressed'),
      showAction: true,
      showClose: true,
      duration: 6000,
      position: 'top',
    });
  };

  return (
    <View style={styles.container}>
      <Paragraph size="lg" weight="Bold" style={styles.title}>
        Toast Component Demo
      </Paragraph>

      <View style={styles.buttonContainer}>
        <BaseButton
          onPress={showSuccessToast}
          variant="primary"
          label="Show Success Toast"
        />

        <BaseButton
          onPress={showErrorToast}
          variant="primary"
          label="Show Error Toast"
        />

        <BaseButton
          onPress={showInfoToast}
          variant="primary"
          label="Show Info Toast"
        />

        <BaseButton
          onPress={showWarningToast}
          variant="primary"
          label="Show Warning Toast"
        />

        <BaseButton
          onPress={showCustomToast}
          variant="secondary"
          label="Show RTL Toast"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 15,
  },
});

export default ToastDemo;
