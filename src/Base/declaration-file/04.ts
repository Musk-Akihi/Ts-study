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
