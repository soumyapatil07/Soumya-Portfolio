import React from "react";
import Navcomponent from "./navcomponent/Navcomponent";
import Maincomponent from "./maincomponent/Maincomponent";
import Footercomponent from "./footercomponent/Footercomponent";
import { Route, Routes } from "react-router-dom";
import Aboutcomponent from "./aboutcomponent/Aboutcomponent";
import Contactcomponent from "./contactcomponent/Contactcomponent";
import Skillscomponent from "./aboutcomponent/skillscompnent/Skills";

function Englishcomponent() {
  return (
    <div>
      <Navcomponent />
      <Routes>
        <Route path="/" element={<Maincomponent />} />
        <Route path="/about" element={<Aboutcomponent />} />
        <Route path="/skills" element={<Skillscomponent />} />
        <Route path="/achivments" element={<achivmentscomponent />} />
        <Route path="/contact" element={<Contactcomponent />} />
        <Route path="*" element={<Maincomponent />} />
      </Routes>

      <Footercomponent />
    </div>
  );
}

export default Englishcomponent;
