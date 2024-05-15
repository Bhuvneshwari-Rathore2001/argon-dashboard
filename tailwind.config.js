/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6D95FC',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      backgroundImage: {
        navbarGradient:
          'linear-gradient(270deg, rgba(109, 149, 252, 0.3) 8.85%, rgba(109, 149, 252, 0) 50%)',
        aboutUsGradient:
          'linear-gradient(90deg, rgba(109, 149, 252, 0.26) 6.51%, rgba(109, 149, 252, 0) 57.56%)',
        videoMarketing:
          'linear-gradient(90deg, rgba(109, 149, 252, 0.35) -346.67%, rgba(21, 21, 21, 0.31) 74.83%)',
        graphicDesign:
          'linear-gradient(357.34deg, rgba(109, 149, 252, 0.55) -217.33%, rgba(109, 149, 252, 0) 66.64%)',
        uiUxDesign:
          'linear-gradient(2.42deg, rgba(109, 149, 252, 0.55) -180.08%, rgba(109, 149, 252, 0) 67.52%)',
        websiteDesign:
          'linear-gradient(90deg, rgba(109, 149, 252, 0.35) -292.67%, rgba(21, 21, 21, 0.31) 74.83%)',
        analyticSection:
          'linear-gradient(90deg, #6D95FC -127.55%, rgba(21, 21, 21, 0.35) 77.97%)',
        feedbackCardGradient:
          'linear-gradient(175.64deg, rgba(17, 24, 42, 0.7) 19.67%, rgba(17, 24, 42, 0) 121.51%)',
        getInTouchGradient:
          'linear-gradient(223.47deg, rgba(109, 149, 252, 0.24) 3.19%, rgba(21, 21, 21, 0) 61.55%)',
        inputGradient:
          'linear-gradient(179.96deg, #12192B 0.03%, rgba(18, 25, 43, 0) 109.04%)',
        mobileMenu:
          'linear-gradient(90deg, rgba(26,31,55,1) 50%, rgba(6,11,38,1) 74%)',
        mobileMenu2:
          'linear-gradient(90deg, rgba(12,14,28,1) 40%, rgba(9,13,35,1) 74%)',
      },
    },
  },
  plugins: [],
};
