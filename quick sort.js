function quickSort(array) {

    if(array <= 1){
        return array;
    }

    let pivot = array[Math.floor(array.length / 2)];

    let left = array.filter((number) => number < pivot);
    let right = array.filter((number) => number > pivot); 

    return[...quickSort(left), pivot, ...quickSort(right)]

}

console.log (quickSort([8, 23, 14, 37, 2, 45, 19, 29, 10, 41, 33, 50, 5, 27, 12]));
