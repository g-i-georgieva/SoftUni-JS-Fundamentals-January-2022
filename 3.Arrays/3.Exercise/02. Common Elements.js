function commonElements(arr1, arr2) {
    for (el1 of arr1) {
        for (el2 of arr2) {
            if (el1 === el2) {
                console.log(el1)
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)