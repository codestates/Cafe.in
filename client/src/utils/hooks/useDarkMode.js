import React, { useEffect, useState } from "react";

const useDarkMode = () => {

  const matchDark = '(prefers-color-scheme: dark)';

  const [isDark, setIsDark] = useState(
    () => window.matchMedia && window.matchMedia(matchDark).matches
  )
  useEffect(()=> {
    const matcher = window.matchMedia(matchDark);
    const onChange = ({ matches }) => setIsDark(matches);
    matcher.addEventListener("change", onChange);
    return ( 
    () => {
      matcher.removeEventListener(onChange)
    })
  }, [])

  return isDark;
}

export default useDarkMode;