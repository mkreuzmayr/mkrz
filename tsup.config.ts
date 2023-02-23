import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'dist',
  clean: true,
  entry: ['src/index.ts'],
  format: ['esm'],
  minify: true,
  metafile: true,
  sourcemap: true,
  dts: true,
});
