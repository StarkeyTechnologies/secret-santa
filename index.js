var hat = require("./hat");
var sms = require("./sms");

var mappedNames;
var isComplete;

var count = 0;

while (!isComplete) {
    mappedNames = hat.pickNames();

    var undefinedNames = mappedNames.map(x => x.buysFor).filter(x => x === undefined);

    isComplete = undefinedNames.length === 0;

    count++;
}

mappedNames.forEach(async link => {
    var name = link.person.name;
    var buysFor = link.buysFor;
    var number = link.person.phone;

    var message = `Hello ${name}, you are the secret santa for ${buysFor}. The budget is £30. Merry Christmas!`;
    
    await sms.send("SecretSanta", number, message);
})