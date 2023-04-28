"use strict";(self.webpackChunkandroid_docs=self.webpackChunkandroid_docs||[]).push([[3741],{5638:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e=JSON.parse('{"key":"v-0ee02ffe","path":"/tips/faqs.html","title":"常见问题","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Gradle Build Task :app:dataBindingGenBaseClassesShopDevDebug Failed配置DataBinding时错误","slug":"gradle-build-task-app-databindinggenbaseclassesshopdevdebug-failed配置databinding时错误","link":"#gradle-build-task-app-databindinggenbaseclassesshopdevdebug-failed配置databinding时错误","children":[]},{"level":2,"title":"从4.0 升级到了最新版4.1的Android studio  然后代码就全都变成了白色","slug":"从4-0-升级到了最新版4-1的android-studio-然后代码就全都变成了白色","link":"#从4-0-升级到了最新版4-1的android-studio-然后代码就全都变成了白色","children":[]},{"level":2,"title":"已解决：Could not create task ‘:app:minifyDebugWithR8‘.. Cannot query the value of this provider","slug":"已解决-could-not-create-task-app-minifydebugwithr8-cannot-query-the-value-of-this-provider","link":"#已解决-could-not-create-task-app-minifydebugwithr8-cannot-query-the-value-of-this-provider","children":[]}],"git":{"createdTime":1659917471000,"updatedTime":1664980288000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":1.4,"words":419},"filePathRelative":"tips/faqs.md","localizedDate":"2022年8月8日","excerpt":""}')},3588:(a,n,s)=>{s.r(n),s.d(n,{default:()=>p});var e=s(6252);const t=[(0,e.uE)('<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><h2 id="gradle-build-task-app-databindinggenbaseclassesshopdevdebug-failed配置databinding时错误" tabindex="-1"><a class="header-anchor" href="#gradle-build-task-app-databindinggenbaseclassesshopdevdebug-failed配置databinding时错误" aria-hidden="true">#</a> Gradle Build Task :app:dataBindingGenBaseClassesShopDevDebug Failed配置DataBinding时错误</h2><p>1、开启DataBind如果版本足够高的话，不用听过时的教程，这里加几行代码，那里加几行代码的。 只需要在build-grade（有android的那个）中的android内添加</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    buildFeatures{\n        dataBinding = true\n    }\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后刷新下，你就遇到了标题那样的错误，或者直接报出这个错误 not a valid name:？ 我放个例子</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Com.System.Bean.User<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>variable</span>\n        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如你像这个一样，引用的包名是大写的，就会无法解析报错，所以要注意代码规范。在这个代码中除了User类以外都要小写，要改成这样</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.system.bean.User<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>variable</span>\n        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我是因为这个Bean是自己建的所以会自动大写，进而报错，检查下你们的代码。 ​</p><h1 id="databinding下面有错但是可以运行" tabindex="-1"><a class="header-anchor" href="#databinding下面有错但是可以运行" aria-hidden="true">#</a> databinding下面有错但是可以运行</h1><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>import com<span class="token punctuation">.</span>yzq<span class="token punctuation">.</span>tutor<span class="token punctuation">.</span>databinding<span class="token punctuation">.</span>FragmentFirstBinding\n下面有波浪线\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要在app的build.gradle里面把sdk版本改为1.8就行</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code> compileOptions <span class="token punctuation">{</span>\n        sourceCompatibility JavaVersion<span class="token punctuation">.</span>VERSION_1_8\n        targetCompatibility JavaVersion<span class="token punctuation">.</span>VERSION_1_8\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="从4-0-升级到了最新版4-1的android-studio-然后代码就全都变成了白色" tabindex="-1"><a class="header-anchor" href="#从4-0-升级到了最新版4-1的android-studio-然后代码就全都变成了白色" aria-hidden="true">#</a> 从4.0 升级到了最新版4.1的Android studio 然后代码就全都变成了白色</h2><p>和惯例的 低电量模式、代码样式都没有关系 ​    通过报错</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>com<span class="token punctuation">.</span>intellij<span class="token punctuation">.</span>diagnostic<span class="token punctuation">.</span>PluginException<span class="token punctuation">:</span> While loading <span class="token keyword">class</span> <span class="token class-name">com<span class="token punctuation">.</span>avast<span class="token punctuation">.</span>android<span class="token punctuation">.</span>butterknifezelezny<span class="token punctuation">.</span>InjectAction</span><span class="token punctuation">:</span> com<span class="token interpolation-string"><span class="token string">/intellij/</span></span>codeInsight<span class="token interpolation-string"><span class="token string">/generation/</span></span>actions<span class="token operator">/</span>BaseGenerateAction <span class="token punctuation">[</span>Plugin<span class="token punctuation">:</span> eu<span class="token punctuation">.</span>inmite<span class="token punctuation">.</span>android<span class="token punctuation">.</span>plugin<span class="token punctuation">.</span>butterknifezelezny<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示是butterknife zelezny 版本问题,禁用或者卸载就可以</p><h2 id="已解决-could-not-create-task-app-minifydebugwithr8-cannot-query-the-value-of-this-provider" tabindex="-1"><a class="header-anchor" href="#已解决-could-not-create-task-app-minifydebugwithr8-cannot-query-the-value-of-this-provider" aria-hidden="true">#</a> 已解决：Could not create task ‘:app:minifyDebugWithR8‘.. Cannot query the value of this provider</h2><p>解决办法：1.打开你项目的build.gradle文件，查看dependencies中的版本号； ​</p><p>2.在Android studio中双击shift，在弹框中输入sdk manager，回车； ​</p><ol start="3"><li>下载和你的build.gradle中的版本号相同的sdk； ​</li></ol><p>4.重新build项目，即可通过！</p>',22)],i={},p=(0,s(3744).Z)(i,[["render",function(a,n){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},3744:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,e]of n)s[a]=e;return s}}}]);