const makeArmy = (arrSize) => {
	const arr = [];
	const shooter = 'soldat';
	let i = 0;

	while (i < arrSize) {
		arr.push(shooter);
		i++;

		return () => {
			let index = i;
			return i;
		};
	}

	// const posOfShooter = () => {

	// 	return arr.indexOf(shooter) + 1;
	// };

	return arr;
};

const shooters = makeArmy(10);

console.log(shooters[0]());         // 0;
console.log(shooters[5]());         // 5;
console.log(shooters[9]());         // 9;


// return (count) => {
// 	let d = 0;

// 	while (d < arrSize) {
// 		do {
// 			d++;
// 		} while (count === arr.indexOf(shooter));
// 	}

// 	return arr.indexOf(shooter);
// };