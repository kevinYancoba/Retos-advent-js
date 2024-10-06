# metodo Set()
esta es una forma de trabajar con un metod set que simplifica el proces de manipulacion de arreglos.

```javascript
function findFirstRepeated(gifts: number[]): number {
  const testigo = new Set<number>()

  for (let element of gifts) {
    if(testigo.has(element)){
      return element
    }else{
      testigo.add(element)
    }
  }
  return -1
}

const gifts: number[] = [1, 2, 2, 4, 1];

console.log(findFirstRepeated(gifts));
```