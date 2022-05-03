function printPersonInfo(fn, ln, a) {
  // // //Първи начин
  // // let personInfo = {
  // //   firstName: fn,
  // //   lastName: ln,
  // //   age: a,
  // // };
  // // return personInfo;

  // //Втори начин
  // let personInfo = {}
  // personInfo.firstName = fn;
  // personInfo.lastName = ln;
  // personInfo.age = a;
  // // return personInfo;

  //Трети начин
  let personInfo = {};
  personInfo["firstName"] = fn;
  personInfo["lastName"] = ln;
  personInfo["age"] = a;
  return personInfo;

  // for (let key in personInfo) {
  //   console.log(`${key}: ${personInfo[key]}`);
  // }
}
console.log(printPersonInfo("Peter", "Pan", "20"));
