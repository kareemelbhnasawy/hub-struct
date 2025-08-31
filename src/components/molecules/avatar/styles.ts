import { scale } from '@/store/theme/utils';
import { createThemedStyles } from '@/utilities';

export const styles = createThemedStyles({
  bgIconBackgroundDefault: {
    base: {
      backgroundColor: 'iconBackgroundDefault',
      borderWidth: 2,
      borderColor: 'backgroundWhite',
    },
  },
  flex: {
    base: {
      display: 'flex',
    },
  },
  itemsCenter: {
    base: {
      alignItems: 'center',
      alignSelf: 'center',
    },
  },
  justifyCenter: {
    base: {
      justifyContent: 'center',
    },
  },
  roundedFull: {
    base: {
      borderRadius: 9999,
    },
  },
  lg: {
    base: {
      height: scale(48),
      width: scale(48),
    },
    options: {
      skipScale: true,
    },
  },
  md: {
    base: {
      height: scale(32),
      width: scale(32),
    },
    options: {
      skipScale: true,
    },
  },
  sm: {
    base: {
      height: scale(24),
      width: scale(24),
    },
    options: {
      skipScale: true,
    },
  },
  xl: {
    base: {
      height: scale(72),
      width: scale(72),
    },
    options: {
      skipScale: true,
    },
  },
  statusBase: {
    base: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderWidth: 1,
      borderColor: 'backgroundWhite',
    },
  },
  active: {
    base: {
      backgroundColor: 'avatarStatusActive',
    },
  },
  away: {
    base: {
      backgroundColor: 'avatarStatusAway',
    },
  },
  offline: {
    base: {
      backgroundColor: 'avatarStatusOffline',
    },
  },
  lgStatus: {
    base: {
      height: scale(12),
      width: scale(12),
    },
    options: {
      skipScale: true,
    },
  },
  mdStatus: {
    base: {
      height: scale(8),
      width: scale(8),
    },
    options: {
      skipScale: true,
    },
  },
  smStatus: {
    base: {
      height: scale(6),
      width: scale(6),
    },
    options: {
      skipScale: true,
    },
  },
  xlStatus: {
    base: {
      height: scale(15),
      width: scale(15),
    },
    options: {
      skipScale: true,
    },
  },
  textWhite: {
    base: {
      color: 'textOncolorPrimary',
    },
  },
});
