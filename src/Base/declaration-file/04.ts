/**
 * UMD库
 * 既可以通过<script>标签引入，又可以通过mport导入的库，称为UMD库
 * 相比于npm包的类型声明文件，还需要额外声明一个全局变量
 * ts提供了一个新语法 export as namespace
 */

/**
 * export as namespace
 */
/*
  // 声明语句
  export as namespace foo;
  export = foo;
  // 或 export default foo
  declare function foo(): string;
  declare namespace foo {
    const bar: number;
  }
 */

/**
 * 直接扩展全局变量
 * 1）通过声明合并
 * 2）使用declare namespace 给已有的命名空间添加类型声明
 */

/**
 * 在npm包或UMD库中扩展全局变量
 * 对于一个npm包或者UMD库的声明文件，只有export导出的类型声明才能被导入
 * 如果导入此库后扩展全局变量，则需要另一种语法在声明文件中扩展全局变量的类型 declare global
 * 即使不需要导出任何东西，仍需要导出一个空对象。告诉编译器这是一个模块的声明文件，而不是一个全局变量的声明文件
 */
/*
  declare global {
    interface String {
      prependHello(): string;
    }
  }
  export {};
 */

/**
 * 模块插件
 * declare module
 * 如果是需要扩展原有模块的话，需要在类型声明文件中先引用原有模块， 再使用declare module扩展原有模块
 * 也可用于在一个文件中一次性声明多个模块的类型
 */
/*
  import * as moment from 'moment';
  declare module 'moment' {
    export function foo(): moment.CalendarKey;
  }
 */
/*
  // 使用
  // import * as moment from 'moment';
  // import 'moment-plugin';
  // moment.foo();
 */

/**
 * 声明文件中的依赖
 * 一个声明文件有时会依赖另一个声明文件中的类型
 * 除了可以在声明文件中通过 import 导入另一个声明文件中的类型之外，也可以使用三斜线指令
 */

/**
 * 三斜线指令 ///
 * 必须放在文件最顶端，前面只允许出现单行或多行注释
 * 1）书写一个全局变量的声明文件时
 * 2）依赖一个全局变量的声明文件时
 * 在全局变量的声明文件中，是不允许出现import、export关键字的。一旦出现了，就会被视为一个npm包或UMD库。
 */

/**
 * 拆分声明文件
 * types: 用于声明对另一个库的依赖
 * path: 用于声明对另一个文件的依赖
 */
