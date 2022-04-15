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
