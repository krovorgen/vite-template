import '../scss/index.scss';
import { getColorsData } from './colorsData';

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.title') as HTMLElement;

  const colors = getColorsData();
  console.log(colors);

  let currentColorIndex = 0;

  function changeColor() {
    title.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }

  setInterval(changeColor, 1000);
});
