export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    if (Math.random() >= 0.5) {
      resolve('You win');
    }
  });
}
