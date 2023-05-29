export const adaptDate = (date) => {
  if (date) {
    return new Date(date * 1000).toLocaleString();
  }
  return "";
};
