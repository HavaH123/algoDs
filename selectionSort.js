//https://youtu.be/xWBP4lzkoyM

// Time Complexity (O(n^2))
// Space Complexity (O(1))

function selectionSort(array) {
	for(var i=0; i<array.length; i++) {
		var min=array[i];
		var minLoc=i;
		for(var j=i; j<array.length; j++) {
			if(array[j]<min) {
				min=array[j];
				minLoc=j;
			}
		}
		var tmp=array[i];
		array[i]=array[minLoc];
		array[minLoc]=tmp;
	}
	return array;
}

console.log(selectionSort([1,2,324,4,6,2,8,1,11]));
