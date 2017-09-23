const LENGTH = {terms:['mm', 'cm', 'm'], multiply:[1, 10, 1000]};
const WEIGHT = {terms:['g', 'kg'], multiply:[1, 1000]};

if(process.argv.length == 6 && !isNaN(process.argv[2 + 0]) && process.argv[2 + 2] === 'to' && ((LENGTH.terms.includes(process.argv[2 + 1]) && LENGTH.terms.includes(process.argv[2 + 3])) || (WEIGHT.terms.includes(process.argv[2 + 1]) && WEIGHT.terms.includes(process.argv[2 + 3]))))
    console.log(`${process.argv[2 + 0]} ${process.argv[2 + 1]} are ${parseFloat(process.argv[2]) * (LENGTH.terms.includes(process.argv[2 + 1]) ? (LENGTH.multiply[LENGTH.terms.indexOf(process.argv[2 + 1])] / LENGTH.multiply[LENGTH.terms.indexOf(process.argv[2 + 3])]) : (WEIGHT.multiply[WEIGHT.terms.indexOf(process.argv[2 + 1])] / WEIGHT.multiply[WEIGHT.terms.indexOf(process.argv[2 + 3])]))} ${process.argv[2 + 3]}`);
else
    console.log(`Invalid arguments, usage: node converter.js <number> <LENGTH, WEIGHT in short terms> to <LENGTH, WEIGHT in short terms>\nLength in short terms: ${LENGTH.terms}\nWeight in short terms: ${WEIGHT.terms}`);