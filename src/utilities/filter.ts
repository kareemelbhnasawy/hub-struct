/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import isEmpty from './is-empty';

const filter = (value: any): any => {
    if (Array.isArray(value)) {
        return value.filter(item => !isEmpty(item));
    }
    if (typeof value === 'object' && value !== null) {
        return Object.fromEntries(
            Object.entries(value).filter(([_, value]) => !isEmpty(value))
        );
    }
    return value;
};

export default filter;