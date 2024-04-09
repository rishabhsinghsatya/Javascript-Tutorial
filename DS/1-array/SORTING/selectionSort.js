// Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
}

let arr = [64, 25, 12, 22, 11];

console.log("Original Array:", arr);
selectionSort(arr);
console.log("Sorted Array:", arr);

// Time Complexity: O(N2)
//Auxiliary Space: O(1)
