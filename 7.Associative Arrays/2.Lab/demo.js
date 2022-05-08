let arr = {};
arr["one"] = 1;
arr["two"] = 2;
arr["three"] = 3;

// for(let key in assocArr) {
//    console.log(key + " = " + assocArr[key]);
// }
Object.keys(arr).forEach((k) => console.log(`${k} -> ${arr[k]}`));
