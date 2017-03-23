//https://youtu.be/7zuGmKfUt7s

// Time Complexity (O(n+k))
// Space Complexity (O(k))

function countingSort(input) {
	var count=[];
	for(var i=0; i<input.length; i++) {
		count[input[i]]=count[input[i]]?count[input[i]]+1:1;
	}
	count[0]=count[0]||0;
	for(var i=1; i<count.length; i++) {
		count[i]=(count[i]||0)+(count[i-1]||0);
	}
	var output=[];
	for(var i=0; i<input.length; i++) {
		output[count[input[i]]-1]=input[i];
		count[input[i]]--;
	}
	return output;
}

console.log(countingSort([7,5,3333,6,3,7,3]));
