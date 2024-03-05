export function sum(...val: number[]): number {
  return val.reduce((total, acc) => {
    return total + acc;
  });
}
