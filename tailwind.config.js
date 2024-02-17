/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "Roboto":["Roboto"],
      'Yellowtail':['Yellowtail'],
    },
    extend: {  
      container:{
        center: true,
        padding:"20px",
        screens:{
          lg:"1640px"
        }
      },
      colors:{
        primary: "#274C5B",
        secondary: "#7EB693",
        arapawa: "#EFD372",
        discoBall: "#D4D4D4",
        doctor: "#F9F8F8",
        heavySugar: "#EFF6F1",
        cityRain: "#525C60",
        christmasSilver: "#E0E0E0",
        seaLettuce: "#68A47F",
        padua: "#7EB693",
        silverLake: "#DEDDDD",
        fortressGrey:"#B8B8B8",
        beluga: "#F1F1F1",
        peacefulRain: "#F1F8F4",
        dhusarGrey: "#ABABAB",
        drWhite: "#FAFAFA",
        coronation: "#ECECEC",
      },
      boxShadow: {
        "usual": ' 0px 20px 35px 0px rgba(167, 167, 167, 0.25)'
      }
    },
  },
  plugins: [],
}

