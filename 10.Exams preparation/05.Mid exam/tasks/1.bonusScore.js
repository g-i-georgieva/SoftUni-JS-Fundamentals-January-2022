function solve(input) {
  let numStudents = Number(input.shift());
  let numLectures = Number(input.shift());
  let bonus = Number(input.shift());
  let attendances = input;
  let maxAttendance = 0;
  let maxBonus = 0;

  for (let i = 0; i < attendances.length; i++) {
    let currAttendance = Number(attendances[i]);

    if (currAttendance > maxAttendance) {
      maxAttendance = currAttendance;
      maxBonus = (maxAttendance / numLectures) * (5 + bonus);
    }
  }
  
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttendance} lectures.`);
}
solve([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
