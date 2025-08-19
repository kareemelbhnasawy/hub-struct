import { scale } from '@/store/theme/utils';
import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  bgIconBackgroundDefault: {
    base: {
      backgroundColor: 'iconBackgroundDefault',
    }
  },
  flex: {
    base: {
      display: 'flex',
    }
  },
  itemsCenter: {
    base: {
      alignItems: 'center',
    }
  },
  justifyCenter: {
    base: {
      justifyContent: 'center',
    }
  },
  roundedFull: {
    base: {
      borderRadius: 9999,
    },
  },
  lg: {
    base: {
      height: scale(48),
      width: scale(48)
    },
    options: {
      skipScale: true
    }
  },
  md: {
    base: {
      height: scale(32),
      width: scale(32)
    },
    options: {
      skipScale: true
    }
  },
  sm: {
    base: {
      height: scale(24),
      width: scale(24)
    },
    options: {
      skipScale: true
    }
  },
  xl: {
    base: {
      height: scale(72),
      width: scale(72)
    },
    options: {
      skipScale: true
    }
  },
  textWhite: {
    base: {
      color: 'textOncolorPrimary',
    }
  }
});
