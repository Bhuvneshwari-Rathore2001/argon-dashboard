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
          'linear-gradient(270deg, rgba(109, 149, 252, 0.3) 8.85%, rgba(109, 149, 252, 0) 50%);',
        bannerGradient:
          'linear-gradient(268.78deg, rgba(109, 149, 252, 0.67) -53.1%, rgba(109, 149, 252, 0) 30.41%)',
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
      },
    },
  },
  plugins: [],
};
