/**
 * 函数声明
 */
/*
  // 一个函数有输入和输出，要在Ts中对其进行约束，需要把输入输出都考虑到
  function sum(x: number, y: number): number {
    return x + y;
  }
  sum(1, 2, 3);
  sum(1);
  // 输入多余的（或少于要求的）参数，是不被允许的
 */

/**
 * 函数表达式
 */
/*
  let sum: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };
  // 在Ts的类型定义中，=>用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
 */

/**
 * 用接口定义函数的形状
 */
/*
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  let mySearch: SearchFunc;
  mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
  };
  // 采用函数表达式 | 接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变
 */

/**
 * 可选参数
 * 用 ? 表示可选参数
 * 可选参数后面不允许再出现必须参数
 */
/*
  function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
      return firstName + ' ' + lastName;
    } else {
      return firstName;
    }
  }
  console.log(buildName('Tom', 'Cat'));
  console.log(buildName('Tom'));
 */
/*
  function buildName(firstName?: string, lastName: string) {}
  // 必选参数不能位于可选参数后。
 */

/**
 * 参数默认值
 * Ts 会将添加了默认值的参数识别为可选参数
 */
/*
  function buildName(firstName: string = 'Li', lastName: string = 'cat') {
    return firstName + ' ' + lastName;
  }
  console.log(buildName('Tom'));
  console.log(buildName('Tom', 'Jack'));
  console.log(buildName('', 'Jack'));
 */

/**
 * 剩余参数
 * Es6 中，可以使用...rest方式获取函数中的剩余参数
 */
/*
  function pushs(array: any[], ...items: Array<any>) {
    items.forEach((item) => {
      array.push(item);
    });
    console.log(array);
  }

  let a: Array<any> = [];
  pushs(a, 1, 2, 3);
 */

/**
 * 重载
 * 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
 */
/*
  function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
    }
  }
  console.log(reverse('abcdef'));
  console.log(reverse(123456));
 */
/*
  function reverse(x: number): number;
  function reverse(x: string): string;
  function reverse(x: number | string) {
    if (typeof x === 'number') {
      // return String(x)
      return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
    }
  }
  console.log(reverse('abcdef'));
  console.log(reverse(123456));
 */
