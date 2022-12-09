import fs from 'fs/promises';

async function readFile(filename)
{
	const inputs = await fs.readFile(filename, 'utf-8')

	return inputs.trim().split('\n');
}


async function solve(filename)
{
	const inputs = await readFile(filename);

	let total        = [];
	let currentNum   = 0;

	inputs.forEach((input) => {

		if(input == ''){
			total.push(currentNum)
			currentNum = 0

		} else {
			currentNum += Number(input);
		}

	})

	// Push the last one cause no empty string on last one	
    total.push(currentNum)

	return total;
}

const data =  await solve('sample.txt')

const first  =  Math.max(...data);

let filtered = data.sort((a, b) => a - b)

console.log(first, '\n');
console.log([filtered.pop(), filtered.pop(), filtered.pop()].reduce((sum , v) => sum + v));
