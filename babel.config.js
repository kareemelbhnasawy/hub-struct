module.exports = {
  presets: ['@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    // OTHER BABEL PLUGINS GO ABOVE THIS COMMENT
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
