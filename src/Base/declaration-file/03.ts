/**
 * npm包
 */

/**
 * npm包的声明文件主要有以下几种语法
 * 1）export 导出变量
 * 2）export namespace 导出（含有子属性的）对象
 * 3）export default ES6 默认导出
 * 4）export = commonjs 导出模块
 */

/**
 * export
 * 在npm包的声明文件中，使用declare不再会声明一个全局变量，而只会在当前文件中声明一个局部变量
 * 只有在声明文件中使用export导出，然后在使用方import导入后，才会应用到这些类型声明
 */
/*
  import { firstName, getName, Animal, Directions, Optionss } from '包文件';
  console.log(firstName);
  let myName = getName();
  let cat = new Animal('Tom');
  let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right
  ];
  let options: Options = {
    data: {
      name: 'foo'
    }
  };
 */

/**
 * export = commonjs规范
 */
/*
  // 第一种导入方式
  // 整体导入
  const foo = require('foo');
  // 单个导入
  const bar = require('foo').bar;
 */
/*
  // 第二种导入方式
  // 整体导入
  import * as foo from 'foo';
  // 单个导入
  import { bar } from 'foo';
 */
/*
  // 第三种导入方式（Ts官方推荐）
  // 整体导入
  import foo = require('foo');
  // 单个导入
  import bar = foo.bar;
 */
/*
  // 第三种导入方式对应的声明方法
  export = foo;
  declare function foo(): string;
  declare namespace foo {
    const bar: number;
  }
  // 使用export = 之后，就不能再单个导出export {bar}
  // import ... require 和 export = 都是Ts为了兼容AMD规范而创立的新的语法 在普通ts文件中也可使用
 */
