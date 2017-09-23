const LENGTH = {term:['mm', 'cm', 'dm', 'm', 'km'], multiply:[1, 10, 100, 1000, 1000000]};
const WEIGHT = {term:['mcg', 'mg', 'g', 'kg', 't'], multiply:[1, 1000, 1000000, 1000000000, 1000000000000]};
/*if(process.argv.LENGTH == 6 && !isNaN(process.argv[2 + 0]) && process.argv[2 + 2] === 'to' && ((LENGTH.term.includes(process.argv[2 + 1]) && LENGTH.term.includes(process.argv[2 + 3])) || (WEIGHT.term.includes(process.argv[2 + 1]) && WEIGHT.term.includes(process.argv[2 + 3]))))
    console.log('ja');*/


//console.log(LENGTH.term.includes(process.argv[3]));
//console.log(LENGTH.term.includes(process.argv[5]));
console.log((LENGTH.term.includes(process.argv[2 + 1]) && LENGTH.term.includes(process.argv[2 + 3])) || (WEIGHT.term.includes(process.argv[2 + 1]) && WEIGHT.term.includes(process.argv[2 + 3])));
//console.log(`${LENGTH.term.includes('mm')}\n${WEIGHT.multiply}`);

// Error ausgeben von falschen Argumenten
/*function errorOut() {
    console.error('Invalid arguments, usage: node converter.js <float> <LENGTH, WEIGHT in short Terms> to <LENGTH, WEIGHT in short Terms>');
    process.exit(-1);
}*/