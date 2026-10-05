/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#681D32',
          deep: '#3B101D',
          dark: '#2A0B14',
          light: '#82243F',
          subtle: '#FAF3F5',
          border: '#E8D5DC',
        },
        ivory: {
          DEFAULT: '#FBF7F2',
          warm: '#FBF7F2',
          light: '#FCF9F6',
        },
        cream: {
          DEFAULT: '#F3E9DF',
          soft: '#F3E9DF',
          deep: '#E7D8CA',
          light: '#F8F2EB',
        },
        gold: {
          DEFAULT: '#C49A62',
          champagne: '#C49A62',
          light: '#D8B381',
          dark: '#A57E47',
          soft: '#F5ECE0',
        },
        charcoal: {
          DEFAULT: '#262323',
          light: '#3C3837',
          deep: '#1A1818',
        },
        muted: {
          DEFAULT: '#736B68',
          light: '#9B9390',
          dark: '#514A48',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'site': '1280px',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(38, 35, 35, 0.04)',
        'card': '0 4px 20px -2px rgba(38, 35, 35, 0.06)',
        'dropdown': '0 10px 30px -4px rgba(38, 35, 35, 0.08)',
        'button': '0 4px 14px rgba(104, 29, 50, 0.2)',
      },
      borderRadius: {
        'refined': '8px',
      },
    },
  },
  plugins: [],
};
