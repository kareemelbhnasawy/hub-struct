import { PersonDetailsResponse } from './interface';

export const basicInfoDataHandler = (data: PersonDetailsResponse) => {
  return [
    {
      key: 'name',
      label: 'profile.personDetails.name',
      value: data?.primaryInfo?.name ?? '-',
    },
    {
      key: 'birthDate',
      label: 'profile.personDetails.birthDate',
      value: data?.primaryInfo?.birthDate ?? '-',
    },
    {
      key: 'age',
      label: 'profile.personDetails.age',
      value: data?.primaryInfo?.age ?? '-',
    },
    {
      key: 'gender',
      label: 'profile.personDetails.gender',
      value: data?.primaryInfo?.gender ?? '-',
    },
    {
      key: 'nationality',
      label: 'profile.personDetails.nationality',
      value: data?.primaryInfo?.nationality ?? '-',
    },
    {
      key: 'nationalId',
      label: 'profile.personDetails.nationalId',
      value: data?.primaryInfo?.nationalId ?? '-',
    },
  ];
};

export const contactInfoDataHandler = (data: PersonDetailsResponse) => {
  return [
    {
      key: 'mobileNumber',
      label: 'profile.personDetails.mobile1',
      value: data?.contactInfo?.mobileNumber ?? '-',
      type: 'mobile',
    },
    {
      key: 'workExtension',
      label: 'profile.personDetails.extension',
      value: data?.contactInfo?.workExtension ?? '-',
      type: 'extension',
    },
    {
      key: 'address',
      label: 'profile.personDetails.address',
      value: data?.contactInfo?.address ?? '-',
    },
  ];
};
