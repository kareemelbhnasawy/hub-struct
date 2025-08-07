import { iconDictionary } from '../../../assets/icons/icon-dictionary.constant';

export type IconName = keyof typeof iconDictionary;

interface IconProps extends SVGElement {
  name: IconName;
  primaryColor: string;
  secondaryColor?: string;
  stroke?: string;
  size?: number;
  outline?: boolean;
}

export default IconProps;
