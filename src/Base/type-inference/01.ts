/**
 * 如果没有明确的指定类型，那么TS会依照 类型推论 的规则推断出一个类型
 */

/*
  let myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;
  // Type '7' is not assignable to type 'string'.

  === 等价于

  let myFavoriteNumber: string = 'seven';
  myFavoriteNumber = 7;
  console.log(myFavoriteNumber);
*/

/*
  // 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型而完全不被类型检查
  let myFavoriteNumber;
  myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;
  console.log(myFavoriteNumber);
*/
