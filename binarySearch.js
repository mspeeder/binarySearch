function binarySearch(A,T) {
    var L = 0;
    var R = A.length-1;
    while(L <= R) {
        var m = Math.floor((L+R)/2);
        if(A[m]<T) {
            L = m + 1;
        } else if (A[m]>T){
            R = m - 1;
        } else {
            return m;
        }
    }
    return -1;
}

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));
