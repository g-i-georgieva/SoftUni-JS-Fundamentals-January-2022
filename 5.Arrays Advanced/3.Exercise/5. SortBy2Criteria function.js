function solve(arr) {
arr.sort ((a,b)=>{
  let firstCriteria = a.length - b.length;
  let secondCriteria = a.localeCompare(b);

  return firstCriteria || secondCriteria;
})
console.log (arr.join('\n'))
}
solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
