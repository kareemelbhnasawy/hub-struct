declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_URL?: string;
    API_TIMEOUT?: number;
  }

  export const Config: NativeConfig;
  export default Config;
}
