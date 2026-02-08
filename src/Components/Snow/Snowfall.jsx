import React from "react";
import Snowfall from "react-snowfall";

const GlobalSnowfall = () => {
  return (
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 40,
      }}
      color="rgb(78,209,156)"
      snowflakeCount={40}   // ✅ this WILL decrease
      radius={[1.2, 2.5]}
      speed={[0.4, 1.2]}
      wind={[-0.2, 0.4]}
      opacity={[0.4, 0.8]}
    />
  );
};

export default GlobalSnowfall;
