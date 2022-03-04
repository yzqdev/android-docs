import{_ as e,r as p,o,a as l,b as n,g as u,F as c,h as s,f as a}from"./app.1275d7df.js";const i={},r=s(`<h1 id="\u767B\u5F55\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u754C\u9762" aria-hidden="true">#</a> \u767B\u5F55\u754C\u9762</h1><p>\u767B\u5F55\u5E94\u7528\u7A0B\u5E8F\u662F\u8BE2\u95EE\u60A8\u7684\u51ED\u636E\u4EE5\u767B\u5F55\u67D0\u4E9B\u7279\u5B9A\u5E94\u7528\u7A0B\u5E8F\u7684\u5C4F\u5E55\u3002\u767B\u5F55\u5FAE\u4FE1\uFF0CQQ\uFF0C\u6DD8\u5B9D\u7B49\u65F6\uFF0C\u60A8\u53EF\u80FD\u5DF2\u7ECF\u770B\u5230\u4E86\u672C\u7AE0\u4ECB\u7ECD\u4E86\u5982\u4F55\u521B\u5EFA\u767B\u5F55\u5C4F\u5E55\u4EE5\u53CA\u5728\u8FDB\u884C\u9519\u8BEF\u5C1D\u8BD5\u65F6\u5982\u4F55\u7BA1\u7406\u5B89\u5168\u6027\u3002\u9996\u5148\uFF0C\u60A8\u5FC5\u987B\u5B9A\u4E49\u4E24\u4E2ATextView\u8BE2\u95EE\u7528\u6237\u540D\u548C\u7528\u6237\u5BC6\u7801\u3002\u5BC6\u7801TextView\u5FC5\u987B\u5C06inputType\u8BBE\u7F6E\u4E3Apassword\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EditText</span>
   <span class="token attr-name"><span class="token namespace">android:</span>id</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>@+id/editText2<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>inputType</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>textPassword<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EditText</span>
   <span class="token attr-name"><span class="token namespace">android:</span>id</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>@+id/editText1<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u590D\u5236</p><p>\u5B9A\u4E49\u4E00\u4E2A\u5E26\u6709\u767B\u5F55\u6587\u672C\u7684\u6309\u94AE\u5E76\u8BBE\u7F6E\u5176onClick\u5C5E\u6027\u3002\u4E4B\u540E\uFF0C\u5B9A\u4E49java\u6587\u4EF6\u4E2DonClick\u5C5E\u6027\u4E2D\u63D0\u5230\u7684\u51FD\u6570\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
   <span class="token attr-name"><span class="token namespace">android:</span>id</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>@+id/button1<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>onClick</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>text</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>@string/Login<span class="token punctuation">&quot;</span></span> 
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u590D\u5236</p><p>\u5728java\u6587\u4EF6\u4E2D\uFF0C\u5728onClick\u65B9\u6CD5\u5185\u90E8\uFF0C\u4F7F\u7528getText()\u548CtoString()\u65B9\u6CD5\u83B7\u53D6\u7528\u6237\u540D\u548C\u5BC6\u7801\u6587\u672C\uFF0C\u5E76\u4F7F\u7528equals()\u51FD\u6570\u5C06\u5176\u4E0E\u6587\u672C\u5339\u914D\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">EditText</span> username <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">EditText</span><span class="token punctuation">)</span><span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>editText1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EditText</span> password <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">EditText</span><span class="token punctuation">)</span><span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>editText2<span class="token punctuation">)</span><span class="token punctuation">;</span>             

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">View</span> view<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>username<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> password<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

   <span class="token comment">//\u9A8C\u8BC1\u6210\u529F \u767B\u5F55</span>
   <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   <span class="token comment">//\u9A8C\u8BC1\u9519\u8BEF\u5904\u7406</span>
<span class="token punctuation">}</span>       
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u590D\u5236</p><p>\u60A8\u9700\u8981\u505A\u7684\u6700\u540E\u4E00\u4EF6\u4E8B\u662F\u63D0\u4F9B\u4E00\u79CD\u5B89\u5168\u673A\u5236\uFF0C\u4EE5\u4FBF\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5C1D\u8BD5\u3002\u4E3A\u6B64\uFF0C\u521D\u59CB\u5316\u53D8\u91CF\uFF0C\u5E76\u5728\u6BCF\u6B21\u9519\u8BEF\u5C1D\u8BD5\u65F6\u5C06\u5176\u51CF\u5C0F\u3002\u5F53\u5B83\u8FBE\u52300\u65F6\uFF0C\u7981\u7528\u767B\u5F55\u6309\u94AE\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
counter<span class="token operator">--</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>counter<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token comment">//\u5173\u95ED\u6309\u94AE\uFF0C\u5173\u95ED\u5E94\u7528\u7A0B\u5E8F</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u590D\u5236</p><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u8FD9\u662F\u6F14\u793A\u767B\u5F55\u5E94\u7528\u7A0B\u5E8F\u7684\u793A\u4F8B\u3002\u5B83\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4EC5\u7ED9\u60A8\u4E09\u79CD\u5C1D\u8BD5\u767B\u5F55\u5E94\u7528\u7A0B\u5E8F\u7684\u673A\u4F1A\u3002 \u8981\u8BD5\u9A8C\u8BE5\u793A\u4F8B\uFF0C\u60A8\u53EF\u4EE5\u5728\u5B9E\u9645\u8BBE\u5907\u6216\u4EFF\u771F\u5668\u4E0A\u8FD0\u884C\u5B83\u3002</p>`,15),d=a("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),b={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},k=a("Hello World\u793A\u4F8B"),m=a("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),q=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u4EE5\u6DFB\u52A0\u5FC5\u8981\u7684\u4EE3\u7801\u3002",-1),g=n("li",null,"\u4FEE\u6539res/layout/activity_main\u4EE5\u6DFB\u52A0\u76F8\u5E94\u7684XML\u7EC4\u4EF6",-1),w=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),_=s(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span></span><span class="token class-name">Color</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">View</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Button</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">EditText</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">TextView</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Toast</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>public class MainActivity extends Activity {</p><pre><code>  Button b1,b2;
  EditText ed1,ed2;

  TextView tx1;
  int counter = 3;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      b1 = (Button)findViewById(R.id.button);
      ed1 = (EditText)findViewById(R.id.editText);
      ed2 = (EditText)findViewById(R.id.editText2);

      b2 = (Button)findViewById(R.id.button2);
      tx1 = (TextView)findViewById(R.id.textView3);
      tx1.setVisibility(View.GONE);

      b1.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              if(ed1.getText().toString().equals(&quot;admin&quot;) &amp;&amp;
                      ed2.getText().toString().equals(&quot;admin&quot;)) {
                  Toast.makeText(getApplicationContext(), &quot;\u767B\u5F55\u6210\u529F\u8DF3\u8F6C...&quot;,Toast.LENGTH_SHORT).show();
              }else{
                  Toast.makeText(getApplicationContext(), &quot;\u767B\u5F55\u9A8C\u8BC1\u5931\u8D25&quot;,Toast.LENGTH_SHORT).show();
                  tx1.setVisibility(View.VISIBLE);
                  tx1.setBackgroundColor(Color.RED);
                  counter--;
                  tx1.setText(Integer.toString(counter));

                  if (counter == 0) {
                      b1.setEnabled(false);
                  }
              }
          }
      });

      b2.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              finish();
          }
      });
  }
</code></pre><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-

\`\`\`xml

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;RelativeLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot; android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot;&gt;

    &lt;TextView
        android:text=&quot;\u767B\u5F55\u754C\u9762\u793A\u4F8B&quot;
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/textview&quot;
        android:textSize=&quot;35dp&quot;
        android:layout_alignParentTop=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/textView&quot;
        android:layout_width=&quot;198dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/textview&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:text=&quot;\u8774\u8776\u6559\u7A0B&quot;
        android:textColor=&quot;#ff7aff24&quot;
        android:textSize=&quot;35dp&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button&quot;
        android:layout_width=&quot;94dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/imageView&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:text=&quot;\u4E0B\u8F7D&quot; /&gt;

    &lt;ImageView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/imageView&quot;
        android:src=&quot;@drawable/logo&quot;
        android:background=&quot;#11EE22bb&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

    &lt;ProgressBar
        android:id=&quot;@+id/progressBar&quot;
        style=&quot;?android:attr/progressBarStyleLarge&quot;
        android:layout_width=&quot;272dp&quot;
        android:layout_height=&quot;362dp&quot;
        android:layout_below=&quot;@+id/button&quot;
        android:layout_alignStart=&quot;@+id/textview&quot;
        android:layout_alignLeft=&quot;@+id/textview&quot;
        android:layout_alignEnd=&quot;@+id/textView&quot;
        android:layout_alignRight=&quot;@+id/textView&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_marginEnd=&quot;-30dp&quot;
        android:layout_marginRight=&quot;-30dp&quot;
        android:layout_marginBottom=&quot;7dp&quot;
        android:progressDrawable=&quot;@drawable/circular_progress_bar&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/login1.png" alt=""></p><p>\u5C1D\u8BD5\u53BB\u767B\u5F55 \u53BB\u5C1D\u8BD5\uFF0C\u53BB\u8BD5\u9519\uFF0C\u67E5\u770B\u6548\u679C</p>`,10);function x(v,y){const t=p("ExternalLinkIcon");return o(),l(c,null,[r,n("ol",null,[n("li",null,[d,n("a",b,[k,u(t)]),m]),q,g,w]),_],64)}var T=e(i,[["render",x]]);export{T as default};
