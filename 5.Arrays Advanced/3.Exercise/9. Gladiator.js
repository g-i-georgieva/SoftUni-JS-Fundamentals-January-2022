function gladiatorEquipment(array) {
    let inventory = array[0].split(" ");

    for (let element of array) {
      let token = element.split(" ");
      let command = token[0];
   
      if (command === "Buy") {
        let item = token[1];
        let results = inventory.indexOf(item);
        if (results === -1) {
          inventory.push(item);
        }
      } else if (command === "Trash") {
        let item = token[1]; 
        let results = inventory.indexOf(item); 
        if (results !== -1) {
          for (let i = 0; i < inventory.length; i++) {
            if (inventory[i] === item) {
              inventory.splice(results, 1);
            }
          }
        }
      } else if (command === "Repair") {
        let item = token[1];
        let results = inventory.indexOf(item); //1
        if (results !== -1) {
          for (let i = 0; i < inventory.length; i++) {
            let removedItem = inventory.splice(results, 1);
            inventory.push(...removedItem);
          }
        }
      } else if (command === "Upgrade") {
        let item = token[1].split("-"); //SWORD
        let results = inventory.indexOf(item[0]); //0
        if (results !== -1) {
          for (let i = 0; i < inventory.length; i++) {
            if (inventory[i] === item[0]) {
              inventory.splice(results + 1, 0, `${item[0]}:${item[1]}`);
            }
          }
        }
      }
    }
    console.log(inventory.join(" "));
  }
  gladiatorEquipment(['SWORD Shield Spear',
  'Buy Bag',
  'Buy Bag',
  'Trash Shield',
  'Repair Spear',
  'Upgrade SWORD-Steel']
  )