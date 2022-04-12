/**
 * 在Ts中，数组类型有多种定义方式，比较灵活
 */

/**
 * 类型 + 方括号 表示法
 */
/*
  let fiboonacci: number[] = [1, 2, 3, 4, 5];
  // fiboonacci = [1, 2, 3, '4'];
  // Type 'string' is not assignable to type 'number'.
  console.log(fiboonacci);
 */

/*
  let fiboonacci: number[] = [1, 2, 3, 4, 5];
  fiboonacci.push('6');
  // 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
  // push方法只允许传入number类型的参数，所以报错
  console.log(fiboonacci);
 */

/**
 * 数组泛型
 * 使用数组泛型（Array Generic）Array<elemType>来表示数组
 */
/*
  let fiboonacci: Array<number> = [1, 2, 3, 4, 5];
  console.log(fiboonacci);
 */

/**
 * 用接口表示数组
 */
/*
  interface NumberArray {
    [index: number]: number;
  }
  let fiboonacci: NumberArray = [1, 2, 3, 4, 5];
  // NumberArray 表示：只要索引的类型是数字时，那么值得类型必须是数字
  console.log(fiboonacci);
 */

/**
 * 类数组
 * （Array-like Object）不是数组类型，比如 arguments
 */
/*
  function sum() {
    let args: number[] = arguments;
    // Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 15 more.
  }
 */

/*
  function sum() {
    let arg: {
      [index: number]: number;
      length: number;
      callee: Function;
    } = arguments;
  }
 */

/*
  function sum() {
    let args: IArguments = arguments;
  }
 */

/**
 * any在数组中的应用
 */

/*
  // let list: any[] = [1, '2', true, {}, undefined, null];
  let list: Array<any> = [1, '2', true, {}, undefined, null];
  console.log(list);
 */
