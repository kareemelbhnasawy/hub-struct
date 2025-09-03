export type PersonDetailsScreenParams = {
  userId?: string;
};

export type PersonDetailsResponse = {
  primaryInfo: {
    name: string;
    birthDateHijri?: string | null;
    birthDateGregorian?: string | null;
    age: string;
    gender: string;
    nationality: string;
    nationalId: string;
  };
  contactInfo: {
    mobileNumber: string;
    workExtension: string;
    address: string;
  };
};

export type InfoItem = {
  key: string;
  label: string;
  value: string;
  type?: string;
};
