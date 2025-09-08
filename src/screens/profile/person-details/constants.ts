import { I18nManager } from 'react-native';
import { PersonDetailsResponse } from './interface';

export const basicInfoDataHandler = (data: PersonDetailsResponse) => {
  const greg = data?.primaryInfo?.birthDateGregorian;
  const formattedGreg =
    greg && !Number.isNaN(new Date(greg).getTime())
      ? new Date(greg).toLocaleString(I18nManager.isRTL ? 'ar-EG' : 'en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : undefined;

  const AR_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'] as const;

  const toArabicDigits = (hijriDate?: string) => {
    if (!hijriDate) return hijriDate;
    if (!I18nManager.isRTL) return hijriDate;
    return hijriDate.replace(/\d/g, (d) => AR_DIGITS[parseInt(d, 10)]);
  };
  return [
    {
      key: 'name',
      label: 'profile.personDetails.name',
      value: data?.primaryInfo?.name ?? 'profile.emptyDataMsg',
    },
    {
      key: 'birthDate',
      label: 'profile.personDetails.birthDate',
      value:
        [toArabicDigits(data?.primaryInfo?.birthDateHijri), formattedGreg]
          .filter(Boolean)
          .join(' | ') || 'profile.emptyDataMsg',
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

export const contactInfoDataHandler = (
  data: PersonDetailsResponse,
  contract = false,
) => {
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
      label: contract
        ? 'profile.personDetails.address2'
        : 'profile.personDetails.address',
      value: data?.contactInfo?.address ?? 'profile.emptyDataMsg',
    },
  ];
};
