function filter_list(arr){
	const newArray = []
	arr.forEach(item => {
		if (typeof item !== "string"){
			newArray.push(item)
		}
	})

	return newArray
}