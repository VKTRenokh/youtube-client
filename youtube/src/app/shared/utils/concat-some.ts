export const concatSome = <T>(
  array: T[] | null,
  value: T,
) => (array ? array.concat(value) : [value])
