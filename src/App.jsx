// import React from 'react';
// import Navbar from "./Components/Navbar/Navbar";
// import About from "./Components/About/About";
// import Skills from "./Components/Skills/Skills";
// import Experience from "./Components/Experience/Experience";
// import Work from "./Components/Work/Work";
// import Education from "./Components/Education/Education";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";

// const App = () => {
//   return (
//    <div className="relative min-h-screen">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_button,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

//       <div className="relative pt-20">
//         <Navbar />
//         <About />
//         <Skills />
//         <Experience />
//         <Work />
//         <Education />
//         <Contact />
//         <Footer />
//       </div>
//    </div>
//   )
// }

// export default App








// import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import About from "./Components/About/About";
// import Skills from "./Components/Skills/Skills";
// import Experience from "./Components/Experience/Experience";
// import Work from "./Components/Work/Work";
// import Education from "./Components/Education/Education";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";

// const App = () => {
//   return (
//     <div className="relative min-h-screen ">
//       {/* overlay (inline styles to avoid Tailwind parsing issues) */}
//       <div
//         aria-hidden="true"
//         style={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 0,
//           pointerEvents: "none",
//           backgroundImage:
//             "linear-gradient(to right, rgba(79,79,79,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,79,79,0.18) 1px, transparent 1px)",
//           backgroundSize: "14px 24px",
//           maskImage:
//             "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,0,0,1) 70%, transparent 100%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,0,0,1) 70%, transparent 100%)",
//         }}
//       />

//       {/* page content stacked above overlay */}
//       <div className="relative z-10 pt-20 text-white">
//         <Navbar />
//         <About />
//         <Skills />
//         <Experience />
//         <Work />
//         <Education />
//         <Contact />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default App;



import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* grid overlay behind everything (optional) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, rgba(79,79,79,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,79,79,0.08) 1px, transparent 1px)",
          backgroundSize: "14px 24px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,1) 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,1) 70%, transparent 100%)",
        }}
      />

      {/* NAVBAR: the dark background is applied inside the Navbar component */}
      <Navbar />

      {/* page content */}
      <main className="relative z-10 pt-24">
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

