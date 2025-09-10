import { Spacer } from '@/components/atoms';
import { Page } from '@/components/templates';
import useGetPersonDetails from '@/network/services/profile/get-person-details/get-person-details.hook';
import { useThemeStore } from '@/store/theme';
import { useMemo } from 'react';
import QRCode from 'react-native-qrcode-svg';

const IDCardScreen = () => {
  const screenTestId = 'id-card-screen';
  const { data, isPending } = useGetPersonDetails();
  const { getThemeColor } = useThemeStore();

  const vcard = useMemo(() => {
    const lines = ['BEGIN:VCARD', 'VERSION:3.0'];
    if (data?.primaryInfo?.name) {
      lines.push(`N:;${data?.primaryInfo.name};;;`);
      lines.push(`FN:${data?.primaryInfo.name}`);
    }
    if (data?.primaryInfo?.birthDateGregorian) {
      const cleanDate = data?.primaryInfo.birthDateGregorian.replace(/-/g, '');
      lines.push(`BDAY:${cleanDate}`);
    }
    if (data?.primaryInfo?.gender) {
      lines.push(`GENDER:${data?.primaryInfo?.gender.substring(0, 1)}`);
    }
    const notes = [];
    if (data?.jobInfo?.jobTitle) {
      lines.push(`TITLE:${data?.jobInfo?.jobTitle}`);
      notes.push(data?.jobInfo?.jobTitle);
    }
    if (data?.jobInfo?.management) {
      lines.push(`ORG:${data?.jobInfo?.management}`);
      notes.push(data?.jobInfo?.management);
    }
    if (notes.length) {
      lines.push(`NOTE;CHARSET=UTF-8:${notes.join('\\n')}`);
    }
    if (data?.contactInfo?.mobileNumber) {
      lines.push(`TEL;TYPE=CELL:${data?.contactInfo?.mobileNumber}`);
    }
    if (data?.contactInfo?.emailAddress) {
      lines.push(`EMAIL;TYPE=WORK:${data?.contactInfo.emailAddress}`);
    }
    if (data?.contactInfo?.address) {
      lines.push(`ADR;TYPE=WORK:;;${data?.contactInfo.address};;;;`);
    }
    if (data?.coordinates?.latitude && data?.coordinates?.longitude) {
      lines.push(
        `GEO:${data?.coordinates.latitude};${data?.coordinates.longitude}`,
      );
    }
    lines.push('END:VCARD');
    return lines.join('\n');
  }, [data]);

  return (
    <Page
      testId={screenTestId}
      isLoading={isPending}
      pageHeaderProps={{
        titleProps: { text: 'بطاقتي الرقمية' },
        isTitleCentered: true,
      }}>
      <Spacer space={50} />
      <QRCode
        size={300}
        color={getThemeColor('borderBlack')}
        backgroundColor={getThemeColor('borderWhite')}
        value={vcard}
        // logoMargin={5}
        // logo={require('@/assets/images/HRSD-Logo.png')}
      />
    </Page>
  );
};

export default IDCardScreen;
