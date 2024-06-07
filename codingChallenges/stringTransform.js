function transformString(inputString) {
    const strLength = inputString.length;
    let transformedResult = '';

    if (strLength % 3 === 0) {
        transformedResult = inputString.split('').reverse().join('');
    }

    if (strLength % 5 === 0) {
        transformedResult = inputString.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    if (strLength % 15 === 0) {
        transformedResult = inputString.split('').reverse().join('');
        transformedResult = transformedResult.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    if (transformedResult === '') {
        transformedResult = inputString;
    }

    return transformedResult;
}

// Test
console.log(transformString("Hamburger"));
console.log(transformString("Pizza"));
console.log(transformString("Chocolate Chip Cookie"));
