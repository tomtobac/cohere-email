import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			),
			'@domain': fileURLToPath(new URL('./src/domain', import.meta.url)),
			'@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
		},
	},
});
