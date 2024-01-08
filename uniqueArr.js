let array = [1, 1, 2, 3, 4, 2, 5]
function arrClear(arr) {
	return arr.filter((item, index, samMasyv) => {
		return samMasyv.indexOf(item) === index
	})
}
console.log(arrClear(array))