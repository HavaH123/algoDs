//https://youtu.be/OGzPmgsI-pQ

// Time Complexity (O(n^2))
// Space Complexity (O(1))

function insertionSort(array) {
	for(var i=1; i<array.length; i++) {
		var j=i-1;
		var elem=array[i];
		for(; j>=0 && array[j]>elem; j--) {
			array[j+1]=array[j];
		}
		array[j+1]=elem;
	}
	return array;
}

console.log(insertionSort([1,2,324,4,6,2,8,1,11]));
