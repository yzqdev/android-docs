# 一些安卓技巧

<https://stackoverflow.com/questions/2785485/is-there-a-unique-android-device-id>

## 让debug和release不冲突

添加下面的,包名会改变

```kotlin
buildTypes{
     named("debug"){
            applicationIdSuffix=".debug"
        }
}
```
