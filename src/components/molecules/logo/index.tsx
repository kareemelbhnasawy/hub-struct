import { BaseImage } from '@/components/atoms';
import { scale } from 'react-native-size-matters';
import getRelativeSize from './utils';
import LogoProps from './interface';

const Logo = ({ testId, size }: LogoProps) => {
  const relativeSize = getRelativeSize(size);
  return (
    <BaseImage
      testId={`${testId}-HRSD-Logo`}
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      image={require('@/assets/images/HRSD-Logo.png')}
      width={scale(relativeSize.width)}
      height={scale(relativeSize.height)}
    />
  );
};

export default Logo;
