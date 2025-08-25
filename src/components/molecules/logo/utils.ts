const getRelativeSize = (size: string) => {
    switch (size) {
        case 'sm':
            return { width: 40, height: 35 };
        case 'md':
            return { width: 55, height: 45 };
        case 'lg':
            return { width: 70, height: 60 };
        default:
            return { width: 55, height: 45 };
    }
};


export default getRelativeSize;