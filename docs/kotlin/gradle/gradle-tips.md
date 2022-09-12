# gradle用法

## Gradle依赖引入

自Android studio版本更新至3.0后，连带着**com.android.tools.build:gradle** 工具也升级到了3.0.0，在3.0.0中使用了最新的**Gralde 4.0** 里程碑版本作为gradle的编译版本，该版本gradle编译速度有所加速；

### Gradle新老版本关键字

| 4.x+版本配置              | 已弃用配置         |
| ------------------------- | ------------------ |
| api                       | compile            |
| implement                 | compile            |
| compileOnly               | provided           |
| runtimeOnly               | apk                |
| testimplementation       | testCompile        |
| androidTestimplementation| androidTestCompile |
| debugimplementation      | debugCompile       |
| releaseimplementation    | releaseCompile     |

- **api**

> 与compile对应，功能完全一样，会添加依赖到编译路径，并且会将依赖打包到输出（aar或apk），与implementation不同，这个依赖可以传递，其他module无论在编译时和运行时都可以访问这个依赖的实现，也就是会泄漏一些不应该不使用的实现。举个例子，A依赖B，B依赖C，如果都是使用api配置的话，A可以直接使用C中的类（编译时和运行时），而如果是使用implementation配置的话，在编译时，A是无法访问C中的类的。

- **implementation**

> 与compile对应，会添加依赖到编译路径，并且会将依赖打包到输出（aar或apk），但是**在编译时不会将依赖的实现暴露给其他module**，也就是只有在运行时其他module才能访问这个依赖中的实现;

> 简单的说，就是使用implementation指令的依赖不会传递;

> 使用这个配置，可以显著提升构建时间，因为它可以减少重新编译的module的数量。Google建议尽量使用这个依赖配置;

- **compileOnly**

> 与provided对应，Gradle把依赖加到编译路径，编译时使用，不会打包到输出（aar或apk）。这可以减少输出的体积，在只在编译时需要，在运行时可选的情况，很有用

- **apk**

> 只在生成apk的时候参与打包，编译时不会参与，很少用。

- **testImplementation**

> 只在单元测试代码的编译以及最终打包测试apk时有效。

- **androidTestImplementation**

> 只在Android相关单元测试代码的编译以及最终打包测试apk时有效。

- **debugImplementation**

> 只在 debug 模式的编译和最终的 debug apk 打包时有效

- **releaseImplementation**

> 仅仅针对 Release 模式的编译和最终的 Release apk 打包。

------

### 引入依赖基本方式

理论上gradle支持三种类型的引用，方式如下：

```kotlin
dependencies {
    
    implementation(project(":projectABC"))
    
    implementation(fileTree(dir: "libs", include: ["*.jar"]))

    implementation("androidx.appcompat:appcompat:1.0.2")
}
```

#### 1. 本地项目依赖 --> module依赖

```kotlin
dependencies {
    implementation(project(":projectABC"))
}
```

这种依赖方式是直接依赖本地工程代码，比如这个 **:projectABC** 就是在整个工程项目配置的 **settings.gradle** 中进行include操作;
 例如：

```kotlin
dependencies {
   include (":projectABC")
}
```

#### 2. 本地二进制依赖 --> jar和so等文件

```kotlin
dependencies {
    implementation(fileTree(dir: "libs", include: ["*.jar"]))
}
```

这种依赖方式是依赖工程中 **libs** 目录下的Jar等文件；

如果还想进行单独某个文件的引用

```kotlin
dependencies {
    implementation(files("libs/aaa.jar", "libs/bbb.jar"))
    implementation(files("x/y/z/ccc.jar"))
}
```

> 注意：Gradle的路径是相对于build.gradle文件来读取的，所以上面是这样的相对路径

#### 3.远端二进制依赖

```kotlin
dependencies {
    implementation("androidx.appcompat:appcompat:1.0.2")
}
```

这是简洁写法，也可以进行完整写法，如：

```kotlin
dependencies {
    implementation(group: "androidx.appcompat", name:"appcompat", version:"1.0.2")
}
```

------

### 引入依赖复杂方式

#### 根据Task类型引入

有时候我们在引入的时候还需要考虑debug，release，test包的情况如

```kotlin
dependencies {
    testimplementation("junit:junit:4.12")
    
    androidTestimplementation("com.android.support.test:runner:1.0.1")
    androidTestimplementation("com.android.support.test.espresso:espresso-core:3.0.1")
    
    debugimplementation("com.squareup.leakcanary:leakcanary-android:2.0-beta-2")
    releaseimplementation("com.squareup.leakcanary:leakcanary-android-no-op:2.0-beta-2")
}
```

#### 排除引用

有时候为了解决引入的冲突，需要在引入远端包的同时排除这些包的某几个依赖

```kotlin
dependencies {
    implementation("com.github.bumptech.glide:glide:4.9.0"){
        exclude (group:"com.android.support", module: "support-fragment")
        exclude (group:"com.android.support", module: "support-core-ui")
        exclude (group:"com.android.support", module: "support-compat")
        exclude (group:"com.android.support", module: "support-annotations")
    }
}
```
