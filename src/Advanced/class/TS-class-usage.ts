/**
 * TS中类的用法
 */

/**
 * public、private、protected
 * public：修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性或方法都是public
 * private：修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * protected：修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 */
/*
  class Animal {
    public name: any;
    public constructor(name: any) {
      this.name = name;
    }
  }
  let a = new Animal('jack');
  console.log(a.name);
  a.name = 'Tom';
  console.log(a.name);
 */

/**
 * TS 编译之后的代码中，并没有限制 private 属性在外部的可访问性
 * 使用 private 修饰的属性或方法，在子类中也是不允许访问的
 * 使用 protected 修饰，允许在子类中访问
 */
/*
  class Animal {
    // private name: any;
    protected name: any;
    public constructor(name: any) {
      this.name = name;
    }
  }
  let a = new Animal('jack');
  // 属性“name”为私有属性，只能在类“Animal”中访问
  // console.log(a.name);
  // a.name = 'Tom';
  // console.log(a.name);
  class Cat extends Animal {
    constructor(name: any) {
      super(name);
      // 属性“name”为私有属性，只能在类“Animal”中访问
      console.log(this.name);
    }
  }
 */

/**
 * 当构造函数修饰为 private 时，该类不允许被继承或者实例化
 */
/*
  class Animal {
    public name: any;
    private constructor(name: any) {
      this.name = name;
    }
  }
  // 类“Animal”的构造函数是私有的，仅可在类声明中访问
  // let a = new Animal('jack');
  // 无法扩展类“Animal”。类构造函数标记为私有
  // class Cat extends Animal {}
 */

/**
 * 当构造函数修饰为 protected 时，该类只允许被继承
 */
/*
  class Animal {
    public name: any;
    protected constructor(name: any) {
      this.name = name;
    }
  }
  // 类“Animal”的构造函数是受保护的，仅可在类声明中访问
  // let a = new Animal('jack');
  class Cat extends Animal {
    constructor(name: any) {
      super(name);
    }
  }
  let c = new Cat('Tom');
  console.log(c);
 */

/**
 * 参数属性
 * 修饰符和readonly还可以使用在构造函数参数中
 * 等同于类中定义该属性同时给该属性赋值，使代码更简洁
 */
/*
  class Animal {
    public constructor(public name: any) {}
    // 等同于
    // public name: any;
    // this.name = name;
  }
 */

/**
 * readonly
 * 只读属性关键字，只允许出现在 属性声明 或 索引签名 或 构造函数 中
 * 如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面
 */
/*
  class Animal {
    readonly name: string;
    public constructor(name: string) {
      this.name = name;
    }
  }
  let a = new Animal('jack');
  console.log(a.name);
  // 无法分配到 "name" ，因为它是只读属性
  // a.name = 'Tom';
 */
/*
  class Animal {
    public constructor(public readonly name: string) {}
  }
  let a = new Animal('jack');
  console.log(a.name);
  // 无法分配到 "name" ，因为它是只读属性
  // a.name = 'Tom';
 */

/**
 * 抽象类
 * abstract 用于定义抽象类和其中的抽象方法
 * 概念
 *    抽象类是不允许被实例化的
 *    抽象类中的抽象方法必须被子类实现
 */
/*
  abstract class Animal {
    constructor(public name: string) {}
    // 方法“sayHi”不能具有实现，因为它标记为抽象
    // public abstract sayHi() {}
    public abstract sayHi(): any;
  }
  // 无法创建抽象类的实例
  // let a = new Animal('jack');
  class Cat extends Animal {
    // constructor(name: string) {
    //   super(name);
    // }
    public sayHi() {
      console.log(`Meow, My name is ${this.name}`);
    }
  }
  let c = new Cat('Tom');
  c.sayHi();
 */

/**
 * 类的类型
 * 给类加上TS的类型很简单，与接口类似
 */
/*
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHi(): string {
      return `My name is ${this.name}`;
    }
  }
  let a: Animal = new Animal('jack');
  let b: Cat = new Animal('Da');

  class Cat extends Animal {}
  let c: Animal = new Cat('Tom');
  let d: Cat = new Cat('Lili');
 */
