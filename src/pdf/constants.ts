export const dpi = 72;

interface FixedHeight {
    height: number | string;
    minHeight: number | string;
    maxHeight: number | string;
}

interface FixedWidth {
    width: number | string;
    minWidth: number | string;
    maxWidth: number | string;
}

export function fixedHeight(height: number | string): FixedHeight {
    return {
        height,
        minHeight: height,
        maxHeight: height
    };
}

export function fixedWidth(width: number | string): FixedWidth {
    return {
        width,
        minWidth: width,
        maxWidth: width
    };
}

export function fixedSize(width: number | string, height: number | string) : FixedHeight & FixedWidth {
    return {
        ...fixedHeight(height),
        ...fixedWidth(width)
    };
}


export function hyphenateAnywhere(words: string) {
    return words.split("");
}