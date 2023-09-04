export const getColorsData = () => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const uniqueColors: Set<string> = new Set();
  while (uniqueColors.size < 100) {
    const color = getRandomColor();
    uniqueColors.add(color);
  }
  return Array.from(uniqueColors);
};
