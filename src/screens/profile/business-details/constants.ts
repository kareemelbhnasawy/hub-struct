import { PersonDetailsResponse } from './interface';

export const basicInfoDataHandler = (data: PersonDetailsResponse) => {
  return [
    {
      key: 'id',
      label: 'رقم الموظف',
      value: data?.primaryInfo?.name ?? '-',
    },
    {
      key: 'birthDate',
      label: 'الدليل التصنيفي',
      value: new Date('1990-01-01').toLocaleString('en-GB', {
        dateStyle: 'medium',
      }),
    },
    {
      key: 'age',
      label: 'المنصب',
      value: data?.primaryInfo?.age ?? '-',
    },
    {
      key: 'gender',
      label: 'المرتبة',
      value: data?.primaryInfo?.gender ?? '-',
    },
    {
      key: 'nationality',
      label: 'الإدارة الفعلية',
      value: data?.primaryInfo?.nationality ?? '-',
    },
    {
      key: 'nationalId',
      label: 'الإدارة',
      value: data?.primaryInfo?.nationalId ?? '-',
    },
  ];
};

export const contactInfoDataHandler = (data: PersonDetailsResponse) => {
  return [
    {
      key: 'mobileNumber',
      label: 'البريد الالكتروني',
      value: data?.contactInfo?.mobileNumber ?? '-',
      type: 'mobile',
    },
    {
      key: 'address',
      label: 'مقر العمل',
      value: data?.contactInfo?.address ?? '-',
    },
    {
      key: 'workExtension',
      label: 'profile.personDetails.extension',
      value: data?.contactInfo?.workExtension ?? '-',
      type: 'extension',
    },
  ];
};
