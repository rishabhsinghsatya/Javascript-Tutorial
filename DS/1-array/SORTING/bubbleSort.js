// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

const bubbleSort = (arr) => {
  let n = arr.length;
  // Outer loop for the number of passes
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for each pass
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements and swap if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

let arr = [64, 25, 12, 22, 11];

console.log("Original Array:", arr);
bubbleSort(arr);
console.log("Sorted Array:", arr);

// Time Complexity: O(N2)
// Auxiliary Space: O(1)
