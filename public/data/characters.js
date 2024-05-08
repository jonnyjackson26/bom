class Character {
    constructor({ id, name, fatherId, motherId, childrenIDs, spouseIDs, descendentOf, description, nicknames, gender }) {
        this.id = id;
        this.name = name;
        this.fatherId = fatherId;
        this.motherId = motherId;
        this.childrenIDs = childrenIDs;
        this.spouseIDs = spouseIDs;
        this.descendentOf = descendentOf;
        this.description = description;
        this.nicknames = nicknames;
        this.gender = gender;
    }
}

/*const characterData = [
    { id: "<lehi>", name: "Lehi", fatherId: null, motherId: null, childrenIDs: ["<nephi>", "<laman>", "<lemuel>", "<sam>", "<jacobSonOfLehi>", "<josephSonOfLehi>"], spouseIDs: ["<sariah>"], descendentOf: "<josephOfOld> bur also manasses alma 10:3", description: "1 Nephi 1:4", nicknames: [], gender: 0 },
    { id: "<sariah>", name: "Sariah", fatherId: null, motherId: null, childrenIDs: ["<nephi>", "<laman>", "<lemuel>", "<sam>", "<jacobSonOfLehi>", "<josephSonOfLehi>"], spouseIDs: ["<lehi>"], descendentOf: "1 Nephi 2:5", description: "", nicknames: [], gender: 1 },
    { id: "<nephi>", name: "Nephi", fatherId: "<lehi>", motherId: "<sariah>", childrenIDs: ["<nephisKids>"], spouseIDs: ["<daughterOfIshmael2>"], descendentOf: "", description: "1 Nephi 1:1, 16:7", nicknames: [], gender: 0 },
    { id: "<laman>", name: "Laman", fatherId: "<lehi>", motherId: "<sariah>", childrenIDs: ["<lamansKids>"], spouseIDs: ["<daughterOfIshmael3>"], descendentOf: "", description: "1 Nephi 2:5", nicknames: [], gender: 0 },
    { id: "<lemuel>", name: "Lemuel", fatherId: "<lehi>", motherId: "<sariah>", childrenIDs: ["<lemuelsKids>"], spouseIDs: ["<daughterOfIshmael4>"], descendentOf: "", description: "1 Nephi 2:5", nicknames: [], gender: 0 },
    { id: "<sam>", name: "Sam", fatherId: "<lehi>", motherId: "<sariah>", childrenIDs: ["<samsKids>"], spouseIDs: ["<daughterOfIshmael5>"], descendentOf: "", description: "1 Nephi 2:5", nicknames: [], gender: 0 },
    { id: "<jacobSonOfLehi>", name: "Jacob", fatherId: "<lehi>", motherId: "<sariah>", childrenIDs: ["<enos>"], spouseIDs: [], descendentOf: "", description: "1 Nephi 18:7", nicknames: [], gender: 0 },
    { id: "<josephSonOfLehi>", name: "Joseph", fatherId: "<lehi>", motherId: "<sariah>", childrenIDs: [], spouseIDs: [], descendentOf: "", description: "1 Nephi 18:7", nicknames: [], gender: 0 },
    { id: "<laban>", name: "Laban", fatherId: null, motherId: null, childrenIDs: [], spouseIDs: [], descendentOf: "", description: "1 Nephi 3:3", nicknames: [], gender: 0 },
    { id: "<zoram>", name: "Zoram", fatherId: null, motherId: "<oldestDaughterOfIshmael>", childrenIDs: ["<zoramAndOldestDaughterOfIshmaelsKids>"], spouseIDs: ["<oldestDaughterOfIshmael>"], descendentOf: "", description: "1 Nephi 4:20, 35", nicknames: [], gender: 0 },
    { id: "<ishmael>", name: "Ishmael", fatherId: null, motherId: "<ishmaelsWife>", childrenIDs: ["<oldestDaughterOfIshmael>", "<daughterOfIshmael2>", "<daughterOfIshmael3>", "<daughterOfIshmael4>", "<daughterOfIshmael5>", "<sonOfIshmael1>", "<sonOfIshmael2>"], spouseIDs: [], descendentOf: "", description: "1 Nephi 7:2", nicknames: [], gender: 0 },
    { id: "<jacobOfOld>", name: "Jacob", fatherId: null, motherId: null, childrenIDs: [], spouseIDs: [], descendentOf: "", description: "1 Nephi 5:14", nicknames: [], gender: 0 },
    { id: "<joseOfOld>", name: "Joseph", fatherId: null, motherId: null, childrenIDs: [], spouseIDs: [], descendentOf: "", description: "1 Nephi 5:14", nicknames: [], gender: 0 },
    { id: "<zedekiah>", name: "Zedekiah", fatherId: null, motherId: null, childrenIDs: ["<mulek>"], spouseIDs: [], descendentOf: "<josephOfOld>", description: "1 Nephi 1:4", nicknames: [], gender: 0 },
    { id: "<mulek>", name: "Mulek", fatherId: "<zedekiah>", motherId: null, childrenIDs: [], spouseIDs: [], descendentOf: "", description: "Mosiah 25:2", nicknames: [], gender: 0 },
    { id: "<ishmaelsWife>", name: "Ishmaels Wife", fatherId: null, motherId: "<ishmael>", childrenIDs: ["<oldestDaughterOfIshmael>", "<daughterOfIshmael2>", "<daughterOfIshmael3>", "<daughterOfIshmael4>", "<daughterOfIshmael5>", "<sonOfIshmael1>", "<sonOfIshmael2>"], spouseIDs: [], descendentOf: "", description: "1 Nephi 7:6", nicknames: [], gender: 1 },
    { id: "<oldestDaughterOfIshmael>", name: "Oldest daughter of Ishmael", fatherId: "<ishmael>", motherId: "<ishmaelsWife>", childrenIDs: ["<zoramAndOldestDaughterOfIshmaelsKids>"], spouseIDs: ["<zoram>"], descendentOf: "", description: "1 Nephi 7:6, 16:7", nicknames: [], gender: 1 },
    { id: "<daughterOfIshmael2>", name: "Other daughter of Ishmael", fatherId: "<ishmael>", motherId: "<ishmaelsWife>", childrenIDs: ["<nephisKids>"], spouseIDs: ["<nephi>"], descendentOf: "", description: "1 Nephi 7:6, 18:19, 16:7", nicknames: [], gender: 1 },
    { id: "<daughterOfIshmael3>", name: "Other daughter of Ishmael", fatherId: "<ishmael>", motherId: "<ishmaelsWife>", childrenIDs: ["<lamansKids>"], spouseIDs: ["<laman>"], descendentOf: "", description: "1 Nephi 7:6, 16:7", nicknames: [], gender: 1 },
    { id: "<daughterOfIshmael4>", name: "Other daughter of Ishmael", fatherId: "<ishmael>", motherId: "<ishmaelsWife>", childrenIDs: ["<lemuelsKids>"], spouseIDs: ["<lemuel>"], descendentOf: "", description: "1 Nephi 7:6, 16:7", nicknames: [], gender: 1 },
    { id: "<daughterOfIshmael5>", name: "Other daughter of Ishmael", fatherId: "<ishmael>", motherId: "<ishmaelsWife>", childrenIDs: ["<samsKids>"], spouseIDs: ["<sam>"], descendentOf: "", description: "1 Nephi 7:6, 16:7", nicknames: [], gender: 1 },
    { id: "<sonOfIshmael1>", name: "Son of Ishmael", fatherId: "<ishmael>", motherId: "<ishmaelsWife>", childrenIDs: [], spouseIDs: [], descendentOf: "", description: "1 Nephi 7:6, 16:7", nicknames: [], gender: 0 },
    { id: "<sonOfIshmael2>", name: "Other son of Ishmael", fatherId: "<ishmael>", motherId: "<ishmaelsWife>", childrenIDs: [], spouseIDs: [], descendentOf: "", description: "1 Nephi 7:6, 16:7", nicknames: [], gender: 0 },
    { id: "<zoramAndOldestDaughterOfIshmaelsKids>", name: "", fatherId: "<zoram>", motherId: "<oldestDaughterOfIshmael>", childrenIDs: [], spouseIDs: [], descendentOf: "", description: "", nicknames: [], gender: 0 },
    { id: "<nephisKids>", name: "", fatherId: "<nephi>", motherId: "<daughterOfIshmael2>", childrenIDs: [], spouseIDs: [], descendentOf: "1 Nephi 18:19", description: "", nicknames: [], gender: 0 },
    { id: "<lamansKids>", name: "", fatherId: "<laman>", motherId: "<daughterOfIshmael3>", childrenIDs: [], spouseIDs: [], descendentOf: "2 Nephi 4:8", description: "", nicknames: [], gender: 0 },
    { id: "<lemuelsKids>", name: "", fatherId: "<lemuel>", motherId: "<daughterOfIshmael4>", childrenIDs: [], spouseIDs: [], descendentOf: "2 Nephi 4:8", description: "", nicknames: [], gender: 0 },
    { id: "<samsKids>", name: "", fatherId: "<sam>", motherId: "<daughterOfIshmael5>", childrenIDs: [], spouseIDs: [], descendentOf: "", description: "", nicknames: [], gender: 0 },
    { id: "<enos>", name: "Enos", fatherId: "<jacobSonOfLehi>", motherId: null, childrenIDs: ["<jarom>"], spouseIDs: [], descendentOf: "", description: "Jacob 7:27", nicknames: [], gender: 0 },
    { id: "<jarom>", name: "Jarom", fatherId: "<enos>", motherId: null, childrenIDs: ["<omni>"], spouseIDs: [], descendentOf: "", description: "Jarom 1:1", nicknames: [], gender: 0 },
    { id: "<omni>", name: "Omni", fatherId: "<jarom>", motherId: null, childrenIDs: ["<amaron>", "<chemish>"], spouseIDs: [], descendentOf: "", description: "Jarom 1:15", nicknames: [], gender: 0 },
    { id: "<amaron>", name: "Amaron", fatherId: "<omni>", motherId: null, childrenIDs: [], spouseIDs: [], descendentOf: "", description: "Omni 1:3 im assuming theyre brothers by parte de padre", nicknames: [], gender: 0 },
    { id: "<chemish>", name: "Chemish", fatherId: "<omni>", motherId: null, childrenIDs: ["<abinadom>"], spouseIDs: [], descendentOf: "", description: "Omni 1:8", nicknames: [], gender: 0 },
    { id: "<abinadom>", name: "Abinadom", fatherId: "<chemish>", motherId: null, childrenIDs: ["<amaleki>"], spouseIDs: [], descendentOf: "", description: "had no kids omni 1:10", nicknames: [], gender: 0 },
    { id: "<amaleki>", name: "Amaleki", fatherId: "<abinadom>", motherId: null, childrenIDs: [], spouseIDs: [], descendentOf: "", description: "omni 1:12", nicknames: [], gender: 0 },
    { id: "<amalekisBrother>", name: "Amalekis brother", fatherId: null, motherId: null, childrenIDs: [], spouseIDs: [], descendentOf: "", description: "omni 1:30", nicknames: [], gender: 0 },
    { id: "<mosiahOlder>", name: "", fatherId: null, motherId: "<kingBenjamin>", childrenIDs: [], spouseIDs: [], descendentOf: "", description: "omni 1:12", nicknames: [], gender: 0 },
    { id: "<kingBenjamin>", name: "King Benjamin", fatherId: null, motherId: "<mosiahOlder>", childrenIDs: ["<mosiahYounger>", "<Helorum>", "<HelamanSonOfKingBenjamin>"], spouseIDs: [], descendentOf: "", description: "omni 1:23", nicknames: [], gender: 0 },
    { id: "<mosiahYounger>", name: "", fatherId: "<kingBenjamin>", motherId: null, childrenIDs: [], spouseIDs: [], descendentOf: "", description: "", nicknames: [], gender: 0 },
    { id: "<Helorum>", name: "", fatherId: "<kingBenjamin>", motherId: null, childrenIDs: [], spouseIDs: [], descendentOf: "", description: "", nicknames: [], gender: 0 },
    { id: "<HelamanSonOfKingBenjamin>", name: "Helaman", fatherId: "<kingBenjamin>", motherId: null, childrenIDs: [], spouseIDs: [], descendentOf: "", description: "", nicknames: [], gender: 0 },
];*/


const characterData = [
    { id: "<jonny>", name: "jonny", fatherId: "<joe>", motherId: "<sarah>", childrenIDs: [], spouseIDs: [], descendentOf: null, description: null, nicknames: [], gender: 0 },
    { id: "<jessy>", name: "jessy", fatherId: "<joe>", motherId: "<sarah>", childrenIDs: [], spouseIDs: [], descendentOf: null, description: null, nicknames: [], gender: 0 },
    { id: "<jacob>", name: "jacob", fatherId: "<joe>", motherId: "<sarah>", childrenIDs: [], spouseIDs: [], descendentOf: null, description: null, nicknames: [], gender: 0 },
    { id: "<sarah>", name: "sarah", fatherId: "<raymond>", motherId: "<camila>", childrenIDs: ["<jonny>", "<jessy>", "<jacob>"], spouseIDs: ["<joe>"], descendentOf: null, description: null, nicknames: [], gender: 0 },
    { id: "<joe>", name: "joe", fatherId: "<monte>", motherId: "<patricia>", childrenIDs: ["<jonny>", "<jessy>", "<jacob>"], spouseIDs: ["<sarah>"], descendentOf: null, description: null, nicknames: [], gender: 0 },
    { id: "<camila>", name: "camila", fatherId: "<ben>", motherId: "<hazel>", childrenIDs: ["<sarah>", "<matt>", "<elisa>", "<jenni>"], spouseIDs: ["<raymond>"], descendentOf: null, description: null, nicknames: [], gender: 0 },

];



const characters = characterData.map(data => new Character(data));
export default characters;
