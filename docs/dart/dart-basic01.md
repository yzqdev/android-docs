---
order: 1
---
# dart基础1

## 前言

谷歌推出Flutter跨平台UI框架后，对移动端的开发又产生了新的影响，Flutter采用Dart语言开发，而Flutter为什么选择Dart语言作为唯一的开发语言呢？总的来说，其拥有如下优势

- Dart可基于AOT（Ahead Of Time）编译，即编译成平台的本地代码，运行性能高。
- Dart也可基于JIT（Just In Time）编译，编译快速，可热加载，使开发周期加倍提升（Flutter亚秒级有状态热重载）
- Dart可以更轻松地创建以60fps运行的流畅动画和转场。Dart在没有锁的情况下进行对象分配和垃圾回收
- Dart语法结合Java与JavaScript语法特点，几乎没有令人不适的怪异语法，使Java程序员倍感亲切，快速上手

通常来说一门语言要么使用AOT编译，编译慢，开发效率低，或者使用JIT编译，在运行时编译，虽然可以热重载，但是执行效率低，而Dart在这两种之间做出了完美平衡，当开发时使用JIT编译，调试快，所见即所得，开发效率高，当发布时，使用AOT编译，编译成目标平台的本地代码，执行效率高。

## 安装Dart SDK

[官方下载地址](https://www.dartlang.org/install)
共有三种SDK版本选择

- Flutter
- Web
- Server

本章仅作为Dart编程语法学习，这里建议安装**Server**版的SDK，然后选择Windows版本进行下载。

## 配置环境变量

在Windows上，通过点击下一步即可安装，安装完成后，需将`dart-sdk`下的的`bin`目录添加到系统Path环境变量中。这一步骤是通常的命令配置步骤。

## 配置 VSCode 编辑器

作为Dart语言的学习，不建议下载笨重的IDE，官方提供支持VSCode 编辑器插件，建议使用VSCode 学习。

从 [官网下载](https://code.visualstudio.com/ "官网下载") VSCode编辑器，安装完成后，启动VSCode并在插件商店中搜索Dart进行插件安装。

## 测试环境

在VSCode中新建一个`test.dart`文件，编写如下代码

```dart
void  main(){
    print("hello world!");
}
```

运行后成功在控制台输出`hello world!`

# 基础语法

## 代码注释

Dart中的代码注释基本与Java语言相同

```dart
// 单行注释

/*
 * 多行注释
 */

/**
 * 文档注释
 */

/// 使用三个斜杠开头
/// 这是Dart特有的文档注释
```

## 内置数据类型

![a287c6f600](./img/ffbf539d3c.png)
> 在Dart中，所有能够使用变量引用的都是对象，每个对象都是一个类的实例。数字、函数和 `null` 也都是对象。所有的对象都继承于Object类。

要注意，没有初始化的变量默认值为 `null`。数值类型变量的默认值也是 `null`。

数值类型`num`有两个具体子类，分别为`int`和`double`，其中`int`为整数值，范围是`-2^53`至`2^53`之间；`double`则是64位的双精度浮点数。

## 变量与常量

### 定义变量

Dart中定义变量有两种方式，一种是静态类型语言常用的方式，显式指定变量类型，另一种则是动态语言的常用方式，不指定类型，由vm自动推断。

```dart
// 1.通过显式指定类型来定义变量
String name = "张三";
num age = 18;

// 2.使用关键字var，不指定类型
var address = "深南大道";
var id = 100;

/* 使用var定义变量，即使未显式指定类型，一旦赋值后类型就被固定
 * 因此使用var定义的变量不能改变数据类型
 */
var number = 19;
// 以下代码错误，无法运行，number变量已确定为int类型
number = "2019";
```

如想动态改变变量的数据类型，应当使用`dynamic`或`Object`来定义变量。

```dart
// dynamic声明变量
dynamic var1 = "hello";
var1 = 19;
print(var1);    // 19

// Object声明变量
Object var2 = 20;
var2 = "Alice";
print(var2);    // Alice
```

建议在编写代码时，尽可能显式指定变量类型，这样可以提升代码可读性与调试的便利性。

### 定义常量

Dart中定义常量也有两种方式，一种使用`final`关键字，同Java中的用法， 一个 final 变量只能赋值一次；另一种是Dart的方式，使用`const`关键字定义。

```dart
// 1.使用final关键字定义常量
final height = 10;

// 2.使用const关键字定义常量
const pi = 3.14;
```

需要注意，`final`定义的常量是运行时常量，而`const`常量则是编译时常量，也就是说`final`定义常量时，其值可以是一个变量，而`const`定义的常量，其值必须是一个字面常量值。

```dart
final time = new DateTime.now(); // 正确
const time = new DateTime.now(); // 错误


const list = const[1,2,3];       // 正确
const list = [1,2,3];            // 错误
```

## 内置类型的常用操作

### 数值类型

```dart
// String 转 int
var one = int.parse('1');

// String 转 double
var onePointOne = double.parse('1.1');

// int 转 String
String oneAsStr = 1.toString();

// double 转 String
String piAsStr = 3.14159.toStringAsFixed(2); // 保留两位 '3.14'

// Dart也支持整数位操作，<<、 >>、&、|
print((3 << 1) == 6);  // 0011 << 1 == 0110
print((3 >> 1) == 1);  // 0011 >> 1 == 0001
print((3 | 4)  == 7);  // 0011 | 0100 == 0111
```

### 字符串

> 值得一提的是，Dart中提供的字符串`插值表达式`使字符串格式化变得异常方便。

```dart
// 1.Dart可以使用单引号或双引号来创建字符串
var s1 = "hello";
var s2 = 'world';

// 2.类似Python，Dart可以使用三引号来创建包含多行的字符串
var multiLine1 = """你可以像这样，创建一个
包含了多行的字符串内容
""";

var multiLine2 = '''你也可以使用三个单引号，创建一个
包含了多行的字符串内容
''';

// 3.类似Python，还可以在字符串字面值的前面加上`r`来创建原始字符串，则该字符串中特殊字符可以不用转义
var path = r'D:\workspace\code';

// 4.Dart支持使用"+"操作符拼接字符串
var greet = "hello" + " world";

// 5.Dart提供了插值表达式"${}"，也可以用于拼接字符串
var name = "王五";
var aStr = "hello,${name}";
print(aStr);    // hello,王五

// 当仅取变量值时，可以省略花括号
var aStr2 = "hello,$name"; // hello,王五

// 当拼接的是一个表达式时，则不能省略花括号
var str1 = "link";
var str2 = "click ${str1.toUpperCase()}";
print(str2);   // click LINK

// 6. 与Java不同，Dart使用"=="来比较字符串的内容
print("hello" == "world");
```

### 布尔类型

> Dart中的布尔类型用法同Java，仅有`false`、`true`两个值，不能使用0、非0或者`null`、非`null`来表达`false`和`true`。与Java不同的是，布尔类型的默认值为`null`

```dart
bool flags;
print(flags);    // null
```

### 列表

Dart中列表操作与JavaScript中的数组相似。

```dart
// 创建列表
var list = [1, 2, 3];
// 下标从0开始。使用length可以访问list的长度
print(list[0]);
print(list.length);

// 可以使用add添加元素
list.add(5);

// 可在list字面量前添加const关键字，定义一个不可改变的 列表（编译时常量）
var constantList = const [1, 2, 3];
constantList[1] = 1;     // 报错
```

### 映射

又称为关联数组，相当于Java中的`HashMap`

```dart
// 1.通过字面量创建Map
var gifts = {
  'first' : 'partridge',
  'second': 'turtledoves',
  'fifth' : 'golden rings'
};

// 2.使用Map类的构造函数创建对象
var pic = new Map();
// 往Map中添加键值对
pic['first'] = 'partridge';
pic['second'] = 'turtledoves';
pic['fifth'] = 'golden rings';

// 3.获取Map的长度
print(pic.length);

// 4.查找Map
pirnt(pic["first"]);
print(pic["four"]);    // 键不存在则返回 null
```

## 函数

> 在Dart中，函数（或方法） 也是对象，它的类型是 `Function`。 这意味着，函数可以赋值给变量，也可以当做其他函数的参数。

### 定义函数

Dart中定义函数，基本上与Java类似

```dart
String greet(String name){
    return "hello,$name";
}
```

在Dart中，类型是可选，可以省略显式的类型，但仍然建议显式指定类型。

```dart
greet(name){
    return "hello,$name";
}
```

要注意，函数也是对象，所有函数都有返回值。当没有指定返回值的时候，函数会返回`null`。当然，如果你强行使用`void`来修饰函数，则函数真的没有返回值，这种情况就另当别论了。

### 函数的参数

Dart中支持两种可选参数

- 命名可选参数
- 位置可选参数

在Java中通常使用方法重载来实现同名方法的不同参数调用，Dart中则可以通过可选参数来实现相同效果。

#### 命名可选参数

先来看一下`命名参数`，它使用花括号来定义参数列表

```dart
// 定义一个函数，参数列表用花括号包裹
enableFlags({bool bold, bool hidden}) {
    // do something
}

// 调用方式，传参时使用"参数名:值"的形式
enableFlags(hidden:true,bold:false);
```

如果在定义函数时，给参数列表中的参数设置默认值，则该参数就是可选的，函数调用时可以忽略该参数，使用默认的值。

```dart
// 定义add函数
add({int x, int y=1, int z=0}){
    print(x + y + z;
}

// 调用
add(x:18);              // 19
add(x:18, y:2, z:10);   // 30
```

这里需要注意一下，SDK 1.21之前的版本中，命名参数不能使用`=`号来设置默认值，而SDK 1.21之后，只能使用`=`号来设置默认值。因此，请检查并升级SDK版本。

#### 位置可选参数

`位置可选参数`使用中括号来定义参数列表，中括号中的参数是可选的

```dart
// 定义add函数
add(int x, [int y, int z]){
    int result = x;
    if (y !=  null){
        result = result + y;
    }

    if (z !=  null){
        result = result + z;
    }
    print(result);
}

// 调用
add(18);           // 18
add(18,12);        // 30
add(18, 12, 15);   // 45
```

给`位置可选参数`设置默认值

```dart
// 定义add函数
add(int x, [int y=0, int z=0]){
    print(x +ｙ＋ｚ);
}
```

最后需要注意一下`命名可选参数`与`位置可选参数`的区别，前者中的参数与顺序无关，无需按顺序传参，且传参数时需使用冒号；后者与顺序相关，传参必须依照顺序。

### 匿名函数

> 大部分函数都有名字，但我们也可以创建没有名字的函数，称为匿名函数，也被称为lambda表达式或者闭包。

```dart
// 定义匿名函数，并将其赋值给一个变量func，注意，函数体最后的花括号处必须有分号结束。
var func = (x,y){
    return x + y;
};

print(func(10,11));    // 21
```

注意，匿名函数与普通函数基本相同，也有参数列表，函数体，只是省去了函数名而已。

### 箭头函数

> Dart中的箭头函数与JavaScript中的基本相同。当函数体中只包含一个语句时，我们就可以使用`=>`箭头语法进行缩写。注意，箭头函数仅仅只是一个简洁表达的语法糖。

普通函数

```dart
add(num x, num y){
    return x + y;
}

print(add(18,12));    // 30
```

箭头函数

```dart
// 与上面的普通函数完全等价
add(num x, num y) => x + y;

print(add(18,12));    // 30
```

箭头函数省略了花括号的表达，箭头后面跟一个表达式，函数的返回值也就是这个表达式的值。另外，箭头函数也可以与匿名函数结合，形成匿名箭头函数。

```dart
var func = (num x, num y) => x + y;
```

## 运算符

Dart语言中的运算符与Java中的绝大多数相同。

### 算术运算符

`+`、`-`、`*`、`/`、`%`同Java语言

Dart中又多出了一个整除运算符`~/`，与普通除号的区别是将相除后的结果取整返回。

### 类型判定运算符

以下是Dart增加的类型相关的运算符。

| 操作符 | 解释 |
| --- | --- |
| `as` | 用于类型转换 |
| `is` | 如果对象是指定的类型就返回 True |
| `is!` | 如果对象不是指定的类型返回 True |

当 `obj` 实现了 `T` 的接口时， `obj is T` 才是 true。类似于Java中的`instanceof`。

Dart中使用 `as` 操作符把对象转换为特定的类型，如无法转换则会抛出异常，因此在转换前最好使用`is`运算符进行检测。

```dart
// 将p转换为Person类型再操作
(p as Person).name = 'Bruce';
```

### 条件表达式

Dart中也支持三目表达式
`condition ? expr1 : expr2`

除此外，Dart还增加了非空条件判断符`??`
`expr1 ?? expr2`
上述运算表示，如果expr1的值不等于`null`，则返回其值； 否则执行表达式expr2并返回其结果。

```dart
var str1 =  "Hello";
var str2 =  "world";
var result = str1 ?? str2.toUpperCase();
```

### 级联运算符

> 我们通常使用`.`操作符调用对象的方法，这在Dart中也是支持的，但是Dart另外增加了一种级联运算符`..`，用两个点表示。

`级联运算符`可以在同一个对象上连续调用多个方法以及访问成员变量。 使用它可以避免创建临时变量， 写出更流畅的代码。

假如类Person有三个方法，`setName`、`setAge`、`save`，则可如下调用

```dart
new Person()..setName("Bob")..setAge(20)..save();
```

使用`级联运算符`调用方法，无需该方法返回对象本身即可连续的流式的调用该对象的其他方法。

### 条件成员访问符

> 在Java中很容易碰到恼人的空指针错误，因此在方法调用前需要进行对象的非空判断，这样的判断语句使代码变得冗长，可读性差，不整洁。Dart中则发明了一个新的运算符用于处理此类情况。

条件成员访问符`?.`，它和`.`类似，但是运算符左边的对象不能为`null`，否则返回`null`，若对象不为`null`，则返回对象本身。

```dart
// list1默认值为null
List list1;
print(list1?.length);  // null

List list2 = [];
print(list2?.length);  // 0
```

## 分支与循环

### 条件分支

Dart中的条件分支基本与Java相同

`if`条件分支

```dart
if(i < 0){
  print('i < 0');
}else if(i == 0){
  print('i = 0');
} else {
  print('i > 0');
}
```

`switch`条件分支

```dart
// 在switch的case中可以使用整数、字符串、枚举类型和编译时常量
String command = 'OPEN';
switch (command) {
  case 'CLOSED':
    break;
  case 'OPEN':
    break;
  default:
    print('Default');
}
```

### 循环语句

#### 基本循环

Dart中的基本循环语句与Java相同

```dart
// for循环
for(int i = 0; i < 9; i++) {
  print(i);
}

// while循环
while(true){
  //do something
}

// do-while循环
do{
  //do something
} while(true);
```

#### 特有循环

```dart
var myList = ['Java','JavaScript','Dart'];

// for...in...循环，类似Java中的增强for
for (var it in myList ){
    print(it);
}

// forEach循环。其参数为一个Function对象，这里传入一个匿名函数
myList.forEach((var it){
    print(it);
});

// 可以使用匿名箭头函数简写
myList.forEach((it) => print(it));
```

使用循环遍历Map

```dart
var myMap = {
'zhangsan':'201901',
'lisi':'201902',
'wangwu':'201902'
};

// forEach遍历Map
myMap.forEach((k, v) =>  print("$k : $v"));

// 根据键获取值来遍历。通过keys返回Map中所有键的集合
for(var k in myMap.keys){
    print("$k : ${myMap[k]}");
}
```
