export const convertPixelsToRem = (px) => {
  return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
};
