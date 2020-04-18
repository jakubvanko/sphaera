import {useEffect, useState} from "react";

export const useScrollHeight = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleLoad = () => {
            setScrollHeight(document.documentElement.scrollHeight);
        };
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return scrollHeight;
};
