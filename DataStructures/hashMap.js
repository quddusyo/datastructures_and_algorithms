// Hash map class
class hashMap {
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    hash(key, arrayLen){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            let total = (total + WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, val){
        let index = this.hash(key);
        if (!this.keyMap[index]) {
            this.keyMap = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key){
        let index = this.hash(key);
        if (!this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++){
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
    }

    keys(){
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!this.keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    values(){
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!this.valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return valuesArr;
    }
}