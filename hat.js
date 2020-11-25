var fs = require("fs");

class Hat {
    static pickNames() {
        // Names & Restrictions
        var people = JSON.parse(fs.readFileSync("people.json").toString());
        var remainingNames = people.map(x => x.name);

        // Randomise
        var links = [];

        people.forEach(person => {
            var buysFor;
            var availableNames = remainingNames;

            availableNames = availableNames.filter(x => x !== person.name);
            if (person.exceptions) {
                availableNames = availableNames.filter(x => person.exceptions.indexOf(x) < 0 ? x : undefined);
            }
            availableNames = availableNames.filter(x => x !== undefined);

            var random = Math.floor(Math.random() * availableNames.length);
            buysFor = availableNames[random];
            remainingNames = remainingNames.filter(x => x !== buysFor);

            links.push({
                person,
                buysFor
            })
        });

        return links;
    }
}

module.exports = Hat;