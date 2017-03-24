//https://youtu.be/PgBzjlCcFvc

// Time Complexity (O(nlogn))
// Space Complexity (O(1))

function quickSort(array, start, end) {
	if(start===undefined && end===undefined) {
		start=0;
		end=array.length-1;
	}
	
	if(start<end){
		var pivot=array[end];
		var wall=start-1;
		for(var i=start; i<end; i++) {
			if(array[i]<pivot) {
				wall++;
				var tmp=array[i];
				array[i]=array[wall];
				array[wall]=tmp;
			}
		}
		var tmp=array[wall+1];
		array[wall+1]=array[end];
		array[end]=tmp;
		
		quickSort(array, start,wall);
		quickSort(array, wall+2,end);
	}
	return array;
}

console.log(quickSort([1,-2,324,4,6,2,8,1,11.1]));
