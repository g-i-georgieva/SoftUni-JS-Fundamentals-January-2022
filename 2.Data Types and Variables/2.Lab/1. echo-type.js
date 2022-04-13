function typeData(parametar) {
    let type = typeof (parametar)
    console.log(type);
    if (type === 'string' || type === 'number') {
        console.log(parametar)
    } else {
        console.log('Parameter is not suitable for printing')
    }
}
typeData("Hello, JavaScript!");
typeData(18);
typeData(null);