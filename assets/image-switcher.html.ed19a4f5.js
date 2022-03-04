import{_ as e,r as p,o,a as i,b as n,f as r,F as l,h as s,g as a}from"./app.e037ad12.js";const c={},u=s(`<h1 id="\u56FE\u50CF\u5207\u6362\u5668" tabindex="-1"><a class="header-anchor" href="#\u56FE\u50CF\u5207\u6362\u5668" aria-hidden="true">#</a> \u56FE\u50CF\u5207\u6362\u5668</h1><p>\u6709\u65F6\uFF0C\u60A8\u4E0D\u5E0C\u671B\u56FE\u50CF\u7A81\u7136\u51FA\u73B0\u5728\u5C4F\u5E55\u4E0A\uFF0C\u800C\u662F\u60F3\u5728\u56FE\u50CF\u4ECE\u4E00\u4E2A\u56FE\u50CF\u8FC7\u6E21\u5230\u53E6\u4E00\u4E2A\u56FE\u50CF\u65F6\u5BF9\u5176\u5E94\u7528\u67D0\u79CD\u52A8\u753B\u3002\u8FD9\u662F\u7531Android\u4EE5<strong>ImageSwitcher</strong>\u7684\u5F62\u5F0F\u652F\u6301\u7684\u3002\u56FE\u50CF\u5207\u6362\u5668\u5141\u8BB8\u60A8\u901A\u8FC7\u56FE\u50CF\u5728\u5C4F\u5E55\u4E0A\u7684\u663E\u793A\u65B9\u5F0F\u5728\u56FE\u50CF\u4E0A\u6DFB\u52A0\u4E00\u4E9B\u8FC7\u6E21\u6548\u679C\u3002\u4E3A\u4E86\u4F7F\u7528\u56FE\u50CF\u5207\u6362\u5668\uFF0C\u60A8\u9700\u8981\u9996\u5148\u5B9A\u4E49\u5176XML\u7EC4\u4EF6\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImageSwitcher</span>
   <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/imageSwitcher1<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>layout_centerHorizontal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">android:</span>layout_centerVertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ImageSwitcher</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u590D\u5236</p><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u5728java\u6587\u4EF6\u4E2D\u521B\u5EFA\u4E00\u4E2A<strong>ImageSwithcer</strong>\u5B9E\u4F8B\uFF0C\u5E76\u83B7\u53D6\u6B64XML\u7EC4\u4EF6\u7684\u5F15\u7528\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">ImageSwitcher</span> imageSwitcher<span class="token punctuation">;</span>
imageSwitcher <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ImageSwitcher</span><span class="token punctuation">)</span><span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>imageSwitcher1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u590D\u5236</p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u9700\u8981\u5B9E\u73B0ViewFactory\u63A5\u53E3\u5E76\u5B9E\u73B0\u672A\u5B9E\u73B0\u7684\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DEimageView\u3002\u5B83\u7684\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>imageSwitcher<span class="token punctuation">.</span><span class="token function">setImageResource</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>drawable<span class="token punctuation">.</span>ic_launcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
imageSwitcher<span class="token punctuation">.</span><span class="token function">setFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ViewFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token class-name">View</span> <span class="token function">makeView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">ImageView</span> myView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImageView</span><span class="token punctuation">(</span><span class="token function">getApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> myView<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u590D\u5236</p><p>\u60A8\u9700\u8981\u505A\u7684\u6700\u540E\u4E00\u4EF6\u4E8B\u662F\u5C06<strong>Animation</strong>\u6DFB\u52A0\u5230<strong>ImageSwitcher</strong>\u3002\u60A8\u9700\u8981\u901A\u8FC7\u8C03\u7528\u9759\u6001\u65B9\u6CD5loadAnimation\u901A\u8FC7AnimationUtilities\u7C7B\u6765\u5B9A\u4E49Animation\u7C7B\u7684\u5BF9\u8C61\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Animation</span> in <span class="token operator">=</span> <span class="token class-name">AnimationUtils</span><span class="token punctuation">.</span><span class="token function">loadAnimation</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token class-name"><span class="token namespace">android<span class="token punctuation">.</span></span>R</span><span class="token punctuation">.</span>anim<span class="token punctuation">.</span>slide_in_left<span class="token punctuation">)</span><span class="token punctuation">;</span>
imageSwitcher<span class="token punctuation">.</span><span class="token function">setInAnimation</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
imageSwitcher<span class="token punctuation">.</span><span class="token function">setOutAnimation</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span><span class="token punctuation">;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u590D\u5236</p><p>setInAnimaton\u65B9\u6CD5\u8BBE\u7F6E\u5BF9\u8C61\u5728\u5C4F\u5E55\u4E0A\u7684\u5916\u89C2\u52A8\u753B\uFF0C\u800CsetOutAnimation\u5219\u76F8\u53CD\u3002\u65B9\u6CD5loadAnimation()\u521B\u5EFA\u4E00\u4E2A\u52A8\u753B\u5BF9\u8C61\u3002\u9664\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u4E4B\u5916\uFF0CImageSwitcher\u7C7B\u4E2D\u8FD8\u5B9A\u4E49\u4E86\u5176\u4ED6\u65B9\u6CD5\u3002\u5B83\u4EEC\u5B9A\u4E49\u5982\u4E0B-</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>setImageDrawable(Drawable drawable)</strong></td><td>\u7528\u56FE\u50CF\u5207\u6362\u5668\u8BBE\u7F6E\u56FE\u50CF\u3002 \u56FE\u50CF\u4EE5\u4F4D\u56FE\u7684\u5F62\u5F0F\u4F20\u9012</td></tr><tr><td><strong>setImageResource(int resid)</strong></td><td>\u7528\u56FE\u50CF\u5207\u6362\u5668\u8BBE\u7F6E\u56FE\u50CF\u3002 \u56FE\u7247\u4EE5\u6574\u6570id\u7684\u5F62\u5F0F\u4F20\u9012</td></tr><tr><td><strong>setImageURI(Uri uri)</strong></td><td>\u7528\u56FE\u50CF\u5207\u6362\u5668\u8BBE\u7F6E\u56FE\u50CF\u3002 \u56FE\u7247\u4EE5URI\u7684\u5F62\u5F0F\u4F20\u9012</td></tr><tr><td><strong>ImageSwitcher(Context context, AttributeSet attrs)</strong></td><td>\u8FD4\u56DE\u4E00\u4E2A\u56FE\u50CF\u5207\u6362\u5668\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u5728\u65B9\u6CD5\u4E2D\u4F20\u9012\u7684\u67D0\u4E9B\u5C5E\u6027</td></tr><tr><td><strong>onInitializeAccessibilityEvent (AccessibilityEvent event)</strong></td><td>\u4F7F\u7528\u6709\u5173\u6B64View\u7684\u4FE1\u606F\uFF08\u4E8B\u4EF6\u6E90\uFF09\u521D\u59CB\u5316AccessibilityEvent</td></tr><tr><td><strong>onInitializeAccessibilityNodeInfo (AccessibilityNodeInfo info)</strong></td><td>\u4F7F\u7528\u6709\u5173\u6B64\u89C6\u56FE\u7684\u4FE1\u606F\u521D\u59CB\u5316AccessibilityNodeInfy</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u4E0B\u9762\u7684\u793A\u4F8B\u6F14\u793A\u4E86\u4F4D\u56FE\u4E0A\u7684\u67D0\u4E9B\u56FE\u50CF\u5207\u6362\u5668\u6548\u679C\u3002\u5B83\u521B\u5EFA\u4E86\u4E00\u4E2A\u57FA\u672C\u5E94\u7528\u7A0B\u5E8F\uFF0C\u53EF\u8BA9\u60A8\u67E5\u770B\u56FE\u50CF\u4E0A\u7684\u52A8\u753B\u6548\u679C\u3002\u8981\u8BD5\u9A8C\u6B64\u793A\u4F8B\uFF0C\u60A8\u9700\u8981\u5728\u5B9E\u9645\u8BBE\u5907\u4E0A\u8FD0\u884C\u5B83\u3002</p>`,17),d=a("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),b={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},m=a("Hello World\u793A\u4F8B"),g=a("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),k=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u6DFB\u52A0\u5FC5\u8981\u4EE3\u7801\u3002",-1),w=n("li",null,"\u4FEE\u6539res/layout/activity_main.xml\u6587\u4EF6\u5982\u679C\u9700\u8981\uFF0C\u53EF\u6DFB\u52A0\u4EFB\u4F55GUI\u7EC4\u4EF6\u3002",-1),q=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),h=s(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002\u8BE5\u6587\u4EF6\u53EF\u4EE5\u5305\u62EC\u6BCF\u4E2A\u57FA\u672C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>import android.app.Activity; import android.os.Bundle; import android.view.View; import android.view.ViewGroup; import android.widget.Button; import android.widget.ImageSwitcher; import android.widget.ImageView; import android.widget.Toast; import android.widget.ViewSwitcher;</p><p>public class MainActivity extends Activity { private ImageSwitcher sw; private Button b1,b2;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      b1 = (Button) findViewById(R.id.button);
      b2 = (Button) findViewById(R.id.button2);

      sw = (ImageSwitcher) findViewById(R.id.imageSwitcher);
      sw.setFactory(new ViewSwitcher.ViewFactory() {
          @Override
          public View makeView() {
              ImageView myView = new ImageView(getApplicationContext());
              myView.setScaleType(ImageView.ScaleType.FIT_CENTER);
              myView.setLayoutParams(new ImageSwitcher.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT));
              return myView;
          }
      });

      b1.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              Toast.makeText(getApplicationContext(), &quot;\u524D\u4E00\u5F20\u56FE\u7247&quot;, Toast.LENGTH_LONG).show();
              sw.setImageResource(R.drawable.sample0);
          }
      });

      b2.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              Toast.makeText(getApplicationContext(), &quot;\u4E0B\u4E00\u5F20\u56FE\u7247&quot;,
                      Toast.LENGTH_LONG).show();
              sw.setImageResource(R.drawable.sample1);
          }
      });
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-

\`\`\`xml

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;RelativeLayout
    xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot;&gt;

    &lt;TextView android:text=&quot;\u56FE\u7247\u5207\u6362\u5668\u793A\u4F8B&quot;
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/textview&quot;
        android:textSize=&quot;35dp&quot;
        android:layout_alignParentTop=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:text=&quot;\u8774\u8776\u6559\u7A0B&quot;
        android:id=&quot;@+id/textView&quot;
        android:layout_below=&quot;@+id/textview&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:textColor=&quot;#ff7aff24&quot;
        android:textSize=&quot;35dp&quot; /&gt;

    &lt;ImageSwitcher
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/imageSwitcher&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;168dp&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button&quot;
        android:layout_width=&quot;84dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;177dp&quot;
        android:text=&quot;\u4E0A\u4E00\u5F20&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button2&quot;
        android:layout_width=&quot;81dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignStart=&quot;@+id/button&quot;
        android:layout_alignLeft=&quot;@+id/button&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginStart=&quot;1dp&quot;
        android:layout_marginLeft=&quot;1dp&quot;
        android:layout_marginEnd=&quot;-1dp&quot;
        android:layout_marginBottom=&quot;244dp&quot;
        android:text=&quot;\u4E0B\u4E00\u5F20&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/imageswitcher1.png" alt=""></p><p>\u70B9\u51FB\u6309\u94AE\u5207\u6362\u4E0A\u4E00\u5F20\u4E0B\u4E00\u5F20\u56FE\u7247-</p><p><img src="https://www.jc2182.com/images/android/imageswitcher2.png" alt=""></p><p><img src="https://www.jc2182.com/images/android/imageswitcher3.png" alt=""></p>`,13);function _(y,v){const t=p("ExternalLinkIcon");return o(),i(l,null,[u,n("ol",null,[n("li",null,[d,n("a",b,[m,r(t)]),g]),k,w,q]),h],64)}var V=e(c,[["render",_]]);export{V as default};
