function findFirstRepeated(gifts: number[]): number {
  const testigo: number[] = [];

  for (let i = 0; i < gifts.length; i++) {
    if (testigo.includes(gifts[i])) {
      return gifts[i];
    } else {
      testigo.push(gifts[i]);
    }
  }
  return -1;
}

const gifts: number[] = [1, 2, 3, 4, 1];

console.log(findFirstRepeated(gifts));