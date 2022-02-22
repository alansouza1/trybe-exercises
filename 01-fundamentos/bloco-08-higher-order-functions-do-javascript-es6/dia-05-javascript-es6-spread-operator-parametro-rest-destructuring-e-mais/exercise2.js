const sum = (...params) => params.reduce((acc, curr) => acc + curr);

console.log(sum(4, 5, 3,3,6,7,8));