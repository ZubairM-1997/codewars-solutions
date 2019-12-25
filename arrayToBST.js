// Given an array where elements are sorted in ascending order, convert it to a height balanced BST
// Pseudocode
// Initialize start = 0; end = array.length - 1; middle = (start+end) / 2
// Create a tree node with mid as root
//Recursively do steps 4 and 5
// Calc mid of left sub array and make it root of left subtree of A
// Calc mid of right subarray and make it root of right subtree of A


function TreeNode(val){
	this.val = val
	this.right = null;
	this.left = null;
}

var sortedArrayToBST = function(nums){
	if (nums.length === 0){
		return null
	}

	let arrayStart = 0
	let arrayEnd = nums.length - 1

	const recursiveFunc = (numArray, start, end) => {
		if (start > end){
			return null;
		}

		const middle = Math.floor((end + start) / 2)
		const rootNode = new TreeNode(numArray[middle])

		rootNode.left = recursiveFunc(numArray, start, middle - 1)
		rootNode.right = recursiveFunc(numArray, middle + 1, end)

		return rootNode
	}

	return recursiveFunc(nums, arrayStart, arrayEnd )
}