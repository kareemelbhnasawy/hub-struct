const PROFILE_URLS = {
  HEADER: '/profile/v1/header',
  GET_PROFILE_DETAILS: 'profile/v1/info',
  BANNER: 'profile/v1/banner',
  KUNYA_CRUD: 'profile/v1/nickname',
  ADDRESSES: '/profile/v1/addresses',
  EDIT_ADDRESS: '/profile/v1/address/edit',
  GET_QUALIFICATIONS: '/profile/v1/qualifications',
  GET_TEAM: '/profile/v1/team',
  GET_COVENANTS: '/profile/v1/covenants',
} as const;

export default PROFILE_URLS;
