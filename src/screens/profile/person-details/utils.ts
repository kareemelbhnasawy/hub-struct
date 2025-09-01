import { Yup } from '@/utilities';

// Use Yup schema for Saudi phone validation
export const phoneSchema = Yup.string().required().validSaudiPhoneNumber();
export const extensionSchema = Yup.string().required();

export const getPhoneError = (value: string) => {
  try {
    phoneSchema.validateSync(value);
    return undefined;
  } catch (err: unknown) {
    return err?.message;
  }
};

export const getExtensionError = (value: string): string | null => {
  try {
    extensionSchema.validateSync(value);
    return undefined;
  } catch (err: unknown) {
    return err?.message;
  }
};

// For disabling the button
export const isPhoneValid = (value: string) => {
  try {
    phoneSchema.validateSync(value);
    return true;
  } catch {
    return false;
  }
};
