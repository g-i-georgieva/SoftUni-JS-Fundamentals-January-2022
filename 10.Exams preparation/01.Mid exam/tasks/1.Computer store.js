function solve(array) {
  let totalPriceWithoutVat = 0;
  let taxes = 0;
  let finalPrice = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == "special" || array[i] == "regular") {
      if (totalPriceWithoutVat == 0) {
        console.log(`Invalid order!`);
      } else {
        taxes = totalPriceWithoutVat * 0.2;
        finalPrice = totalPriceWithoutVat + taxes;
        if (array[i] == "special") {
          finalPrice = finalPrice * 0.9;
        }
        console.log(
          `Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPriceWithoutVat.toFixed(
            2
          )}$\nTaxes: ${taxes.toFixed(
            2
          )}$\n-----------\nTotal price: ${finalPrice.toFixed(2)}$`
        );
      }
    }
    if (Number(array[i]) < 0) {
      console.log(`Invalid price!`);
    } else {
      totalPriceWithoutVat += Number(array[i]);
    }
  }
}
solve(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
solve(["1023", "15", "-20", "-5.50", "450", "20", "17.66", "19.30", "regular"]);
solve(["regular"]);
