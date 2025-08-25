import { createThemedStyles } from '@/utilities';

const styles = createThemedStyles({
  container: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 12,
      borderWidth: 1,
      backgroundColor: 'backgroundCard',
      borderColor: 'borderNeutralSecondary',
      gap: 8,
      minHeight: 56,
    },
  },

  containerRTL: {
    base: {
      flexDirection: 'row-reverse',
    },
  },

  // Content area
  content: {
    base: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
  },

  contentRTL: {
    base: {
      flexDirection: 'row-reverse',
    },
  },

  // Icon styles
  icon: {
    base: {
      width: 20,
      height: 20,
    },
  },

  // Text styles
  messageText: {
    base: {
      flex: 1,
      color: 'textDefault',
    },
  },

  messageTextRTL: {
    base: {
      textAlign: 'right',
    },
  },

  // Actions area
  actions: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 0,
    },
  },

  actionsRTL: {
    base: {
      flexDirection: 'row-reverse',
    },
  },

  // Action button
  actionButton: {
    base: {
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 6,
    },
  },

  actionText: {
    base: {
      color: 'textDefault',
      textAlign: 'center',
    },
  },

  // Close button
  closeButton: {
    base: {
      paddingVertical: 4,
      paddingHorizontal: 4,
    },
  },

  closeIcon: {
    base: {
      width: 24,
      height: 24,
    },
  },

  // Type variants
  success: {
    base: {
      backgroundColor: 'backgroundSuccessLight',
      borderColor: 'borderSuccessLight',
    },
  },

  error: {
    base: {
      backgroundColor: 'backgroundErrorLight',
      borderColor: 'borderErrorLight',
    },
  },

  info: {
    base: {
      backgroundColor: 'backgroundInfoLight',
      borderColor: 'borderInfoLight',
    },
  },

  warn: {
    base: {
      backgroundColor: 'backgroundWarningLight',
      borderColor: 'borderWarningLight',
    },
  },
});

export default styles;
