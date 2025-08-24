import { BaseImage } from '@/components/atoms';
import { scale } from 'react-native-size-matters';
import getRelativeSize from './utils';
import HRSDLogoProps from './interface';

const HRSDLogo = ({ testId, size }: HRSDLogoProps) => {
  const relativeSize = getRelativeSize(size);
  return (
    <BaseImage
      testId={testId}
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      image={require('@/assets/images/HRSD-Logo.png')}
      width={scale(relativeSize.width)}
      height={scale(relativeSize.height)}
    />
  );
};

export default HRSDLogo;
