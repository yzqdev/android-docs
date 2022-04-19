# 一些小技巧

## 改包名

在 Flutter 中，并没有统一地修改图标、应用名称和包名的地方，所以要在各自语言对应的地方进行修改:

### 包名

- Android 是在 `android` ▸ `app` ▸ `src` ▸ `main` ▸ `AndroidManifest.xml` 中修改`package="xxx.xxx.xxx"`;
  以及在 `android` ▸ `app` ▸ `src` ▸ `build.gradle`中修改`applicationId "xxx.xxx.xxx"`;
  并且需要修改`android` ▸ `app` ▸ `src` ▸ `main` ▸ `......` ▸ `MainActivity.java`对应的包路径
- iOS 在 `ios` ▸ `Runner` ▸ `Info.plist` 中修改`CFBundleIdentifier`对应的Value

写法与原生相同，并且可以不一致。

> PS:不推荐修改包名，包名最好在项目开始时定下...之后修改可能会出点什么小问题...

### 应用名称

- Android 是在 `android` ▸ `app` ▸ `src` ▸ `main` ▸ `AndroidManifest.xml` 中修改`android:label="XXX"`;
- iOS 在 `ios` ▸ `Runner` ▸ `Info.plist` 中修改`CFBundleName`对应的Value

### 图标

- Android 在`android` ▸ `app` ▸ `src` ▸ `res` ▸ `mipmap-...` 文件夹中替换相应图片
- iOS 在 `ios` ▸ `Runner` ▸ `Assets.xcassets` ▸ `AppIcon.appiconset`文件夹中替换相应尺寸的图片， 如果使用不同的文件名，那还必须更新同一目录中的`Contents.json`文件。

### 启动图片

- Android 在`android` ▸ `app` ▸ `src` ▸ `res` ▸ `drawable` ▸ `launch_background.xml` 通过自定义drawable来实现自定义启动界面。
- iOS 在 `ios` ▸ `Runner` ▸ `Assets.xcassets` ▸ `LaunchImage.imageset`文件夹中替换相应尺寸的图片， 如果使用不同的文件名，那还必须更新同一目录中的`Contents.json`文件。

### 其他方式

可以使用Xcode打开ios文件夹下的`Runner.xcworkspace`项目，像原生项目一样修改。
