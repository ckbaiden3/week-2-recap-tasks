// Follow the bugs and fix the code!

function getRandomWord() {
  const words = [
    "floop",
    "giggle",
    "pop",
    "scooper",
    "wonton",
    "abbleshmop",
    "ring-ding",
    "sclap",
    "fobber",
    "ankert",
    "wheem",
    "chipe",
    "scrapple",
    "mangies",
    "zoop",
    "zshabab",
    "ingling",
    "dong",
    "bong",
    "bang",
    "crash",
    "wallop"
  ];
  const randomNumber = Math.random;
  const randomIndex = Math.floor(randomNumber * words.length);
  return words[randomIndex];
}

const handleButtonClick = [];
function handleButtonClick() {
  const p = document.querySelector("#p");
  p.innerText = getRandomWord;
}

document.querySelector("#button").addEventListener("click", HandleButtonClick);
