const PROFILE_URLS = {
  HEADER: '/profile/v1/header',
  GET_PROFILE_DETAILS: 'profile/v1/info',
  BANNER: 'profile/v1/banner',
  KUNYA_CRUD: 'profile/v1/nickname',
  // Add other profile-related URLs here
  ADDRESSES: '/profile/v1/addresses',
  EDIT_ADDRESS: '/profile/v1/address/edit',
} as const;

export default PROFILE_URLS;
