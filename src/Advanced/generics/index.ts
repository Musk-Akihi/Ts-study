/**
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 */

/**
 * 实现一个函数 createArray，可以创建一个指定长度的数据，同时将每一项填充一个默认值
 * 存在对的缺陷：
 *    并没有准确的定义返回值的类型
 *    预期的是，数组中的每一项都应该是输入的value的类型
 */
/*
  function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }
  console.log(createArray(3, 'x'));
 */
/*
  function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }

  console.log(createArray<string>(3, 'x'));
  console.log(createArray(3, 'y'));
 */

/**
 * 多个类型参数
 */
/*
  function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
  }
  console.log(swap([7, 'seven']));
 */

/**
 * 泛型约束
 * 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不随意的操作它的属性或方法
 * 使用 extends 约束了 泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含length属性
 * 调用 loggingIdentity 时，传入的 arg 不包含length属性，那么在编译阶段就会报错
 */
/*
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
loggingIdentity([]);
 */
/**
 * 多个参数之间也可以相互约束
 * 下面的这个泛型约束 保证了 U 上不会出现 T 中不存在的字段
 */
/*
  function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
      target[id] = (<T>source)[id];
    }
    return target;
  }
  let x = { a: 1, b: 2, c: 3, d: 4 };
  copyFields(x, {});
 */

/**
 * 泛型接口
 * 可以使用接口的方式来定义一个函数需要符合的形状
 */
/*
  interface searchFun {
    (source: string, subString: string): boolean;
  }
  let mySearch: searchFun;
  mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
  };
 */
/**
 * 使用含有泛型的接口来定义函数的形状
 */
/*
  interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
  }
  let createArray: CreateArrayFunc;
  createArray = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  };
  console.log(createArray(3, 'x'));
 */
/**
 * 把泛型参数提前到接口名上
 * 在使用泛型接口时，需要定义泛型的类型
 */
/*
  interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
  }

  let createArray: CreateArrayFunc<any>;
  createArray = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  };
  console.log(createArray(3, 'x'));
 */

/**
 * 泛型类
 * 与泛型接口类似，泛型也可用于类的类型定义中
 */
/*
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
    constructor(zeroValue: T) {
      this.zeroValue = zeroValue;
    }
  }
  let myGenericNumber = new GenericNumber<number>(10);
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };
 */
/*
  class GenericNumber<T> {
    constructor(readonly zeroValue: T, public add: (x: T, y: T) => T) {
      this.zeroValue = zeroValue;
      this.add = add;
    }
  }
  let myGenericNumber = new GenericNumber<number>(10, () => 0);
  console.log(myGenericNumber);
 */

/**
 * 泛型参数的默认类型
 * 当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用
 */
/*
  function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }
 */
