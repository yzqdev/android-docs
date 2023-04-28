"use strict";(self.webpackChunkandroid_docs=self.webpackChunkandroid_docs||[]).push([[9546],{358:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-4896c6af","path":"/tutor/interface/custom-components.html","title":"自定义组件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"创建一个简单的自定义组件","slug":"创建一个简单的自定义组件","link":"#创建一个简单的自定义组件","children":[]}],"git":{"createdTime":1659917471000,"updatedTime":1667993962000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":3.37,"words":1012},"filePathRelative":"tutor/interface/custom-components.md","localizedDate":"2022年8月8日","excerpt":""}')},9006:(n,s,a)=>{a.r(s),a.d(s,{default:()=>f});var t=a(6252);const p=(0,t._)("h1",{id:"自定义组件",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#自定义组件","aria-hidden":"true"},"#"),(0,t.Uk)(" 自定义组件")],-1),e={href:"https://www.jc2182.com/andriod/android-button-show.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.jc2182.com/andriod/android-textview-show.html",target:"_blank",rel:"noopener noreferrer"},c={href:"https://www.jc2182.com/andriod/android-edittext-show.html",target:"_blank",rel:"noopener noreferrer"},l={href:"https://www.jc2182.com/andriod/android-checkbox-show.html",target:"_blank",rel:"noopener noreferrer"},i={href:"https://www.jc2182.com/andriod/android-radiobutton-show.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.jc2182.com/andriod/android-spinner-show.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.jc2182.com/andriod/android-autocompletetextview-show.html",target:"_blank",rel:"noopener noreferrer"},r=(0,t._)("p",null,"自定义视图层次结构中的自定义组件示例：",-1),d=(0,t._)("p",null,[(0,t._)("img",{src:"https://www.jc2182.com/images/android/customcomponents.jpg",alt:""})],-1),m=(0,t._)("h2",{id:"创建一个简单的自定义组件",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#创建一个简单的自定义组件","aria-hidden":"true"},"#"),(0,t.Uk)(" 创建一个简单的自定义组件")],-1),v={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},b=(0,t._)("li",null,"创建XML res/values/attrs.xml文件以定义新属性及其数据类型。",-1),w=(0,t._)("li",null,"修改src/MainActivity.java 为定义的按钮添加单击事件侦听器和处理程序",-1),y=(0,t._)("li",null,"修改res/layout/activity_main.xml文件的默认内容并添加代码以创建Color复合视图实例以及一些默认属性和新属性。",-1),g=(0,t._)("li",null,"运行该应用程序以启动Android模拟器并验证在该应用程序中所做更改的结果。",-1),h=(0,t.uE)('<p>在res/values文件夹中创建以下属性文件attrs.xml。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>tools</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/tools<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>declare-styleable</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TimeView<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attr</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>string<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attr</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setColor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>boolean<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>declare-styleable</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是修改后的主要活动文件src/com.jc2182.demo/MainActivity.java的内容。该文件可以包括每个基本生命周期方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>\n  \n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">TextView</span></span><span class="token punctuation">;</span>\n \n  \n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainActivity</span> <span class="token keyword">extends</span> <span class="token class-name">Activity</span> <span class="token punctuation">{</span>\n <span class="token annotation punctuation">@Override</span>\n <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_main<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n \n\n      <span class="token class-name">TextView</span> simpleText <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TextView</span><span class="token punctuation">)</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>simple<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      simpleText<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;这是一个简单的TextView&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n \n\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是res/layout/activity_main.xml文件的内容-</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>\n<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RelativeLayout</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">xmlns:</span>tools</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/tools<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">xmlns:</span>custom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res-auto<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">tools:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.MainActivity<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>com.jc2182.demo.TimeView</span>\n        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/timeView<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#fff<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>textSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40sp<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">custom:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>自定义TimeView<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">custom:</span>setColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/simple<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_below</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@id/timeView<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name"><span class="token namespace">android:</span>layout_marginTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10dp<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RelativeLayout</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为您的复合视图创建以下名为TimeView.java的Java文件。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">Context</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span>res<span class="token punctuation">.</span></span><span class="token class-name">TypedArray</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span></span><span class="token class-name">Color</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">AttributeSet</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">androidx<span class="token punctuation">.</span>appcompat<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">AppCompatTextView</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Calendar</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TimeView</span> <span class="token keyword">extends</span> <span class="token class-name">AppCompatTextView</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> titleText<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">boolean</span> color<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">TimeView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setTimeView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">TimeView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">AttributeSet</span> attrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 检索到的值对应于属性的位置</span>\n        <span class="token class-name">TypedArray</span> typedArray <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">obtainStyledAttributes</span><span class="token punctuation">(</span>attrs<span class="token punctuation">,</span><span class="token class-name">R</span><span class="token punctuation">.</span>styleable<span class="token punctuation">.</span>TimeView<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> count <span class="token operator">=</span> typedArray<span class="token punctuation">.</span><span class="token function">getIndexCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">try</span><span class="token punctuation">{</span>\n\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n                <span class="token keyword">int</span> attr <span class="token operator">=</span> typedArray<span class="token punctuation">.</span><span class="token function">getIndex</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token comment">// attr对应于title属性</span>\n                <span class="token keyword">if</span><span class="token punctuation">(</span>attr <span class="token operator">==</span> <span class="token class-name">R</span><span class="token punctuation">.</span>styleable<span class="token punctuation">.</span>TimeView_title<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n                    <span class="token comment">// 从布局设置文本</span>\n                    titleText <span class="token operator">=</span> typedArray<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span>attr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token function">setTimeView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>attr <span class="token operator">==</span> <span class="token class-name">R</span><span class="token punctuation">.</span>styleable<span class="token punctuation">.</span>TimeView_setColor<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token comment">// 设置attr的颜色“setColor”</span>\n                    color <span class="token operator">=</span> typedArray<span class="token punctuation">.</span><span class="token function">getBoolean</span><span class="token punctuation">(</span>attr<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token function">decorateText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// recycle()将被强制执行</span>\n        <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n            <span class="token comment">// for reuse</span>\n            typedArray<span class="token punctuation">.</span><span class="token function">recycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">TimeView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">AttributeSet</span> attrs<span class="token punctuation">,</span> <span class="token keyword">int</span> defStyle<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> defStyle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setTimeView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setTimeView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// has the format hour.minuits am/pm</span>\n        <span class="token class-name">SimpleDateFormat</span> dateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;hh.mm aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> time <span class="token operator">=</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>titleText <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token punctuation">)</span>\n            <span class="token function">setText</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>titleText<span class="token operator">+</span><span class="token string">&quot; &quot;</span> <span class="token operator">+</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">else</span>\n            <span class="token function">setText</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">decorateText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 当我们在XML布局中将setColor属性设置为true时</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">//设置阴影的特征和颜色</span>\n            <span class="token function">setShadowLayer</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">00</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token function">setBackgroundColor</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">CYAN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token function">setBackgroundColor</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们尝试运行刚刚修改的应用程序。我假设您在进行环境设置时已创建了AVD。要从Android Studio运行该应用，请打开您项目的活动文件之一，然后工具栏中单击“运行”图标。Android studio将应用程序安装在您的AVD上并启动它，如果设置和应用程序一切正常，它将显示在“模拟器”窗口下面-</p><p><img src="https://www.jc2182.com/images/android/customcomponents1.png" alt=""></p><p>尝试去修改源代码改变自定义组件的属性值，或添加一些其他属性去实现自己的功能。</p>',11),q={},f=(0,a(3744).Z)(q,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[p,(0,t._)("p",null,[(0,t.Uk)("Android提供了很多预构建的小部件列表，例如"),(0,t._)("a",e,[(0,t.Uk)("Button"),(0,t.Wm)(a)]),(0,t.Uk)("，"),(0,t._)("a",o,[(0,t.Uk)("TextView"),(0,t.Wm)(a)]),(0,t.Uk)("，"),(0,t._)("a",c,[(0,t.Uk)("EditText"),(0,t.Wm)(a)]),(0,t.Uk)("，ListView，"),(0,t._)("a",l,[(0,t.Uk)("CheckBox"),(0,t.Wm)(a)]),(0,t.Uk)("，"),(0,t._)("a",i,[(0,t.Uk)("RadioButton"),(0,t.Wm)(a)]),(0,t.Uk)("，Gallery，"),(0,t._)("a",u,[(0,t.Uk)("Spinner"),(0,t.Wm)(a)]),(0,t.Uk)("，"),(0,t._)("a",k,[(0,t.Uk)("AutoCompleteTextView"),(0,t.Wm)(a)]),(0,t.Uk)("等。您可以直接在Android应用程序开发中使用这些小部件，但是当您对任何可用小部件的现有功能不满意。Android为您提供了创建自己的自定义组件的方法，您可以对其进行自定义以满足自己的需求。如果您只需要对现有的小部件或布局进行少量调整，则可以简单地对小部件或布局进行子类化并覆盖其方法，从而可以精确控制屏幕元素的外观和功能。本教程说明了如何创建自定义视图，并通过简单的步骤在应用程序中使用它们。")]),r,d,m,(0,t._)("ol",null,[(0,t._)("li",null,[(0,t.Uk)("您将使用Android Studio创建一个Android应用程序，并将其命名为Demo，位于com.jc2182.demo包下，如"),(0,t._)("a",v,[(0,t.Uk)("Hello World示例"),(0,t.Wm)(a)]),(0,t.Uk)("一章中所述。")]),b,w,y,g]),h])}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);