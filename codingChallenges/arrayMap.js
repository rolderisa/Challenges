const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findContiguousArrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;
    
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}

rl.question('Enter numbers separated by spaces to form an array: ', (input) => {
    const arr = input.split(' ').map(Number);
    console.log('Entered array:', arr);
    
    rl.question('Enter the target sum: ', (targetInput) => {
        const target = parseInt(targetInput);
        console.log('Target sum:', target);
        
        const result = findContiguousArrayWithSum(arr, target);
        console.log('Is there a contiguous subarray with the given sum?', result);

        rl.close();
    });
});
