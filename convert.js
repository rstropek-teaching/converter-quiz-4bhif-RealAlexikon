const length = {term:['mm', 'cm', 'dm', 'm', 'km'], multiply:[1, 10, 100, 1000, 1000000]};
const weight = {term:['mcg', 'mg', 'g', 'kg', 't'], multiply:[1, 1000, 1000000, 1000000000, 1000000000000]};

console.log(`${length.term.includes('mm')}\n${weight.multiply}`);

/*

// node convert.js 5.5 m to cm

// Array zum Speichern der Argumente
var input = process.argv.slice(2);



// Prüfen, ob Argumente Stimmen
if(input.length != 4) {
    errorOut();
}
else if(isNaN(input[0])) {
    errorOut();
}
else if(checkConvertType(input[1], input[3])) {
    errorOut();
}
else if(input[3] !== 'to') {
    errorOut();
}



// Error ausgeben von falschen Argumenten
function errorOut() {
    console.error('Invalid arguments, usage: node converter.js <float> <length, weight in short Terms> to <length, weight in short Terms>');
    process.exit(-1);
}*/