function firstLast(arr) {
    // let k = arr[0];

    // let forward = arr.slice(1, k+1);
    // let backwards = arr.slice(- k)

    let k = arr.shift();

    let forward = arr.slice(0, k);
    let backwards = arr.slice(-k)

    console.log(forward.join(" "));
    console.log(backwards.join(" "));
}
firstLast([2,
    7, 8, 9
])