export const formatNumber = (value: number): string => {
  let num = value;
  if (isNaN(value)) {
    num = 1000000;
  }
  const dividedValue = num / 10_000;
  if (dividedValue >= 100_000) {
    return (dividedValue / 1_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (dividedValue >= 1_000) {
    return (dividedValue / 1_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (dividedValue >= 1) {
    return dividedValue.toFixed(1).replace(/\.0$/, "") + "k";
  }
  return dividedValue.toString();
};
