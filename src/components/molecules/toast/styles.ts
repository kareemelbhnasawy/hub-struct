import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  // Container styles
  container: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 12,
      borderWidth: 1,
      marginHorizontal: 16,
      marginVertical: 8,
      minHeight: 56,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
  },

  // Content container
  contentContainer: {
    base: {
      flex: 1,
      marginHorizontal: 8,
    },
  },

  // Text styles
  title: {
    base: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 20,
      marginBottom: 2,
    },
  },

  message: {
    base: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 18,
    },
  },

  // Actions container
  actionsContainer: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
  },

  // Action button
  actionButton: {
    base: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
    },
  },

  actionText: {
    base: {
      fontSize: 14,
      fontWeight: '600',
      lineHeight: 18,
    },
  },

  // Close button
  closeButton: {
    base: {
      padding: 4,
      borderRadius: 4,
    },
  },

  // Icon container
  iconContainer: {
    base: {
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  // RTL specific styles
  containerRTL: {
    base: {
      flexDirection: 'row-reverse',
    },
  },

  contentContainerRTL: {
    base: {
      textAlign: 'right',
    },
  },

  actionsContainerRTL: {
    base: {
      flexDirection: 'row-reverse',
    },
  },

  // Variant styles - Success
  success: {
    base: {
      backgroundColor: 'backgroundSuccessLight',
      borderColor: 'borderSuccessLight',
    },
  },

  successIcon: {
    base: {
      color: 'iconSuccess',
    },
  },

  successTitle: {
    base: {
      color: 'textSuccess',
    },
  },

  successMessage: {
    base: {
      color: 'textSuccess',
    },
  },

  successAction: {
    base: {
      backgroundColor: 'backgroundSuccess',
    },
  },

  successActionText: {
    base: {
      color: 'textOncolorPrimary',
    },
  },

  // Variant styles - Error
  error: {
    base: {
      backgroundColor: 'backgroundErrorLight',
      borderColor: 'borderErrorLight',
    },
  },

  errorIcon: {
    base: {
      color: 'iconError',
    },
  },

  errorTitle: {
    base: {
      color: 'textError',
    },
  },

  errorMessage: {
    base: {
      color: 'textError',
    },
  },

  errorAction: {
    base: {
      backgroundColor: 'backgroundError',
    },
  },

  errorActionText: {
    base: {
      color: 'textOncolorPrimary',
    },
  },

  // Variant styles - Info
  info: {
    base: {
      backgroundColor: 'backgroundInfoLight',
      borderColor: 'borderInfoLight',
    },
  },

  infoIcon: {
    base: {
      color: 'iconInfo',
    },
  },

  infoTitle: {
    base: {
      color: 'textInfo',
    },
  },

  infoMessage: {
    base: {
      color: 'textInfo',
    },
  },

  infoAction: {
    base: {
      backgroundColor: 'backgroundInfo',
    },
  },

  infoActionText: {
    base: {
      color: 'textOncolorPrimary',
    },
  },

  // Variant styles - Warning
  warning: {
    base: {
      backgroundColor: 'backgroundWarningLight',
      borderColor: 'borderWarningLight',
    },
  },

  warningIcon: {
    base: {
      color: 'iconWarning',
    },
  },

  warningTitle: {
    base: {
      color: 'textWarning',
    },
  },

  warningMessage: {
    base: {
      color: 'textWarning',
    },
  },

  warningAction: {
    base: {
      backgroundColor: 'backgroundWarning',
    },
  },

  warningActionText: {
    base: {
      color: 'textOncolorPrimary',
    },
  },

  // Close button styles
  closeIcon: {
    base: {
      color: 'textDefault',
    },
  },
});

export default styles;
