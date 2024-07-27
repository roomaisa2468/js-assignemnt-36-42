//////////////////////// assign 36-42 ////////////////////////
///////////// ques : 1
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    
    return result;
}

console.log(power(2, 3)); 
console.log(power(5, 0)); 
console.log(power(7, 2)); 

///////////// ques : 2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2020)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(2023)); 


///////////// ques : 3
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calculateTriangleArea(a, b, c) {
    const S = calculateSemiPerimeter(a, b, c); 
    const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}


console.log(calculateTriangleArea(3, 4, 5)); 
console.log(calculateTriangleArea(5, 5, 5)); 



///////////// ques : 4
function calculateAverage(marks1, marks2, marks3) {
    const totalMarks = marks1 + marks2 + marks3;
    return totalMarks / 3;
}

function calculatePercentage(marks1, marks2, marks3) {
    const totalMarks = marks1 + marks2 + marks3;
    const maxMarks = 300;
    return (totalMarks / maxMarks) * 100;
}

function mainFunction(marks1, marks2, marks3) {
    const average = calculateAverage(marks1, marks2, marks3);
    const percentage = calculatePercentage(marks1, marks2, marks3);
    
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
}

mainFunction(85, 90, 78); 


///////////// ques : 5
function customIndexOf(str, char) {
    if (char.length !== 1) {
        throw new Error('The second argument must be a single character.');
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }

    return -1;
}
console.log(customIndexOf('hello world', 'w')); 
console.log(customIndexOf('hello world', 'z')); 


///////////// ques : 6
function removeVowels(sentence) {

    const vowels = 'aeiouAEIOU';

    let result = '';
    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i]; 
        }
    }
    
    return result;
}
console.log(removeVowels('Hello World!'));
console.log(removeVowels('This is a test sentence.')); 


///////////// ques : 7

function countDoubleVowels(text) {
    const vowels = 'aeiou';
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        const char1 = text[i].toLowerCase();
        const char2 = text[i + 1].toLowerCase();

        switch (true) {
            case vowels.includes(char1) && vowels.includes(char2):
                count++;
                break;
        }
    }

    return count;
}
console.log(countDoubleVowels('Pleases read this application and give me gratuity')); // Output: 3


///////////// ques : 8

function kmToMeters(km) {
    return km * 1000;
}

function kmToFeet(km) {
    return km * 3280.84;
}

function kmToInches(km) {
    return km * 39370.08;
}


function kmToCentimeters(km) {
    return km * 100000;
}

function convertDistance(km) {

    const meters = kmToMeters(km);
    const feet = kmToFeet(km);
    const inches = kmToInches(km);
    const centimeters = kmToCentimeters(km);
    
    console.log(`Distance in meters: ${meters}`);
    console.log(`Distance in feet: ${feet}`);
    console.log(`Distance in inches: ${inches}`);
    console.log(`Distance in centimeters: ${centimeters}`);
}

const distanceInKm = parseFloat(prompt('Enter the distance between two cities in kilometers:'));
convertDistance(distanceInKm);


///////////// ques : 9
function calculateOvertimePay(hoursWorked) {

    const standardHours = 40;
    const overtimeRate = 12.00;
    
    let overtimeHours = hoursWorked > standardHours ? hoursWorked - standardHours : 0;
    
    let overtimePay = overtimeHours * overtimeRate;
    
    return overtimePay;
}

const hoursWorked = parseInt(prompt('Enter the number of hours worked by the employee:'), 10);

if (isNaN(hoursWorked) || hoursWorked < 0) {
    console.log('Invalid input. Please enter a non-negative number.');
} else {

    const pay = calculateOvertimePay(hoursWorked);
    console.log(`Overtime pay for ${hoursWorked} hours worked is Rs. ${pay.toFixed(2)}`);
}


///////////// ques : 10

function calculateNotes(amount) {

    const notes100 = 100;
    const notes50 = 50;
    const notes10 = 10;

    let numNotes100 = Math.floor(amount / notes100);
    amount %= notes100;

    let numNotes50 = Math.floor(amount / notes50);
    amount %= notes50; 

    let numNotes10 = Math.floor(amount / notes10);
    amount %= notes10; 

    return {
        notes100: numNotes100,
        notes50: numNotes50,
        notes10: numNotes10
    };
}
const amount = parseInt(prompt('Enter the amount to be withdrawn in hundreds:'), 10) * 100;
if (isNaN(amount) || amount <= 0) {
    console.log('Invalid input. Please enter a positive number.');
} else {
    const notes = calculateNotes(amount);
    console.log(`Number of 100-rupee notes: ${notes.notes100}`);
    console.log(`Number of 50-rupee notes: ${notes.notes50}`);
    console.log(`Number of 10-rupee notes: ${notes.notes10}`);
}
