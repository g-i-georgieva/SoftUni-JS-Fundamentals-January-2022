function nextDay(year, month, day) {
    let tomorrow = new Date(year, month - 1, day + 1);

    let theDay = tomorrow.getDate();
    let theMonth = tomorrow.getMonth() + 1;
    let theYear = tomorrow.getFullYear();

    console.log(`${theYear}-${theMonth}-${theDay}`);
}
nextDay(2020, 3, 24)