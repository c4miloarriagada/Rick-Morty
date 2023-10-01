/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, scale: 0 },
          '100%': { opacity: 1, scale: 1 }
        }
      },
      backgroundImage: {
        'characters-':
          "url('https://res.cloudinary.com/dwtkwakbc/image/upload/v1693626436/670_ri51qq.webp')",
        'locations-':
          "url('https://res.cloudinary.com/dwtkwakbc/image/upload/v1693626047/S3e7_Citadel_reconstruction_f00ixg.webp')",
        'episodes-':
          "url('https://res.cloudinary.com/dwtkwakbc/image/upload/v1693626209/YHAUBUYW75FZVLG4Z4WL5S6LMY_chfcos.avif')"
      }
    }
  },

  plugins: []
}
