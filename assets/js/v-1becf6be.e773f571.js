"use strict";(self.webpackChunkandroid_docs=self.webpackChunkandroid_docs||[]).push([[7847],{1228:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-1becf6be","path":"/tips/view-binding.html","title":"视图绑定","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"如何操作","slug":"如何操作","link":"#如何操作","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[{"level":3,"title":"在 Activity 中使用视图绑定","slug":"在-activity-中使用视图绑定","link":"#在-activity-中使用视图绑定","children":[]},{"level":3,"title":"在 Fragment 中使用视图绑定","slug":"在-fragment-中使用视图绑定","link":"#在-fragment-中使用视图绑定","children":[]}]},{"level":2,"title":"与 findViewById 的区别","slug":"与-findviewbyid-的区别","link":"#与-findviewbyid-的区别","children":[]},{"level":2,"title":"与数据绑定的对比","slug":"与数据绑定的对比","link":"#与数据绑定的对比","children":[]},{"level":2,"title":"绑定activity包含include","slug":"绑定activity包含include","link":"#绑定activity包含include","children":[]}],"git":{"createdTime":1664951526000,"updatedTime":1664951526000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":5.2,"words":1560},"filePathRelative":"tips/view-binding.md","localizedDate":"2022年10月5日","excerpt":""}')},6454:(n,a,s)=>{s.r(a),s.d(a,{default:()=>O});var e=s(6252);const t=(0,e.uE)('<h1 id="视图绑定" tabindex="-1"><a class="header-anchor" href="#视图绑定" aria-hidden="true">#</a> 视图绑定</h1><h2 id="如何操作" tabindex="-1"><a class="header-anchor" href="#如何操作" aria-hidden="true">#</a> 如何操作</h2><p>可替代<code>findViewById</code>,</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>android <span class="token punctuation">{</span>\n        <span class="token punctuation">...</span>\n        viewBinding <span class="token punctuation">{</span>\n            enabled <span class="token operator">=</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>为某个模块启用视图绑定功能后，系统会为该模块中包含的每个 XML 布局文件生成一个绑定类。每个绑定类均包含对根视图以及具有 ID 的所有视图的引用。系统会通过以下方式生成绑定类的名称：将 XML 文件的名称转换为驼峰式大小写，并在末尾添加“Binding”一词。</p><p>例如，假设某个布局文件的名称为 <code>result_profile.xml</code>：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span> <span class="token attr-name">...</span> <span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span> <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/name<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImageView</span> <span class="token attr-name"><span class="token namespace">android:</span>cropToPadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/button<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@drawable/rounded_button<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>\n    \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所生成的绑定类的名称就为 <code>ResultProfileBinding</code>。此类具有两个字段：一个是名为 <code>name</code> 的 <code>TextView</code>，另一个是名为 <code>button</code> 的 <code>Button</code>。该布局中的 <code>ImageView</code> 没有 ID，因此绑定类中不存在对它的引用。</p><p>每个绑定类还包含一个 <code>getRoot()</code> 方法，用于为相应布局文件的根视图提供直接引用。在此示例中，<code>ResultProfileBinding</code> 类中的 <code>getRoot()</code> 方法会返回 <code>LinearLayout</code> 根视图。</p><p>以下几个部分介绍了生成的绑定类在 Activity 和 Fragment 中的使用。</p><h3 id="在-activity-中使用视图绑定" tabindex="-1"><a class="header-anchor" href="#在-activity-中使用视图绑定" aria-hidden="true">#</a> 在 Activity 中使用视图绑定</h3>',12),o={href:"https://developer.android.google.cn/reference/kotlin/android/app/Activity#oncreate",target:"_blank",rel:"noopener noreferrer"},i=(0,e._)("code",null,"onCreate()",-1),l=(0,e._)("li",null,[(0,e.Uk)("调用生成的绑定类中包含的静态 "),(0,e._)("code",null,"inflate()"),(0,e.Uk)(" 方法。此操作会创建该绑定类的实例以供 Activity 使用。")],-1),p=(0,e._)("code",null,"getRoot()",-1),c={href:"https://kotlinlang.org/docs/reference/properties.html#declaring-properties",target:"_blank",rel:"noopener noreferrer"},r={href:"https://developer.android.google.cn/reference/kotlin/android/app/Activity#setcontentview_1",target:"_blank",rel:"noopener noreferrer"},u=(0,e._)("code",null,"setContentView()",-1),d={href:"https://developer.android.google.cn/topic/libraries/view-binding#kotlin",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.android.google.cn/topic/libraries/view-binding#java",target:"_blank",rel:"noopener noreferrer"},v=(0,e.uE)('<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token keyword">private</span> <span class="token keyword">lateinit</span> <span class="token keyword">var</span> binding<span class="token operator">:</span> ResultProfileBinding\n\n    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">:</span> Bundle<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span>\n        binding <span class="token operator">=</span> ResultProfileBinding<span class="token punctuation">.</span><span class="token function">inflate</span><span class="token punctuation">(</span>layoutInflater<span class="token punctuation">)</span>\n        <span class="token keyword">val</span> view <span class="token operator">=</span> binding<span class="token punctuation">.</span>root\n        <span class="token function">setContentView</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span><span class="token comment">//一定要注意这里</span>\n    <span class="token punctuation">}</span>\n    \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您现在即可使用该绑定类的实例来引用任何视图：</p>',2),m={href:"https://developer.android.google.cn/topic/libraries/view-binding#kotlin",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.android.google.cn/topic/libraries/view-binding#java",target:"_blank",rel:"noopener noreferrer"},b=(0,e.uE)('<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    binding<span class="token punctuation">.</span>name<span class="token punctuation">.</span>text <span class="token operator">=</span> viewModel<span class="token punctuation">.</span>name\n    binding<span class="token punctuation">.</span>button<span class="token punctuation">.</span><span class="token function">setOnClickListener</span> <span class="token punctuation">{</span> viewModel<span class="token punctuation">.</span><span class="token function">userClicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>\n    \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-fragment-中使用视图绑定" tabindex="-1"><a class="header-anchor" href="#在-fragment-中使用视图绑定" aria-hidden="true">#</a> 在 Fragment 中使用视图绑定</h3>',2),h={href:"https://developer.android.google.cn/reference/kotlin/androidx/fragment/app/Fragment#oncreateview",target:"_blank",rel:"noopener noreferrer"},w=(0,e._)("code",null,"onCreateView()",-1),f=(0,e._)("li",null,[(0,e.Uk)("调用生成的绑定类中包含的静态 "),(0,e._)("code",null,"inflate()"),(0,e.Uk)(" 方法。此操作会创建该绑定类的实例以供 Fragment 使用。")],-1),y=(0,e._)("code",null,"getRoot()",-1),_={href:"https://kotlinlang.org/docs/reference/properties.html#declaring-properties",target:"_blank",rel:"noopener noreferrer"},x=(0,e._)("li",null,[(0,e.Uk)("从 "),(0,e._)("code",null,"onCreateView()"),(0,e.Uk)(" 方法返回根视图，使其成为屏幕上的活动视图。")],-1),q=(0,e._)("strong",null,"注意",-1),U=(0,e._)("code",null,"inflate()",-1),B=(0,e._)("code",null,"bind()",-1),I={href:"https://github.com/android/architecture-components-samples/blob/master/ViewBindingSample/app/src/main/java/com/android/example/viewbindingsample/BindFragment.kt#L36-L41",target:"_blank",rel:"noopener noreferrer"},V={href:"https://developer.android.google.cn/topic/libraries/view-binding#kotlin",target:"_blank",rel:"noopener noreferrer"},C={href:"https://developer.android.google.cn/topic/libraries/view-binding#java",target:"_blank",rel:"noopener noreferrer"},L=(0,e.uE)('<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token keyword">private</span> <span class="token keyword">var</span> _binding<span class="token operator">:</span> ResultProfileBinding<span class="token operator">?</span> <span class="token operator">=</span> <span class="token keyword">null</span>\n    <span class="token comment">// This property is only valid between onCreateView and</span>\n    <span class="token comment">// onDestroyView.</span>\n    <span class="token keyword">private</span> <span class="token keyword">val</span> binding <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> _binding<span class="token operator">!!</span>\n\n    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onCreateView</span><span class="token punctuation">(</span>\n        inflater<span class="token operator">:</span> LayoutInflater<span class="token punctuation">,</span>\n        container<span class="token operator">:</span> ViewGroup<span class="token operator">?</span><span class="token punctuation">,</span>\n        savedInstanceState<span class="token operator">:</span> Bundle<span class="token operator">?</span>\n    <span class="token punctuation">)</span><span class="token operator">:</span> View<span class="token operator">?</span> <span class="token punctuation">{</span>\n        _binding <span class="token operator">=</span> ResultProfileBinding<span class="token punctuation">.</span><span class="token function">inflate</span><span class="token punctuation">(</span>inflater<span class="token punctuation">,</span> container<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n        <span class="token keyword">val</span> view <span class="token operator">=</span> binding<span class="token punctuation">.</span>root\n        <span class="token keyword">return</span> view\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onDestroyView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onDestroyView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        _binding <span class="token operator">=</span> <span class="token keyword">null</span>\n    <span class="token punctuation">}</span>\n    \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您现在即可使用该绑定类的实例来引用任何视图：</p>',2),W={href:"https://developer.android.google.cn/topic/libraries/view-binding#kotlin",target:"_blank",rel:"noopener noreferrer"},A={href:"https://developer.android.google.cn/topic/libraries/view-binding#java",target:"_blank",rel:"noopener noreferrer"},E=(0,e.uE)('<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    binding<span class="token punctuation">.</span>name<span class="token punctuation">.</span>text <span class="token operator">=</span> viewModel<span class="token punctuation">.</span>name\n    binding<span class="token punctuation">.</span>button<span class="token punctuation">.</span><span class="token function">setOnClickListener</span> <span class="token punctuation">{</span> viewModel<span class="token punctuation">.</span><span class="token function">userClicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>\n    \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),D=(0,e._)("strong",null,"注意",-1),F={href:"https://developer.android.google.cn/reference/kotlin/androidx/fragment/app/Fragment#ondestroyview",target:"_blank",rel:"noopener noreferrer"},M=(0,e._)("code",null,"onDestroyView()",-1),R=(0,e.uE)('<h2 id="与-findviewbyid-的区别" tabindex="-1"><a class="header-anchor" href="#与-findviewbyid-的区别" aria-hidden="true">#</a> 与 findViewById 的区别</h2><p>与使用 <code>findViewById</code> 相比，视图绑定具有一些很显著的优点：</p><ul><li><strong>Null 安全</strong>：由于视图绑定会创建对视图的直接引用，因此不存在因视图 ID 无效而引发 Null 指针异常的风险。此外，如果视图仅出现在布局的某些配置中，则绑定类中包含其引用的字段会使用 <code>@Nullable</code> 标记。</li><li><strong>类型安全</strong>：每个绑定类中的字段均具有与它们在 XML 文件中引用的视图相匹配的类型。这意味着不存在发生类转换异常的风险。</li></ul><p>这些差异意味着布局和代码之间的不兼容将会导致构建在编译时（而非运行时）失败。</p><h2 id="与数据绑定的对比" tabindex="-1"><a class="header-anchor" href="#与数据绑定的对比" aria-hidden="true">#</a> 与数据绑定的对比</h2>',5),T={href:"https://developer.android.google.cn/topic/libraries/data-binding",target:"_blank",rel:"noopener noreferrer"},S=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("strong",null,"更快的编译速度"),(0,e.Uk)("：视图绑定不需要处理注释，因此编译时间更短。")]),(0,e._)("li",null,[(0,e._)("strong",null,"易于使用"),(0,e.Uk)("：视图绑定不需要特别标记的 XML 布局文件，因此在应用中采用速度更快。在模块中启用视图绑定后，它会自动应用于该模块的所有布局。")])],-1),P=(0,e._)("p",null,"反过来，与数据绑定相比，视图绑定也具有以下限制：",-1),K={href:"https://developer.android.google.cn/topic/libraries/data-binding/expressions",target:"_blank",rel:"noopener noreferrer"},j={href:"https://developer.android.google.cn/topic/libraries/data-binding/two-way",target:"_blank",rel:"noopener noreferrer"},J=(0,e.uE)('<p>考虑到这些因素，在某些情况下，最好在项目中同时使用视图绑定和数据绑定。您可以在需要高级功能的布局中使用数据绑定，而在不需要高级功能的布局中使用视图绑定。</p><h2 id="绑定activity包含include" tabindex="-1"><a class="header-anchor" href="#绑定activity包含include" aria-hidden="true">#</a> 绑定activity包含include</h2><p>In case of:</p><ol><li>Include with generic layout (not merge node), we need to assign ID to included part, this way in binding we will have access to included sub part</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span>\n    <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/your_id<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@layout/some_layout<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This way in your activity code:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">private</span> <span class="token keyword">lateinit</span> <span class="token keyword">var</span> exampleBinding<span class="token operator">:</span> ActivityExampleBinding  <span class="token comment">//activity_example.xml layout</span>\n\n<span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">:</span> Bundle<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span>\n    exampleBinding <span class="token operator">=</span> ActivityExampleBinding<span class="token punctuation">.</span><span class="token function">inflate</span><span class="token punctuation">(</span>layoutInflater<span class="token punctuation">)</span>\n    <span class="token function">setContentView</span><span class="token punctuation">(</span>exampleBinding<span class="token punctuation">.</span>root<span class="token punctuation">)</span>\n    <span class="token comment">//we will be able to access included layouts view like this</span>\n    <span class="token keyword">val</span> includedView<span class="token operator">:</span> View <span class="token operator">=</span> exampleBinding<span class="token punctuation">.</span>yourId<span class="token punctuation">.</span>idOfIncludedView\n<span class="token comment">//[...]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Include with merge block in external layout. We can&#39;t add ID to it because merge block is not a view. Let&#39;s say we have such eternal merge layout (merge_layout.xm):</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>merge</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">xmlns:</span>app</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res-auto<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">xmlns:</span>tools</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/tools<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">tools:</span>showIn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@layout/activity_example<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>\n        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/some_view<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hello World<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>merge</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To properly bind such merge layout we need to:</p><p>In your activity code:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">private</span> <span class="token keyword">lateinit</span> <span class="token keyword">var</span> exampleBinding<span class="token operator">:</span> ActivityExampleBinding  <span class="token comment">//activity_example.xml layout</span>\n<span class="token keyword">private</span> <span class="token keyword">lateinit</span> <span class="token keyword">var</span> mergeBinding<span class="token operator">:</span> MergeLayoutBinding  <span class="token comment">//merge_layout.xml layout</span>\n\n<span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">:</span> Bundle<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span>\n    exampleBinding <span class="token operator">=</span> ActivityExampleBinding<span class="token punctuation">.</span><span class="token function">inflate</span><span class="token punctuation">(</span>layoutInflater<span class="token punctuation">)</span>\n    <span class="token comment">//we need to bind the root layout with our binder for external layout</span>\n    mergeBinding <span class="token operator">=</span> MergeLayoutBinding<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>exampleBinding<span class="token punctuation">.</span>root<span class="token punctuation">)</span>\n    <span class="token function">setContentView</span><span class="token punctuation">(</span>exampleBinding<span class="token punctuation">.</span>root<span class="token punctuation">)</span>\n    <span class="token comment">//we will be able to access included in merge layout views like this</span>\n    <span class="token keyword">val</span> mergedView<span class="token operator">:</span> View <span class="token operator">=</span> mergeBinding<span class="token punctuation">.</span>someView\n<span class="token comment">//[...]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',12),N={},O=(0,s(3744).Z)(N,[["render",function(n,a){const s=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e._)("p",null,[(0,e.Uk)("如需设置绑定类的实例以供 Activity 使用，请在 Activity 的 "),(0,e._)("a",o,[i,(0,e.Wm)(s)]),(0,e.Uk)(" 方法中执行以下步骤：")]),(0,e._)("ol",null,[l,(0,e._)("li",null,[(0,e.Uk)("通过调用 "),p,(0,e.Uk)(" 方法或使用 "),(0,e._)("a",c,[(0,e.Uk)("Kotlin 属性语法"),(0,e.Wm)(s)]),(0,e.Uk)("获取对根视图的引用。")]),(0,e._)("li",null,[(0,e.Uk)("将根视图传递到 "),(0,e._)("a",r,[u,(0,e.Wm)(s)]),(0,e.Uk)("，使其成为屏幕上的活动视图。")])]),(0,e._)("p",null,[(0,e._)("a",d,[(0,e.Uk)("Kotlin"),(0,e.Wm)(s)]),(0,e._)("a",k,[(0,e.Uk)("Java"),(0,e.Wm)(s)])]),v,(0,e._)("p",null,[(0,e._)("a",m,[(0,e.Uk)("Kotlin"),(0,e.Wm)(s)]),(0,e._)("a",g,[(0,e.Uk)("Java"),(0,e.Wm)(s)])]),b,(0,e._)("p",null,[(0,e.Uk)("如需设置绑定类的实例以供 Fragment 使用，请在 Fragment 的 "),(0,e._)("a",h,[w,(0,e.Wm)(s)]),(0,e.Uk)(" 方法中执行以下步骤：")]),(0,e._)("ol",null,[f,(0,e._)("li",null,[(0,e.Uk)("通过调用 "),y,(0,e.Uk)(" 方法或使用 "),(0,e._)("a",_,[(0,e.Uk)("Kotlin 属性语法"),(0,e.Wm)(s)]),(0,e.Uk)("获取对根视图的引用。")]),x]),(0,e._)("p",null,[q,(0,e.Uk)("："),U,(0,e.Uk)(" 方法会要求您传入布局膨胀器。如果布局已膨胀，您可以调用绑定类的静态 "),B,(0,e.Uk)(" 方法。如需了解详情，请查看"),(0,e._)("a",I,[(0,e.Uk)("视图绑定 GitHub 示例中的例子"),(0,e.Wm)(s)]),(0,e.Uk)("。")]),(0,e._)("p",null,[(0,e._)("a",V,[(0,e.Uk)("Kotlin"),(0,e.Wm)(s)]),(0,e._)("a",C,[(0,e.Uk)("Java"),(0,e.Wm)(s)])]),L,(0,e._)("p",null,[(0,e._)("a",W,[(0,e.Uk)("Kotlin"),(0,e.Wm)(s)]),(0,e._)("a",A,[(0,e.Uk)("Java"),(0,e.Wm)(s)])]),E,(0,e._)("p",null,[D,(0,e.Uk)("：Fragment 的存在时间比其视图长。请务必在 Fragment 的 "),(0,e._)("a",F,[M,(0,e.Wm)(s)]),(0,e.Uk)(" 方法中清除对绑定类实例的所有引用。")]),R,(0,e._)("p",null,[(0,e.Uk)("视图绑定和"),(0,e._)("a",T,[(0,e.Uk)("数据绑定"),(0,e.Wm)(s)]),(0,e.Uk)("均会生成可用于直接引用视图的绑定类。但是，视图绑定旨在处理更简单的用例，与数据绑定相比，具有以下优势：")]),S,P,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Uk)("视图绑定不支持"),(0,e._)("a",K,[(0,e.Uk)("布局变量或布局表达式"),(0,e.Wm)(s)]),(0,e.Uk)("，因此不能用于直接在 XML 布局文件中声明动态界面内容。")]),(0,e._)("li",null,[(0,e.Uk)("视图绑定不支持"),(0,e._)("a",j,[(0,e.Uk)("双向数据绑定"),(0,e.Wm)(s)]),(0,e.Uk)("。")])]),J])}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);