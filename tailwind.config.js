// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}'
//   ],
//   theme: {
//     extend: {
//       keyframes:{
//         blob:{
//           '0%':{transform:'scale(1)'},
//           '33%':{transform:'scale(1.2)'},
//           '66%':{transform:'scale(0.8)'},
//           '100%':{transform:'scale(1)'},

//         },
//         animation:{
//           blob:'blob 10s infinite',
//         },
//          backgroundImage: {
//         'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
//       },
//       }

//     },
//   },
//   plugins: [],
// }








// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       keyframes: {
//         blob: {
//           '0%': { transform: 'scale(1)' },
//           '33%': { transform: 'scale(1.2)' },
//           '66%': { transform: 'scale(0.8)' },
//           '100%': { transform: 'scale(1)' },
//         },
//       },
//       animation: {
//         blob: 'blob 10s infinite',
//       },
//       backgroundImage: {
//   'skills-gradient':
//     'linear-gradient(180deg,rgba(204, 0, 187, 0.25) 0%,rgba(204, 0, 187, 0) 40%,rgba(0, 70, 209, 0) 60%,rgba(0, 70, 209, 0.25) 100%)',
// }


//     },
//   },
//   plugins: [],
// };



module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
     backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(111, 224, 232, 0) 50%), linear-gradient(141.27deg, rgba(111, 224, 232, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};


