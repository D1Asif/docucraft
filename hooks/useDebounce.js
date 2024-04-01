const { useEffect, useRef } = require("react");

export const useDebounce = (callback, delay) => {
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef)
            }
        }
    }, []);

    const debouncedFunction = (...args) => {
        timeoutRef.current = setTimeout(() => {
            callback(...args)
        }, delay);
    }

    return debouncedFunction;
}