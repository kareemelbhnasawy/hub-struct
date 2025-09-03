import { PersonDetailsResponse } from './interface';

export const basicInfoDataHandler = (data: PersonDetailsResponse) => {
  return [
    {
      key: 'name',
      label: 'profile.personDetails.name',
      value: data?.primaryInfo?.name ?? 'profile.emptyDataMsg',
    },
    {
      key: 'birthDate',
      label: 'profile.personDetails.birthDate',
      value: data?.primaryInfo?.birthDate ?? 'profile.emptyDataMsg',
    },
    {
      key: 'age',
      label: 'profile.personDetails.age',
      value: data?.primaryInfo?.age ?? 'profile.emptyDataMsg',
    },
    {
      key: 'gender',
      label: 'profile.personDetails.gender',
      value: data?.primaryInfo?.gender ?? 'profile.emptyDataMsg',
    },
    {
      key: 'nationality',
      label: 'profile.personDetails.nationality',
      value: data?.primaryInfo?.nationality ?? 'profile.emptyDataMsg',
    },
    {
      key: 'nationalId',
      label: 'profile.personDetails.nationalId',
      value: data?.primaryInfo?.nationalId ?? 'profile.emptyDataMsg',
    },
  ];
};

export const contactInfoDataHandler = (data: PersonDetailsResponse) => {
  return [
    {
      key: 'mobileNumber',
      label: 'profile.personDetails.mobile1',
      value: data?.contactInfo?.mobileNumber ?? 'profile.emptyDataMsg',
      type: 'mobile',
    },
    {
      key: 'workExtension',
      label: 'profile.personDetails.extension',
      value: data?.contactInfo?.workExtension ?? 'profile.emptyDataMsg',
      type: 'extension',
    },
    {
      key: 'address',
      label: 'profile.personDetails.address',
      value: data?.contactInfo?.address ?? 'profile.emptyDataMsg',
    },
  ];
};
