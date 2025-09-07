import { QualificationDetailsResponse } from './interface';

const EMPTY = 'profile.emptyDataMsg';

// always return string
const isEmpty = (v?: string | number | null) =>
  (v === undefined || v === null || v === '') ? EMPTY : String(v);

const getStatus = (endDate?: string) => {
  if (!endDate) return EMPTY;
  const end = new Date(endDate).getTime();
  const now = Date.now();
  return end && end <= now
    ? 'profile.qualificationDetails.completed'
    : 'profile.qualificationDetails.inProgress';
};

export const basicInfoDataHandler = (data?: QualificationDetailsResponse) => {
  const qualificationInfo = data?.qualificationInfo;
  return [
    {
      key: 'type',
      label: 'profile.qualificationDetails.type',
      value: isEmpty(qualificationInfo?.type),
    },
    {
      key: 'schoolUniversity',
      label: 'profile.qualificationDetails.schoolUniversity',
      value: isEmpty(qualificationInfo?.university),
    },
    {
      key: 'country',
      label: 'profile.qualificationDetails.country',
      value: isEmpty(qualificationInfo?.country),
    },
    {
      key: 'academicDegree',
      label: 'profile.qualificationDetails.academicDegree',
      value: isEmpty(qualificationInfo?.degree),
    },
    {
      key: 'fieldOfStudy',
      label: 'profile.qualificationDetails.fieldOfStudy',
      value: isEmpty(qualificationInfo?.fieldOfStudy),
    },
    {
      key: 'learningMethod',
      label: 'profile.qualificationDetails.learningMethod',
      value: isEmpty(qualificationInfo?.learningMethod),
    },
    {
      key: 'awardingBody',
      label: 'profile.qualificationDetails.awardingBody',
      value: isEmpty(qualificationInfo?.grantingAuthority),
    },
  ];
};

export const studyDetailsDataHandler = (data?: QualificationDetailsResponse) => {
  const studyDetails = data?.studyDetails;
  return [
    {
      key: 'status',
      label: 'profile.qualificationDetails.status',
      value: getStatus(studyDetails?.endDate),
    },
    {
      key: 'studyStartDate',
      label: 'profile.qualificationDetails.studyStartDate',
      value: isEmpty(studyDetails?.startDate),
    },
    {
      key: 'actualEndDate',
      label: 'profile.qualificationDetails.actualEndDate',
      value: isEmpty(studyDetails?.endDate),
    },
  ];
};

export const feesDataHandler = (data?: QualificationDetailsResponse) => {
  const feesInfo = data?.feesInfo;
  return [
    {
      key: 'totalFees',
      label: 'profile.qualificationDetails.totalFees',
      value: isEmpty(feesInfo?.amount),
    },
    {
      key: 'currency',
      label: 'profile.qualificationDetails.currency',
      value: isEmpty(feesInfo?.currency),
    },
    {
      key: 'paymentStatus',
      label: 'profile.qualificationDetails.paymentStatus',
      value: isEmpty(feesInfo?.paymentStatus),
    },
  ];
};
