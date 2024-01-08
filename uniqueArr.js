let array = [1, 1, 2, 3, 4, 2, 5]
function arrClear(arr) {
	return arr.filter((item, index, arr) => {
		return arr.indexOf(item) === index
	})
}
console.log(arrClear(array))