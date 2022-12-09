// console.log(solution);
//vJrwpWtwJgWrhcsFMMfFFhFp
//OoutCome
//vJrwpWtwJgWr  - hcsFMMfFFhFp
//p - p
//16 
//
//jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
//Outcome
//jqHRNqRjqzjGDLGL - rsFMfFZSrLrFZsSL
//L - L
//38 
//
//
//
import fs from 'fs/promises'

async function readFile(filename){
	const data = await fs.readFile(filename, 'utf-8')
	// console.log(data);
	return data.trim().split('\n')
}

const priority = {
	a : 1,
	b : 2,
	c : 3,
	d : 4,
	e : 5,
	f : 6,
	g : 7,
	h : 8,
	i : 9,
	j : 10,
	k : 11,
	l : 12,
	m : 13,
	n : 14,
	o : 15,
	p : 16,
	q : 17,
	r : 18,
	s : 19,
	t : 20,
	u : 21,
	v : 22,
	w : 23,
	x : 24,
	y : 25,
	z : 26,

	A : 27,
	B : 28,
	C : 29,
	D : 30,
	E : 31,
	F : 32,
	G : 33,
	H : 34,
	I : 35,
	J : 36,
	K : 37,
	L : 38,
	M : 39,
	N : 40,
	O : 41,
	P : 42,
	Q : 43,
	R : 44,
	S : 45,
	T : 46,
	U : 47,
	V : 48,
	W : 49,
	X : 50,
	Y : 52,
	Z : 52,

}

async function solveOne(filename){
	const rucksacks = await readFile(filename);

	let doubleItem  = [];
	let prioritySum = 0;

	rucksacks?.forEach(async (rucksack, index) => {
		const length  = rucksack.length
		const average = length / 2
		if(rucksack.length % 2 == 0){

			const leftSack = rucksack.slice(0, average).split('')
			const rightSack = rucksack.slice(average).split('')

			for(let left = 0; left < leftSack.length; left++){

				const current = leftSack[left];

				for(let right = 0; right < rightSack.length; right++){

					if(current === rightSack[right]){

						doubleItem.push(current);

						prioritySum += priority[current];

						return ;
					}
				}

			}
		} 
	})

	return prioritySum;
}

const sum = await solveOne('sample.txt');
console.log(sum);
 
async function solveTwo(filename){

	const rucksacks = await readFile(filename);

	let doubleItem  = [];
	let prioritySum = 0;

	let elfGroups     = [];
	let tempArray  = [];
	let elfCount   = 0;

	for(let item = 0; item < rucksacks.length; item ++) {

		if(elfCount == 3){
			elfGroups.push(tempArray)
			tempArray = [];
			elfCount  = 0;
		}

		// const items = rucksacks[item].split('');
		tempArray.push(rucksacks[item]);
		elfCount ++;

		if(item == rucksacks.length - 1){
			elfGroups.push(tempArray)
		}		

	}

	// console.log(elfGroups);
	elfGroups.forEach((group, index) => {

		const firstArr  = group[0].split('');
		const secondArr = group[1].split('');
		const thirdArr  = group[2].split('');

		// console.log(group, firstArr, secondArr, thirdArr)

		for(let firstItem = 0; firstItem < firstArr.length; firstItem++){

			let current = firstArr[firstItem];
		
			for(let secondItem = 0; secondItem < secondArr.length; secondItem++){

				if(current === secondArr[secondItem]){

					for(let thirdItem = 0; thirdItem < thirdArr.length; thirdItem++){

						if(current === thirdArr[thirdItem]){
							
							doubleItem.push(current);

							prioritySum += priority[current];

							return ;
						}

					}
				}
			}

		}
			
	})

	return prioritySum;
}

const sum2 = await solveTwo('sample.txt');
console.log(sum2);
