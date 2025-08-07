import { iconDictionary } from '@/assets';
import { MultiColorIconName } from './interface';

export const getMultiColorIconFnByName = (name: MultiColorIconName) => {
  const iconFn = iconDictionary[name];
  return iconFn;
};
