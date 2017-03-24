//https://youtu.be/JSceec-wEyw

// Time Complexity (O(nlogn))
// Space Complexity (O(n))

function mergeSort(array) {
	
	if(array.length < 2) {
		return array;
	}
	else {
		var mid = Math.floor(array.length/2);
		var left = array.slice(0,mid);
		var right = array.slice(mid);
		return merge(mergeSort(left), mergeSort(right));
	}
}

function merge(left, right) {
	var newArray=[];
	var leftIndex=0, rightIndex=0;
	for(var i=0; i<(left.length+right.length); i++) {
		if(leftIndex>=left.length || right[rightIndex]<left[leftIndex]) {
			newArray.push(right[rightIndex]);
			rightIndex++;
		}
		else {
			newArray.push(left[leftIndex]);
			leftIndex++;
		}
	}
	return newArray;
}

console.log(mergeSort([1,2,324,4,6,2,8,1,11]));
