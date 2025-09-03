export const maskPhoneNumber = (value: string) => {
  if (!value) return '';
  if (value.startsWith('+966')) {
    return '+966XXXXXXXXX';
  }
  if (value.startsWith('966')) {
    return '966XXXXXXXXX';
  }
  if (value.startsWith('05')) {
    return '05XXXXXXXX';
  }
  return value;
};
