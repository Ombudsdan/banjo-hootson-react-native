import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'web'),
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native/Libraries/Utilities/codegenNativeComponent': path.resolve(
        __dirname,
        'web/shims/codegenNativeComponent.ts',
      ),
      'react-native/Libraries/Utilities/codegenNativeCommands': path.resolve(
        __dirname,
        'web/shims/codegenNativeCommands.ts',
      ),
      'react-native-safe-area-context': path.resolve(
        __dirname,
        'web/shims/safeAreaContext.ts',
      ),
      '@': path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      config: path.resolve(__dirname, 'src/config'),
      navigation: path.resolve(__dirname, 'src/navigation'),
      screens: path.resolve(__dirname, 'src/screens'),
      styles: path.resolve(__dirname, 'src/styles'),
      services: path.resolve(__dirname, 'src/services'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
    ],
  },
  build: {
    outDir: path.resolve(__dirname, 'dist-web'),
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['react-native', 'react-native-safe-area-context'],
  },
  define: {
    __DEV__: true,
    'process.env.NODE_ENV': '"production"',
  },
  server: {
    port: 5175,
    host: true,
    open: true,
  },
  preview: {
    port: 5174,
    host: true,
  },
});
