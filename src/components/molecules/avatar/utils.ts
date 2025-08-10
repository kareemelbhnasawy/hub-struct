export const avatarSizes = {
  sm: ['size-6', '2xs'],
  md: ['size-8', '2xs'],
  lg: ['size-12', 'xs'],
  xl: ['w-[72px] h-[72px]', 'md'],
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
): string[] => {
  return avatarSizes[size];
};
