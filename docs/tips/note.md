# 笔记

## 安卓组件

| 编号 | 组件        | 描述                                       |
| ---- | ----------- | ------------------------------------------ |
| 1    | `Fragments` | 表示`Activity`中的用户界面的一部分。       |
| 2    | `Views`     | 在屏幕上绘制的UI元素，包括按钮，列表形式等 |
| 3    | `Layouts`   | 查看控制屏幕格式和视图外观的层次结构。     |
| 4    | `Intents`   | 消息连接组件在一起。                       |
| 5    | `Resources` | 外部元素，如字符串，常量和可绘制图片。     |
| 6    | `Manifest`  | 应用程序的配置文件。                       |

## manifest详解

Activity启动模式(launchMode)

```text
android:launchMode="singleTop"

```

## 关于字体大小

- 使用sp作为字体大小单位,会随着系统的字体大小改变
- 而dp作为单位则不会.

## 设置颜色的几种方式

```kotlin
 basicTv.setTextColor(Color.GREEN)

basicTv.setTextColor(0xff00ff)
basicTv.setTextColor(Color.rgb(22,33,55))
basicTv.setTextColor(Color.argb(0,200,0,0))
basicTv.setTextColor(Color.parseColor("#00ff00"))
```

## 如果依赖下载不了

需要在根路径的`setting.gradle`添加

```kotlin
pluginManagement {
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}

```
