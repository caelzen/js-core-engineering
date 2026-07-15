let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];



function getAverageAge(arr) {
	let result = arr.reduce((total, person) => {
		return total + person.age
	}, 0);

	return result / arr.length;
}

console.log(getAverageAge(arr));