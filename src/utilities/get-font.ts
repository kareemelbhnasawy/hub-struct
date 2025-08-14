import { fontWeights } from '@/theme/theme-fonts';
import { isAndroid } from './is-os';

const getFont = (font: fontWeights) => {
  const isAndroidOS = isAndroid();
  switch (font) {
    case fontWeights.Thin:
      return isAndroidOS ? 'hrsdgov_thin' : 'HRSDGov-Thin';
    case fontWeights.Light:
      return isAndroidOS ? 'hrsdgov_light' : 'HRSDGov-Light';
    case fontWeights.Regular:
      return isAndroidOS ? 'hrsdgov_regular' : 'HRSDGov-Regular';
    case fontWeights.Medium:
      return isAndroidOS ? 'hrsdgov_medium' : 'HRSDGov-Medium';
    case fontWeights.Semibold:
      return isAndroidOS ? 'hrsdgov_semibold' : 'HRSDGov-Semibold';
    case fontWeights.Bold:
      return isAndroidOS ? 'hrsdgov_bold' : 'HRSDGov-Bold';
    case fontWeights.Title:
      return isAndroidOS ? 'hrsdgov_title' : 'HRSDGov-Title';
  }
};

export default getFont;
