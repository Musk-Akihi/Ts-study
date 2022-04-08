/**
 * 任意值（Any）用来表示允许赋值为任意类型。
 */

/*
  let myFavoriteNumber: string = 'seven';
  myFavoriteNumber = 7;
  console.log(myFavoriteNumber);
*/

/*
  let myFavoriteNumber: any = 'seven';
  myFavoriteNumber = 7;
  console.log(myFavoriteNumber);
*/

/**
 * 任意值的属性和方法
 * 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
 */
/*
  // 在任意值上访问任何属性都是允许的
  let anyThing1: any = 'hello';
  console.log(anyThing1);
  console.log(anyThing1.myName);
  console.log(anyThing1.myName.firstName);
  // 也允许调用任何方法
  let anyThing2: any = 'Tom';
  anyThing2.setName('Jerry');
  anyThing2.setName('Jerry').sayHello();
  anyThing2.myName.setFirstName('Cat');
*/

/**
 * 未声明的类型的变量
 * 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
 */
/*
  let someThing;
  someThing = 'seven';
  someThing = 7;

  someThing.setName('Tom');
*/
