import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
  base: '',
});
