/**
 * 声明合并
 * 如果定义了两个相同名字的函数、接口或类，那么他们会合并成一个类型
 */
/**
 * 函数的合并
 * 我们可以使用重载定义多个函数类型
 */
/*
  function reverse(x: number): number;
  function reverse(x: string): string;
  function reverse(x: number | string): number | string | undefined {
    if (typeof x === 'number') {
      return x;
    } else if (typeof x === 'string') {
      return x;
    }
  }
 */

/**
 * 接口合并
 * 接口中的属性在合并时会简单的合并到一个接口中
 * 后续属性声明必须属于统一类型
 * 接口中方法的合并，与函数的合并一样
 */
// interface Alarm {
//   price: number;
// }
// interface Alarm {
//   weight: number;
// }
// interface Alarm {
//   price: number;
//   weight: number;
// }
// let obj: Alarm = {};

/*
  interface Alarm {
    price: number;
  }
  interface Alarm {
    price: string; // 类型不一致，会报错
    weight: number;
  }
 */

/**
 * 类的合并
 * 与接口的合并规则一致
 */
