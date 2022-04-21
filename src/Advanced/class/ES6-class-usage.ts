/**
 * ES6中类的用法
 */

/**
 * 属性和方法
 * 使用 class 定义类，使用 constructor 定义构造函数
 * 通过 new 生成新实例的时候，会自动调用构造函数
 */
/*
  class Animal {
    public name;
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      return `My name s ${this.name}`;
    }
  }
  let a = new Animal('jack');
  console.log(a.sayHi());
 */

/**
 * 类的继承
 * 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法
 */
/*
  class Cat extends Animal {
    constructor(name) {
      // 调用父类的 constructor(name)
      super(name);
      // console.log(super); // "super" 的后面必须是参数列表或成员访问
      console.log(this.name);
    },
    sayHi() {
      return 'Meow, ' + super.sayHi()
    }
  }
  let c = new Cat('Tom')
  console.log(c.sayHi());
 */

/**
 * 存取器
 * 使用 getter 和 setter可以改变属性的赋值和读取行为
 */
/*
  class Animal {
    constructor(name) {
      this.name = name;
    }
    get name() {
      return 'jack';
    }
    set name(value) {
      console.log(`setter: ${value}`);
    }
  }
  let a = new Animal('Kitty');
  a.name = 'Tom';
  console.log(a.name);
 */

/**
 * 静态方法
 * 使用 static 修饰符修饰的方法称为静态方法，他们不需要实例化，而是直接通过类来调用
 */
/*
  class Animal {
    constructor() {
      console.log(this);
    }
    sayHi() {}
    static isAnimal(a) {
      return a instanceof Animal;
    }
  }
  let a = new Animal();
  console.log(Animal.isAnimal(a));
 */

/**
 * 编译后的
  var Animal = (function () {
    function Animal() {
      console.log(this);
    }
    Animal.prototype.sayHi = function () {};
    Animal.isAnimal = function (a) {
      return a instanceof Animal;
    };
    return Animal;
  })();
  var a = new Animal();
  console.log(Animal.isAnimal(a));
 */
