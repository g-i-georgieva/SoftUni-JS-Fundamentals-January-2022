function listOfProducts(products) {
    let sortedProducts = products.sort()

    for (let i = 0; i < sortedProducts.length; i++) {
        console.log(`${i+1}.${sortedProducts[i]}`)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])

// products => products
//     .sort()
//     .map((x, i) => `${i+1}.${x}`)
//     .join('\n')