/**
 * JavaScript 的类型分为两种：原始数据类型（primitive data types）和对象类型（Object types）
 * 原始数据类型包括：布尔值、数值、字符串、null、undefined、Symbol、BigInt。
 */

// 布尔值
/*
  let isDone: boolean = false;
  console.log(isDone);

  // 使用构造函数 Boolean 创造的对象不是布尔值
  let createByNewBoolean: boolean = new Boolean(1);
  console.log(typeof createByNewBoolean);

  let createByboolean: boolean = Boolean(1);
  console.log(createByboolean);
*/

// 数值
/*
  let decLiteral: number = 6;
  console.log(decLiteral);
  let hexLiteral: number = 0xf00d;
  console.log(hexLiteral);
  // 二进制
  let binaryLiteral: number = 0b1010;
  console.log(binaryLiteral);
  // 八进制
  let octalLiteral: number = 0o744;
  console.log(octalLiteral);
  let notANumber: number = NaN;
  console.log(notANumber);
  let infinityNumber: number = Infinity;
  console.log(infinityNumber);
*/

// 字符串
/*
  let myName: string = 'Tom';
  console.log(myName);
  let myAge: number = 25;
  console.log(myAge);
  let sentence: string = `Hello, my name is ${myName},
  I'll be ${myAge + 1} years old next month.`;
  console.log(sentence);
*/

// 空值
/*
  // JS没有空值（void）的概念，在TS 中，可以用 void 表示没有任何返回值的函数
  function alertName(): void {
    console.log('My name is Tom.');
  }
  alertName();
  // 声明一个 void 类型的变量没有什么用，你只能将它赋值为 undefined 或 null（只在 --strictNullChecks 未指定时）
  let unusable: void = undefined;
  console.log(unusable);
*/

// Null 和 Undefined
/*
  let u: undefined = undefined;
  console.log(u);
  let n: null = null;
  console.log(n);
  // undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量。
  let num: number = undefined;
  console.log(num);
  let u1: undefined;
  let num1: number = u1;
  console.log(num1);
*/
