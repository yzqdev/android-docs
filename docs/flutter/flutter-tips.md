#  flutter开发技巧

## 去除过渡动画

- vrouter
在themedata加上这个


```
 transitionDuration: Duration(seconds: 0),
```

- auto_route
```dart
 @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      theme: ThemeData(
        pageTransitionsTheme: PageTransitionsTheme(
          builders: {
            TargetPlatform.android: ZoomPageTransitionsBuilder(),
            TargetPlatform.iOS: CupertinoPageTransitionsBuilder(),
            TargetPlatform.windows: CupertinoPageTransitionsBuilder()//注意这里
          },
        ),
      ),
      routerDelegate: _appRouter.delegate(),
      routeInformationParser: _appRouter.defaultRouteParser(),
    );
  }
}
```