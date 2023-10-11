export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
		return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	return person.city === "Manchester";
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	return Math.ceil(people / 40)
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	let newArr = arr.filter(item=>item === "sheep")
	return newArr.length
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	return person.address.postCode[0].toUpperCase() === "M" && person.address.city === "Manchester"
}
