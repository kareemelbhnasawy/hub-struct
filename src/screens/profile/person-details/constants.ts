import { PersonDetailsResponse } from './interface';

export const basicInfoDataHandler = (data: PersonDetailsResponse) => {
  return [
    {
      key: 'name',
      label: 'personDetails.name',
      value: data?.primaryInfo?.name ?? '-',
    },
    {
      key: 'birthDate',
      label: 'personDetails.birthDate',
      value: data?.primaryInfo?.birthDate ?? '-',
    },
    {
      key: 'age',
      label: 'personDetails.age',
      value: data?.primaryInfo?.age ?? '-',
    },
    {
      key: 'gender',
      label: 'personDetails.gender',
      value: data?.primaryInfo?.gender ?? '-',
    },
    {
      key: 'nationality',
      label: 'personDetails.nationality',
      value: data?.primaryInfo?.nationality ?? '-',
    },
    {
      key: 'nationalId',
      label: 'personDetails.nationalId',
      value: data?.primaryInfo?.nationalId ?? '-',
    },
  ];
};

export const contactInfoDataHandler = (data: PersonDetailsResponse) => {
  return [
    {
      key: 'mobileNumber',
      label: 'personDetails.mobile1',
      value: data?.contactInfo?.mobileNumber ?? '-',
      type: 'mobile',
    },
    {
      key: 'workExtension',
      label: 'personDetails.extension',
      value: data?.contactInfo?.workExtension ?? '-',
      type: 'extension',
    },
    {
      key: 'address',
      label: 'personDetails.address',
      value: data?.contactInfo?.address ?? '-',
    },
  ];
};
