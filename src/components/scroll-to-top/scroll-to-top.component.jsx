import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [previousPathname, setPreviousPathname] = useState("");

  useEffect(() => {
    // Check if the current pathname is different from the previous pathname
    if (pathname !== previousPathname) {
      // Scroll to top
      window.scrollTo(0, 0);
      // Update the previous pathname in state
      setPreviousPathname(pathname);
    }
  }, [pathname, previousPathname]);

  return null; // The component doesn't render anything
};

export default ScrollToTop;
