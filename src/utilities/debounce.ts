/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
const debounce = <T extends (...args: any[]) => any>(func: T, delay: number) => {
    let timeoutId: NodeJS.Timeout | null = null;
    return (...args: Parameters<T>) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export default debounce;
