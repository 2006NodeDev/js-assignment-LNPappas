/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    /*
        bubble sort itereates through an array looking at numbers in pairs.
        if the value of the number in the lower index is higher then the
        value in the index directly after it swap the numbers in the arrays
        so that the lesser number is in the lower index. then move onto the next index.
        Repeat this action the number of times equivalent to array length so every number 
        is guarenteed to be swapped to the correct position. 
    */

    // find the length of the array and store in the variable length as const (this # never changes)
    const len = numArray.length;

    // initiate count and set equal to length
    // count makes sure array is run through n times
    // so we keep checking the bubble sort worked for as many elements as there are. 
    // use let as the value in this variable will change.
    let count = len;

    // if the array is empty or has only one element it is already sorted so just return it.
    if(len<=1) return numArray; 

    // while we have not iterated through the times equalto the length of the array
    while(count > 0){

        // iterate through the array and create variable for the index and the value of the element in that index
        for(const [index, value] of numArray.entries()){

            // if the index is still in bounds
            if(index < len-1){

                // if the value is greater then the next value
                if(value > numArray[index+1]){

                    // swap those values
                    [numArray[index], numArray[index+1]] = [numArray[index+1], numArray[index]];
                }
            }
        }

        // reduce the count and run again
        count--;
    }
    // return the sorted array
    return numArray;
}

// Test Cases:
console.log(bubbleSort([2,1,4,3,6,5]));
console.log(bubbleSort([6,5,4,3,2,1]));
console.log(bubbleSort([1,2,3,4,5,6]));
console.log(bubbleSort([1,3,4,2,5,6]));
console.log(bubbleSort([]));
console.log(bubbleSort([0]));
console.log(bubbleSort([1,0]));