function solve(arr) {
    let darts = arr[0].split(' ').map(Number);
    let commands = arr.slice(1);
    let shotCount = 0;

    const decrement = (e, arr, i) => e -= arr[i];
    const increment = (e, arr, i) => e += arr[i];
    const decrementOrIncrement = (e, arr, i) => {
        if (e > arr[i]) {
            return decrement(e, arr, i);

        } else {

            if (e != -1) {
                return increment(e, arr, i);
            }
            return e;
        }
    }

    for (let index of commands) {
        if (index === 'End') {
            return `Shot targets: ${shotCount} -> ${darts.join(' ')}`;

        } else {

            index = Number(index);

            if (darts.length > index) {
                darts = darts.map(e => decrementOrIncrement(e, darts, index));

                darts[index] = -1;
                shotCount++;
            }
        }
    }
}