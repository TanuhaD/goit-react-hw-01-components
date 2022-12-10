export default function getRandomColor() {
  const colorsArray = [
    '52C2FA',
    'A33DF2',
    'E54C67',
    '20B8C6',
    'D7F463',
    '2979FF',
  ];
  return `#${colorsArray[Math.floor(Math.random() * colorsArray.length)]}`;
}
