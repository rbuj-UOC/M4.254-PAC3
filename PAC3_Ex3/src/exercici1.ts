function printArray(array: Array<number>): void {
  //code to print the array on console
  let ans : string = '';
  for (let i: number = 0; i < array.length; i++) {
    if (i === array.length) {
      ans+= `${array[i]}\n`;
    } else {
      ans += `${array[i]},`;
    }
  }
  console.log(ans);
}

let array: number[] = [2, 3, 4];
console.log(array.shift()); // 2
printArray(array); // 3,4
array.push(5);
printArray(array); // 3,4,5
console.log(array.pop()); // 5
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
array.unshift(8);
printArray(array); // 8,3,4,1
/** check if every number is greater than 3 */
let everyisgreater = array.every(v => v > 3);
console.log(everyisgreater);  // false
/** check if every number is less than 10 */
let everyisless = array.every(v => v < 10);
console.log(everyisless);  // true
console.log(array.sort()); // 1,3,4,8
console.log(array.reverse()); // 8,4,3,1
