export const formatPhoneNumber = (value: string) => {
  // Remove any non-digit characters
  const digits = value.replace(/\D/g, '');

  // If starts with 05, keep as is
  if (digits.startsWith('05')) return digits;

  // If starts with 966, add +
  if (digits.startsWith('966')) return '+' + digits;

  // If starts with 5, add +966
  if (digits.startsWith('5')) return '+966' + digits;

  return digits;
};
