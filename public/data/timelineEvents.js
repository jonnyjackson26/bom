class Event {
    constructor({ id, description, reference, date, dateReference }) {
        this.id = id;
        this.description = description;
        this.reference = reference;
        this.date = date;
        this.dateReference = dateReference;
    }
}


const eventsData = [
    { id: "first", description: "Lehi is commanded to leave Jerusalem", reference: "1 Nephi 2:2", date: "600 BC, First year of the reign of Zedekiah, king of Judah", dateReference: "1 Nephi 19:8, 2 Nephi 25:19, 1 Nephi 1:4" },
    { id: "second", description: "Nephi makes a boat", reference: "1 Nephi 17:8", date: "592 BC", dateReference: "1 Nephi 17:4" },
    { id: "third", description: "Enos prays", reference: "Enos 1:12-18", date: "545 BC", dateReference: "Jacob 1:1" },
    { id: "fourth", description: "They found Coriantumr", reference: "Omni 1:x", date: "280 BC", dateReference: "Omni 1:5" },
];




const timelineEvents = eventsData.map(data => new Event(data));
export default timelineEvents;