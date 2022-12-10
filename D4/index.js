import fs from 'fs/promises'

async function readFile(filename){
	const data = await fs.readFile(filename, 'utf-8')
	return data.trim().split('\n')
}


async function solveOne(filename){

	const assignments = await readFile(filename);

	const array = assignments.map((assignment, index) => {

		let pair     = assignment.split(',');
		let firstArr = pair[0].split('-')
		let lastArr  = pair[1].split('-')

		return [Number(firstArr[0]), Number(firstArr[1]), Number(lastArr[0]), Number(lastArr[1])];

	})	

	const filtered = array.filter(([start1, end1, start2, end2]) => {
		return (start1 >= start2 && end1 <= end2) || (start1 <= start2 && end1 >= end2);

	});

	
	return filtered.length;
}

const solution1 = await solveOne('sample.txt');
console.log(solution1)

async function solveTwo(filename){
	
	const assignments = await readFile(filename);

	const array = assignments.map((assignment, index) => {

		let pair     = assignment.split(',');
		let firstArr = pair[0].split('-')
		let lastArr  = pair[1].split('-')

		return [Number(firstArr[0]), Number(firstArr[1]), Number(lastArr[0]), Number(lastArr[1])];

	})	

	const filtered = array.filter(([start1, end1, start2, end2]) => {
		return (start1 <= end2 && start2 <= end1);

	});

	
	return filtered.length;
}

const solution2 = await solveTwo('sample.txt');
console.log(solution2)

