import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { hash, key, pathname } = useLocation();

  useEffect(() => {
    const section = hash && document.getElementById(hash.slice(1));
    if (section) {
      section.scrollIntoView();
      section.focus({ preventScroll: true });
      return;
    }

    window.scrollTo(0, 0);
  }, [hash, key, pathname]);
  return null;
}

export default ScrollToTop;
