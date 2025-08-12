export const avatarSizes = {
  sm: [{ width: 24, height: 24 }, 'sm' as const],
  md: [{ width: 32, height: 32 }, 'md' as const],
  lg: [{ width: 48, height: 48 }, 'lg' as const],
  xl: [{ width: 72, height: 72 }, 'xl' as const],
};

export const getInitialsFromName = (name: string): string => {
  const names = name.split(' ');
  if (names.length === 0) return '';
  if (names.length === 1) return names[0].charAt(0).toUpperCase();

  const firstInitial = names[0].charAt(0).toUpperCase();
  const lastInitial = names[names.length - 1].charAt(0).toUpperCase();

  const isEnglish = /^[A-Za-z\s]+$/.test(name);
  if (isEnglish) {
    return `${firstInitial}${lastInitial}`;
  } else {
    return `${firstInitial} ${lastInitial}`;
  }
};

export const getRelativeAvatarSizes = (
  size: keyof typeof avatarSizes,
): [string, 'xl' | 'lg' | 'md' | 'sm'] => {
  return avatarSizes[size] as [string, 'xl' | 'lg' | 'md' | 'sm'];
};
