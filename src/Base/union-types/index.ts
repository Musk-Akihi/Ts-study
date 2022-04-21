/**
 * 联合类型 表示取值可以为多种类型的一种
 */

/*
  let myFavoriteNumber: string | number;
  myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;
  console.log(myFavoriteNumber);
 */

/*
  let myFavoriteNumber: string | number;
  myFavoriteNumber = true;
  // Type 'true' is not assignable to type 'string | number'.
 */

/**
 * 访问联合类型的属性或方法
 * 当TS不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里 共有的属性或方法
 */
/*
  function getLength(sth: string | number): number {
    return sth.length;
    // Property 'length' does not exist on type 'number'.
  }
 */
/*
  function getLength(sth: string | number): string {
    return sth.toString();
  }
 */

/*
  let myFavoriteNumber: string | number;
  myFavoriteNumber = 'seven';
  console.log(myFavoriteNumber.length);
  myFavoriteNumber = 7;
  console.log(myFavoriteNumber.length);
  // Property 'length' does not exist on type 'number'.
 */
