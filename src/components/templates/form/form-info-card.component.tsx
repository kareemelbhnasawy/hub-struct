import { View } from 'react-native';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

const FormInfoCard = ({
  labelProps,
  value,
}: {
  labelProps: Omit<ParagraphProps, 'testId'>;
  value: string;
}) => {
  return (
    <>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Paragraph testId={''} {...labelProps} />
        <Headline testId={''} text={value} isTranslated={false} />
      </View>
      <Spacer space={0} isDivider />
    </>
  );
};

export default FormInfoCard;
