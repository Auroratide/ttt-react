import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [react()],
	define: {
		global: {}, // https://github.com/vitejs/vite/discussions/5912#discussioncomment-2908994
	}
})
