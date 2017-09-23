const LENGTH = {terms:['mm', 'cm', 'm'], multiply:[1, 10, 1000]};
const WEIGHT = {terms:['g', 'kg'], multiply:[1, 1000]};
 
if(!(process.argv.length == 6 && !isNaN(process.argv[2 + 0]) && process.argv[2 + 2] === 'to' && ((LENGTH.terms.includes(process.argv[2 + 1]) && LENGTH.terms.includes(process.argv[2 + 3])) || (WEIGHT.terms.includes(process.argv[2 + 1]) && WEIGHT.terms.includes(process.argv[2 + 3]))))) {
    console.log(`Invalid parameters`);
    process.exit(-1);
}
console.log(`${process.argv[2 + 0]} ${process.argv[2 + 1]} are ${parseFloat(process.argv[2]) * (LENGTH.terms.includes(process.argv[2 + 1]) ? (LENGTH.multiply[LENGTH.terms.indexOf(process.argv[2 + 1])] / LENGTH.multiply[LENGTH.terms.indexOf(process.argv[2 + 3])]) : (WEIGHT.multiply[WEIGHT.terms.indexOf(process.argv[2 + 1])] / WEIGHT.multiply[WEIGHT.terms.indexOf(process.argv[2 + 3])]))} ${process.argv[2 + 3]}`);