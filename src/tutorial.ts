const generateArray = <T>(length: number, value: T): Array<T> => {
  let arr: T[] = [];
  arr = new Array(length).fill(value);
  // Alternatively, you can use a loop to fill the array
  return arr;
};

const result = generateArray(50, 100); // [10, 10, 10, 10, 10]
const result2 = generateArray(3, "hello"); // ['hello', 'hello', 'hello']
console.log(result);
console.log(result2);
