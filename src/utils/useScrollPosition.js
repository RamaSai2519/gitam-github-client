import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    scrolled100vh: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const winHeight = window.innerHeight;
      const winWidth = window.innerWidth;

      const viewportHeight = winHeight - 45;

      const heroHeight =
        winWidth > 640
          ? 0.5 * winWidth
          : winWidth > 768
            ? 0.6 * 768
            : winWidth > 1024
              ? viewportHeight
              : 0.35 * winHeight;

      setScrollPosition({
        x: window.scrollX,
        y: scrollY,
        scrolled100vh: scrollY >= heroHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;