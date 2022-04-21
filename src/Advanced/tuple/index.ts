/**
 * 元组
 * 数组合并了想同类型的对象，而元组（Tuple）合并了不同类型的对象
 */

/**
 * 简单例子
 * 当赋值或访问一个已知索引的元素时，会得到正确的类型
 * TypeScript 2.7引入了一个新的控制严格性的标记 –strictPropertyInitialization，确保每个实例的属性都会初始值
 */
/*
  let tom: [string, number] = ['Tom', 25];
  tom[0] = 'Jack';
  tom[1] = 30;
  console.log(tom[0].slice(1));
  console.log(tom[1].toFixed(2));
 */

/**
 * 越界的元素
 * 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
 */
/*
  let tom: [string, number];
  tom = ['Tom', 25];
  tom.push('Jack');
  tom.push(true);
 */
