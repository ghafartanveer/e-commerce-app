module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@hooks': './src/hooks',
            '@constants': './src/constants',
            '@navigationHandler': './src/navigationHandler',
            '@redux': './src/redux',
            '@network': './src/network',
            '@types': './src/types',
          }
        }
      ]
    ]
  };
};
