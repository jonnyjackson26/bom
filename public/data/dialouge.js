class Dialogue {
    constructor(who, bookIndex, chapterIndex, startVerse, endVerse, startWord, endWord) {
        this.who = who;
        this.bookIndex = bookIndex;
        this.chapterIndex = chapterIndex;
        this.startVerse = startVerse;
        this.endVerse = endVerse;
        this.startWord = startWord;
        this.endWord = endWord;
    }
}

//bookIndex 0 is 1 nephi.    chapterIndex 1 is the the first chapter
const dialogue = [
    new Dialogue("nephi", 0, 1, 1, 1, 1, 3),
    new Dialogue("lehi", 0, 1, 2, 8, 3, 6),
    new Dialogue("god", 0, 2, 4, 7, 2, 4),
    new Dialogue("nephi", 1, 1, 1, 1, 1, 3),
    new Dialogue("lehi", 1, 2, 2, 8, 5, 10),
    new Dialogue("god", 1, 4, 4, 7, 2, 3),
];

export default dialogue;
