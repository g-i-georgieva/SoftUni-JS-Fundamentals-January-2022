function tseamAccount(arrOfGames) {
    let gamesInAccount = arrOfGames[0];
    let splitted = gamesInAccount.split(' ');
    let operation;
    let action;
    let game;
    let findGame;
    let splittedGame;
    let extensionName;
    arrOfGames.shift();
    for (let i = 0; i < arrOfGames.length - 1; i++) {
        operation = arrOfGames[i].split(' ');
        action = operation[0];
        game = operation[1];
        if (action == "Install" && !splitted.includes(game)) {
            splitted.push(game);
        }
        if (action == "Uninstall" && splitted.includes(game)) {
            findGame = splitted.indexOf(game)
            splitted.splice(findGame, 1)
        }
        if (action == "Update" && splitted.includes(game)) {
            findGame = splitted.indexOf(game)
            splitted.splice(findGame, 1)
            splitted.push(game)
        }
        if (action == "Expansion") {
            splittedGame = game.split('-');
            extensionName = splittedGame[1];
            if (splitted.includes(splittedGame[0])) {
                extensionPlusGame = splittedGame[0] + ':' + splittedGame[1];
                findGame = splitted.indexOf(splittedGame[0])
                splitted.splice(findGame + 1, 0, extensionPlusGame)
                // splitted[findGame] = `${splittedGame[0]} ${extensionPlusGame}`
            }
        }
    }
    console.log(splitted.join(' '));
}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Unistall WoW', 'Expansion Civ-V', 'Play!'])