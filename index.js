const arr = [1,2,3,4,5];

const result = arr.reduce((total,cv) => {
    return total + cv
}, 0)

console.log(result)