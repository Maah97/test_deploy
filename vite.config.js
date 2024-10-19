import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: "/mahmoudou_portfolio/",
    plugins: [react()],
})
