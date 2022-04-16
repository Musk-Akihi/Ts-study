/**
 * 声明文件
 * 当我们使用第三方库时，我们需要引入它的声明文件，才能获得对应的代码补全、接口提示等功能
 */

/**
 * 新语法索引
 * declare var 声明全局变量
 * declare function 声明全局方法
 * declare class 声明全局类
 * declare enum 声明全局枚举类型
 * declare namespace 导出（含有子属性的）对象
 * export default ES6 默认导出
 * export = commonjs 导出模块
 * export as namespace UMD库声明全局变量
 * declare global 扩展全局变量
 * declare module 扩展模块
 * /// <reference /> 三斜线指令
 */

/**
 * 什么是声明语句
 * declare var 并没有真正的定义一个变量，只是定义了全局变量jQuery的类型，仅仅会用于编译时的检查，在编译结果中会被删除。
 */
/*
  declare var jQuery: (selector: string) => any;
  jQuery('#foo');
 */

/**
 * 什么是声明文件
 * 把声明语句放到一个单独的文件（*.d.ts），这就是声明文件
 * 一般来说，Ts会解析项目中所有的（*.ts）文件，也包括（*.d.ts）文件
 */
/**
 * 第三方声明文件
 * 推荐使用 @types 统一管理第三方库的声明文件
 */
