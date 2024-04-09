// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
// like arrangement of playing cards like, the card is shift instead of swapping

class Solution {
  // Function to sort the array using insertion sort algorithm.
  insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
}

// Example usage:
const solution = new Solution();
const arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
const sortedArray = solution.insertionSort(arr);
console.log("Sorted array:", sortedArray);
