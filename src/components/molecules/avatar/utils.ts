
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
