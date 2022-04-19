/**
 * export
 * 声明：export语法与普通ts语法类似，区别在于声明文件中禁止定义具体的实现（不允许在环境上下文中使用初始化表达式）
 */
/*
  export const name: string;
  export function getName(): string;
  export class Animal {
    constructor(name: string);
    sayHi(): string;
  }
  export enum Directions {
    Up,
    Down,
    Left,
    Right
  }
  export interface Options {
    data: any;
  }
 */
/**
 * 混用declare和export
 * 先用declare声明多个变量，最后再用export一次性导出
 */
/*
  declare const firstName: string;
  declare function getName(): string;
  declare class Animal {
    constructor(name: string);
    sayHi(): string;
  }
  declare enum Directions {
    Up,
    Down,
    Left,
    Right
  }
  // 与全局变量类似，interface前是不需要declare的
  interface Options {
    data: any;
  }
  export { firstName, getName, Animal, Directions, Options };
 */

/**
 * export default
 * 用来导出默认值的类型
 * 只有function、class、interface可以默认导出，其他的变量需要先定义出来，再默认导出
 * 默认导出一般放在文件最前面
 */
/*
  // export default function foo(): string;
  // export default enum Directions {} 是错误语法
  // 需要使用declare enum定义出来，然后使用export default导出
  export default Directions;
  declare enum Directions {
    Up,
    Down,
    Left,
    Right
  }
 */

/**
 * export = commonjs规范
 */
/*
  // 整体导出
  module.exports = foo;
  // 单个导出
  exports.bar = bar;
 */
