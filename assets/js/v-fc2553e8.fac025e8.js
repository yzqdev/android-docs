"use strict";(self.webpackChunkandroid_docs=self.webpackChunkandroid_docs||[]).push([[344],{722:(t,e,r)=>{r.r(e),r.d(e,{data:()=>l});const l=JSON.parse('{"key":"v-fc2553e8","path":"/flutter/Flutter-learning/Flutter%E4%BB%8E%E9%85%8D%E7%BD%AE%E5%AE%89%E8%A3%85%E5%88%B0%E5%A1%AB%E5%9D%91%E6%8C%87%E5%8D%97%E8%AF%A6%E8%A7%A3.html","title":"Flutter从配置安装到填坑指南详解","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"一、Flutter安装：","slug":"一、flutter安装","link":"#一、flutter安装","children":[]},{"level":3,"title":"二、如果已经安装Fluttter，需要更新请看（不更新的就跳过此步）：","slug":"二、如果已经安装fluttter-需要更新请看-不更新的就跳过此步","link":"#二、如果已经安装fluttter-需要更新请看-不更新的就跳过此步","children":[]},{"level":3,"title":"三、配置环境变量","slug":"三、配置环境变量","link":"#三、配置环境变量","children":[]},{"level":3,"title":"四、打开flutter命令行","slug":"四、打开flutter命令行","link":"#四、打开flutter命令行","children":[]},{"level":3,"title":"五、几个flutter常用命令","slug":"五、几个flutter常用命令","link":"#五、几个flutter常用命令","children":[]},{"level":3,"title":"六、开发工具的安装","slug":"六、开发工具的安装","link":"#六、开发工具的安装","children":[]},{"level":3,"title":"七、运行一个demo app","slug":"七、运行一个demo-app","link":"#七、运行一个demo-app","children":[]},{"level":3,"title":"八、遇到的一些问题：","slug":"八、遇到的一些问题","link":"#八、遇到的一些问题","children":[]},{"level":3,"title":"九、几个相关学习网站","slug":"九、几个相关学习网站","link":"#九、几个相关学习网站","children":[]}],"git":{"createdTime":1674363434000,"updatedTime":1674363434000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":13.78,"words":4134},"filePathRelative":"flutter/Flutter-learning/Flutter从配置安装到填坑指南详解.md","localizedDate":"2023年1月22日","excerpt":""}')},8274:(t,e,r)=>{r.r(e),r.d(e,{default:()=>q});var l=r(6252);const o=(0,l._)("h1",{id:"flutter从配置安装到填坑指南详解",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#flutter从配置安装到填坑指南详解","aria-hidden":"true"},"#"),(0,l.Uk)(" Flutter从配置安装到填坑指南详解")],-1),i={id:"本文同步发布在简书博客-更详细的请查看-flutter从配置安装到填坑指南详解",tabindex:"-1"},d=(0,l._)("a",{class:"header-anchor",href:"#本文同步发布在简书博客-更详细的请查看-flutter从配置安装到填坑指南详解","aria-hidden":"true"},"#",-1),n={href:"https://www.jianshu.com/p/399c01657920",target:"_blank",rel:"noopener noreferrer"},a=(0,l.uE)('<p>在 Google I/O ’17 上，Google 向我们介绍了 Flutter —— 一款新的用于创建移动应用的开源库。</p><p>Flutter是什么呢?它是Google使用Dart语言开发的移动应用开发框架，用来帮助开发者在iOS和Android平台上开发高性能、高质量的原生应用。Flutter是<strong>跨平台的免费开源UI框架，iOS和Android可以共用一套代码</strong>。</p><p><strong>Flutter是基于Dart语言编写的。主要优点：</strong></p><blockquote><ol><li>免费开源</li><li>利用保持状态的热重载（Hot Reload）、全新的响应式框架、丰富的控件以及集成的开发工具这些特点进行快速开发。</li><li>通过可组合的控件集合、丰富的动画库以及分层可扩展的架构来实现富有感染力的灵活界面设计。</li><li>借助可移植的 GPU 加速的渲染引擎以及高性能本地 ARM 代码运行时以达到跨设备跨平台的高质量用户体验。</li><li><strong>提高效率：使用一套代码同时开发Android和iOS。</strong></li><li>可扩展性很强：Flutter框架本身提供了丰富的Material Design和Cupertino(iOS-flavor)风格的控件，可自由扩展控件不受手机平台控件的限制。</li></ol></blockquote><p>今年（2018年）2月，Flutter推出了第一个Beta版本。这真是个好事。期待正式版早日发布。最近研究了一下Flutter，这个工具从安装到运行经历了九九八十一难，好在终于成功运行起来了。下面看一下官方的Demo在Android模拟器的运行效果图：</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/app.png?raw=true" alt="默认的Demo运行图"></p><p>下面就 <strong>详细的</strong> 讲一下我的安装之路和遇到的一些问题：</p><h4 id="社会我韦哥-人好干货多。开始撸码" tabindex="-1"><a class="header-anchor" href="#社会我韦哥-人好干货多。开始撸码" aria-hidden="true">#</a> 社会我韦哥，人好干货多。开始撸码！</h4><hr><h3 id="一、flutter安装" tabindex="-1"><a class="header-anchor" href="#一、flutter安装" aria-hidden="true">#</a> 一、Flutter安装：</h3><p>要安装并运行Flutter，你的开发环境必须满足这些最低要求：</p>',11),s={href:"https://flutter.io/setup-windows/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://flutter.io/setup-macos/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://flutter.io/setup-linux/",target:"_blank",rel:"noopener noreferrer"},c=(0,l.uE)('<blockquote><p>（一） 操作系统：Windows 7 SP1或更高版本（64位）</p></blockquote><p>略</p><blockquote><p>（二） 磁盘空间：400 MB（不包括IDE /工具的磁盘空间）。</p></blockquote><p>略</p><blockquote><p>（三） 对Android Studio的要求：需要安装3.0 或者更高的版本。</p></blockquote><p>略</p><blockquote><p>（四） Flutter支持的sdk环境：Android 4.1（API 16）或者更高版本。</p></blockquote><p>略</p><blockquote><p>（五） 对Android模拟器镜像的要求：推荐使用x86或者x86_64镜像。</p></blockquote><p>略</p><blockquote><p>（六） 工具：Flutter需要用到以下2个工具：</p></blockquote><h5 id="_1-powershell-5-0或更新版本" tabindex="-1"><a class="header-anchor" href="#_1-powershell-5-0或更新版本" aria-hidden="true">#</a> (1) PowerShell 5.0或更新版本</h5><p>查看PowerShell有没有安装，可以点击电脑<code>左下角</code> --&gt; <code>控制面板</code> --&gt; <code>程序</code> --&gt; <code>程序和功能</code>，找一下PowerShell，有时候安装了也可能找不到（我电脑就找不到），那就<code>win + R</code>,输入<code>cmd</code>回车，输入<code>$PSVersionTable</code> ，查看powershell版本。 如果报错说明没有安装PowerShell，请点击powershell官网 https://docs.microsoft.com/en-us/powershell/scripting/setup/installing-windows-powershell?view=powershell-6#upgrading-existing-windows-powershell</p><p><strong>【注意:】关于命令行无法显示某些字符或者中文乱码问题的解决：</strong></p><ul><li><p>1、无法显示√或者×字符 原因是点阵字体搞的鬼。设置一下控制台字体就可以了。 在控制台标题右键，选择字体，把点阵字体改为其他字体就可以了。</p></li><li><p>2、cmd中文乱码的解决：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. win+R 输入regedit 进入注册表 \n2. 找到 `HKEY_CURRENT_USER\\Console\\%SystemRoot%_system32_cmd.exe` \n如果该项下已存在CodePage项，则把值改为十进制”65001”；\n如果不存在，在该项下新建一个 DWORD（32位值），命名为“CodePage”，值设为“65001” \n3. 重启cmd后生效\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3、PowerShell中文乱码的解决：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. win+R 输入regedit 进入注册表\n2. 找到 `HKEY_CURRENT_USER\\Console\\%SystemRoot%_system32_WindowsPowerShell_v1.0_powershell.exe` 下的项。\n如果该项下已存在CodePage项，则把值改为十进制”65001”；\n如果不存在，在该项下新建一个 DWORD（32位值），命名为“CodePage”，值设为“65001”\n3. 重启PowerShell后生效\n\n安装好之后，运行一下看看版本号，我这边的powershell版本号相关信息如下：\n\n    PSVersion                      5.1.15063.1029\n    PSEdition                      Desktop\n    PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}\n    BuildVersion                   10.0.15063.1029\n    CLRVersion                     4.0.30319.42000\n    WSManStackVersion              3.0\n    PSRemotingProtocolVersion      2.3\n    SerializationVersion           1.1.0.1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-git-for-windows" tabindex="-1"><a class="header-anchor" href="#_2-git-for-windows" aria-hidden="true">#</a> (2) Git for Windows</h5>',19),g={href:"https://www.jianshu.com/p/3f12bd3ccf2a",target:"_blank",rel:"noopener noreferrer"},h=(0,l.uE)('<pre><code>git clone -b beta https://github.com/flutter/flutter.git\n</code></pre><p>运行过程截图：</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/download-flutter.png?raw=true" alt="默认的Demo运行图"></p><hr><h3 id="二、如果已经安装fluttter-需要更新请看-不更新的就跳过此步" tabindex="-1"><a class="header-anchor" href="#二、如果已经安装fluttter-需要更新请看-不更新的就跳过此步" aria-hidden="true">#</a> 二、如果已经安装Fluttter，需要更新请看（不更新的就跳过此步）：</h3><p>要同时更新Flutter SDK和包，请使用以下命令：</p><pre><code>flutter upgrade\n</code></pre><hr><h3 id="三、配置环境变量" tabindex="-1"><a class="header-anchor" href="#三、配置环境变量" aria-hidden="true">#</a> 三、配置环境变量</h3><p>如果想在命令行中使用 flutter 命令，你需要添加flutter的路径到path中去。这个和配置java环境变量是同样的做法，找到flutter安装路径，比如我的是<code>E:\\develop\\flutter\\bin</code>，我复制这个路径，右键<code>我的电脑</code>--&gt;<code>属性</code>--&gt;<code>高级系统属性</code>--&gt;<code>环境变量</code>--&gt;<code>找到PATH</code>，点击编辑--&gt;在最后把刚复制的路径粘贴进来，--&gt;一直<code>保存</code>确定就可以了。</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/path1.png?raw=true" alt="默认的Demo运行图"></p><p>接下来，使用<code>flutter --version</code> 查看一下版本号，看看环境变量配置好了没有。。如果如下图所示表示OK。</p><p><strong>【大坑】注意：如果只输入flutter 或者输入flutter -version 那么flutter以为是下达了自动更新命令，会自动更新最新版本，这个一定要注意了。</strong></p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/path2.png?raw=true" alt="默认的Demo运行图"></p><hr><h3 id="四、打开flutter命令行" tabindex="-1"><a class="header-anchor" href="#四、打开flutter命令行" aria-hidden="true">#</a> 四、打开flutter命令行</h3><p>win + R 快捷键，输入cmd，回车，输入<code>flutter doctor</code>，回车。</p><p>这个命令初次运行可能会很慢，Flutter会自动安装所需依赖，并进行编译。建议<code>科学上网</code>。</p><p>安装过程截图：</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-dos1.png?raw=true" alt="默认的Demo运行图"></p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-dos2.png?raw=true" alt="默认的Demo运行图"></p><p><strong>注意：</strong> [√]这个是安装OK的，[X]是需要安装的，或者是已安装但是没有运行起来的。（具体这里面有标记<code>[X]</code>的那些项如何安装后文有详细讲解，这里简单提一下。）</p><p>这里面有四项内容：</p><ul><li>（1）Flutter 这是Flutter工具，就是刚才git下载的那个。</li><li>（2）Android工具链，这里指的是SDK，会标注出SDK的最大版本号。</li><li>（3）IDE工具的对应版本，比如我的是Android Studio 2.2版本（这个是下载安装的版本），Android Studio 3.2版本（这个是免安装的版本，所以也会显示出来），还有Intellij IDEA</li><li>（4）已连接的设备，可以是模拟器，也可以是真机，如果已连接会显示出来。</li></ul><hr><h3 id="五、几个flutter常用命令" tabindex="-1"><a class="header-anchor" href="#五、几个flutter常用命令" aria-hidden="true">#</a> 五、几个flutter常用命令</h3><p>查看版本号的命令使用截图如下：</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-dos3.png?raw=true" alt="默认的Demo运行图"></p><p>以下是常用命令：</p><table><thead><tr><th>常用命令</th><th>含义</th></tr></thead><tbody><tr><td><strong>--version</strong></td><td>查看Flutter版本</td></tr><tr><td><strong>-h</strong>或者**--help**</td><td>打印所有命令行用法信息</td></tr><tr><td>analyze</td><td>分析项目的Dart代码。</td></tr><tr><td><strong>build</strong></td><td>Flutter构建命令。</td></tr><tr><td>channel</td><td>列表或开关Flutter通道。</td></tr><tr><td>clean</td><td>删除构建/目录。</td></tr><tr><td>config</td><td>配置Flutter设置。</td></tr><tr><td><strong>create</strong></td><td>创建一个新的Flutter项目。</td></tr><tr><td><strong>devices</strong></td><td>列出所有连接的设备。</td></tr><tr><td><strong>doctor</strong></td><td>展示了有关安装工具的信息。</td></tr><tr><td>drive</td><td>为当前项目运行Flutter驱动程序测试。</td></tr><tr><td>format</td><td>格式一个或多个Dart文件。</td></tr><tr><td>fuchsia_reload</td><td>在Fuchsia上进行热重载。</td></tr><tr><td><strong>help</strong></td><td>显示帮助信息的Flutter。</td></tr><tr><td><strong>install</strong></td><td>在附加设备上安装Flutter应用程序。</td></tr><tr><td>logs</td><td>显示用于运行Flutter应用程序的日志输出。</td></tr><tr><td>packages</td><td>命令用于管理Flutter包。</td></tr><tr><td>precache</td><td>填充了Flutter工具的二进制工件缓存。</td></tr><tr><td>run</td><td>在附加设备上运行你的Flutter应用程序。</td></tr><tr><td>screenshot</td><td>从一个连接的设备截图。</td></tr><tr><td>stop</td><td>停止在附加设备上的Flutter应用。</td></tr><tr><td>test</td><td>对当前项目的Flutter单元测试。</td></tr><tr><td>trace</td><td>开始并停止跟踪运行的Flutter应用程序。</td></tr><tr><td><strong>upgrade</strong></td><td>升级你的Flutter副本。</td></tr></tbody></table><hr><h3 id="六、开发工具的安装" tabindex="-1"><a class="header-anchor" href="#六、开发工具的安装" aria-hidden="true">#</a> 六、开发工具的安装</h3><blockquote><p>（一）AS</p></blockquote><p>Flutter对Android Studio的要求：需要安装<code>3.0</code> 或者<code>更高的版本</code>。</p><p>关于AS安装，这个就不用说了，大家都安装了吧，jdk,sdk这些都配置好了吧.直接看下文好了。</p><blockquote><p>（二） Flutter和Dart插件安装</p></blockquote><p>Flutter需要<code>Flutter</code>和<code>Dart</code>插件才可以使用：</p><p>File --&gt; settings --&gt; Plugins --&gt; Browse repositories，然后输入Flutter就可以下载了，Drat也是一样的道理。</p><ul><li><code>Flutter</code>插件安装：</li></ul><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/plugin-flutter.png?raw=true" alt="默认的Demo运行图"></p><ul><li><code>Dart</code>插件安装：</li></ul><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/plugin-dart.png?raw=true" alt="默认的Demo运行图"></p><p>安装好之后重启一下AS就可以使用插件了。</p><hr><h3 id="七、运行一个demo-app" tabindex="-1"><a class="header-anchor" href="#七、运行一个demo-app" aria-hidden="true">#</a> 七、运行一个demo app</h3><p><strong>Flutter支持的sdk环境：Android 4.1（API 16）或者更高版本。</strong><strong>Android模拟器：推荐使用x86或者x86_64镜像。</strong></p><p>创建project过程和普通安卓项目是很类似的。</p><blockquote><p>（一）打开AS，点击 File --&gt; New Flutter Project，选择Flutter application ，点击next，输入一个工程名字</p></blockquote><p>**注意：**项目名称必须是小写，单词之间用下划线隔开，你看我这样创建就给我提示错误了，报错的如图所示。</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/app2.png?raw=true" alt="默认的Demo运行图"></p><blockquote><p>（二）输入包名，点击next，点击finish，等待编译就可以了。如果没配置好，这个时候往往会报错。</p></blockquote><p>**注意：**这里可以支持ios和kotlin，如果需要的话可以勾上。</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/app3.png?raw=true" alt="默认的Demo运行图"></p><blockquote><p>（三）首先模拟器，然后选择要运行的项目，注意了，这里有一个<code>MainActivity</code> 和 <code>main.dart</code>，选择<code>main.dart</code>，然后点击<code>绿色的三角号</code>图标运行（或者点击菜单栏 <code>Run</code>）就可以了。</p></blockquote><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/app4.png?raw=true" alt="默认的Demo运行图"></p><p>我用的AS3.2，我截个图，菜单栏跟以前版本有点不同，之前的AS版本可以在Build菜单找到编译选项的。</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/app5.png?raw=true" alt="默认的Demo运行图"></p><p>如果代码有更改，可以点击<code>黄色的闪电图标</code></p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/app6.png?raw=true" alt="默认的Demo运行图"></p><p>点击它之后就可以进行热加载。</p><hr><h3 id="八、遇到的一些问题" tabindex="-1"><a class="header-anchor" href="#八、遇到的一些问题" aria-hidden="true">#</a> 八、遇到的一些问题：</h3><blockquote><p>（一）卸载flutter相关环境</p></blockquote><ul><li><ol><li>Dart的插件安装包在 C盘路径： \\AppData\\Roaming\\Pub\\Cache\\hosted\\pub.dartlang.org文件夹里面 所以只需要找到Pub文件夹，删掉Pub文件夹。</li></ol></li><li><ol start="2"><li>flutter源代码文件，就是你在github下载下来的那个项目源代码， 比如我放在了E:\\develop\\flutter，我只需要把flutter这个文件夹删除就可以了。</li></ol></li><li><ol start="3"><li>C盘用户名下面有个.AndroidStudioXXX的文件夹，这个是AS的缓存目录， 比如我的是 C:\\Users\\luzhaowei.AndroidStudio2.2 打开，找到插件目录 C:\\Users\\luzhaowei.AndroidStudio2.2\\config\\plugins 把里面的Dart 和 flutter-intelliJ两个文件夹删掉</li></ol></li><li><ol start="4"><li>把环境变量里面的flutter和dart有关的设置删掉。</li></ol></li></ul><hr><blockquote><p>（二） 卸载flutter之后，命令行运行<code>flutter doctor</code>时，会有以下错误（以下是我的填坑指路全过程）：</p></blockquote><p><strong>注意：由于下载的国外的网站上的资料，需要科学上网！！！</strong></p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits1.png?raw=true" alt="默认的Demo运行图"></p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits2.png?raw=true" alt="默认的Demo运行图"></p><p>我退出命令行再运行，还是照样出错。</p><p>后来我想是不是<code>BITS传输服务</code>未开启，于是我一顿操作猛如虎，操作如下，打开BITS：</p><pre><code>计算机 --&gt; 右键 “管理” --&gt;  服务和应用程序里面，点击“服务”，然后如下图所示：\n</code></pre><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits3.png?raw=true" alt="默认的Demo运行图"></p><p>然后选中图中标记的这个，右键点击“属性”，然后改成自动，确定。如下图所示：</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits4.png?raw=true" alt="默认的Demo运行图"></p><p>然后我把刚下载的flutter文件夹删掉，重新执行git命令，下载flutter。（下好了之后记得配置环境变量）然后执行<code>flutter doctor</code> 命令，这次好一些了，但是命令行更新的很慢，一直停留在命令行，如图所示：</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits5.png?raw=true" alt="默认的Demo运行图"></p><p>等了好久，终于出来了。</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits6.png?raw=true" alt="默认的Demo运行图"></p><p>然后又是漫长的等待，在下载Material fonts这里出错了,于是我关掉了命令行，重新打开命令行，执行<code>flutter doctor</code>命令。</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits7.png?raw=true" alt="默认的Demo运行图"></p><p>然后又是失败。。不等了，关闭命令行吧。</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits8.png?raw=true" alt="默认的Demo运行图"></p><p>然后重新打开命令行，执行<code>flutter doctor</code>命令。经历了几个小时的折腾，终于环境安装好了！ 看到下面那个对勾，表示flutter已经更新完成了。</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits9.png?raw=true" alt="默认的Demo运行图"></p><p>然后重新打开命令行，执行<code>flutter doctor -v</code>命令，。看看还有什么需要安装的？（目前我安装的flutter最新版是0.4.4）,如下图所示：</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits10.png?raw=true" alt="默认的Demo运行图"></p><p><strong>新版的跟旧版的有区别，这里的每一项里面的小项都很详细的列举了类目，只要是正确安装了IDE，以及配置了jdk,sdk环境的，都会详细列出来。</strong></p>',88),m={href:"http://doc.flutter-dev.cn/get-started/test-drive/#terminal",target:"_blank",rel:"noopener noreferrer"},b=(0,l.uE)('<p><strong>【重点提示】按照提示来操作即可，哪个缺少（前面是 <code>X</code> 符号的）就配置哪一个。。一般来说，命令行会给你一些提示，比如需要使用什么命令操作，需要在哪个路径下面操作等。。</strong></p><h5 id="有3点需要特别注意的" tabindex="-1"><a class="header-anchor" href="#有3点需要特别注意的" aria-hidden="true">#</a> 有3点需要特别注意的：</h5><ul><li><ol><li>Flutter，这里面有4个工具，缺一不可：Flutter本身的安装包，Framework（这是flutter的核心代码部分），Engine（flutter的引擎），Dart sdk。</li></ol></li><li><ol start="2"><li>Android toolchain（开发Android设备的一些工具），这里是完整版的安装，有7个工具：sdk（sdk路径），ndk（ndk路径），Platform(android-27)以及build-tools（27.0.3），给sdk路径配置<code>ANDROID_HOME</code>环境变量，jdk配置路径，jdk运行环境版本，android licenses(协议)。</li></ol></li><li><ol start="3"><li>Android Studio环境，包括安装包路径，Flutter插件，Dart插件，AS自带jdk版本号。 我这里还安装了IDEA， 所以也会把它的环境列举出来。</li></ol></li></ul><p>下面是安装过程中出现的一些安装包缺少的问题：</p><p>**↓这个 问题的原因：**是sdk环境变量没配置，找到sdk路径，比如我的是E:\\debelop\\sdk，我复制这个路径，打开环境变量，新建一个变量，取名为<code>ANDROID_HOME</code>，然后在path变量里面最后加入<code>;%ANDROID_HOME\\%</code></p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits11.png?raw=true" alt="默认的Demo运行图"></p><p>**↓这个 问题的原因：**一些android licenses没有同意，按上面的要求在命令行输入<code>flutter doctor --android-licenses</code>，回车，然后会出现要你输入y/n 你只要输入y 回车就好了。</p><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits12.png?raw=true" alt="默认的Demo运行图"></p><p><strong>↓其他问题：基本都是开发工具的配置了，这个就不多说了，大家应该很熟悉了。</strong></p><hr><blockquote><p>（三） Flutter插件不支持当前AS版本。当前的AS是3.2，我的gradle编译的api是27的，可能Flutter目前最高只能支持26，果然我在build.gradle里面的编译版本改成了26，重新编译一下，OK了。</p></blockquote><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits13.png?raw=true" alt="默认的Demo运行图"></p><hr><blockquote><p>（四） 编译一个demo居然安装包是30多M，这个也太坑了吧。。安卓原生的apk包最多就几M。但是这是debug模式下的apk包，签名打包后的release版本的包很小，大概几兆的样子。</p></blockquote><p><img src="https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits14.png?raw=true" alt="默认的Demo运行图"></p><hr>',16),f={href:"http://doc.flutter-dev.cn/inspector/",target:"_blank",rel:"noopener noreferrer"},w=(0,l._)("p",null,[(0,l._)("img",{src:"https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/pics/flutter-pits15.png?raw=true",alt:"默认的Demo运行图"})],-1),k=(0,l._)("hr",null,null,-1),v=(0,l._)("h3",{id:"九、几个相关学习网站",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#九、几个相关学习网站","aria-hidden":"true"},"#"),(0,l.Uk)(" 九、几个相关学习网站")],-1),A={href:"https://github.com/flutter/flutter",target:"_blank",rel:"noopener noreferrer"},F={href:"https://flutter.io/docs/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.dartlang.org/",target:"_blank",rel:"noopener noreferrer"},D=(0,l._)("p",null,"另外可以推荐下载nodejs和 yarn，以后使用yarn下载更新包很方便。（这个不是重点，了解就可以了）",-1),S=(0,l._)("blockquote",null,[(0,l._)("ul",null,[(0,l._)("li",null,"yarn官网 https://yarnpkg.com/zh-Hans/"),(0,l._)("li",null,"yarn中文网 https://yarn.bootcss.com/"),(0,l._)("li",null,"nodejs中文官网 https://nodejs.org/zh-cn/")])],-1),E={},q=(0,r(3744).Z)(E,[["render",function(t,e){const r=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[o,(0,l._)("h4",i,[d,(0,l.Uk)(" 本文同步发布在简书博客，更详细的请查看 "),(0,l._)("a",n,[(0,l.Uk)("Flutter从配置安装到填坑指南详解"),(0,l.Wm)(r)])]),a,(0,l._)("p",null,[(0,l.Uk)("这里以windows系统为例：windows安装文档请查看："),(0,l._)("a",s,[(0,l.Uk)("https://flutter.io/setup-windows/"),(0,l.Wm)(r)])]),(0,l._)("p",null,[(0,l.Uk)("macos安装文档请查看："),(0,l._)("a",u,[(0,l.Uk)("https://flutter.io/setup-macos/"),(0,l.Wm)(r)])]),(0,l._)("p",null,[(0,l.Uk)("linux安装文档请查看："),(0,l._)("a",p,[(0,l.Uk)("https://flutter.io/setup-linux/"),(0,l.Wm)(r)])]),c,(0,l._)("p",null,[(0,l.Uk)("使用git命令行（关于如何使用git，请查看我的博文 "),(0,l._)("strong",null,[(0,l._)("a",g,[(0,l.Uk)("Git及GitHub快速入门图文全面详解"),(0,l.Wm)(r)])]),(0,l.Uk)("）：")]),h,(0,l._)("p",null,[(0,l._)("strong",null,[(0,l.Uk)("Flutter支持Android Studio、VSCode以及 "),(0,l._)("a",m,[(0,l.Uk)("控制台+文本编辑器"),(0,l.Wm)(r)]),(0,l.Uk)(" 的方式。如果你还安装了VSCode，命令行里面也会列举出来的。")])]),b,(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l.Uk)("（五）Flutter有一个Flutter Inspector的工具，主要是检查Widget的，可以用于诊断布局渲染问题，查看app当前的视图树结构。"),(0,l._)("strong",null,[(0,l.Uk)("但是：这个视图树层次太深了，看起来很费劲有木有。。 详细使用描述可以参考官网文档："),(0,l._)("a",f,[(0,l.Uk)("http://doc.flutter-dev.cn/inspector/"),(0,l.Wm)(r)])])])]),w,k,v,(0,l._)("blockquote",null,[(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Flutter源码github链接 "),(0,l._)("a",A,[(0,l.Uk)("https://github.com/flutter/flutter"),(0,l.Wm)(r)])]),(0,l._)("li",null,[(0,l.Uk)("Flutter官方文档 "),(0,l._)("a",F,[(0,l.Uk)("https://flutter.io/docs/"),(0,l.Wm)(r)])]),(0,l._)("li",null,[(0,l.Uk)("Dart语言官方主页 "),(0,l._)("a",_,[(0,l.Uk)("https://www.dartlang.org/"),(0,l.Wm)(r)])])])]),D,S])}]])},3744:(t,e)=>{e.Z=(t,e)=>{const r=t.__vccOpts||t;for(const[t,l]of e)r[t]=l;return r}}}]);