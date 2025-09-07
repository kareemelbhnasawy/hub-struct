import { JobDetailsResponse } from './interface';

export const basicInfoDataHandler = (data: JobDetailsResponse) => {
  return [
    {
      key: 'id',
      label: 'رقم الموظف',
      value: data?.jobInfo?.employeeNumber ?? 'profile.emptyDataMsg',
    },
    {
      key: 'classificationGuide',
      label: 'الدليل التصنيفي',
      value: data?.jobInfo?.classificationGuide ?? 'profile.emptyDataMsg',
    },
    {
      key: 'jobTitle',
      label: 'المنصب',
      value: data?.jobInfo?.jobTitle ?? 'profile.emptyDataMsg',
    },
    {
      key: 'rank',
      label: 'المرتبة',
      value: data?.jobInfo?.rank ?? 'profile.emptyDataMsg',
    },
    {
      key: 'effectiveManagement',
      label: 'الإدارة الفعلية',
      value: data?.jobInfo?.effectiveManagement ?? 'profile.emptyDataMsg',
    },
    {
      key: 'management',
      label: 'الإدارة',
      value: data?.jobInfo?.management ?? 'profile.emptyDataMsg',
    },
  ];
};

export const contactInfoDataHandler = (data: JobDetailsResponse) => {
  return [
    {
      key: 'emailAddress',
      label: 'البريد الالكتروني',
      value: data?.contactInfo?.emailAddress ?? 'profile.emptyDataMsg',
      type: 'email',
    },
    {
      key: 'address',
      label: 'مقر العمل',
      value: data?.contactInfo?.address ?? 'profile.emptyDataMsg',
    },
    {
      key: 'workExtension',
      label: 'profile.personDetails.extension',
      value: data?.contactInfo?.workExtension ?? 'profile.emptyDataMsg',
      type: 'extension',
    },
  ];
};
