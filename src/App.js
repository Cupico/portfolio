import Nav from "./components/Nav";
import Home from "./pages/Home";
import { useState } from "react";

import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-[#1E2328]">
      <ParallaxProvider>
        <div className="flex flex-col md:flex-row ">
          {/* Navbar */}
          <Nav open={navOpen} setNavOpen={setNavOpen} />

          {/* Content*/}
          <div
            className={`${
              navOpen ? "opacity-50 md:opacity-100" : "opacity-100"
            } w-full h-full overflow-x-hidden relative`}
          >
            <Home />
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
};

export default App;
