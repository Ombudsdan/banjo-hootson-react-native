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
