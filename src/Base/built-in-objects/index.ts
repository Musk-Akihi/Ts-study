/**
 * 内置对象
 * 内置对象是指根据标准在全局作用域（Global）上存在的对象
 */

/**
 * ECMAScript的内置对象
 * Boolean、Error、Date、RegExp等
 * 可以将变量定义为这些类型
 */
/*
  let b: Boolean = new Boolean(1);
  let e: Error = new Error('Error occurred');
  let d: Date = new Date();
  let r: RegExp = /[a-z]/;
  console.log(b);
  console.log(e);
 */

/**
 * DOM和BOM的内置对象
 * Document、HTMLElement、Event、NodeList等
 */
/*
  let body: HTMLElement = document.body;
  let allDiv: NodeList = document.querySelectorAll('div');
  document.addEventListener('click', function (e: MouseEvent) {});
 */

/**
 * TS核心库的定义文件
 * TS核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在TS中的
 * TS核心库的定义中不包含Node.js部分
 */
// console.log(Math.pow(10, 2));

/**
 * 用TS写Node.js
 * Node.js不是内置对象的一部分，如果想用TS写Node.js，则需要引入第三方声明文件
 * npm install @types/node --save-dev
 */
