module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
