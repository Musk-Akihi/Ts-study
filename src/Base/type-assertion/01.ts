/**
 * 类型断言
 * 语法 （值 as 类型）（<类型>值）
 */

/**
 * 类型断言的用途
 */
/**
 * 将一个联合类型断言为其中一个类型
 * 当Ts不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法
 * 尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误
 */
/*
  interface Cat {
    name: string;
    run(): void;
  }
  interface Fish {
    name: string;
    swim(): void;
  }
  function getName(animal: Cat | Fish) {
    return animal.name;
  }
  function isFish(animal: Cat | Fish) {
    // if (typeof animal.swim === 'function') {
    //   return true;
    // }
    // 将animal断言成 Fish
    if (typeof (animal as Fish).swim === 'function') {
      return true;
    }
    return false;
  }
 */

/**
 * 将一个父类断言为更加具体的子类
 * 类之间有继承关系
 * type-interface 只能使用类型断言
 */
/*
  class ApiError extends Error {
    code: number = 0;
  }
  class HttpError extends Error {
    statusCode: number = 200;
  }
  function isApiError(error: Error) {
    // if (typeof (error as ApiError).code === 'number') {
    //   return true;
    // }
    if (error instanceof ApiError) {
      return true;
    }
    return false;
  }
 */

/**
 * 将任何一个类型断言为any
 * 一方面不能滥用as any，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡。
 */
// window.foo = 1
// (window as any).foo = 1;

/**
 * 将any断言为一个具体的类型
 */
/*
  function getCatchData(key: string): any {
    return (globalThis as any).catch[key];
  }
  interface Cat {
    name: string;
    run(): void;
  }
  const tom = getCatchData('tom') as Cat;
  tom.run();
 */

/**
 * 类型断言的限制
 * 1）联合类型可以被断言为其中一个类型
 * 2）父类可以被断言为子类
 * 3）任何类型都可以被断言为any
 * 4）any可以被断言为任何类型
 * 要使得A能够被断言为B，只需要A兼容B或B兼容A即可
 */
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}
let tom: Cat = {
  name: 'Tom',
  run: () => {
    console.log('run');
  }
};
let animal: Animal = tom;
