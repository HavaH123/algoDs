//https://youtu.be/T2sFYY-fT5o

// Time Complexity (O(log n))
// Space Complexity (O(1))

function binarySearch(array, element) {
	var start=0, end=array.length-1;
	
	while(start<=end) {
		var mid=Math.floor((start+end)/2);
		if(array[mid]==element){
			return mid;
		}
		else if(array[mid]>element) {
			end=mid-1;
		}
		else {
			start=mid+1;
		}
	}
	return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,10,11],1));
