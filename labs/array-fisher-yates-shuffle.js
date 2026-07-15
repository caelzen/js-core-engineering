let arr = ['apple', 'banana', 'orange'];


function shuffle(arr) {
	let clonedArr = arr.slice();
	let shuffledArr = [];

	while(clonedArr.length) {
		let randomIndex = Math.floor(Math.random() * clonedArr.length);
		shuffledArr.push(clonedArr[randomIndex]);
		clonedArr.splice(randomIndex, 1);
	}

	return shuffledArr;
}

console.log(shuffle(arr));