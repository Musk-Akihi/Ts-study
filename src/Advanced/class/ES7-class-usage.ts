/**
 * ES7中类的语法
 */

/**
 * 实例属性
 * ES6中实例的属性只能通过构造函数中的 this.xxx 来定义
 * ES7提案中可以直接在类里面定义
 */
/*
  class Animal {
    name = 'jack';
    constructor() {
      // ...
      this.name = 'Tom';
    }
  }
  let a = new Animal();
  console.log(a.name);
 */

/**
 * 静态属性
 * ES7提案中，可以使用static定义一个静态属性
 */
/*
  class Animal {
    static num = 42;
    static sayHi() {}

    name: any;
    constructor(name: any) {
      this.name = name;
    }
  }
  console.log(Animal.num);
 */
