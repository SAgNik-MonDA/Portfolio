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
//   //  <div className="bg-[#050414]">
//   //     <div className="absolute inset-0 bg-[linear-gradient(to right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to button,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

//   <div className="relative min-h-screen bg-[#050414]">
//   <div
//     className="absolute inset-0 pointer-events-none
//       bg-[linear-gradient(to_right,rgba(79,79,79,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.18)_1px,transparent_1px)]
//       bg-[size:14px_24px]
//       [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,0,0,1)_70%,transparent_100%)]
//       [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,0,0,1)_70%,transparent_100%)]"
// />



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




import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#050414" }}>
      {/* overlay (inline styles to avoid Tailwind parsing issues) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, rgba(79,79,79,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,79,79,0.18) 1px, transparent 1px)",
          backgroundSize: "14px 24px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,0,0,1) 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,0,0,1) 70%, transparent 100%)",
        }}
      />

      {/* content above overlay */}
      <div className="relative z-10 pt-20 text-white">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
