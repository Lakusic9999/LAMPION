/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#b8860b',       // Dark Gold – za naglašene elemente / dugmad
        secondary: '#1a1a1a',     // Dark Background – glavni background sajta
        accent: '#E6F0FF',        // Light Blue – za glow, linkove ili detalje
        text: '#F5F5F5',           // Svetli tekst – kontrast sa tamnom pozadinom
        border: '#8B6D04',         // Tamno sivi borderi
        'primary-dark': '#8B6D04', // Tamnija zlatna za hover / dugmad
        'accent-dark': '#BFD7FF',  // Tamniji light blue za hover / detalje

      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        lampion: ['LampionFont', 'Inter', 'system-ui', 'sans-serif'],
        lora: ['LoraFont', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};