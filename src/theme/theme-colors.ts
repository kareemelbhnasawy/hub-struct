import { COLORS } from '@/style';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { getString } from '../utilities/storage';

export const themeColors = {
  // Basic Backgrounds
  backgroundWhite: {
    light: COLORS.white,
    dark: COLORS['neutral-900'],
  },
  backgroundBody: {
    light: COLORS['neutral-25'],
    dark: COLORS['neutral-900'],
  },
  backgroundMenu: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  backgroundCard: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },

  // Surface Colors
  surfaceOncolor: {
    light: COLORS.white,
    dark: COLORS.white,
  },

  // Basic Colors
  backgroundBlack: {
    light: COLORS.black,
    dark: COLORS.white,
  },

  // Neutral Backgrounds
  backgroundNeutral800: {
    light: COLORS['neutral-800'],
    dark: COLORS['neutral-100'],
  },
  backgroundNeutral400: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },
  backgroundNeutral200: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-600'],
  },
  backgroundNeutral100: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-800'],
  },
  backgroundNeutral50: {
    light: COLORS['neutral-50'],
    dark: COLORS['neutral-900'],
  },
  backgroundNeutral25: {
    light: COLORS['neutral-25'],
    dark: COLORS['neutral-950'],
  },

  // Status Backgrounds
  backgroundWarning: {
    light: COLORS['warning-600'],
    dark: COLORS['warning-600'],
  },
  backgroundWarning50: {
    light: COLORS['warning-25'],
    dark: COLORS['warning-600'],
  },
  backgroundError: {
    light: COLORS['error-600'],
    dark: COLORS['error-600'],
  },
  backgroundSuccess: {
    light: COLORS['success-900'],
    dark: COLORS['secondary-yellow-600'],
  },
  backgroundInfo: {
    light: COLORS['info-600'],
    dark: COLORS['info-600'],
  },

  // Text Colors
  textDefault: {
    light: COLORS.black,
    dark: COLORS.white,
  },
  textTitle: {
    light: COLORS['primary-600'],
    dark: COLORS.white,
  },
  textPrimary: {
    light: COLORS['primary-600'],
    dark: COLORS['secondary-yellow-400'],
  },
  textSecondary: {
    light: COLORS['secondary-green-600'],
    dark: COLORS['secondary-yellow-400'],
  },
  textDisplay: {
    light: COLORS['neutral-800'],
    dark: COLORS['neutral-25'],
  },
  textSuccess: {
    light: COLORS['success-700'],
    dark: COLORS['success-400'],
  },
  textInfo: {
    light: COLORS['info-700'],
    dark: COLORS['info-400'],
  },
  textWarning: {
    light: COLORS['warning-700'],
    dark: COLORS['warning-400'],
  },
  textError: {
    light: COLORS['error-700'],
    dark: COLORS['error-400'],
  },

  // Border Colors
  borderPrimary: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['secondary-yellow-300'],
  },
  borderNeutralPrimary: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },
  borderNeutralSecondary: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-700'],
  },
  borderSuccess: {
    light: COLORS['success-700'],
    dark: COLORS['success-500'],
  },
  borderError: {
    light: COLORS['error-700'],
    dark: COLORS['error-700'],
  },
  borderInfo: {
    light: COLORS['info-700'],
    dark: COLORS['info-700'],
  },
  borderWarning: {
    light: COLORS['warning-700'],
    dark: COLORS['warning-700'],
  },
  borderCircle: {
    light: COLORS['neutral-200'],
    dark: COLORS.white,
  },
  borderDivider: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-800'],
  },
  borderSuccessLight: {
    light: COLORS['success-200'],
    dark: COLORS['success-200'],
  },
  borderInfoLight: {
    light: COLORS['info-200'],
    dark: COLORS['info-200'],
  },
  borderWarningLight: {
    light: COLORS['warning-200'],
    dark: COLORS['warning-200'],
  },
  borderErrorLight: {
    light: COLORS['error-200'],
    dark: COLORS['error-200'],
  },
  borderDisabled: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },

  // Button Primary States
  buttonPrimaryDefaultBackground: {
    light: COLORS['primary-600'],
    dark: COLORS['primary-600'],
  },
  buttonPrimaryDefaultLabel: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonPrimaryDefaultIcon: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonPrimaryHoverBackground: {
    light: COLORS['primary-500'],
    dark: COLORS['primary-500'],
  },
  buttonPrimaryFocusedBackground: {
    light: COLORS['primary-600'],
    dark: COLORS['primary-600'],
  },
  buttonPrimaryPressedBackground: {
    light: COLORS['primary-800'],
    dark: COLORS['primary-800'],
  },
  buttonPrimaryDisabledBackground: {
    light: COLORS['secondary-dark-gray-300'],
    dark: COLORS['secondary-dark-gray-300'],
  },
  buttonPrimaryDisabledLabel: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonPrimaryDisabledIcon: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonPrimaryLoadingBackground: {
    light: COLORS['primary-300'],
    dark: COLORS['primary-300'],
  },
  buttonPrimaryErrorBackground: {
    light: COLORS['error-600'],
    dark: COLORS['error-600'],
  },

  // Button Secondary States
  buttonSecondaryDefaultBackground: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  buttonSecondaryDefaultLabel: {
    light: COLORS['neutral-900'],
    dark: COLORS.white,
  },
  buttonSecondaryDefaultIcon: {
    light: COLORS['neutral-900'],
    dark: COLORS.white,
  },
  buttonSecondaryDefaultBorder: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },
  buttonSecondaryHoverBackground: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-700'],
  },
  buttonSecondaryHoverLabel: {
    light: COLORS['neutral-900'],
    dark: COLORS.white,
  },
  buttonSecondaryHoverIcon: {
    light: COLORS['neutral-900'],
    dark: COLORS.white,
  },
  buttonSecondaryFocusedBackground: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  buttonSecondaryFocusedLabel: {
    light: COLORS['neutral-900'],
    dark: COLORS.white,
  },
  buttonSecondaryFocusedIcon: {
    light: COLORS['neutral-900'],
    dark: COLORS.white,
  },
  buttonSecondaryPressedBackground: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-600'],
  },
  buttonSecondaryPressedLabel: {
    light: COLORS['neutral-900'],
    dark: COLORS.white,
  },
  buttonSecondaryPressedIcon: {
    light: COLORS['neutral-900'],
    dark: COLORS.white,
  },
  buttonSecondaryErrorIcon: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonSecondaryDisabledLabel: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },
  buttonSecondaryDisabledIcon: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },
  buttonSecondaryDisabledBorder: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },
  buttonSecondaryLoadingBackground: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  buttonSecondaryLoadingLabel: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },
  buttonSecondaryLoadingIcon: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },
  buttonSecondaryLoadingBorder: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },
  buttonSecondaryErrorBackground: {
    light: COLORS['error-600'],
    dark: COLORS.white,
  },
  buttonSecondaryErrorLabel: {
    light: COLORS.white,
    dark: COLORS.white,
  },

  // Button Link States
  buttonLinkDefaultLabel: {
    light: COLORS['primary-600'],
    dark: COLORS['secondary-yellow-400'],
  },
  buttonLinkDefaultIcon: {
    light: COLORS['primary-600'],
    dark: COLORS['secondary-yellow-400'],
  },
  buttonLinkHoverLabel: {
    light: COLORS['primary-500'],
    dark: COLORS['secondary-yellow-300'],
  },
  buttonLinkHoverIcon: {
    light: COLORS['primary-500'],
    dark: COLORS['secondary-yellow-300'],
  },
  buttonLinkFocusedLabel: {
    light: COLORS['primary-400'],
    dark: COLORS['secondary-yellow-200'],
  },
  buttonLinkFocusedIcon: {
    light: COLORS['primary-400'],
    dark: COLORS['secondary-yellow-200'],
  },
  buttonLinkPressedLabel: {
    light: COLORS['primary-800'],
    dark: COLORS['secondary-yellow-500'],
  },
  buttonLinkPressedIcon: {
    light: COLORS['primary-800'],
    dark: COLORS['secondary-yellow-500'],
  },
  buttonLinkDisabledLabel: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },
  buttonLinkDisabledIcon: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },

  // Icon Colors
  iconOncolor: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  iconDefault: {
    light: COLORS.black,
    dark: COLORS.white,
  },
  iconDefault500: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-200'],
  },
  iconDefault400: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },
  iconPrimary: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['secondary-yellow-400'],
  },
  iconSecondaryYellow: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['secondary-yellow-400'],
  },
  iconSecondaryYellow400: {
    light: COLORS['secondary-yellow-400'],
    dark: COLORS['secondary-yellow-400'],
  },
  iconSecondaryGreen: {
    light: COLORS['secondary-green-600'],
    dark: COLORS['secondary-green-400'],
  },
  iconTertiary: {
    light: COLORS['primary-600'],
    dark: COLORS['primary-600'],
  },
  iconNeutral: {
    light: COLORS['neutral-700'],
    dark: COLORS['neutral-100'],
  },
  iconNeutralLight: {
    light: COLORS['neutral-25'],
    dark: COLORS['neutral-950'],
  },
  iconNeutralRing: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-900'],
  },
  backgroundWarningLight: {
    light: COLORS['warning-50'],
    dark: COLORS['alpha-red-10'],
  },
  backgroundErrorLight: {
    light: COLORS['error-50'],
    dark: COLORS['alpha-red-10'],
  },
  backgroundBrandLight: {
    light: COLORS['secondary-yellow-25'],
    dark: COLORS['alpha-600-primary-10'],
  },
  backgroundInfoLight: {
    light: COLORS['info-50'],
    dark: COLORS['info-50'],
  },
  backgroundSuccessLight: {
    light: COLORS['success-50'],
    dark: COLORS['alpha-green-10'],
  },
  unselectedTabIcon: {
    light: COLORS['neutral-700'],
    dark: COLORS['neutral-100'],
  },
  // Tag Colors
  tagBackground: {
    light: COLORS['primary-50'],
    dark: COLORS['neutral-700'],
  },
  tagLabel: {
    light: COLORS['primary-600'],
    dark: COLORS.white,
  },
  tagIcon: {
    light: COLORS['primary-500'],
    dark: COLORS.white,
  },
  tagBorder: {
    light: COLORS['primary-400'],
    dark: COLORS.white,
  },

  // Toggle Colors
  toggleDefaultBackground: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-700'],
  },
  toggleDefault: {
    light: COLORS['primary-600'],
    dark: COLORS['primary-700'],
  },
  toggleDefaultKnob: {
    light: COLORS.white,
    dark: COLORS['neutral-400'],
  },
  toggleSelectedBackground: {
    light: COLORS['primary-600'],
    dark: COLORS['primary-600'],
  },
  toggleSelectedKnob: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  toggleDisabledBackground: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-800'],
  },
  toggleDisabledKnob: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-600'],
  },
  toggleDusable: {
    light: COLORS['neutral-100'],
    dark: COLORS.white,
  },
  toggleDusable2: {
    light: COLORS['neutral-100'],
    dark: COLORS.white,
  },
  toggleDusable3: {
    light: COLORS['neutral-100'],
    dark: COLORS.white,
  },

  // Badge Colors
  badgeDefaultBackground: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-700'],
  },
  badgeDefaultText: {
    light: COLORS['neutral-700'],
    dark: COLORS.white,
  },
  badgeSuccessBackground: {
    light: COLORS['success-50'],
    dark: COLORS['success-900'],
  },
  badgeSuccessText: {
    light: COLORS['success-700'],
    dark: COLORS['success-300'],
  },
  badgeInfoBackground: {
    light: COLORS['info-50'],
    dark: COLORS['info-900'],
  },
  badgeInfoText: {
    light: COLORS['info-700'],
    dark: COLORS['info-300'],
  },
  badgeWarningBackground: {
    light: COLORS['warning-50'],
    dark: COLORS['warning-900'],
  },
  badgeWarningText: {
    light: COLORS['warning-700'],
    dark: COLORS['warning-300'],
  },
  badgeErrorBackground: {
    light: COLORS['error-50'],
    dark: COLORS['error-900'],
  },
  badgeErrorText: {
    light: COLORS['error-600'],
    dark: COLORS['error-300'],
  },
  badgeBorderBrand: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['secondary-yellow-300'],
  },
  badgeBorderSuccess: {
    light: COLORS['success-600'],
    dark: COLORS['success-400'],
  },
  badgeBorderInfo: {
    light: COLORS['info-600'],
    dark: COLORS['info-400'],
  },
  badgeBorderWarning: {
    light: COLORS['warning-600'],
    dark: COLORS['warning-400'],
  },
  badgeBorderError: {
    light: COLORS['error-600'],
    dark: COLORS['error-400'],
  },

  // Alpha Colors
  alphaWhite10: {
    light: COLORS['alpha-white-10'],
    dark: COLORS['alpha-white-10'],
  },
  alphaWhite20: {
    light: COLORS['alpha-white-20'],
    dark: COLORS['alpha-white-20'],
  },
  alphaWhite30: {
    light: COLORS['alpha-white-30'],
    dark: COLORS['alpha-white-30'],
  },
  alphaWhite40: {
    light: COLORS['alpha-white-40'],
    dark: COLORS['alpha-white-40'],
  },
  alphaWhite50: {
    light: COLORS['alpha-white-50'],
    dark: COLORS['alpha-white-50'],
  },
  alphaWhite60: {
    light: COLORS['alpha-white-60'],
    dark: COLORS['alpha-white-60'],
  },
  alphaWhite70: {
    light: COLORS['alpha-white-70'],
    dark: COLORS['alpha-white-70'],
  },
  alphaWhite80: {
    light: COLORS['alpha-white-80'],
    dark: COLORS['alpha-white-80'],
  },
  alphaWhite90: {
    light: COLORS['alpha-white-90'],
    dark: COLORS['alpha-white-90'],
  },

  // Alpha Black Colors
  alphaBlack10: {
    light: COLORS['alpha-black-10'],
    dark: COLORS['alpha-black-10'],
  },
  alphaBlack20: {
    light: COLORS['alpha-black-20'],
    dark: COLORS['alpha-black-20'],
  },
  alphaBlack30: {
    light: COLORS['alpha-black-30'],
    dark: COLORS['alpha-black-30'],
  },
  alphaBlack40: {
    light: COLORS['alpha-black-40'],
    dark: COLORS['alpha-black-40'],
  },
  alphaBlack50: {
    light: COLORS['alpha-black-50'],
    dark: COLORS['alpha-black-50'],
  },
  alphaBlack60: {
    light: COLORS['alpha-black-60'],
    dark: COLORS['alpha-black-60'],
  },
  alphaBlack70: {
    light: COLORS['alpha-black-70'],
    dark: COLORS['alpha-black-70'],
  },
  alphaBlack80: {
    light: COLORS['alpha-black-80'],
    dark: COLORS['alpha-black-80'],
  },
  alphaBlack90: {
    light: COLORS['alpha-black-90'],
    dark: COLORS['alpha-black-90'],
  },

  // Status Alpha Colors
  alphaPrimary10: {
    light: COLORS['alpha-600-primary-10'],
    dark: COLORS['alpha-600-primary-10'],
  },
  alphaPrimary20: {
    light: COLORS['alpha-600-primary-20'],
    dark: COLORS['alpha-600-primary-20'],
  },
  alphaWarning10: {
    light: COLORS['alpha-yellow-10'],
    dark: COLORS['alpha-yellow-10'],
  },
  alphaWarning20: {
    light: COLORS['alpha-yellow-20'],
    dark: COLORS['alpha-yellow-20'],
  },
  alphaError10: {
    light: COLORS['alpha-red-10'],
    dark: COLORS['alpha-red-10'],
  },
  alphaError20: {
    light: COLORS['alpha-red-20'],
    dark: COLORS['alpha-red-20'],
  },
  alphaInfo10: {
    light: COLORS['alpha-blue-10'],
    dark: COLORS['alpha-blue-10'],
  },
  alphaInfo20: {
    light: COLORS['alpha-blue-20'],
    dark: COLORS['alpha-blue-20'],
  },
  alphaSuccess10: {
    light: COLORS['alpha-green-10'],
    dark: COLORS['alpha-green-10'],
  },
  alphaSuccess20: {
    light: COLORS['alpha-green-20'],
    dark: COLORS['alpha-green-20'],
  },

  // Tertiary Button States
  buttonTertiaryDefaultLabel: {
    light: COLORS['primary-600'],
    dark: COLORS.white,
  },
  buttonTertiaryDefaultIcon: {
    light: COLORS['primary-600'],
    dark: COLORS.white,
  },
  buttonTertiaryLoadingLabel: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },
  buttonTertiaryLoadingIcon: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },
  buttonTertiaryDisabledLabel: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },
  buttonTertiaryDisabledIcon: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },
  buttonTertiaryErrorLabel: {
    light: COLORS['error-600'],
    dark: COLORS.white,
  },
  buttonTertiaryErrorIcon: {
    light: COLORS['error-600'],
    dark: COLORS.white,
  },

  // Stepper Colors
  stepperButtonCompleted: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['success-600'],
  },
  stepperButtonCompletedHovered: {
    light: COLORS['secondary-yellow-500'],
    dark: COLORS['secondary-yellow-500'],
  },
  stepperButtonCurrent: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['success-600'],
  },
  stepperButtonCurrentHovered: {
    light: COLORS['secondary-yellow-500'],
    dark: COLORS['secondary-yellow-500'],
  },
  stepperButtonUpcoming: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-600'],
  },
  stepperButtonUpcomingHovered: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-600'],
  },
  stepperButtonBackground: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  stepperTextPrimary: {
    light: COLORS['neutral-800'],
    dark: COLORS.black,
  },
  stepperTextSecondary: {
    light: COLORS['neutral-700'],
    dark: COLORS['neutral-700'],
  },
  stepperTextTertiary: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-200'],
  },

  // Card Colors - Vacation
  cardVacationUserName: {
    light: COLORS['neutral-500'],
    dark: COLORS.white,
  },
  cardVacationLeaveType: {
    light: COLORS.black,
    dark: COLORS['neutral-300'],
  },
  cardVacationDate: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-400'],
  },
  cardVacationLeadingIcon: {
    light: COLORS['neutral-500'],
    dark: COLORS.white,
  },
  cardVacationBorder: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-700'],
  },
  cardVacationDefaultBg: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  cardVacationHoverBg: {
    light: COLORS['neutral-50'],
    dark: COLORS['neutral-700'],
  },
  cardVacationPressedBg: {
    light: COLORS['neutral-50'],
    dark: COLORS['neutral-600'],
  },

  // Card Colors - Meeting
  cardMeetingTitle: {
    light: COLORS['primary-600'],
    dark: COLORS.white,
  },
  cardMeetingDescription: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-300'],
  },
  cardMeetingFrom: {
    light: COLORS['neutral-700'],
    dark: COLORS['neutral-400'],
  },
  cardMeetingTo: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-400'],
  },
  cardMeetingTime: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-400'],
  },
  cardMeetingBorder: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-700'],
  },
  cardMeetingDefaultBg: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  cardMeetingHoverBg: {
    light: COLORS['neutral-50'],
    dark: COLORS['neutral-700'],
  },
  cardMeetingPressedBg: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-600'],
  },

  // Card Colors - Task
  cardTaskTitle: {
    light: COLORS.black,
    dark: COLORS.white,
  },
  cardTaskSubtitle: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-300'],
  },
  cardTaskIconTrailing: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-700'],
  },
  cardTaskIconLeading: {
    light: COLORS['neutral-700'],
    dark: COLORS['neutral-700'],
  },
  cardTaskBorder: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-700'],
  },
  cardTaskDefaultBg: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  cardTaskBgCard: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  cardTaskBgIcon: {
    light: COLORS['secondary-green-100'],
    dark: COLORS['neutral-800'],
  },
  cardTaskHoverBg: {
    light: COLORS['neutral-50'],
    dark: COLORS['neutral-700'],
  },
  cardTaskPressedBg: {
    light: COLORS['neutral-50'],
    dark: COLORS['neutral-600'],
  },

  // Card Colors - Order
  cardOrderTitle: {
    light: COLORS.black,
    dark: COLORS.white,
  },
  cardOrderSubtitle: {
    light: COLORS['neutral-600'],
    dark: COLORS['neutral-300'],
  },
  cardOrderSubtitle2: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-300'],
  },
  cardOrderIconTrailing: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-700'],
  },
  cardOrderIconLeading: {
    light: COLORS['neutral-600'],
    dark: COLORS['neutral-700'],
  },
  cardOrderMetadata: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-400'],
  },
  cardOrderBorder: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-700'],
  },
  cardOrderDefaultBg: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  cardOrderHoverBg: {
    light: COLORS['neutral-50'],
    dark: COLORS['neutral-700'],
  },
  cardOrderPressedBg: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-600'],
  },

  // Card Colors - Team
  cardTeamTitle: {
    light: COLORS['neutral-500'],
    dark: COLORS.white,
  },
  cardTeamDescription: {
    light: COLORS.black,
    dark: COLORS.white,
  },
  cardTeamDate: {
    light: COLORS['neutral-600'],
    dark: COLORS.white,
  },
  cardTeamIconLeading: {
    light: COLORS.black,
    dark: COLORS['neutral-700'],
  },
  cardTeamIconBackground: {
    light: COLORS['secondary-orange-100'],
    dark: COLORS['neutral-700'],
  },
  cardTeamSubtitle: {
    light: COLORS['neutral-600'],
    dark: COLORS['neutral-300'],
  },
  cardTeamBorder: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-700'],
  },
  cardTeamDefaultBg: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  cardTeamHoverBg: {
    light: COLORS['neutral-50'],
    dark: COLORS['neutral-700'],
  },
  cardTeamPressedBg: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-600'],
  },
  cardTeamPressedBg3: {
    light: COLORS['warning-50'],
    dark: COLORS['neutral-600'],
  },
  cardTeamHoverBorder: {
    light: COLORS['secondary-yellow-300'],
    dark: COLORS['neutral-600'],
  },

  cardTeamHoverBg2: {
    light: COLORS['neutral-50'],
    dark: COLORS['neutral-600'],
  },
  cardTeamPressedBg2: {
    light: COLORS['neutral-50'],
    dark: COLORS['neutral-600'],
  },
  cardTeamCount: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-400'],
  },

  // Notification Card
  notificationBody: {
    light: COLORS.black,
    dark: COLORS['neutral-300'],
  },
  notificationBorder: {
    light: COLORS['secondary-green-200'],
    dark: COLORS['neutral-700'],
  },
  notificationBg: {
    light: COLORS['secondary-green-50'],
    dark: COLORS['neutral-800'],
  },

  // Progress Bar
  progressBarNeutral: {
    light: COLORS['neutral-700'],
    dark: COLORS['neutral-700'],
  },
  progressBarIndicator: {
    light: COLORS['primary-600'],
    dark: COLORS['primary-600'],
  },
  progressBarIndicatorSuccess: {
    light: COLORS['success-600'],
    dark: COLORS['success-600'],
  },
  progressBarIndicatorWarning: {
    light: COLORS['warning-600'],
    dark: COLORS['warning-600'],
  },
  progressBarIndicatorError: {
    light: COLORS['error-600'],
    dark: COLORS['error-600'],
  },

  // Glass Button States
  buttonGlassDefaultBackground: {
    light: COLORS['alpha-white-5'],
    dark: COLORS['alpha-white-20'],
  },
  buttonGlassDefaultLabel: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonGlassDefaultIcon: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonGlassHoverBackground: {
    light: COLORS['alpha-white-10'],
    dark: COLORS['alpha-white-30'],
  },
  buttonGlassHoverLabel: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonGlassHoverIcon: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonGlassPressedBackground: {
    light: COLORS['alpha-white-5'],
    dark: COLORS['alpha-white-10'],
  },
  buttonGlassPressedLabel: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonGlassPressedIcon: {
    light: COLORS.white,
    dark: COLORS.white,
  },

  // Icon Border Utilities
  iconBorderTertiary500: {
    light: COLORS['primary-500'],
    dark: COLORS['primary-500'],
  },
  iconBorderTertiary800: {
    light: COLORS['primary-800'],
    dark: COLORS['primary-800'],
  },
  iconBorderTertiary300: {
    light: COLORS['primary-300'],
    dark: COLORS['primary-300'],
  },
  iconBorderDefault: {
    light: COLORS['primary-700'],
    dark: COLORS['primary-700'],
  },
  iconBorderSelected: {
    light: COLORS['primary-500'],
    dark: COLORS['primary-500'],
  },
  iconSelected: {
    light: COLORS['secondary-green-500'],
    dark: COLORS['secondary-green-500'],
  },
  backgroundCircle: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  borderSecondaryYellow: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['secondary-yellow-300'],
  },
  borderSecondaryGreen: {
    light: COLORS['secondary-green-600'],
    dark: COLORS['secondary-green-400'],
  },
  borderSecondaryTeal: {
    light: COLORS['secondary-teal-600'],
    dark: COLORS['secondary-teal-400'],
  },
  borderPrimaryIcon: {
    light: COLORS['primary-600'],
    dark: COLORS['primary-600'],
  },

  // Icon Background Utilities
  iconBackgroundSelected: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-200'],
  },
  iconBackgroundDefault: {
    light: COLORS['primary-600'],
    dark: COLORS['primary-600'],
  },
  iconBackgroundBrand: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['secondary-yellow-600'],
  },
  iconBackgroundInfo: {
    light: COLORS['info-600'],
    dark: COLORS['info-600'],
  },
  iconBackgroundSuccess: {
    light: COLORS['success-600'],
    dark: COLORS['success-600'],
  },
  iconBackgroundWarning: {
    light: COLORS['warning-600'],
    dark: COLORS['warning-600'],
  },
  iconBackgroundError: {
    light: COLORS['error-600'],
    dark: COLORS['error-600'],
  },

  // Icon Additional Colors
  iconSecondaryLight: {
    light: COLORS['secondary-green-25'],
    dark: COLORS['secondary-green-900'],
  },
  iconTertiaryLight: {
    light: COLORS['primary-25'],
    dark: COLORS['primary-25'],
  },
  iconSuccessLight: {
    light: COLORS['success-25'],
    dark: COLORS['success-25'],
  },
  iconSuccessRing: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['alpha-green-10'],
  },
  iconInfo: {
    light: COLORS['info-700'],
    dark: COLORS['info-400'],
  },
  iconInfoLight: {
    light: COLORS['info-50'],
    dark: COLORS['info-50'],
  },
  iconInfoRing: {
    light: COLORS['info-100'],
    dark: COLORS['alpha-blue-10'],
  },
  iconWarning: {
    light: COLORS['warning-700'],
    dark: COLORS['warning-400'],
  },
  iconWarningLight: {
    light: COLORS['warning-25'],
    dark: COLORS['warning-25'],
  },
  iconWarningRing: {
    light: COLORS['warning-100'],
    dark: COLORS['alpha-yellow-10'],
  },
  iconError: {
    light: COLORS['error-700'],
    dark: COLORS['error-400'],
  },
  iconErrorLight: {
    light: COLORS['error-25'],
    dark: COLORS['error-25'],
  },
  iconErrorRing: {
    light: COLORS['error-100'],
    dark: COLORS['alpha-red-10'],
  },

  // Link Colors
  linkPrimaryDefaultLabel: {
    light: COLORS['primary-600'],
    dark: COLORS['secondary-yellow-400'],
  },
  linkPrimaryDefaultIcon: {
    light: COLORS['primary-600'],
    dark: COLORS['secondary-yellow-400'],
  },
  linkPrimaryHoverLabel: {
    light: COLORS['primary-500'],
    dark: COLORS['secondary-yellow-300'],
  },
  linkPrimaryHoverIcon: {
    light: COLORS['primary-500'],
    dark: COLORS['secondary-yellow-300'],
  },
  linkPrimaryFocusedLabel: {
    light: COLORS['primary-400'],
    dark: COLORS['secondary-yellow-200'],
  },
  linkPrimaryFocusedIcon: {
    light: COLORS['primary-400'],
    dark: COLORS['secondary-yellow-200'],
  },
  linkPrimaryPressedLabel: {
    light: COLORS['primary-800'],
    dark: COLORS['secondary-yellow-500'],
  },
  linkPrimaryPressedIcon: {
    light: COLORS['primary-800'],
    dark: COLORS['secondary-yellow-500'],
  },
  linkPrimaryDisabledLabel: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },
  linkPrimaryDisabledIcon: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },

  // Tab Colors
  tabDefaultText: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-400'],
  },
  tabDefaultIcon: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-400'],
  },
  tabSelectedText: {
    light: COLORS['primary-600'],
    dark: COLORS.white,
  },
  tabSelectedIcon: {
    light: COLORS['neutral-600'],
    dark: COLORS.white,
  },
  tabSelectedUnderLine: {
    light: COLORS['primary-600'],
    dark: COLORS.white,
  },
  tabSelectedBorder: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['secondary-yellow-600'],
  },
  tabDisabledText: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-600'],
  },
  tabDisabledIcon: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-600'],
  },

  // Additional Background Colors
  backgroundPrimary: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['secondary-yellow-600'],
  },
  backgroundPrimary400: {
    light: COLORS['secondary-yellow-400'],
    dark: COLORS['secondary-yellow-400'],
  },
  backgroundPrimary200: {
    light: COLORS['secondary-yellow-200'],
    dark: COLORS['neutral-700'],
  },
  backgroundPrimary50: {
    light: COLORS['secondary-yellow-25'],
    dark: COLORS['neutral-800'], // Changed from alpha-600
  },
  backgroundPrimary25: {
    light: COLORS['primary-25'], // Changed from primary-golden-25
    dark: COLORS['primary-950'], // Changed from primary-golden-950
  },
  backgroundSecondary: {
    light: COLORS['secondary-green-25'],
    dark: COLORS['neutral-800'],
  },
  backgroundNavHeader: {
    light: COLORS['secondary-yellow-800'],
    dark: COLORS['secondary-yellow-800'],
  },
  backgroundNotificationWhite: {
    light: COLORS.white,
    dark: COLORS['neutral-900'],
  },
  backgroundSaFlag: {
    light: COLORS['success-900'],
    dark: COLORS['secondary-yellow-600'],
  },
  backgroundSaFlag50: {
    light: COLORS['success-25'],
    dark: COLORS['neutral-800'],
  },
  backgroundSaFlag25: {
    light: COLORS['success-25'], // Changed from green-25
    dark: COLORS['neutral-900'],
  },

  // Primary Text Colors
  textOncolorPrimary: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  textOncolorSecondary: {
    light: COLORS['alpha-white-80'],
    dark: COLORS['alpha-white-80'],
  },
  textOncolorTertiary: {
    light: COLORS['alpha-white-70'],
    dark: COLORS['alpha-white-70'],
  },

  // Card Meeting Tag Colors
  cardMeetingTagCard: {
    light: COLORS.white,
    dark: COLORS['neutral-800'],
  },
  cardMeetingTagIcon: {
    light: COLORS['secondary-green-600'],
    dark: COLORS['secondary-yellow-400'],
  },

  // Additional Text Colors
  textPrimarySaFlag: {
    light: COLORS['primary-600'],
    dark: COLORS['secondary-yellow-100'],
  },
  textPrimaryParagraph700: {
    light: COLORS['neutral-700'],
    dark: COLORS['neutral-100'],
  },
  textPrimaryParagraph600: {
    light: COLORS['neutral-600'],
    dark: COLORS.white,
  },
  textSecondaryParagraph: {
    light: COLORS['neutral-500'],
    dark: COLORS['neutral-200'],
  },
  textTertiary: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS.white,
  },
  textToggleTitle: {
    light: COLORS['neutral-700'],
    dark: COLORS.white,
  },
  textToggleSubtitle: {
    light: COLORS['neutral-500'],
    dark: COLORS.white,
  },

  // Additional Border Colors
  borderWhite: {
    light: COLORS.white,
    dark: COLORS['neutral-900'],
  },
  borderWhite40: {
    light: COLORS['alpha-white-40'],
    dark: COLORS['alpha-white-40'],
  },
  borderBlack: {
    light: COLORS.black,
    dark: COLORS.white,
  },
  borderPrimary4: {
    light: COLORS['primary-500'],
    dark: COLORS.white,
  },
  borderPrimaryLight: {
    light: COLORS['secondary-yellow-200'],
    dark: COLORS['success-200'],
  },
  borderTertiary300: {
    light: COLORS['primary-300'],
    dark: COLORS.white,
  },
  borderNeutralTertiary: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-800'],
  },
  borderBackgroundWhite: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-800'],
  },
  borderBackgroundNeutral: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-600'],
  },
  borderTransparent10: {
    light: COLORS['alpha-white-10'],
    dark: COLORS['alpha-white-10'],
  },
  borderOncolorTransparent30: {
    light: COLORS['alpha-white-30'],
    dark: COLORS['alpha-white-30'],
  },

  // Status Background Colors
  backgroundWarning25: {
    light: COLORS['warning-25'],
    dark: COLORS['warning-25'],
  },
  backgroundError25: {
    light: COLORS['error-25'],
    dark: COLORS['alpha-red-10'],
  },
  backgroundError50: {
    light: COLORS['error-25'],
    dark: COLORS['alpha-red-20'],
  },
  backgroundSuccess25: {
    light: COLORS['success-25'],
    dark: COLORS['neutral-900'],
  },
  backgroundInfo25: {
    light: COLORS['info-25'],
    dark: COLORS['info-25'],
  },
  backgroundInfo50: {
    light: COLORS['info-50'],
    dark: COLORS['info-50'],
  },

  // Stepper Line Colors
  stepperLineCompleted: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['success-600'],
  },
  stepperLineCompletedHovered: {
    light: COLORS['secondary-yellow-500'],
    dark: COLORS['secondary-yellow-500'],
  },
  stepperLineCurrent: {
    light: COLORS['secondary-yellow-600'],
    dark: COLORS['neutral-700'],
  },
  stepperLineUpcoming: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-700'],
  },
  stepperLineUpcomingHovered: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-700'],
  },

  // Additional Colors from global.css
  textDefaultDisabled: {
    light: COLORS['neutral-400'],
    dark: COLORS['neutral-400'],
  },
  textDefaultOncolorDisabled: {
    light: COLORS['alpha-white-40'],
    dark: COLORS['alpha-white-40'],
  },
  backgroundDisabled: {
    light: COLORS['neutral-200'],
    dark: COLORS['neutral-700'],
  },
  backgroundDisabledPrimary: {
    light: COLORS['secondary-yellow-200'],
    dark: COLORS['secondary-yellow-700'],
  },
  backgroundInverseDisabled: {
    light: COLORS['neutral-100'],
    dark: COLORS['neutral-700'],
  },
  iconDefaultDisabled: {
    light: COLORS['neutral-400'],
    dark: COLORS.white,
  },
  iconDefaultOncolorDisabled: {
    light: COLORS['alpha-white-40'],
    dark: COLORS.white,
  },
  controlDisabled: {
    light: COLORS['neutral-400'],
    dark: COLORS['alpha-white-30'],
  },

  // Additional Button States
  buttonPrimaryHoverLabel: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonPrimaryHoverIcon: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonPrimaryFocusedLabel: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonPrimaryFocusedIcon: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonPrimaryFocusedBorder: {
    light: COLORS['secondary-dark-gray-400'],
    dark: COLORS['secondary-dark-gray-400'],
  },
  buttonPrimaryPressedLabel: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonPrimaryPressedIcon: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  buttonSecondaryHoverBorder: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },
  buttonSecondaryFocusedBorder: {
    light: COLORS['neutral-900'],
    dark: COLORS['neutral-900'],
  },
  buttonSecondaryPressedBorder: {
    light: COLORS['neutral-300'],
    dark: COLORS['neutral-500'],
  },

  // Additional Card Icons
  cardMeetingLeadingIcon: {
    light: COLORS['neutral-700'],
    dark: COLORS['neutral-100'],
  },

  // Additional Tag Background States
  tagBackgroundIcon: {
    light: COLORS['primary-50'],
    dark: COLORS['neutral-700'],
  },
  tagBackgroundCount: {
    light: COLORS['primary-50'],
    dark: COLORS['neutral-700'],
  },
  tagCount: {
    light: COLORS['primary-500'],
    dark: COLORS.white,
  },

  // Tab Bar Colors

  tabBarBackground: {
    light: COLORS['secondary-dark-gray-100'],
    dark: COLORS.white,
  },
  color: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  color2: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  color3: {
    light: COLORS.white,
    dark: COLORS.white,
  },
  color4: {
    light: COLORS.white,
    dark: COLORS.white,
  },

  // Shadow Colors
  shadowXs: {
    light: COLORS['shadow-xs-light'],
    dark: COLORS['shadow-xs-dark'],
  },
  shadowSm: {
    light: COLORS['shadow-sm-light'],
    dark: COLORS['shadow-sm-dark'],
  },
  shadowMd: {
    light: COLORS['shadow-md-light'],
    dark: COLORS['shadow-md-dark'],
  },
  shadowLg: {
    light: COLORS['shadow-lg-light'],
    dark: COLORS['shadow-lg-dark'],
  },
  shadowXl: {
    light: COLORS['shadow-xl-light'],
    dark: COLORS['shadow-xl-dark'],
  },
  shadow2xl: {
    light: COLORS['shadow-2xl-light'],
    dark: COLORS['shadow-2xl-dark'],
  },
  shadow3xl: {
    light: COLORS['shadow-3xl-light'],
    dark: COLORS['shadow-3xl-dark'],
  },
} as const;

export type ThemeColorKey = keyof typeof themeColors;

/**
 * Get color value based on theme
 * @param colorKey - Key from themeColors
 * @returns string - The color value for the current theme
 */
export const getThemeColor = (colorKey: ThemeColorKey): string => {
  const theme = (getString(STORAGE_KEYS.COLOR_SCHEME) || 'light') as
    | 'light'
    | 'dark';
  return themeColors[colorKey][theme];
};
