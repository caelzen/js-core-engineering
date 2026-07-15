let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(strings) {
	const mySet = new Set(strings);
	const newArr = [...mySet];

	return newArr;
}

console.log(unique(strings));