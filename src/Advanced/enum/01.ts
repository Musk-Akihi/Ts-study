/**
 * 枚举
 * 枚举（Enum）类型用于取值被限定在一定范围内的场景。比如一周只能有七天，颜色限定为红绿蓝等
 */

/**
 * 简单例子
 * 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
 */
/*
  enum Days {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
  }
  console.log(Days['Sun'] === 0);
  console.log(Days['Mon'] === 1);
  console.log(Days[0] === 'Sun');
  console.log(Days[1] === 'Mon');
 */

/**
 * 手动赋值
 * 未手动赋值的枚举项会接着上一个枚举项递增
 */
/*
  enum Days {
    Sun = 7,
    Mon = 1,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
  }
  console.log(Days['Sun'] === 7);
  console.log(Days['Mon'] === 1);
  console.log(Days['Sat'] === 6);
 */

/**
 * 未手动赋值的枚举项与手动赋值的重复了，Ts不会检测到
 * 使用时最好不要出现这种情况
 */
/*
  enum Days {
    Sun = 3,
    Mon = 1,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
  }
  console.log(Days['Sun'] === 3);
  console.log(Days['Wed'] === 3);
  console.log(Days[3] === 'Sun'); // false
  console.log(Days[3] === 'Wed'); // true
 */

/**
 * 手动赋值的枚举项也可以不是数字，此时需要类型断言来让tsc无视类型检查
 */
/*
  enum Days {
    Sun = 7,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat = 'S' as any,
    one = 20,
    two
  }
 */

/**
 * 手动赋值的枚举项也可以为小数或负数
 * 后续未手动赋值的项的递增步长仍为 1
 */
/*
  enum Days {
    Sun = 7,
    Mon = 1.5,
    Tue,
    Wed = 10.52,
    Thu,
    Fri,
    Sat
  }
 */

/**
 * 常数项和计算所得项（枚举项的两种类型）
 * 紧跟在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
 */
/*
  // 计算所得项 eg:
  enum Color {
    Red,
    Green,
    Blue = 'Blue'.length,
    Pink = 1,
    navy
  }
  console.log(Color['Blue'] === 4);
  console.log(Color[4] === 'Blue');
 */

/**
 * 常数枚举
 * 使用 const enum 定义的枚举类型
 * 常数枚举与普通枚举的区别是：它会在编译阶段被删除，并且不能包含计算成员
 */
/*
  const enum Directions {
    Up,
    Down,
    Left,
    Right
  }
  let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right
  ];
 */
/*
  const enum Color {
    Red,
    Green,
    // 报错
    Blue = 'Blue'.length
  }
 */

/**
 * 外部枚举
 * 是使用 declare enum 定义的枚举类型
 * declare 定义的类型只会用于编译时的检查，编译结果中会被删除
 */
/*
  declare enum Directions {
    Up,
    Down,
    Left,
    Right
  }
  let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right
  ];
 */

/**
 * 外部枚举和声明语句一样，常出现在声明文件中
 * 同时使用 declare 和 const也是可以的
 */

declare const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
];
