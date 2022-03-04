import{_ as p,r as e,o,a as c,b as n,g as l,F as u,h as s,f as a}from"./app.a790e4a7.js";const i={},r=s(`<h1 id="\u7F51\u7EDC\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u8FDE\u63A5" aria-hidden="true">#</a> \u7F51\u7EDC\u8FDE\u63A5</h1><p>Android\u4F7F\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u8FDE\u63A5\u5230Internet\u6216\u4EFB\u4F55\u5176\u4ED6\u672C\u5730\u7F51\u7EDC\uFF0C\u5E76\u5141\u8BB8\u60A8\u6267\u884C\u7F51\u7EDC\u64CD\u4F5C\u3002\u8BBE\u5907\u53EF\u4EE5\u5177\u6709\u5404\u79CD\u7C7B\u578B\u7684\u7F51\u7EDC\u8FDE\u63A5\u3002\u672C\u7AE0\u91CD\u70B9\u4ECB\u7ECD\u4F7F\u7528Wi-Fi\u6216\u79FB\u52A8\u7F51\u7EDC\u8FDE\u63A5\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>android:parentActivityName = &quot;com.example.test.MainActivity&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><h2 id="\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5" aria-hidden="true">#</a> \u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5</h2><p>\u5728\u6267\u884C\u4EFB\u4F55\u7F51\u7EDC\u64CD\u4F5C\u4E4B\u524D\u200B\u200B\uFF0C\u5FC5\u987B\u9996\u5148\u68C0\u67E5\u662F\u5426\u5DF2\u8FDE\u63A5\u5230\u8BE5\u7F51\u7EDC\u6216Internet\u7B49\u3002\u4E3A\u6B64android\u63D0\u4F9B<strong>ConnectivityManager</strong>\u7C7B\u3002\u60A8\u9700\u8981\u901A\u8FC7\u8C03\u7528**getSystemService()**\u65B9\u6CD5\u6765\u5B9E\u4F8B\u5316\u6B64\u7C7B\u7684\u5BF9\u8C61\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ConnectivityManager</span> check <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ConnectivityManager</span><span class="token punctuation">)</span> 
<span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">getSystemService</span><span class="token punctuation">(</span><span class="token class-name">Context</span><span class="token punctuation">.</span>CONNECTIVITY_SERVICE<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u590D\u5236</p><p>\u5B9E\u4F8B\u5316<strong>ConnectivityManager</strong>\u7C7B\u7684\u5BF9\u8C61\u540E\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528<strong>getAllNetworkInfo</strong>\u65B9\u6CD5\u83B7\u53D6\u6240\u6709\u7F51\u7EDC\u7684\u4FE1\u606F\u3002\u6B64\u65B9\u6CD5\u8FD4\u56DE<strong>NetworkInfo</strong>\u6570\u7EC4\u3002\u56E0\u6B64\uFF0C\u60A8\u5FC5\u987B\u50CF\u8FD9\u6837\u63A5\u6536\u5B83\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">NetworkInfo</span><span class="token punctuation">[</span><span class="token punctuation">]</span> info <span class="token operator">=</span> check<span class="token punctuation">.</span><span class="token function">getAllNetworkInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u60A8\u9700\u8981\u505A\u7684\u6700\u540E\u4E00\u4EF6\u4E8B\u662F\u68C0\u67E5\u7F51\u7EDC\u7684\u8FDE\u63A5\u72B6\u6001\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> info<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">NetworkInfo<span class="token punctuation">.</span>State</span><span class="token punctuation">.</span>CONNECTED<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">Toast</span><span class="token punctuation">.</span><span class="token function">makeText</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token string">&quot;\u7F51\u7EDC\u5DF2\u8FDE\u63A5&quot;</span><span class="token punctuation">,</span><span class="token class-name">Toast</span><span class="token punctuation">.</span>LENGTH_SHORT<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u590D\u5236</p><p>\u9664\u4E86<strong>CONNECTED</strong>\u8FDE\u63A5\u72B6\u6001\u4E4B\u5916\uFF0C\u7F51\u7EDC\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u5176\u4ED6\u72B6\u6001\u3002\u5B83\u4EEC\u5728\u4E0B\u9762\u5217\u51FA-</p><table><thead><tr><th>\u72B6\u6001</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>CONNECTING</strong></td><td>\u6B63\u5728\u8FDE\u63A5</td></tr><tr><td><strong>DISCONNECTED</strong></td><td>\u65AD\u5F00</td></tr><tr><td><strong>DISCONNECTING</strong></td><td>\u6B63\u5728\u65AD\u5F00</td></tr><tr><td><strong>SUSPENDED</strong></td><td>\u6682\u505C</td></tr><tr><td><strong>UNKNOWN</strong></td><td>\u672A\u77E5</td></tr></tbody></table><h2 id="\u6267\u884C\u7F51\u7EDC\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u7F51\u7EDC\u64CD\u4F5C" aria-hidden="true">#</a> \u6267\u884C\u7F51\u7EDC\u64CD\u4F5C</h2><p>\u68C0\u67E5\u60A8\u5DF2\u8FDE\u63A5\u5230Internet\u540E\uFF0C\u60A8\u53EF\u4EE5\u6267\u884C\u4EFB\u4F55\u7F51\u7EDC\u64CD\u4F5C\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u4ECE\u7F51\u5740\u83B7\u53D6\u7F51\u7AD9\u7684html\u3002Android\u63D0\u4F9B<strong>HttpURLConnection</strong>\u548C<strong>URL</strong>\u7C7B\u6765\u5904\u7406\u8FD9\u4E9B\u64CD\u4F5C\u3002\u60A8\u9700\u8981\u901A\u8FC7\u63D0\u4F9B\u7F51\u7AD9\u94FE\u63A5\u6765\u5B9E\u4F8B\u5316URL\u7C7B\u7684\u5BF9\u8C61\u3002\u5B83\u7684\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> link <span class="token operator">=</span> <span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">URL</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u590D\u5236</p><p>\u4E4B\u540E\uFF0C\u60A8\u9700\u8981\u8C03\u7528URL\u7C7B\u7684<strong>openConnection</strong>\u65B9\u6CD5\u5E76\u5C06\u5176\u63A5\u6536\u5230<strong>HttpURLConnection</strong>\u5BF9\u8C61\u4E2D\u3002\u4E4B\u540E\uFF0C\u60A8\u9700\u8981\u8C03\u7528<strong>HttpURLConnection</strong>\u7C7B\u7684<strong>connect</strong>\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">HttpURLConnection</span> conn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpURLConnection</span><span class="token punctuation">)</span> url<span class="token punctuation">.</span><span class="token function">openConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
conn<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u590D\u5236</p><p>\u6700\u540E\uFF0C\u60A8\u9700\u8981\u505A\u7684\u5C31\u662F\u4ECE\u7F51\u7AD9\u83B7\u53D6HTML\u3002\u4E3A\u6B64\uFF0C\u60A8\u5C06\u4F7F\u7528<strong>InputStream</strong>\u548C<strong>BufferedReader</strong>\u7C7B\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">InputStream</span> is <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BufferedReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>is<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> webPage <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>data<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>data <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   webPage <span class="token operator">+=</span> data <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u590D\u5236</p><p>\u9664\u4E86\u6B64connect\u65B9\u6CD5\u4E4B\u5916\uFF0C<strong>HttpURLConnection</strong>\u7C7B\u4E2D\u8FD8\u6709\u5176\u4ED6\u53EF\u7528\u7684\u65B9\u6CD5\u3002\u5B83\u4EEC\u5728\u4E0B\u9762\u5217\u51FA-</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>disconnect()</strong></td><td>\u6B64\u65B9\u6CD5\u91CA\u653E\u6B64\u8FDE\u63A5\uFF0C\u4EE5\u4FBF\u5176\u8D44\u6E90\u53EF\u4EE5\u91CD\u7528\u6216\u5173\u95ED</td></tr><tr><td><strong>getRequestMethod()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u5C06\u7528\u4E8E\u5411\u8FDC\u7A0BHTTP\u670D\u52A1\u5668\u53D1\u51FA\u8BF7\u6C42</td></tr><tr><td><strong>getResponseCode()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u8FDC\u7A0BHTTP\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u54CD\u5E94\u4EE3\u7801</td></tr><tr><td><strong>setRequestMethod(String method)</strong></td><td>\u6B64\u65B9\u6CD5\u8BBE\u7F6E\u5C06\u53D1\u9001\u5230\u8FDC\u7A0BHTTP\u670D\u52A1\u5668\u7684request\u547D\u4EE4</td></tr><tr><td><strong>usingProxy()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u6B64\u8FDE\u63A5\u662F\u5426\u4F7F\u7528\u4EE3\u7406\u670D\u52A1\u5668</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u4E0B\u9762\u7684\u793A\u4F8B\u6F14\u793A<strong>HttpURLConnection</strong>\u7C7B\u7684\u7528\u6CD5\u3002\u5B83\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F7F\u60A8\u53EF\u4EE5\u4ECE\u7ED9\u5B9A\u7684\u7F51\u9875\u4E0B\u8F7DHTML\u3002\u8981\u8BD5\u9A8C\u6B64\u793A\u4F8B\uFF0C\u60A8\u9700\u8981\u5728\u8FDE\u63A5\u4E86wifi\u4E92\u8054\u7F51\u7684\u5B9E\u9645\u8BBE\u5907\u4E0A\u8FD0\u884C\u8BE5\u793A\u4F8B\u3002</p>`,30),k=a("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),d={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},m=a("Hello World\u793A\u4F8B"),b=a("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),g=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u4EE5\u6DFB\u52A0\u6D3B\u52A8\u4EE3\u7801\u3002",-1),q=n("li",null,"\u4FEE\u6539\u5E03\u5C40XML\u6587\u4EF6res/layout/activity_main.xml\u5982\u679C\u9700\u8981\uFF0C\u53EF\u6DFB\u52A0\u4EFB\u4F55GUI\u7EC4\u4EF6\u3002",-1),v=n("li",null,"\u4FEE\u6539AndroidManifest.xml\u4EE5\u6DFB\u52A0\u5FC5\u8981\u7684\u6743\u9650\u3002",-1),h=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),w=s(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">ProgressDialog</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">Context</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span></span><span class="token class-name">Bitmap</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span></span><span class="token class-name">BitmapFactory</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">ConnectivityManager</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">NetworkInfo</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Handler</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Message</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">View</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Button</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">ImageView</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Toast</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">HttpURLConnection</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">MalformedURLException</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span>URL<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URLConnection</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>public class MainActivity extends Activity {</p><pre><code>  private ProgressDialog progressDialog;
  private Bitmap bitmap = null;
  Button b1;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);
      b1 = (Button) findViewById(R.id.button);
      boolean isConnect = checkInternetConnection(this);
      if (!isConnect){
          // todo
      }
      b1.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              downloadImage(&quot;https://www.jc2182.com/wp-content/themes/wiki/images/logo.png&quot;);
          }
      });
  }

  private void downloadImage(String urlStr) {
      progressDialog = ProgressDialog.show(this, &quot;&quot;, &quot;\u4ECE\uFF1A&quot; + urlStr + &quot;\u4E0B\u8F7D\u56FE\u7247&quot;);
      final String url = urlStr;

      new Thread() {
          public void run() {
              InputStream in = null;

              Message msg = Message.obtain();
              msg.what = 1;

              try {
                  in = openHttpConnection(url);
                  bitmap = BitmapFactory.decodeStream(in);
                  Bundle b = new Bundle();
                  b.putParcelable(&quot;bitmap&quot;, bitmap);
                  msg.setData(b);
                  in.close();
              }catch (IOException e1) {
                  e1.printStackTrace();
              }
              messageHandler.sendMessage(msg);
          }
      }.start();
  }

  private InputStream openHttpConnection(String urlStr) {
      InputStream in = null;
      int resCode = -1;

      try {
          URL url = new URL(urlStr);
          URLConnection urlConn = url.openConnection();

          if (!(urlConn instanceof HttpURLConnection)) {
              throw new IOException(&quot;URL\u4E0D\u662FHttp URL&quot;);
          }

          HttpURLConnection httpConn = (HttpURLConnection) urlConn;
          httpConn.setAllowUserInteraction(false);
          httpConn.setInstanceFollowRedirects(true);
          httpConn.setRequestMethod(&quot;GET&quot;);
          httpConn.connect();
          resCode = httpConn.getResponseCode();

          if (resCode == HttpURLConnection.HTTP_OK) {
              in = httpConn.getInputStream();
          }
      }catch (MalformedURLException e) {
          e.printStackTrace();
      }catch (IOException e) {
          e.printStackTrace();
      }
      return in;
  }

  private Handler messageHandler = new Handler() {
      public void handleMessage(Message msg) {
          super.handleMessage(msg);
          ImageView img = (ImageView) findViewById(R.id.imageView);
          img.setImageBitmap((Bitmap) (msg.getData().getParcelable(&quot;bitmap&quot;)));
          progressDialog.dismiss();
      }
  };

  private boolean checkInternetConnection(Context context) {
      try {
          ConnectivityManager connectivity = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
          if (connectivity != null) {

              NetworkInfo info = connectivity.getActiveNetworkInfo();
              if (info != null) {
                  if (info.getState() == NetworkInfo.State.CONNECTED  &amp;&amp; info.getType() == ConnectivityManager.TYPE_WIFI) {
                      Toast.makeText(context,&quot;WIFI \u5DF2\u7ECF\u8FDE\u63A5&quot;,Toast.LENGTH_SHORT).show();
                      return true;
                  }

                  if (info.getState() == NetworkInfo.State.CONNECTED  &amp;&amp; info.getType() == ConnectivityManager.TYPE_MOBILE) {
                      Toast.makeText(context,&quot;\u79FB\u52A8\u6570\u636E \u5DF2\u7ECF\u8FDE\u63A5&quot;,Toast.LENGTH_SHORT).show();
                      return true;
                  }

              }
          }
      } catch (Exception e) {
          return false;
      }
      return false;

  }
</code></pre><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-

\`\`\`xml

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;RelativeLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot;&gt;

    &lt;TextView
        android:id=&quot;@+id/textView&quot;
        android:layout_width=&quot;300dp&quot;
        android:layout_height=&quot;68dp&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:text=&quot;\u7F51\u7EDC\u8FDE\u63A5\u4F8B\u5B50&quot;
        android:textSize=&quot;25sp&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/textView2&quot;
        android:layout_width=&quot;311dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_alignEnd=&quot;@+id/textView&quot;
        android:layout_alignRight=&quot;@+id/textView&quot;
        android:layout_marginTop=&quot;9dp&quot;
        android:text=&quot;\u8774\u8776\u6559\u7A0B&quot;
        android:textColor=&quot;#ff36ff15&quot;
        android:textIsSelectable=&quot;false&quot;
        android:textSize=&quot;35dp&quot; /&gt;

    &lt;ImageView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/imageView&quot;
        android:layout_below=&quot;@+id/textView2&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button&quot;
        android:layout_width=&quot;161dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/imageView&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;9dp&quot;
        android:text=&quot;\u6309\u94AE&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>\u590D\u5236</p><p>\u4EE5\u4E0B\u662FAndroidManifest.xml\u6587\u4EF6\u7684\u5185\u5BB9-</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.jc2182.demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.INTERNET<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.ACCESS_NETWORK_STATE<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span>
        <span class="token attr-name"><span class="token namespace">android:</span>allowBackup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@mipmap/ic_launcher<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@string/app_name<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>roundIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@mipmap/ic_launcher_round<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>usesCleartextTraffic</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>supportsRtl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@style/AppTheme<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.MainActivity<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.action.MAIN<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.category.LAUNCHER<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.SecondMain<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>application</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manifest</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/network1.png" alt=""></p><p>\u70B9\u51FB\u6309\u94AE\uFF0C\u5C06\u4E0B\u8F7Dlogo\u56FE\u7247\u5230\u6211\u4EEC\u7684\u754C\u9762\u4E2D\u3002</p><p><img src="https://www.jc2182.com/images/android/network2.png" alt=""></p>`,14);function y(C,f){const t=e("ExternalLinkIcon");return o(),c(u,null,[r,n("ol",null,[n("li",null,[k,n("a",d,[m,l(t)]),b]),g,q,v,h]),w],64)}var _=p(i,[["render",y]]);export{_ as default};
