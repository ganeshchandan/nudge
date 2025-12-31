export const getRadiusInNumber = (size: string, strokeWidth: string) => {
  const fontSize = getComputedStyle(document.documentElement).fontSize;
  const baseSize = +fontSize.toLowerCase().replace("px", "");
  const sizeInNumber = +size.toLowerCase().replace("rem", "") * baseSize;

  const strokewidthInNumber =
    +strokeWidth.toLowerCase().replace("rem", "") * baseSize;

  return {
    radius: sizeInNumber / 2 - strokewidthInNumber / 2 - 4,
    sizeInNumber,
  };
};
