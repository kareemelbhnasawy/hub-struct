/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
const log = (...args: any[]): void => {
    if (__DEV__) {
        console.log(...args);
    }
};

export default log;
