export function getColorByIndex(
  index: number,
  count = 100,
  saturation = 70,
  lightness = 50,
): string {
  const hue = (index * 360) / count;
  return `hsl(${hue.toFixed(1)}, ${saturation}%, ${lightness}%)`;
}
