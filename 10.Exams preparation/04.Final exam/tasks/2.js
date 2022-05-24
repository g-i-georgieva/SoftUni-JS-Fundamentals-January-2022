function solve(input) {
  let num = Number(input.shift());
  let pattern = /@#+(([A-Z][A-Za-z\d]{4,})[A-Z])@#+/;

  for (let i = 0; i < num; i++) {
    let product = input[i];
    let match = pattern.exec(product);
    let productGroup = "";
    let countDigits = 0;
    if (match === null) {
      console.log(`Invalid barcode`);
    } else {
      let word = match[2];
      for (let el of word) {
        if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
          countDigits++;
          productGroup += el;
        }
      }
      if (countDigits === 0) {
        productGroup = "00";
      }

      console.log(`Product group: ${productGroup}`);
    }
  }
}
solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
