import {defineConfig} from 'tsdown';

export default defineConfig({
	dts: true,
	clean: true,
	entry: ['src/index.ts'],
	format: ['esm', 'cjs'],
	sourcemap: true,
	treeshake: true,
});
