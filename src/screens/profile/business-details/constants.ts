import { JobDetailsResponse } from './interface';

export const basicInfoDataHandler = (data: JobDetailsResponse) => {
  return [
    {
      key: 'id',
      label: 'profile.myJobDetails.id',
      value: data?.jobInfo?.employeeNumber ?? 'profile.emptyDataMsg',
    },
    {
      key: 'classificationGuide',
      label: 'profile.myJobDetails.classificationGuide',
      value: data?.jobInfo?.classificationGuide ?? 'profile.emptyDataMsg',
    },
    {
      key: 'jobTitle',
      label: 'profile.myJobDetails.jobTitle',
      value: data?.jobInfo?.jobTitle ?? 'profile.emptyDataMsg',
    },
    {
      key: 'rank',
      label: 'profile.myJobDetails.rank',
      value: data?.jobInfo?.rank ?? 'profile.emptyDataMsg',
    },
    {
      key: 'effectiveManagement',
      label: 'profile.myJobDetails.effectiveManagement',
      value: data?.jobInfo?.effectiveManagement ?? 'profile.emptyDataMsg',
    },
    {
      key: 'management',
      label: 'profile.myJobDetails.management',
      value: data?.jobInfo?.management ?? 'profile.emptyDataMsg',
    },
  ];
};

export const contactInfoDataHandler = (
  data: JobDetailsResponse,
  team = false,
) => {
  return [
    {
      key: 'emailAddress',
      label: 'profile.myJobDetails.emailAddress',
      value: data?.contactInfo?.emailAddress ?? 'profile.emptyDataMsg',
      type: 'email',
    },
    {
      key: 'address',
      label: 'profile.myJobDetails.address',
      value: data?.contactInfo?.address ?? 'profile.emptyDataMsg',
    },
    {
      key: 'workExtension',
      label: team
        ? 'profile.personDetails.workExtension'
        : 'profile.personDetails.extension',
      value: data?.contactInfo?.workExtension ?? 'profile.emptyDataMsg',
      type: 'extension',
    },
  ];
};
