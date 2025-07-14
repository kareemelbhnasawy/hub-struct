export const formatString = (str?: string) =>
  str ? str.replace(/(\d)(?=(.{3})+$)/g, '$1,') : '';
