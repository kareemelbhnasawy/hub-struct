export const avatarSizes = {
  sm: ['size_sm', 'fontSize_sm'],
  md: ['size_md', 'fontSize_md'],
  lg: ['size_lg', 'fontSize_lg'],
  xl: ['size_xl', 'fontSize_xl'],
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
