function merge(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid);
    const rightArr = arr.slice(mid, right);
    const result = [];
    let l = 0, r = 0, k = 0;
    while(l < leftArr.length && r < rightArr.length) {
        if (leftArr[l] <= rightArr[r]) {
            result[k] = leftArr[l];
            l++;
        } else {
            result[k] = rightArr[r];
            r++;
        }
        k++;
    }

    while (l < leftArr.length) {
        result[k] = leftArr[l];
        l++;
        k++;
    }

    while (r < rightArr.length) {
        result[k] = rightArr[r];
        r++;
        k++;
    }
    console.log(result);
    return result;
}

function merge_sort(arr, left, right) {
    if ((right - left) <= 1) {
        return;
    } else {
        const mid = Math.floor((right + left) / 2);
        merge_sort(arr, left, mid);
        merge_sort(arr, mid, right);
        merge(arr, left, mid, right);
    }

}
merge_sort([-27, 78, 95, -64, 18], 0, 5);
