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

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  hexColors.push(color.rgb);
}
console.log(hexColors);