function secretChatProblem(input) {
    //take encoded message
    let message = input.shift();
    //console.log(message); //heVVodar!gniV
    for (let element of input) {
      let tokens = element.split(":|:");
      //@ts-expect-errorconsole.log(tokens); //['ChangeAll', 'V', 'l']
      let command = tokens[0];
      //console.log(command); //ChangeAll...
   
      if (command === "InsertSpace") {
        let index = tokens[1];
        let firstHalf = message.substring(0, index);
        let secondHalf = message.substring(index);
        message = firstHalf + " " + secondHalf;
        console.log(message);
      } else if (command === "Reverse") {
        let substr = tokens[1];
        if (message.includes(substr)) {
          let splitted = message.split(substr).join("");
          substr = substr.split("").reverse().join("");
          message = splitted + substr;
          console.log(message);
        } else {
          console.log("error");
        }
      } else if (command === "ChangeAll") {
        let substr = tokens[1];
        let replacement = tokens[2];
        message = message.split(substr);
        message = message.join(replacement);
        console.log(message);
      } else if (command === "Reveal") {
        console.log(`You have a new text message: ${message}`);
        break;
      }
    }
  }
  secretChatProblem([
    "heVVodar!gniV",
    "ChangeAll:|:V:|:l",
    "Reverse:|:!gnil",
    "InsertSpace:|:5",
    "Reveal",
  ]);
 
  secretChatProblem([
    "Hiware?uiy",
    "ChangeAll:|:i:|:o",
    "Reverse:|:?uoy",
    "Reverse:|:jd",
    "InsertSpace:|:3",
    "InsertSpace:|:7",
    "Reveal",
  ]);