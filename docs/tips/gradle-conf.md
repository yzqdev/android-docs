# gradle 配置

:::tip
对单个项目生效，在项目中的build.gradle修改内容
:::

```groovy
 

allprojects {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/google/' }
        maven { url 'https://maven.aliyun.com/repository/jcenter/'}
    }
}


```

## 对所有项目生效，在${USER_HOME}/.gradle/下创建init.gradle文件

```groovy
allprojects{
    repositories {
        def ALIYUN_REPOSITORY_URL = 'https://maven.aliyun.com/repository/public/'
        def ALIYUN_JCENTER_URL = 'https://maven.aliyun.com/repository/jcenter/'
        def ALIYUN_GOOGLE_URL = 'https://maven.aliyun.com/repository/google/'
        def ALIYUN_GRADLE_PLUGIN_URL = 'https://maven.aliyun.com/repository/gradle-plugin/'
        all { ArtifactRepository repo ->
            if(repo instanceof MavenArtifactRepository){
                def url = repo.url.toString()
                if (url.startsWith('https://repo1.maven.org/maven2/')) {
                    project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_REPOSITORY_URL."
                    remove repo
                }
                if (url.startsWith('https://jcenter.bintray.com/')) {
                    project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_JCENTER_URL."
                    remove repo
                }
                if (url.startsWith('https://dl.google.com/dl/android/maven2/')) {
                    project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_GOOGLE_URL."
                    remove repo
                }
                if (url.startsWith('https://plugins.gradle.org/m2/')) {
                    project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_GRADLE_PLUGIN_URL."
                    remove repo
                }
            }
        }
        maven { url ALIYUN_REPOSITORY_URL }
        maven { url ALIYUN_JCENTER_URL }
        maven { url ALIYUN_GOOGLE_URL }
        maven { url ALIYUN_GRADLE_PLUGIN_URL }
    }
}

```

## gradle添加ext

**注意**

```kotlin
ext{
    set("development",true)
}

```

<https://developer.android.google.cn/studio/build/migrate-to-kts?hl=zh-cn>

Google 官方推荐的一个 Gradle 配置[最佳实践](https://developer.android.google.cn/studio/build/gradle-tips?hl=zh-cn)是在项目最外层 build.gradle 文件的`ext`代码块中定义项目范围的属性，然后在所有模块间共享这些属性，比如我们通常会这样存放依赖的版本号。

```groovy
// build.gradle

ext {
    compileSdkVersion = 28
    buildToolsVersion = "28.0.3"
    supportLibVersion = "28.0.0"
    ...
}
复制代码
```

但是由于缺乏IDE的辅助(跳转查看、全局重构等都不支持)，实际使用体验欠佳。

在`KTL`中用`extra`来代替`Groovy`中的`ext`

```kotlin
// The extra object can be used for custom properties and makes them available to all
// modules in the project.
// The following are only a few examples of the types of properties you can define.
extra["compileSdkVersion"] = 28
// You can also create properties to specify versions for dependencies.
// Having consistent versions between modules can avoid conflicts with behavior.
extra["supportLibVersion"] = "28.0.0"
 
android {
    // Use the following syntax to access properties you defined at the project level:
    // rootProject.extra["property_name"]
    compileSdkVersion(rootProject.extra["sdkVersion"])

    // Alternatively, you can access properties using a type safe delegate:
    val sdkVersion: Int by rootProject.extra
    ...
    compileSdkVersion(sdkVersion)
}
...
dependencies {
    implementation("com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}")
    ...
}
复制代码
```

> `build.gralde`中的`ext`数据是可以在`build.gradle.kts`中使用`extra`进行访问的。

### 修改生成apk名称和BuildConfig中添加apk支持的cpu架构

```kotlin
val abiCodes = mapOf("armeabi-v7a" to 1, "x86" to 2, "x86_64" to 3)
android.applicationVariants.all {
    val buildType = this.buildType.name
    val variant = this
    outputs.all {
        val name =
            this.filters.find { it.filterType == com.android.build.api.variant.FilterConfiguration.FilterType.ABI.name }?.identifier
        val baseAbiCode = abiCodes[name]
        if (baseAbiCode != null) {
           //写入cpu架构信息
            variant.buildConfigField("String", "CUP_ABI", "\"${name}\"")
        }
        if (this is com.android.build.gradle.internal.api.ApkVariantOutputImpl) {
            //修改apk名称
            if (buildType == "release") {
                this.outputFileName = "KotlinDSL_${name}_${buildType}.apk"
            } else if (buildType == "debug") {
                this.outputFileName = "KotlinDSL_V${variant.versionName}_${name}_${buildType}.apk"
            }
        }
    }
}
 
```
