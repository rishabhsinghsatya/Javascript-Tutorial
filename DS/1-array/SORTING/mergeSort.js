// Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.

class Solution {
  // Function to merge two sorted subarrays into one sorted array.
  merge(left, right) {
    let merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and push the smaller one into the merged array.
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // Push the remaining elements from the left array into the merged array.
    while (leftIndex < left.length) {
      merged.push(left[leftIndex]);
      leftIndex++;
    }

    // Push the remaining elements from the right array into the merged array.
    while (rightIndex < right.length) {
      merged.push(right[rightIndex]);
      rightIndex++;
    }

    return merged;
  }

  // Function to perform merge sort recursively.
  mergeSort(arr) {
    // Base case: If the array has 0 or 1 element, it is already sorted.
    if (arr.length <= 1) {
      return arr;
    }

    // Find the middle index of the array.
    const mid = Math.floor(arr.length / 2);

    // Split the array into two halves.
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves.
    const sortedLeft = this.mergeSort(left);
    const sortedRight = this.mergeSort(right);

    // Merge the sorted halves.
    return this.merge(sortedLeft, sortedRight);
  }
}

// Example usage:
const solution = new Solution();
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", arr);
const sortedArr = solution.mergeSort(arr);
console.log("Sorted array:", sortedArr);
