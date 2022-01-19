import { useState, useEffect } from 'react';

const useWindowSize = (setButton) => {
  // const [windowSize, setWindowSize] = useState({
  //   width: undefined,
  //   height: undefined,
  // });

  useEffect(() => {
    const handleResize = () => {
      // setWindowSize({
      //   width: window.innerWidth,
      //   height: window.innerHeight,
      // });
      window.innerWidth <= 960 ? setButton(false) : setButton(true);
    }
    // handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      console.log('Running Cleanup function');
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  return window.innerWidth;
}

export default useWindowSize;