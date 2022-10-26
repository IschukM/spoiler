/** Cтворюємо масив */
  let genres = ['Jazz', 'Blues'];

  /** Додаємо елемент в кінець масиву */
  genres.push('Рок-н-рол');
  
  /** виводимо перший елемент */
  console.log("перший",genres[0])

  /** 
   * 1. Знаходимо індекс останнього елемента масива 
   * 2. Виводимо останній елемент по індексу
  */
  const lastIndex = genres.length - 1;
  console.log("last", genres[lastIndex]);

  /** Видаляємо перший елемент масива */
  const firstElement = genres.shift();

  /** Виводимо видалений елемент */
  console.log(firstElement);

  /** Вставляємо на початок масиву два елементи */
  genres.unshift('Country','Reggae');
  console.log(genres);