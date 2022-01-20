import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./ScrollButton.styled";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisible = () => {
			const scrolled = document.documentElement.scrollTop;
			if (scrolled > 300) {
				setVisible(true);
			} else if (scrolled <= 300) {
				setVisible(false);
			}
		};
	
		window.addEventListener("scroll", toggleVisible);

		return () => window.removeEventListener("scroll", toggleVisible);

	}, [])
  
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollButton;
