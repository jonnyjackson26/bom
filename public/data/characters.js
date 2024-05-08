class Character {
    constructor({ name, fatherName, motherName }) {
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
    }
}

const characters = [
    new Character({ name: "lehi", fatherName: null, motherName: null }),
    new Character({ name: "nephi", fatherName: "lehi", motherName: "sariah" }),
    new Character({ name: "laman", fatherName: "lehi", motherName: "sariah" }),
    new Character({ name: "nephisSon", fatherName: "nephi", motherName: "oldestDaughterOfIshmael" })
]
export default characters