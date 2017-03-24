//https://youtu.be/MtQL_ll5KhQ
//https://www.youtube.com/watch?v=5iBUTMWGtIQ

// Time Complexity (O(nlogn))
// Space Complexity (O(1))

function heapSort(array) {
	for(var i=Math.floor(array.length/2)-1; i>=0; i--) {
		maxHeapify(array, i, array.length);
	}
	
	var length=array.length-1;
	while(length>=0) {
		var tmp=array[0];
		array[0]=array[length];
		array[length]=tmp;
		maxHeapify(array, 0, length);
		length--;
	}
	return array;
}

function maxHeapify(array, root, length) {
	var maxElemPos = root;
	var maxElem = array[root];
	
	if(2*root+1<length && array[2*root+1]>maxElem) {
		maxElemPos=2*root+1;
		maxElem=array[2*root+1];
	}
	
	if(2*root+2<length && array[2*root+2]>maxElem) {
		maxElemPos=2*root+2;
		maxElem=array[2*root+2];
	}
	
	if(maxElemPos!=root) {
		var tmp=array[root];
		array[root]=maxElem;
		array[maxElemPos]=tmp;
		maxHeapify(array, maxElemPos, length);
	}
}

console.log(heapSort([1,2,324,4,6,2,8,1,11]));
