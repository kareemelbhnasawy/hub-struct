import { iconDictionary } from '../../../assets/icons/icon-dictionary.constant';
import { MultiColorIconName } from './interface';

export const getMultiColorIconFnByName = (name: MultiColorIconName) => {
  const iconFn = iconDictionary[name];
  return iconFn;
};
