"use strict";(self.webpackChunkandroid_docs=self.webpackChunkandroid_docs||[]).push([[2169],{2408:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-3410faab","path":"/tutor/basic/list-frag.html","title":"列表片段","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1667993962000,"updatedTime":1667993962000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":3,"words":900},"filePathRelative":"tutor/basic/list-frag.md","localizedDate":"2022年11月9日","excerpt":""}')},631:(n,a,s)=>{s.r(a),s.d(a,{default:()=>l});var t=s(6252);const p=(0,t.uE)('<h1 id="列表片段" tabindex="-1"><a class="header-anchor" href="#列表片段" aria-hidden="true">#</a> 列表片段</h1><blockquote><p>**列表片段（ListFragment）**静态库支持版本。用于编写在Android 3.0之前的平台上运行的应用程序。在Android 3.0或更高版本上运行时，仍使用此实现。</p></blockquote><p>列表片段的基本实现是用于创建片段中的列表项</p><p><img src="https://www.jc2182.com/images/android/fragmentlist.jpg" alt="fragmentlist"></p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>',5),e={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},o=(0,t.uE)('<ol><li>您将使用Android Studio创建一个Android应用程序，并在com.jc2182.helloworld包下将其命名为HelloWrold，Activity为空。</li><li>修改已放置在res/values/string.xml的字符串文件以添加新的字符串常量</li><li>在res/layout目录下创建一个名为list_fragment.xml的布局，以定义列表片段。并将片段标签（<code>&lt;fragment&gt;</code>）添加到您的activity_main.xml中</li><li>创建一个myListFragment.java，它位于java/myListFragment.java，它包含onCreateView()，onActivityCreated()和OnItemClickListener()</li><li>运行该应用程序以启动Android模拟器并验证在该应用程序中所做更改的结果。</li></ol><p>在开始编码之前，我将在res/values目录下的string.xml文件中初始化字符串常量。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>HelloWorld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n      <span class="token comment">&lt;!-- TODO: Remove or change this placeholder text --&gt;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>action_settings<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Settings<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello_world<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgdesc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>imgdesc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n  \n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string-array</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Planets<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>太阳<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>水星<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>金星<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>地球<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>火星<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>木星<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>土星<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>天王星<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>海王星<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string-array</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是res/layout/activity_main.xml文件的内容。它包含线性布局和片段标签。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RelativeLayout</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">xmlns:</span>tools</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/tools<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">android:</span>paddingLeft</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@dimen/activity_horizontal_margin<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">android:</span>paddingRight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@dimen/activity_horizontal_margin<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">android:</span>paddingTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@dimen/activity_vertical_margin<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">android:</span>paddingBottom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@dimen/activity_vertical_margin<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">tools:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.MainActivity<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  \n \n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fragment</span>\n      <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/fragment1<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.jc2182.helloworld.MyListFragment<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RelativeLayout</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是res/layout/list_fragment.xml文件的内容。它包含线性布局，列表视图和文本视图</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span>\n    <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">android:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vertical<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListView</span>\n        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@android:id/list<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListView</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>\n        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@android:id/empty<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TextView</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是src/main/java/myListFragment.java文件的内容。在编写代码之前，需要遵循以下几个步骤</p><ul><li><p>创建一个类MyListFragment并将其继承ListFragment。</p></li><li><p>在onCreateView()方法内部，使用上面定义的list_fragment xml布局填充视图。</p></li><li><p>在onActivityCreated()方法中，从资源创建一个arrayadapter，即使用R.array.planet，您可以在string.xml内找到它，并将此适配器设置为listview，还可以设置onItem单击Listener。</p></li><li><p>在OnItemClickListener()方法内部，显示一条正在单击的带有条目名称的祝酒消息。</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  \n  \n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">LayoutInflater</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">View</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">ViewGroup</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">AdapterView</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">ArrayAdapter</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Toast</span></span><span class="token punctuation">;</span>\n  \n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">androidx<span class="token punctuation">.</span>fragment<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">ListFragment</span></span><span class="token punctuation">;</span>\n  \n  \n<span class="token doc-comment comment">/**  表示项目列表的片段。 */</span>\n <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyListFragment</span> <span class="token keyword">extends</span> <span class="token class-name">ListFragment</span> <span class="token keyword">implements</span> <span class="token class-name">AdapterView<span class="token punctuation">.</span>OnItemClickListener</span> <span class="token punctuation">{</span>\n <span class="token annotation punctuation">@Override</span>\n <span class="token keyword">public</span> <span class="token class-name">View</span> <span class="token function">onCreateView</span><span class="token punctuation">(</span><span class="token class-name">LayoutInflater</span> inflater<span class="token punctuation">,</span>\n <span class="token class-name">ViewGroup</span> container<span class="token punctuation">,</span> <span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token class-name">View</span> view <span class="token operator">=</span> inflater<span class="token punctuation">.</span><span class="token function">inflate</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>list_fragment<span class="token punctuation">,</span> container<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">return</span> view<span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n\n \n  <span class="token annotation punctuation">@Override</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onActivityCreated</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onActivityCreated</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">ArrayAdapter</span> adapter <span class="token operator">=</span> <span class="token class-name">ArrayAdapter</span><span class="token punctuation">.</span><span class="token function">createFromResource</span><span class="token punctuation">(</span><span class="token function">getActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>array<span class="token punctuation">.</span>Planets<span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">android<span class="token punctuation">.</span></span>R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>simple_list_item_1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">setListAdapter</span><span class="token punctuation">(</span>adapter<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">getListView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setOnItemClickListener</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token annotation punctuation">@Override</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onItemClick</span><span class="token punctuation">(</span><span class="token class-name">AdapterView</span> parent<span class="token punctuation">,</span> <span class="token class-name">View</span> view<span class="token punctuation">,</span> <span class="token keyword">int</span> position<span class="token punctuation">,</span><span class="token keyword">long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">Toast</span><span class="token punctuation">.</span><span class="token function">makeText</span><span class="token punctuation">(</span><span class="token function">getActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Item: &quot;</span> <span class="token operator">+</span> position<span class="token punctuation">,</span> <span class="token class-name">Toast</span><span class="token punctuation">.</span><span class="token constant">LENGTH_SHORT</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n \n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下代码将成为MainActivity.java的内容</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>\n\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">androidx<span class="token punctuation">.</span>appcompat<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">AppCompatActivity</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainActivity</span> <span class="token keyword">extends</span> <span class="token class-name">AppCompatActivity</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_main<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行应用程序::</p><p>让我们尝试运行我们刚刚创建的HelloWorld应用程序。我假设您是在进行环境设置时创建的AVD。要从Android Studio运行该应用，请打开您项目的Activity文件之一，然后运行图标从工具栏中单击运行图标。Android在您的AVD上安装该应用程序并启动它，如果您的设置和应用程序一切正常，它将在“模拟器”窗口中显示</p><p><img src="https://www.jc2182.com/images/android/listfragment2.png" alt="aa"></p>',15),c={},l=(0,s(3744).Z)(c,[["render",function(n,a){const s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[p,(0,t._)("p",null,[(0,t.Uk)("本示例将向您说明如何基于arrayAdapter创建自己的列表片段。因此，让我们按照以下步骤进行操作，类似于创建"),(0,t._)("a",e,[(0,t.Uk)("Hello World 例子"),(0,t.Wm)(s)]),(0,t.Uk)("时遵循的步骤-")]),o])}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);