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

export type JobDetailsResponse = {
  jobInfo: {
    employeeNumber: number;
    classificationGuide: string;
    jobTitle: string;
    rank: string;
    effectiveManagement: string;
    management: string;
  };
  contactInfo: {
    emailAddress: string;
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
