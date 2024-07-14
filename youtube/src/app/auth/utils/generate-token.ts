export const generateToken = () =>
  btoa(Math.random().toString(16))
