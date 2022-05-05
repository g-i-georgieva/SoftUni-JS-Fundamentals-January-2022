function songs(arr) {
    class Song {
        constructor(typeList, name, time) {

            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = arr.shift();
    let typeList = arr.pop()
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split("_");
        let typeOfSong = token[0]
        let name = token[1]
        let time = token[2]

        if (typeList == "all") {
            console.log(name);
        } else if (typeList == typeOfSong) {
            console.log(name);
        }
    }



}