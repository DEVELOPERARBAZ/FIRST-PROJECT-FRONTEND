import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Get the current route's pathname

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, [pathname]); // Trigger when the route changes

    return null; // This component does not render anything
};

export default ScrollToTop;
