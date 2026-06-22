import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // This ensures your build output goes to the 'dist' folder
    outDir: 'dist', 
  },
});