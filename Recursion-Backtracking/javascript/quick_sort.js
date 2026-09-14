class Solution {
    // Function to perform quicksort
    quickSort(arr, low, high) {
        // Base case
        if (low < high) {
            // Partition the array
            let pivotIndex = this.partition(arr, low, high);

            // Sort left part
            this.quickSort(arr, low, pivotIndex - 1);

            // Sort right part
            this.quickSort(arr, pivotIndex + 1, high);
        }
    }

    // Function to partition array
    partition(arr, low, high) {
        // Choose pivot as last element
        let pivot = arr[high];

        // Initialize i
        let i = low - 1;

        // Traverse array
        for (let j = low; j < high; j++) {
            // If current element <= pivot
            if (arr[j] <= pivot) {
                // Move i and swap
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        // Place pivot at correct position
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

        // Return pivot index
        return i + 1;
    }
}

// Driver code
let arr = [10, 7, 8, 9, 1, 5];

// Create object
let sol = new Solution();

// Call quickSort
sol.quickSort(arr, 0, arr.length - 1);

// Print sorted array
console.log(arr.join(" "));