import{_ as e,r as o,o as r,a as p,b as n,g as i,F as l,h as s,f as a}from"./app.a790e4a7.js";const u={},c=s(`<h1 id="\u81EA\u5B9A\u4E49\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5B57\u4F53" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5B57\u4F53</h1><p>\u5728android\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u4E3A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u5B57\u7B26\u4E32\u5B9A\u4E49\u81EA\u5DF1\u7684\u81EA\u5B9A\u4E49\u5B57\u4F53\u3002\u60A8\u53EA\u9700\u8981\u4ECEInternet\u4E0B\u8F7D\u6240\u9700\u7684\u5B57\u4F53\uFF0C\u7136\u540E\u5C06\u5176\u653E\u5728assets/font\u6587\u4EF6\u5939\u4E2D\u5373\u53EF\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7Typeface\u7C7B\u5728Java\u4EE3\u7801\u4E2D\u8BBF\u95EE\u5B83\u3002\u9996\u5148\uFF0C\u83B7\u53D6\u4EE3\u7801\u4E2D\u6587\u672C\u89C6\u56FE\u7684\u5F15\u7528\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">TextView</span> tx <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TextView</span><span class="token punctuation">)</span><span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>textview1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u60A8\u9700\u8981\u505A\u7684\u4E0B\u4E00\u4EF6\u4E8B\u662F\u8C03\u7528<strong>Typeface</strong>\u7C7B**createFromAsset()**\u7684\u9759\u6001\u65B9\u6CD5\u4EE5\u4ECE\u8D44\u4EA7\u4E2D\u83B7\u53D6\u81EA\u5B9A\u4E49\u5B57\u4F53\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Typeface</span> custom_font <span class="token operator">=</span> <span class="token class-name">Typeface</span><span class="token punctuation">.</span><span class="token function">createFromAsset</span><span class="token punctuation">(</span><span class="token function">getAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;fonts/font name.ttf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u60A8\u9700\u8981\u505A\u7684\u6700\u540E\u4E00\u4EF6\u4E8B\u662F\u5C06\u6B64\u81EA\u5B9A\u4E49\u5B57\u4F53\u5BF9\u8C61\u8BBE\u7F6E\u4E3ATextView Typeface\u5C5E\u6027\u3002\u60A8\u9700\u8981\u8C03\u7528setTypeface()\u65B9\u6CD5\u6765\u6267\u884C\u6B64\u64CD\u4F5C\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>tx<span class="token punctuation">.</span><span class="token function">setTypeface</span><span class="token punctuation">(</span>custom_font<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u9664\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u4E4B\u5916\uFF0CTypeface\u7C7B\u4E2D\u8FD8\u5B9A\u4E49\u4E86\u5176\u4ED6\u65B9\u6CD5\uFF0C\u53EF\u7528\u4E8E\u66F4\u6709\u6548\u5730\u5904\u7406\u5B57\u4F53\u3002</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>create(String familyName, int style)</strong></td><td>\u521B\u5EFA\u4E00\u4E2A\u5E26\u6709\u59D3\u6C0F\u548C\u9009\u9879\u6837\u5F0F\u4FE1\u606F\u7684Typeface\u5BF9\u8C61</td></tr><tr><td><strong>create(Typeface family, int style)</strong></td><td>\u521B\u5EFA\u4E00\u4E2A\u4E0E\u6307\u5B9A\u7684\u73B0\u6709Typeface\u548C\u6307\u5B9A\u7684Style\u6700\u5339\u914D\u7684Typeface\u5BF9\u8C61</td></tr><tr><td><strong>createFromFile(String path)</strong></td><td>\u4ECE\u6307\u5B9A\u7684\u5B57\u4F53\u6587\u4EF6\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B57\u6837</td></tr><tr><td><strong>defaultFromStyle(int style)</strong></td><td>\u6839\u636E\u6307\u5B9A\u7684\u6837\u5F0F\u8FD4\u56DE\u9ED8\u8BA4\u7684Typeface\u5BF9\u8C61\u4E4B\u4E00</td></tr><tr><td><strong>getStyle()</strong></td><td>\u8FD4\u56DE\u5B57\u4F53\u7684\u56FA\u6709\u6837\u5F0F\u5C5E\u6027</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u8FD9\u662F\u4E00\u4E2A\u6F14\u793A\u4F7F\u7528<strong>Typeface</strong>\u5904\u7406CustomFont\u7684\u793A\u4F8B\u3002\u5B83\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u5E94\u7528\u7A0B\u5E8F\uFF0C\u663E\u793A\u60A8\u5728\u5B57\u4F53\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u81EA\u5B9A\u4E49\u5B57\u4F53\u3002 \u8981\u8BD5\u9A8C\u8BE5\u793A\u4F8B\uFF0C\u60A8\u53EF\u4EE5\u5728\u5B9E\u9645\u8BBE\u5907\u6216\u4EFF\u771F\u5668\u4E0A\u8FD0\u884C\u5B83\u3002</p>`,14),d=a("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),b={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},m=a("Hello World\u793A\u4F8B"),q=a("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),g=n("li",null,"\u4ECE\u4E92\u8054\u7F51\u4E0A\u4E0B\u8F7D\u4E00\u79CD\u5B57\u4F53\uFF0C\u5E76\u5C06\u5176\u653E\u5728assets/font\u6587\u4EF6\u5939\u4E0B\u3002",-1),y=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u6DFB\u52A0\u5FC5\u8981\u4EE3\u7801\u3002",-1),_=n("li",null,"\u4FEE\u6539res/layout/activity_main.xml\u6587\u4EF6\u5982\u679C\u9700\u8981\uFF0C\u53EF\u6DFB\u52A0\u4EFB\u4F55GUI\u7EC4\u4EF6\u3002",-1),f=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),h=s(`<p>\u8F93\u5165\u4EE3\u7801\u90E8\u5206\u4E4B\u524D\uFF0C\u8BF7\u4ECEWindows\u8D44\u6E90\u7BA1\u7406\u5668\u5728assests\u6587\u4EF6\u5939\u4E2D\u6DFB\u52A0\u5B57\u4F53\u3002</p><p><img src="https://www.jc2182.com/images/android/fonts1.png" alt=""></p><p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002\u8BE5\u6587\u4EF6\u53EF\u4EE5\u5305\u62EC\u6BCF\u4E2A\u57FA\u672C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>import android.app.Activity; import android.graphics.Typeface; import android.os.Bundle; import android.widget.TextView;</p><p>public class MainActivity extends Activity { TextView tv1,tv2;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      tv1=(TextView)findViewById(R.id.textView3);
      tv2=(TextView)findViewById(R.id.textView4);

      Typeface face= Typeface.createFromAsset(getAssets(), &quot;font/czssgj.ttf&quot;);
      tv1.setTypeface(face);

      Typeface face1= Typeface.createFromAsset(getAssets(), &quot;font/hybjhyt.ttf&quot;);
      tv2.setTypeface(face1);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-

\`\`\`xml

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;RelativeLayout
    xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot;&gt;

    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:text=&quot;Typeface\u7C7B&quot;
        android:id=&quot;@+id/textView&quot;
        android:layout_alignParentTop=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:textSize=&quot;30dp&quot; /&gt;

    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:text=&quot;\u8774\u8776\u6559\u7A0B&quot;
        android:id=&quot;@+id/textView2&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:textSize=&quot;35dp&quot;
        android:textColor=&quot;#ff16ff01&quot; /&gt;

    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:text=&quot;\u8774\u8776\u6559\u7A0B&quot;
        android:id=&quot;@+id/textView3&quot;
        android:layout_centerVertical=&quot;true&quot;
        android:textSize=&quot;45dp&quot;
        android:layout_alignParentRight=&quot;true&quot;
        android:layout_alignParentEnd=&quot;true&quot;
        android:layout_alignParentLeft=&quot;true&quot;
        android:layout_alignParentStart=&quot;true&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/textView4&quot;
        android:layout_width=&quot;392dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/textView3&quot;
        android:layout_alignStart=&quot;@+id/textView3&quot;
        android:layout_alignLeft=&quot;@+id/textView3&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginStart=&quot;106dp&quot;
        android:layout_marginLeft=&quot;106dp&quot;
        android:layout_marginTop=&quot;3dp&quot;
        android:text=&quot;\u8774\u8776\u6559\u7A0B&quot;
        android:textSize=&quot;45dp&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/fonts2.png" alt=""></p><blockquote><p>\u6CE8\u610F-\u4F7F\u7528\u81EA\u5B9A\u4E49\u5B57\u4F53\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u5B57\u4F53\u652F\u6301\u7684\u5927\u5C0F\u548C\u5B57\u7B26\u3002</p></blockquote>`,13);function v(x,w){const t=o("ExternalLinkIcon");return r(),p(l,null,[c,n("ol",null,[n("li",null,[d,n("a",b,[m,i(t)]),q]),g,y,_,f]),h],64)}var T=e(u,[["render",v]]);export{T as default};
