class Solution {
    // Merge two halves
    merge(arr, low, mid, high) {
        const temp = [];
        let left = low, right = mid + 1;

        // Merge both halves
        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right])
                temp.push(arr[left++]);
            else
                temp.push(arr[right++]);
        }

        // Add remaining left elements
        while (left <= mid)
            temp.push(arr[left++]);

        // Add remaining right elements
        while (right <= high)
            temp.push(arr[right++]);

        // Copy temp back to original array
        for (let i = low; i <= high; i++)
            arr[i] = temp[i - low];
    }

    // Recursive merge sort
    mergeSort(arr, low, high) {
        if (low >= high) return;

        const mid = Math.floor((low + high) / 2);

        this.mergeSort(arr, low, mid);
        this.mergeSort(arr, mid + 1, high);
        this.merge(arr, low, mid, high);
    }
}

// Driver code
let arr = [5, 2, 8, 4, 1];
let sol = new Solution();
sol.mergeSort(arr, 0, arr.length - 1);
console.log(...arr);