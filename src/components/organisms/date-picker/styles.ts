import { Radius } from '@/style';
import { createThemedStyles } from '@/utilities';

// Calendar visual styles tuned to match brand components
const styles = createThemedStyles({
  container: {
    base: {
      backgroundColor: 'backgroundWhite',
      borderRadius: Radius.MD,
      borderWidth: 1,
      borderColor: 'borderSecondary',
      padding: 12,
      gap: 8,
    },
  },
  headerRow: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      rowGap: 8,
      marginBottom: 8,
    },
  },
  headerLeft: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      flex: 1,
      minWidth: '40%',
    },
  },
  headerTitle: {
    base: {
      color: 'foregroundPrimary',
    },
  },
  headerActions: {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      flexShrink: 1,
    },
  },

  // Segmented toggle
  segContainerLarge: {
    base: {
      backgroundColor: 'backgroundQuaternary',
      borderRadius: 12,
      padding: 4,
      flexDirection: 'row',
      gap: 4,
      alignSelf: 'flex-end',
    },
  },
  segContainerSmall: {
    base: {
      backgroundColor: 'backgroundQuaternary',
      borderRadius: 8,
      padding: 4,
      flexDirection: 'row',
      gap: 4,
      alignSelf: 'flex-end',
    },
  },
  segItemLarge: {
    base: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 12,
      backgroundColor: 'transparent',
    },
  },
  segItemSmall: {
    base: {
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 8,
      backgroundColor: 'transparent',
    },
  },
  segItemActive: {
    base: {
      backgroundColor: 'backgroundBrandPrimary',
    },
  },
  segTextLarge: {
    base: {
      color: 'foregroundQuaternary',
    },
  },
  segTextSmall: {
    base: {
      color: 'foregroundQuaternary',
    },
  },
  segTextActive: {
    base: {
      color: 'foregroundWhite',
    },
  },

  weekHeader: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 2,
      marginBottom: 8,
    },
  },
  weekDay: {
    base: {
      width: '14.2857%',
      alignItems: 'center',
      color: 'foregroundQuaternary',
      textAlign: 'center',
    },
  },

  grid: {
    base: {
      rowGap: 6,
    },
  },
  row: {
    base: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  cellBase: {
    base: {
      width: '14.2857%',
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 18,
      position: 'relative',
    },
  },
  cellText: {
    base: {
      color: 'foregroundPrimary',
      textAlign: 'center',
    },
  },
  cellMuted: {
    base: {
      opacity: 0.4,
    },
  },
  todayOutline: {
    base: {
      borderWidth: 2,
      borderColor: 'foregroundBrandPrimary',
    },
  },
  todayCircle: {
    base: {
      width: '68%',
      height: '68%',
      borderRadius: Radius.FULL,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'foregroundBrandPrimary',
      backgroundColor: 'transparent',
      zIndex: 1,
    },
  },
  normalOutline: {
    base: {
      width: '68%',
      height: '68%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Radius.FULL,
      backgroundColor: 'transparent',
    },
  },
  selectedDot: {
    base: {
      backgroundColor: 'backgroundBrandPrimary',
    },
  },
  rangeMid: {
    base: {
      backgroundColor: 'backgroundQuaternary',
      position: 'absolute',
      left: 0,
      right: 0,
      top: '15%',
      bottom: '15%',
      zIndex: 0,
    },
  },
  rangeHalfLeft: {
    base: {
      backgroundColor: 'backgroundQuaternary',
      position: 'absolute',
      left: 0,
      right: '25%',
      top: '15%',
      bottom: '15%',
      zIndex: 0,
    },
  },
  rangeHalfRight: {
    base: {
      backgroundColor: 'backgroundQuaternary',
      position: 'absolute',
      left: '25%',
      right: 0,
      top: '15%',
      bottom: '15%',
      zIndex: 0,
    },
  },
  startCap: {
    base: {
      borderTopLeftRadius: 18,
      borderBottomLeftRadius: 18,
    },
  },
  endCap: {
    base: {
      borderTopRightRadius: 18,
      borderBottomRightRadius: 18,
    },
  },
  selectedCircle: {
    base: {
      width: '68%',
      height: '68%',
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'backgroundBrandPrimary',
      zIndex: 1,
    },
  },
  selectedText: {
    base: {
      color: 'foregroundWhite',
    },
  },

  // Month / Year grid
  gridContainer: {
    base: {
      paddingTop: 2,
      paddingBottom: 8,
      gap: 8,
    },
  },
  scrollArea: {
    base: {
      maxHeight: 340,
    },
  },
  gridFlex: {
    base: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      justifyContent: 'space-between',
    },
  },
  monthItem: {
    base: {
      width: '31%',
      paddingVertical: 12,
      alignItems: 'center',
      borderRadius: Radius.SM,
      backgroundColor: 'transparent',
    },
  },
  yearItem: {
    base: {
      width: '31%',
      paddingVertical: 12,
      alignItems: 'center',
      borderRadius: Radius.SM,
      backgroundColor: 'transparent',
    },
  },
  yearHeading: {
    base: {
      width: '100%',
      alignItems: 'center',
      marginVertical: 4,
    },
  },
  selectedPill: {
    base: {
      backgroundColor: 'backgroundBrandPrimary',
    },
  },
  selectedPillText: {
    base: {
      color: 'foregroundWhite',
    },
  },
});

export default styles;
