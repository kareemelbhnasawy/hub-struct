export type PersonDetailsScreenParams = {
  userId?: string;
};

export type PersonDetailsResponse = {
  primaryInfo: {
    name: string;
    birthDate: string;
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
    value: string 
};
