import fs from 'fs/promises';

async function readFile(filename)
{
	const inputs = await fs.readFile(filename, 'utf-8')

	return inputs.trim().split('\n');
}

const chooson = {
	A : 'ROCK',
	B : 'PAPER',
	C : 'SCISSOR',
	X : 'ROCK',
	Y : 'PAPER',
	Z : 'SCISSOR',
}


const choosonPoints = {
	'ROCK' : 1,
	'PAPER' : 2,
	'SCISSOR' : 3,
}

async function solveOne(filename)
{
	const inputs = await readFile(filename);


	let totalsPoints   = 0;
	let opp = 0;
	let me  = 0;
	inputs?.forEach(async(input) => {

		const array = input.split(' ');

		const opponentChoose = chooson[array[0]];
		const meChoose       = chooson[array[1]];

		const opponentPoint  = choosonPoints[opponentChoose]
		const mePoint        = choosonPoints[meChoose]

		let totalOpponentPoints  = 0;
		let mePoints             = 0;

		totalOpponentPoints += opponentPoint
		mePoints            += mePoint

		if(opponentChoose == meChoose){ // draws
			totalOpponentPoints += 3
			mePoints            += 3 
		}

		if(opponentChoose == 'ROCK' && meChoose == 'PAPER'){
			mePoints       += 6;
		}

		if(opponentChoose == 'ROCK' && meChoose == 'SCISSOR'){
			totalOpponentPoints += 6;

		}


		if(opponentChoose == 'PAPER' && meChoose == 'ROCK'){
			totalOpponentPoints += 6;

		}

		if(opponentChoose == 'PAPER' && meChoose == 'SCISSOR'){
			mePoints       += 6;

		}

		if(opponentChoose == 'SCISSOR' && meChoose == 'ROCK'){
			mePoints       += 6;

		}

		if(opponentChoose == 'SCISSOR' && meChoose == 'PAPER'){
			totalOpponentPoints += 6;

		}

		opp  += totalOpponentPoints
		me   += mePoints
		totalsPoints              += (totalOpponentPoints + mePoints)

	})

	return me;
}

const answer = await solveOne("test.txt")
console.log( answer,'\n')


const ourP = async (opp, me) => {
	if(opp == me){ // draws
		return me + 3;
	}

	if(opp == 'ROCK' && me == 'PAPER'){
		return me +  6;
	}

	if(opp == 'PAPER' && me == 'SCISSOR'){
		return me +  6;

	}

	if(opp == 'SCISSOR' && me == 'ROCK'){
		return me +  6;

	}

	return me;
}

// Rules
// X -lose
// Y - Draw
// Z - WIn
// 

const loseMap = new Map([
	['ROCK', 'SCISSOR'],
	['PAPER', 'ROCK'],
	['SCISSOR', 'PAPER'],
])

const winMap = new Map([
	['ROCK', 'PAPER'],
	['PAPER', 'SCISSOR'],
	['SCISSOR', 'ROCK'],
])

const soln = {
	A:{
		X : 1, //lose,
		Y : 2, //draw,
		Z : 3, //win,
	},
	B: {
		X : 1,
		Y : 2,
		Z : 3,
	},
	C: {
		X : 1,
		Y : 2,
		Z : 3,
	}
}

async function solveTwo(filename){
	const inputs = await readFile(filename);

	let me  = 0;
	let total = 0;

	inputs.forEach(async (input) => {

		const array = input.split(' ');

		const opponentChoose = chooson[array[0]];
		const meChoose       = chooson[array[1]];

		const opponentPoint  = choosonPoints[opponentChoose]
		const mePoint        = choosonPoints[meChoose]

		let mePoints         = 0;

		// A - ROCK
		if(opponentChoose == 'ROCK'){ 
			if(array[1] == 'Y'){ // Y draw
				// points
				// 1 - rock 
				// 3 - cause draw
				mePoints += 4
				// console.log(choosonPoints[array[0]]);
			}

			if(array[1] == 'X'){ // X lose
				// points
				// 3 - scissor 
				// 0 - cause lost 
				
				mePoints += 3
				// console.log(choosonPoints[array[0]]);
			}

			if(array[1] == 'Z'){ // Z win
				// points
				// 2 - paper 
				// 6 - cause win 
				
				mePoints += 8;
			}

		}

		// B - PAPER 
		if(opponentChoose == 'PAPER'){ 
			if(array[1] == 'Y'){ // Y draw
				// points
				// 2 - paper 
				// 3 - cause draw
				mePoints += 5
				// console.log(choosonPoints[array[0]]);
			}

			if(array[1] == 'X'){ // X lose
				// points
				// 1 - rock 
				// 0 - cause lost 
				
				mePoints += 1
				// console.log(choosonPoints[array[0]]);
			}

			if(array[1] == 'Z'){ // Z win
				// points
				// 3 - scissor
				// 6 - cause win 
				
				mePoints += 9;
			}

		}


		// C - PAPER 
		if(opponentChoose == 'SCISSOR'){ 
			if(array[1] == 'Y'){ // Y draw
				// points
				// 3 - scissor 
				// 3 - cause draw
				mePoints += 6
				// console.log(choosonPoints[array[0]]);
			}

			if(array[1] == 'X'){ // X lose
				// points
				// 2 - paper 
				// 0 - cause lost 
				
				mePoints += 2
				// console.log(choosonPoints[array[0]]);
			}

			if(array[1] == 'Z'){ // Z win
				// points
				// 1 - rock
				// 6 - cause win 
				
				mePoints += 7;
			}

		}
		
		me += mePoints;

	})

	return me;
}

const soln2 = await solveTwo("sample.txt")
console.log(soln2)