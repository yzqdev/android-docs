# dart基础

## 版本管理

[https://dart.dev/tools/pub/versioning](https://dart.dev/tools/pub/versioning)

配置环境变量

flutter默认的cache在`D:\flutter\.pub-cache`
dart默认的cache在`%LOCALAPPDATA%\Pub\Cache`

```text
PUB_CACHE
这个变量决定了 pub get 下载的依赖包存在到的位置，默认一般在当前用户的目录下面，可以通过环境变量修改默认位置.

PUB_HOSTED_URL
这个变量了指定 pub get 从哪里下载依赖包的资源，默认为 pub.dev，但国内经常出现无法访问的情况，因此可以通过设置环境变量指定镜像地址。
```
