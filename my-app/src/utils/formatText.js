export const formatText = (text) => {
  console.log("format");
  return text.replace(/<p>/g, "\n");
};
