export const arrayEqual = (
  a: unknown[],
  b: unknown[],
): boolean => {
  if (a.length !== b.length) {
    return false
  }

  return a.every((value, index) => value === b[index])
}
