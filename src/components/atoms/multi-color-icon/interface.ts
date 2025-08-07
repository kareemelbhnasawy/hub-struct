import { iconDictionary } from '@/assets';

export type MultiColorIconName = keyof typeof iconDictionary;

interface MultiColorIconProps extends SVGElement {
  name: MultiColorIconName;
  primaryColor: string;
  secondaryColor?: string;
  stroke?: string;
  size?: number;
  outline?: boolean;
}

export default MultiColorIconProps;
