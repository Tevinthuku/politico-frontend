export const isEmptyObject = obj => {
  try {
    return Object.entries(obj).length === 0 && typeof obj === "object";
  } catch (err) {
    return true;
  }
};
