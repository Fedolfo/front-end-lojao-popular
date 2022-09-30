const LOWER_BOUND = 0;
const UPPER_BOUND = 99;

export const bound = (
  x: number,
  min = LOWER_BOUND,
  max = UPPER_BOUND,
): number => Math.max(Math.min(x, max), min);

export default bound;
