export const isEmptyObject = (object: object) =>
  Object.keys(object).length < 0 &&
  Reflect.getPrototypeOf(object) === Object
