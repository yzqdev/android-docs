# flutter介绍

:::tip
官网包括移动版和桌面版 [官网](https://flutter.dev/)
:::

## 说明

Flutter 是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。

- 快速开发  
毫秒级的热加载，修改后，您的应用界面会立即更新。使用丰富的、完全可定制的widget 在几分钟内构件原生界面
富有表现力和灵活的UI  
快速发布聚焦原生体验的功能。分层的架构允许您完全自定义，从而实现难以置信的快速渲染和富有表现力、灵活的设计。
- 原生性能  
Flutter 包含了许多核心的 widget，如滚动、导航、图表和字体等，这些都可以在iOS和Android上达到原生应用一样的性能。
- 跨平台引擎

:::tip
国内网络原因,部分依赖可能无法下载,需要设置两个环境变量

```env
FLUTTER_STORAGE_BASE_URL: https://storage.flutter-io.cn
PUB_HOSTED_URL: https://pub.flutter-io.cn
```

:::

## 常用命令

```powershell
# 给现有的项目添加支持
flutter create --platforms=windows,macos,linux .

# 创建flutter应用
flutter create my_app
# 运行程序
flutter run 
flutter run -d windows
flutter run -d macos
flutter run -d linux
flutter run -d chrome
# 发布
flutter build windows
flutter build web
# 升级flutter
flutter upgrade
# 加入flutter linux支持
flutter config --enable-windows-desktop 
flutter config --enable-linux-desktop
# 查看设备
flutter devices
# 查看是否有问题
flutter doctor
```

## 注意事项

在谷歌浏览器运行,有时候会有错误,可以手动设置port和localhost

```shell
flutter run -d chrome --web-port=8080 --web-hostname=127.0.0.1
```

在android studio中,如何在android studio中运行chrome web, 以便支持热更新, 进行以下配置:

Run> Run...>Edit configurations> Additional run args 增加参数: `--web-port=8080 --web-hostname=127.0.0.1`
