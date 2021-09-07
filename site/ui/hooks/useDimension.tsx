import { useRef, useState, useEffect, RefObject } from "react";
import ResizeObserver from "resize-observer-polyfill";

const initialState = { width: 0, height: 0 };
//  ref is the reference to the element whose height and with is required
//  const divRef = useRef(null);
//  const { height, width } = useDimension(divRef);
//  <div ref={divRef}>
const useDimension = (ref: RefObject<HTMLElement>) => {
    const [dimensions, setdDimensions] = useState(initialState);
    const [observer, setObserver] = useState<ResizeObserver>()

    useEffect(() => {

        if (ref.current) {
            console.log("observer");
            var resizer = new ResizeObserver((entries = []) => {
                entries.forEach((entry) => {
                    const { width, height } = entry.contentRect;
                    setdDimensions({ width, height });
                });
            });
            resizer.observe(ref.current);
            setObserver(resizer);
        }
        return () => {
            if (observer) observer.disconnect();
        };

    }, [ref]);
    return dimensions;
};

export default useDimension;