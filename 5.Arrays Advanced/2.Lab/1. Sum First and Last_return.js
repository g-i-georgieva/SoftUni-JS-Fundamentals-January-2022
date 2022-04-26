function sumFirstAndLast(numsAsStrings) {
    let first = Number(numsAsStrings.shift());
    let last = Number(numsAsStrings.pop());

    return first + last
}
console.log(sumFirstAndLast (['20', '30', '40']))
console.log(sumFirstAndLast (['5', '10']))



// ако използваме тези методи, но имаме подаден само един елемент, ще ни отпечата NAN,
// тези методи променят масива, и ако исползваме shift, ще премахне първия елемент
// и когато искаме да ползваме Pop масива вече ще е празен
// ако искаме само да видим елемента, без да го модифицираме, трябва да използваме индексите