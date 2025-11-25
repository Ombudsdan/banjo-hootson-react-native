module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          navigation: './src/navigation',
          screens: './src/screens',
          styles: './src/styles',
          services: './src/services',
          utils: './src/utils',
          '@': './src',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.web.ts',
          '.web.tsx',
        ],
      },
    ],
  ],
};
