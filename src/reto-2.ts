function manufacture( materials: string , gifts : string[]) {
  // Code here
  const availableGift : string[] = []

  for (const gift of gifts) {
    let canMakeGift : boolean = true
    for (const char of gift) {
      if (!materials.includes(char)) {
        canMakeGift = false
      }
    }
    if(canMakeGift){
      availableGift.push(gift)
    }
  }
  return availableGift
}

const materials: string = "rap"
const gift : string[] = ["pelota", "carro", "plato"]

console.log(manufacture(materials, gift))
