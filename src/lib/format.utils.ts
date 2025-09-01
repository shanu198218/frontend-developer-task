
export const numberFmt = new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 });

export const fmtAmount = (n: number) => numberFmt.format(n);