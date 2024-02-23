//بیشترین حرف استفاده شده در یک رشته
const text = "salam khubi che khabar?";

const chars = [];
const counts = [];
let maxCount = 0;
let mostFrequentChar = null;

for (const char of text) {
  const charIndex = chars.indexOf(char);
  if (charIndex !== -1) {
    counts[charIndex]++;
  } else {
    chars.push(char);
    counts.push(1);
  }

  if (counts[charIndex] > maxCount) {
    maxCount = counts[charIndex];
    mostFrequentChar = char;
  }
}
console.log("bishtarin harf estefade shode: " + mostFrequentChar);
