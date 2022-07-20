# 升级dart

## 升级dart到2.12

- @required改为required
- 可以为null的类型使用string?修饰

## 组件被废弃

FlatButton被TextButton替代

this is c++ demo code
::: code-tabs#cpp

@tab c++

```cpp
#include <iostream>
using namespace std;
 
int main() 
{
    cout << "Hello, World!";
    return 0;
}
```

@tab dart

```dart
import 'dart:io';
import 'package:crypto/crypto.dart' as crypto;
import 'dart:typed_data';

bool isPhone(String input) {
  RegExp pathReg = RegExp(r"\.\\");
  return pathReg.hasMatch(input);
}
```

:::
