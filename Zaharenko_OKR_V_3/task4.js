function groupByRemainder(numbers) {
    const result = {
        0: [],
        1: [],
        2: []
    };
    
    for (let num of numbers) {
        const remainder = num % 3;
        result[remainder].push(num);
    }
    
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(groupByRemainder(numbers));
