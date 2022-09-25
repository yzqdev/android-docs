# 打包注意事项

## 教程

- 安卓离线打包教程 <https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android>
- 关于appkey的问题 <https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey>

## 分离abi(分开64位和32位)

在build.gradle添加

```groovy

 defaultConfig{

     splits {
         abi {
             enable true
             
    // 排除不必要的架构
 exclude 'x86','arm64-v8a'
  // 重置包含的目录
 reset()
  // 设置包含，调用前需要先用 reset 将默认清除
 include 'armeabi-v7a', 'x86'
 
 // 是否打出包含全部的apk
 universalApk true
         }
     }
 }
```

## 常见问题

- uni-app运行环境版本和编译器版本不一致的问题<https://ask.dcloud.net.cn/article/35627>
