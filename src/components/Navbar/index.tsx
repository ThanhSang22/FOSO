import React, { useEffect, useRef } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { useNavHeight } from "@/providers/NavHeightContext";
import Menu from "../Menu";

const Navbar = () => {
  const { setNavHeight } = useNavHeight();
  const [isOpen, setIsOpen] = React.useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        setNavHeight(height);
      }
    };

    requestAnimationFrame(updateHeight);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div ref={navRef} className="z-50 fixed top-0 left-0 right-0">
      <NavDesktop />
      <NavMobile onClick={() => setIsOpen(!isOpen)} />
      <Menu open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
