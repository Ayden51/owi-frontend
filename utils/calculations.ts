export const roundToPrecision = (num: number, precision: number = 2): number => {
    const roundPrecision = 10 ** precision;
    return Math.round((num + Number.EPSILON) * roundPrecision) / roundPrecision;
};

export function pxToRem(px: number, output?: "string", base?: number): string;
export function pxToRem(px: number, output?: "number", base?: number): number;
export function pxToRem(px: number, output: "number" | "string" = "string", base: number = 16): number | string {
    const rem = roundToPrecision(px / base, 2);
    return output === "number" ? rem : `${rem}rem`;
}
