import {useEffect, useState} from "react";
import {animateScroll, Events} from "react-scroll";

import {useScrollHeight} from "./useScrollHeight";
import useWindowDimensions from "./useWindowsDimensions";

const useFullScroll = () => {
    const [, windowHeight] = useWindowDimensions();
    const [currentPosition, setCurrentPosition] = useState(0);
    const [incompleteScroll, setIncompleteScroll] = useState(0);
    const [isScrollingPaused, setScrollingPaused] = useState(false);
    const fullHeight = useScrollHeight();

    // Register handlers for react-scroll events
    useEffect(() => {
        Events.scrollEvent.register("begin", () => {
            setScrollingPaused(true);
        });
        Events.scrollEvent.register("end", () => {
            setScrollingPaused(false);
        });
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    // Hook for changing the current scroll position
    useEffect(() => {
        const scrollUp = () => {
            if (incompleteScroll !== 0) {
                setCurrentPosition(currentPosition - incompleteScroll);
                setIncompleteScroll(0);
            } else {
                setCurrentPosition(Math.max(0, currentPosition - windowHeight));
            }
        };
        const scrollDown = () => {
            if (currentPosition + windowHeight <= fullHeight - windowHeight) {
                setCurrentPosition(currentPosition + windowHeight);
            } else if (fullHeight - currentPosition - windowHeight > 0) {
                setIncompleteScroll(fullHeight - currentPosition - windowHeight);
                setCurrentPosition(fullHeight - windowHeight);
            }
        };
        const handleScroll = e => {
            e.preventDefault();
            if (isScrollingPaused) return;
            if (e.deltaY < 0) {
                scrollUp();
            } else if (e.deltaY > 0) {
                scrollDown();
            }
        };
        window.addEventListener("wheel", handleScroll, {passive: false});
        return () => window.removeEventListener("wheel", handleScroll);
    });

    // Hook for actually scrolling to the scroll position
    useEffect(() => {
        animateScroll.scrollTo(currentPosition, {
            ignoreCancelEvents: true,
            smooth: "linear",
            duration: scrollDistanceInPx => Math.abs(scrollDistanceInPx) / windowHeight * 750
        });
    }, [windowHeight, currentPosition])
};

export default useFullScroll;
