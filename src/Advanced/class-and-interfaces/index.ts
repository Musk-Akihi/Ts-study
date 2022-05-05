/**
 * 类与接口
 * 对类的一部分行为进行抽象
 */

/**
 * 类实现接口
 * 实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候可以把特性提取成接口（interfaces），用implements关键字来实现。提高面向对象的灵活性。
 */
/*
  interface Alarm {
    alert(): void;
  }
  class Door {}
  class SecurityDoor extends Door implements Alarm {
    alert() {
      console.log('SecurityDoor alert');
    }
  }
  class Car implements Alarm {
    alert() {
      console.log('Car alert');
    }
  }
 */

// 一个类可以实现多个接口
/*
  interface Alarm {
    alert(): void;
  }
  interface Light {
    lightOn(): void;
    lightOff(): void;
  }
  class Car implements Alarm, Light {
    alert(): void {}
    lightOn(): void {}
    lightOff(): void {}
  }
 */

/**
 * 接口继承接口
 * 接口与接口之间可以是继承关系
 */
/*
  interface Alarm {
    alert(): void;
  }
  interface Light extends Alarm {
    lightOn(): void;
    lightOff(): void;
    // alert(): string;
  }
  class Car implements Light {
    alert(): void {}
    lightOn(): void {}
    lightOff(): void {}
  }
 */

/**
 * 接口继承类
 * 常见的面向对象语言中，接口是不能继承类的，但在TS中可以
 */
/*
  class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  interface Point3d extends Point {
    z: number;
  }
  let point3d: Point3d = { x: 1, y: 2, z: 3 };
  console.log(point3d);
 */

/**
 * 为什么TS会支持接口继承类呢
 * 实际上，当我们在声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）
 * 所以我们既可以将 Point 当做一个类来使用（使用 new Point 创建它的实例）
 * 也可以将 Point 当做一个类型来用（使用 :Point 表示参数的类型）
 */
