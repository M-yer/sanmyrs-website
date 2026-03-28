/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0099AF',
        'primary-dark': '#007A68',
        navy: '#04091A',
        'page-bg': '#F5F7F6',
        'body-text': '#4A4A4A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        glancyr: ['Outfit', 'sans-serif'],
        unison: ['UnisonPro', 'sans-serif'],
        erasitc: ['ErasITC', 'sans-serif'],
      },
    },
  },
  safelist: [
    'font-glancyr',
  ],
  plugins: [],
};
