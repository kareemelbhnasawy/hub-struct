// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEmpty = (value: any): boolean => {
    if (value == null) return true;
    if (typeof value === 'string') return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
};

export default isEmpty;