/**
 * TS中，使用接口（interfaces）来定义对象的类型
 */

/**
 * 什么是接口
 * 在面向对象语言中，接口（interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）
 * Ts 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对【对象的形状（shape）】进行描述
 * 接口一般首字母大写
 */

/*
  interface Person {
    name: string;
    age: number;
  }
  let tom: Person = {
    name: 'Tom',
    age: 25
  };
  // 变量tom 的类型是 Person。约束tom 的形状必须和接口 person 一致
 */

/*
  // 定义的变量比接口少一些属性 或者 多一些属性 都是不允许的
  // 赋值的时候，变量的形状必须和接口的形状保持一致
  interface Person {
    name: string;
    age: number;
  }
  let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
  };
 */

/**
 * 可选属性
 * 可以不完全匹配一个形状
 */
/*
  interface Person {
    name: string;
    age?: number;
  }
  let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
    // 不允许添加未定义的属性
  };
*/

/**
 * 任意属性
 * 希望一个接口允许有任意的属性
 */
/*
  interface Person {
    [propName: string]: string | number;
    name: string;
    // age?: number;
    // 定义了任意属性取string类型的值
  }
  let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
    // isSex: true
  };
 */

/**
 * 只读属性
 */
/*
  interface Person {
    readonly id: number;
    name: string;
    age?: number;
  }
  let tom: Person = {
    id: 10000,
    name: 'Tom'
    // age: 25
  };
  // tom.id = 20000;
  // Cannot assign to 'id' because it is a read-only property.
 */

/*
  interface Person {
    readonly id: number;
    name: string;
    age?: number;
  }
  let tom: Person = {
    // 类型 "{ name: string; age: number; }" 中缺少属性 "id"，但类型 "Person" 中需要该属性。
    name: 'Tom',
    age: 25
  };
  tom.id = 20000;
  // 无法分配到 "id" ，因为它是只读属性。
  */
