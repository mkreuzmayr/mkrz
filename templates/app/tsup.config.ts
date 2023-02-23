import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'dist',
  clean: true,
  entry: ['src/index.ts'],
  target: 'esnext',
  format: ['esm'],
  minify: true,
  metafile: true,
  sourcemap: true,
  dts: true,
});
