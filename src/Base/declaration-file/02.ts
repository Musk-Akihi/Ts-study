/**
 * 书写声明文件
 */
/**
 * 不同场景下，声明文件的内容和使用方式会有区别
 * 全局变量：通过<script>标签引入第三方库，注入全局变量
 * npm包：通过import foo from 'from'导入，符合ES6模块规范
 * UMD库：既可以通过<script>引入，也可以通过import导入
 * 直接扩展全局变量：通过<script>标签引入后，改变一个全局变量的结构
 * 在npm包或UMD库中扩展全局变量：引用npm包或UMD库后，改变一个全局变量的结构
 * 模块插件：通过<script>或import导入后，改变另一个模块的结构
 */

/**
 * 全局变量
 * 声明文件的几种语法
 * declare var 声明全局变量
 * declare function 声明全局方法
 * declare class 声明全局类
 * declare enum 声明全局枚举类型
 * declare namespace 声明（含有子属性的）全局对象
 * interface 和 type 声明全局类型
 */

/**
 * declare var declare let declare const
 * let 和 var 定义的类型，允许修改全局变量
 * 一般来说，全局变量是禁止修改的常量，尽量使用const
 * 声明语句只能定义类型，切勿在声明语句中定义具体的实现
 */

/**
 * declare function
 */
/*
  // jQuery其实是一个函数，所以也可以用function来定义
  declare function jQuery(selector: string): any;
  // 在函数类型的声明语句中，函数重载也是支持的
  declare function jQuery(domReadyCallback: () => any): any;
 */

/**
 * declare class
 * 当全局变量是一个类的时候，我们用declare class来定义他的类型
 * 同样的，declare class语句也只能用来定义类型，不能用来定义具体的实现
 */
/*
  declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string {
      return this.name;
    }
  }
 */

/**
 * declare enum
 * 使用declare enum定义的枚举类型也称作外部枚举（Ambient Enums）
 * 声明文件仅会用于编译时的检查，在编译结果中会被删除
 * Directions 是由第三方库定义好的全局变量
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
 * declare namespace
 * 表示全局变量是一个对象，包含很多子属性
 * 在declare namespace 内部，声明可以忽略declare
 */
// 比如jQuery是一个全局变量，他是一个对象，提供了一个jQuery.ajax方法可以调用，那么我们就应该使用declare namespace jQuery来声明这个拥有多个子属性的全局变量
/*
  declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
    const version: number;
    class Event {
      blur(eventType: EventType): void;
    }
    enum EventType {
      CustomClick
    }
  }
 */

/**
 * 嵌套的命名空间
 * 如果对象拥有深层的层级，则需要用嵌套的namespace来声明深层的属性的类型
 */
/*
  declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
    namespace fn {
      function extend(object: any): void;
    }
  }
  // 用法
  jQuery.ajax('/api/get_ssomething');
  jQuery.fn.extend({
    check: function () {
      return this.each(function () {
        this.checked = true;
      });
    }
  });
 */

/*
  // 假如jQuery下仅有fn这一个属性，没有ajax等其他属性或方法，则可以不需要嵌套namespace
  declare namespace jQuery.fn {
    function extend(object: any): void;
  }
  // 用法
  jQuery.fn.extend({
    check: function () {
      return this.each(function () {
        this.checked = true;
      });
    }
  });
 */

/**
 * interface 和 type
 * 除了全局变量之外，可能有一些类型我们希望能暴露出来。在类型声明文件中，我们可以直接使用interface或type来声明一个全局的接口或类型
 */
/*
  interface AjaxSettings {
    methods?: 'GEt' | 'POST';
    data?: any;
  }
  declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void;
  }
  // 使用
  let settings: AjaxSettings = {
    methods: 'POST',
    data: {
      name: 'foo'
    }
  };
  jQuery.ajax('/api/post_something', settings);
 */

/**
 * 防止命名冲突
 * 暴露在最外层的interface或type会作为全局类型作用于整个项目中，我们应尽可能减少全局变量或全局类型的数量。
 * 最好将他们放在namespace下
 */
/*
  declare namespace jQuery {
    interface AjaxSettings {
      method?: 'GET' | 'POST';
      data?: any;
    }
    function ajax(url: string, settings?: AjaxSettings): void;
  }
  // 使用
  let settings: jQuery.AjaxSettings = {
    method: 'POST',
    data: {
      name: 'foo'
    }
  };
  jQuery.ajax('/api/post_something', settings);
 */

/**
 * 声明合并
 * 假如 jQuery 既是一个函数，可以直接被调用 jQuery('#foo')，又是一个对象，拥有子属性 jQuery.ajax()（事实确实如此），
 * 那么我们可以组合多个声明语句，它们会不冲突的合并起来
 */
/*
  declare function jQuery(selector: string): void;
  declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
  }
  // 使用
  jQuery('#foo');
  jQuery.ajax('/api/get_something');
 */
