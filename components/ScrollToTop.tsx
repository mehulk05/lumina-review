import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Browsers keep scroll position across client-side navigations; reset it. */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
