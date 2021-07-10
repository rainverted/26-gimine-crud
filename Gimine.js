class Gimine {
    constructor() {
        this.list = [];
    }
    gime(item) {
        item.married = false;
        this.list.push(item);
    }
    giminesMedis() {
        for (let i = 0; i < this.list.length; i++) {
            const bajoras = this.list[i];               //paprastesniam skaitymui
            let statusas = '';
            if (bajoras.married === true) {
                statusas = 'yra';
            } else {
                statusas = 'nera';
            }
            console.log(`${i + 1.} ${bajoras.name} gime ${bajoras.year} ir ${statusas} vedes.`);
            // console.log((i + 1) + '.' + `${this.list[i].name} gime ${this.list[i].year} ir nera vedes.`);    //nemaisyti skirtingu uzrasymo budu
        }
    }
    zmogausInformacija(index) {
        //console.log(this.list[index]);
    }
    vestuves(index) {
        this.list[index].married = true;

    }

    mire(index) {
        console.log('Liko gyvi:');
        console.log('===============');
        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                updatedList.push(this.list[i]);
            }
        }
        this.list = updatedList;
    }

    skyrybos(index) {
        console.log('Issiskyre:');
        console.log('===============');
        this.list[index].married = false;
    }
}

module.exports = Gimine;