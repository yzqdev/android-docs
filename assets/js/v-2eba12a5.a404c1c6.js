"use strict";(self.webpackChunkandroid_docs=self.webpackChunkandroid_docs||[]).push([[3943],{6315:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-2eba12a5","path":"/tutor/advanced/localization.html","title":"本地化","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"本地化字符串","slug":"本地化字符串","link":"#本地化字符串","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1659917471000,"updatedTime":1659917471000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":3.21,"words":962},"filePathRelative":"tutor/advanced/localization.md","localizedDate":"2022年8月8日","excerpt":""}')},7312:(n,a,s)=>{s.r(a),s.d(a,{default:()=>c});var t=s(6252);const e=(0,t.uE)('<h1 id="本地化" tabindex="-1"><a class="header-anchor" href="#本地化" aria-hidden="true">#</a> 本地化</h1><p>android应用程序可以在许多不同地区的许多设备上运行。为了使您的应用程序更具交互性，您的应用程序应该以适合于将使用您的应用程序的语言环境的方式来处理文本，数字，文件等。将字符串更改为不同语言的方式称为本地化在本章中，我们将说明，如何根据不同的区域来本地化应用程序等。我们将本地化应用程序中使用的字符串，并以相同的方式本地化其他内容。</p><h2 id="本地化字符串" tabindex="-1"><a class="header-anchor" href="#本地化字符串" aria-hidden="true">#</a> 本地化字符串</h2><p>为了对应用程序中使用的字符串进行本地化，请在re下创建一个新文件夹，名称为values-local，其中local将替换为该区域。例如，在意大利，values-it文件夹将在res下创建。</p><p>创建完该文件夹后，将strings.xml从默认文件夹到您创建的文件夹中。并更改其内容。例如，我更改了hello_world字符串的值。</p><p><em>意大利，res/values-it/strings.xml</em></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello_world<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Ciao mondo!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>西班牙，res/values-es/strings.xml</em></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello_world<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hola Mundo!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>法语，res/values-fr/strings.xml</em></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello_world<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Bonjour le monde !<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了这些语言，下表还提供了其他语言的区域代码-</p><table><thead><tr><th>语言</th><th>说明</th></tr></thead><tbody><tr><td><strong>非洲语</strong></td><td>代码：af 文件夹名称：values-af</td></tr><tr><td><strong>阿拉伯语</strong></td><td>代码：ar。文件夹名称：values-ar</td></tr><tr><td><strong>孟加拉语</strong></td><td>代号：bn。文件夹名称：values-bn</td></tr><tr><td><strong>捷克语</strong></td><td>代码：cs 文件夹名称：values-cs</td></tr><tr><td><strong>中文</strong></td><td>代码：zh。文件夹名称：values-zh</td></tr><tr><td><strong>德语</strong></td><td>代号：de。文件夹名称：values-de</td></tr><tr><td><strong>法文</strong></td><td>代码：fr。文件夹名称：values-fr</td></tr><tr><td><strong>日本</strong></td><td>代码：ja。文件夹名称：values-ja</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>要试验此示例，可以在实际设备或仿真器中运行它。</p>',15),o={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},i=(0,t._)("li",null,"修改res/layout/activity_main以添加相应的XML组件",-1),l=(0,t._)("li",null,"修改res/values/string.xml以添加必要的字符串组件",-1),u=(0,t._)("li",null,"运行该应用程序以启动Android模拟器并验证在该应用程序中所做更改的结果。",-1),p=(0,t.uE)('<p>以下是修改后的主要活动文件src/com.jc2182.demo/MainActivity.java的内容。该文件可以包括每个基本生命周期方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>\n  \n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public class MainActivity extends Activity {</p><pre><code>  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n      super.onCreate(savedInstanceState);\n      setContentView(R.layout.activity_main);\n  }\n</code></pre><p>}</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\n\n以下是res/layout/activity_main.xml文件的内容-\n\n```xml\n\n&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;\n&lt;RelativeLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;\n    xmlns:tools=&quot;http://schemas.android.com/tools&quot; android:layout_width=&quot;match_parent&quot;\n    android:layout_height=&quot;match_parent&quot;\n    tools:context=&quot;.MainActivity&quot;&gt;\n\n    &lt;TextView\n        android:text=&quot;本地化示例&quot;\n        android:layout_width=&quot;wrap_content&quot;\n        android:layout_height=&quot;wrap_content&quot;\n        android:id=&quot;@+id/textview&quot;\n        android:textSize=&quot;35dp&quot;\n        android:layout_alignParentTop=&quot;true&quot;\n        android:layout_centerHorizontal=&quot;true&quot; /&gt;\n\n    &lt;TextView\n        android:id=&quot;@+id/textView&quot;\n        android:layout_width=&quot;198dp&quot;\n        android:layout_height=&quot;wrap_content&quot;\n        android:layout_below=&quot;@+id/textview&quot;\n        android:layout_centerHorizontal=&quot;true&quot;\n        android:text=&quot;蝴蝶教程&quot;\n        android:textColor=&quot;#ff7aff24&quot;\n        android:textSize=&quot;35dp&quot; /&gt;\n\n    &lt;Button\n        android:id=&quot;@+id/button&quot;\n        android:layout_width=&quot;94dp&quot;\n        android:layout_height=&quot;wrap_content&quot;\n        android:layout_below=&quot;@+id/imageView&quot;\n        android:layout_centerHorizontal=&quot;true&quot;\n        android:text=&quot;下载&quot; /&gt;\n\n    &lt;ImageView\n        android:layout_width=&quot;wrap_content&quot;\n        android:layout_height=&quot;wrap_content&quot;\n        android:id=&quot;@+id/imageView&quot;\n        android:src=&quot;@drawable/logo&quot;\n        android:background=&quot;#11EE22bb&quot;\n        android:layout_below=&quot;@+id/textView&quot;\n        android:layout_centerHorizontal=&quot;true&quot; /&gt;\n\n    &lt;ProgressBar\n        android:id=&quot;@+id/progressBar&quot;\n        style=&quot;?android:attr/progressBarStyleLarge&quot;\n        android:layout_width=&quot;272dp&quot;\n        android:layout_height=&quot;362dp&quot;\n        android:layout_below=&quot;@+id/button&quot;\n        android:layout_alignStart=&quot;@+id/textview&quot;\n        android:layout_alignLeft=&quot;@+id/textview&quot;\n        android:layout_alignEnd=&quot;@+id/textView&quot;\n        android:layout_alignRight=&quot;@+id/textView&quot;\n        android:layout_alignParentBottom=&quot;true&quot;\n        android:layout_marginEnd=&quot;-30dp&quot;\n        android:layout_marginRight=&quot;-30dp&quot;\n        android:layout_marginBottom=&quot;7dp&quot;\n        android:progressDrawable=&quot;@drawable/circular_progress_bar&quot; /&gt;\n\n&lt;/RelativeLayout&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是res/values/strings.xml文件的内容-</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello_world<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hindi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>तितली ट्यूटोरियल<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>marathi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>बटरफ्लाय ट्यूटोरियल<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>arabic<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>البرنامج التعليمي الفراشة<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>english<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Butterfly tutorial<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们尝试运行刚刚修改的应用程序。我假设您在进行环境设置时已创建了AVD。要从Android Studio运行该应用，请打开您项目的活动文件之一，然后工具栏中单击“运行”图标。Android studio将应用程序安装在您的AVD上并启动它，如果设置和应用程序一切正常，它将显示在“模拟器”窗口下面-</p><p><img src="https://www.jc2182.com/images/android/localtion1.png" alt=""></p>',10),d={},c=(0,s(3744).Z)(d,[["render",function(n,a){const s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t._)("ol",null,[(0,t._)("li",null,[(0,t.Uk)("您将使用Android Studio创建一个Android应用程序，并将其命名为Demo，位于com.jc2182.demo包下，如"),(0,t._)("a",o,[(0,t.Uk)("Hello World示例"),(0,t.Wm)(s)]),(0,t.Uk)("一章中所述。")]),i,l,u]),p])}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);