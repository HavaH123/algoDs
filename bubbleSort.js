//https://youtu.be/nmhjrI-aW5o

// Time Complexity (O(n^2))
// Space Complexity (O(1))

function bubbleSort(array) {
	for(var i=0; i<array.length; i++) {
		for(j=0; j<array.length-i-1; j++) {
			if(array[j]>array[j+1]) {
				var temp=array[j];
				array[j]=array[j+1];
				array[j+1]=temp;
			}
		}
	}
	return array;
}

console.log(bubbleSort([1,2,324,4,6,2,8,1,11]));
