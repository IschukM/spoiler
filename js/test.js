// /** Cтворюємо масив */
//   let genres = ['Jazz', 'Blues'];

//   /** Додаємо елемент в кінець масиву */
//   genres.push('Рок-н-рол');
  
//   /** виводимо перший елемент */
//   console.log("перший",genres[0])

//   /**
//    * 1. Знаходимо індекс останнього елемента масива
//    * 2. Виводимо останній елемент по індексу
//   */
//   const lastIndex = genres.length - 1;
//   console.log("last", genres[lastIndex]);

//   /** Видаляємо перший елемент масива */
//   const firstElement = genres.shift();

//   /** Виводимо видалений елемент */
//   console.log(firstElement);

//   /** Вставляємо на початок масиву два елементи */
//   genres.unshift('Country','Reggae');
//   console.log(genres);

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  propValues = [];
  for (const product of products) {
    if (Object.keys(product).includes(propName)) {
      propValues.push(product[propName]);
      console.log(propValues)
    
    
  
    }

    // Change code above this line
  }
  return propValues;
}
getAllPropValues("name")
 