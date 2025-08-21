import { createThemedStyles } from '@/utilities';

// export const baseStyles = createThemedStyles({
//   button: {
//     base: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: 44,
//       borderWidth: 0,
//     },
//   },
//   xxl: {
//     base: {
//       paddingVertical: 4,
//       paddingHorizontal: 4,
//       gap: 8,
//     },
//   },
//   xl: {
//     base: {
//       paddingVertical: 4,
//       paddingHorizontal: 4,
//       gap: 8,
//     },
//   },
//   lg: {
//     base: {
//       paddingVertical: 4,
//       paddingHorizontal: 4,
//       gap: 6,
//     },
//   },
//   md: {
//     base: {
//       paddingVertical: 4,
//       paddingHorizontal: 4,
//       gap: 6,
//     },
//   },
//   sm: {
//     base: {
//       paddingVertical: 4,
//       paddingHorizontal: 4,
//       gap: 4,
//     },
//   },
//   border: {
//     base: {
//       // borderColor: 'linkPrimaryFocusedBorder',
//       borderWidth: 2,
//       borderRadius: 8,
//       paddingVertical: 2,
//       paddingHorizontal: 2,
//     },
//   },
// });

export const linkStyles = createThemedStyles({
  defaultText: {
    base: {
      color: 'linkPrimaryDefaultLabel',
      textDecorationLine: 'underline',
    },
  },
  hoverText: {
    base: {
      color: 'linkPrimaryHoverLabel',
    },
  },
  focusedText: {
    base: {
      color: 'linkPrimaryFocusedLabel',
    },
  },
  pressedText: {
    base: {
      color: 'linkPrimaryPressedLabel',
    },
  },
  disabledText: {
    base: {
      color: 'linkPrimaryDisabledLabel',
    },
  },
  border: {
    base: {
      alignSelf:'flex-start',
      padding: 1,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'linkPrimaryFocusedBorder',
    },
  },
});
