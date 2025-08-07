import { iconDictionary } from '../../../assets/icons/icon-dictionary.constant';
import { IconName } from './icon.props';

export const getIconFnByName = (name: IconName) => {
  const iconFn = iconDictionary[name];
  return iconFn;
};
