function solve(input) {
  let food = Number(input[0]) * 1000;
  let hay = Number(input[1]) * 1000;
  let cover = Number(input[2]) * 1000;
  let weight = Number(input[3]) * 1000;
  let isEnought = true;

  for (let i = 1; i <= 30; i++) {
    if (food - 300 < 0 || hay - food * 0.05 < 0 || cover - weight / 3 < 0) {
      console.log(`Merry must go to the pet store!`);
      isEnought = false;
      break;
    }

    food -= 300;
    if (i % 2 == 0) {
      hay -= food * 0.05;
    }

    if (i % 3 == 0) {
      cover -= weight / 3;
    }
  }

  if (isEnought==true){
    console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
  }
  
}
solve(["10", "5", "5.2", "1"]);
