import{_ as e,r as o,o as i,a as r,b as n,g as p,F as l,h as s,f as a}from"./app.1275d7df.js";const u={},d=s(`<h1 id="\u591A\u70B9\u89E6\u63A7" tabindex="-1"><a class="header-anchor" href="#\u591A\u70B9\u89E6\u63A7" aria-hidden="true">#</a> \u591A\u70B9\u89E6\u63A7</h1><p>\u5F53\u591A\u4E8E\u4E00\u4E2A\u624B\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u65F6\uFF0C\u5C31\u4F1A\u53D1\u751F\u591A\u70B9\u89E6\u6478\u624B\u52BF\u3002Android\u5141\u8BB8\u6211\u4EEC\u68C0\u6D4B\u8FD9\u4E9B\u624B\u52BF\u3002\u6BCF\u5F53\u591A\u4E2A\u624B\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u65F6\uFF0CAndroid\u7CFB\u7EDF\u90FD\u4F1A\u751F\u6210\u4EE5\u4E0B\u89E6\u6478\u4E8B\u4EF6\u3002</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>ACTION_DOWN</strong></td><td>\u5BF9\u4E8E\u89E6\u6478\u5C4F\u5E55\u7684\u7B2C\u4E00\u4E2A\u6307\u9488\u3002\u8FD9\u5F00\u59CB\u624B\u52BF\u3002</td></tr><tr><td><strong>ACTION_POINTER_DOWN</strong></td><td>\u5BF9\u4E8E\u8FDB\u5165\u7B2C\u4E00\u4E2A\u5C4F\u5E55\u4E4B\u5916\u7684\u5176\u4ED6\u6307\u9488\u3002</td></tr><tr><td><strong>ACTION_MOVE</strong></td><td>\u6309\u4E0B\u624B\u52BF\u65F6\u53D1\u751F\u4E86\u53D8\u5316\u3002</td></tr><tr><td><strong>ACTION_POINTER_UP</strong></td><td>\u5F53\u975E\u4E3B\u8981\u6307\u9488\u4E0A\u5347\u65F6\u53D1\u9001\u3002</td></tr><tr><td><strong>ACTION_UP</strong></td><td>\u5F53\u6700\u540E\u4E00\u4E2A\u6307\u9488\u79BB\u5F00\u5C4F\u5E55\u65F6\u53D1\u9001\u3002</td></tr></tbody></table><p>\u56E0\u6B64\uFF0C\u4E3A\u4E86\u68C0\u6D4B\u4E0A\u8FF0\u4EFB\u4F55\u4E8B\u4EF6\uFF0C\u60A8\u9700\u8981\u91CD\u5199onTouchEvent()\u65B9\u6CD5\u5E76\u624B\u52A8\u68C0\u67E5\u8FD9\u4E9B\u4E8B\u4EF6\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">onTouchEvent</span><span class="token punctuation">(</span><span class="token class-name">MotionEvent</span> ev<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">final</span> <span class="token keyword">int</span> actionPeformed <span class="token operator">=</span> ev<span class="token punctuation">.</span><span class="token function">getAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">switch</span><span class="token punctuation">(</span>actionPeformed<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token class-name">MotionEvent</span><span class="token punctuation">.</span>ACTION_DOWN<span class="token operator">:</span><span class="token punctuation">{</span>
         <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">case</span> <span class="token class-name">MotionEvent</span><span class="token punctuation">.</span>ACTION_MOVE<span class="token operator">:</span><span class="token punctuation">{</span>
         <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u590D\u5236</p><p>\u5728\u8FD9\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u60A8\u53EF\u4EE5\u6267\u884C\u4EFB\u4F55\u559C\u6B22\u7684\u8BA1\u7B97\u3002\u4F8B\u5982\u7F29\u653E\uFF0C\u7F29\u5C0F\u7B49\u4E3A\u4E86\u83B7\u5F97X\u548CY\u8F74\u7684\u5750\u6807\uFF0C\u53EF\u4EE5\u8C03\u7528getX()\u548CgetY()\u65B9\u6CD5\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">float</span> x <span class="token operator">=</span> ev<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token keyword">float</span> y <span class="token operator">=</span> ev<span class="token punctuation">.</span><span class="token function">getY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u590D\u5236</p><p>\u9664\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u4E4B\u5916\uFF0C\u6B64MotionEvent\u7C7B\u8FD8\u63D0\u4F9B\u4E86\u5176\u4ED6\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u66F4\u597D\u5730\u5904\u7406\u591A\u70B9\u89E6\u6478\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5728\u4E0B\u9762\u5217\u51FA-</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>getAction()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u6B63\u5728\u6267\u884C\u7684\u64CD\u4F5C\u7684\u79CD\u7C7B</td></tr><tr><td><strong>getPressure()</strong></td><td>\u6B64\u65B9\u6CD5\u4E3A\u7B2C\u4E00\u4E2A\u7D22\u5F15\u8FD4\u56DE\u6B64\u4E8B\u4EF6\u7684\u5F53\u524D\u538B\u529B</td></tr><tr><td><strong>getRawX()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u6B64\u4E8B\u4EF6\u7684\u539F\u59CB\u539F\u59CBX\u5750\u6807</td></tr><tr><td><strong>getRawY()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u6B64\u4E8B\u4EF6\u7684\u539F\u59CB\u539F\u59CBY\u5750\u6807</td></tr><tr><td><strong>getSize()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u6307\u9488\u7D22\u5F15\u7684\u5927\u5C0F</td></tr><tr><td><strong>getSource()</strong></td><td>\u6B64\u65B9\u6CD5\u83B7\u53D6\u4E8B\u4EF6\u7684\u6765\u6E90</td></tr><tr><td><strong>getXPrecision()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u8981\u62A5\u544A\u7684X\u5750\u6807\u7684\u7CBE\u5EA6</td></tr><tr><td><strong>getYPrecision()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u62A5\u544A\u7684Y\u5750\u6807\u7684\u7CBE\u5EA6</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u8FD9\u662F\u6F14\u793A\u4F7F\u7528\u591A\u70B9\u89E6\u63A7\u7684\u793A\u4F8B\u3002\u5B83\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7684Multitouch\u624B\u52BF\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F7F\u60A8\u53EF\u4EE5\u5728\u6267\u884C\u591A\u70B9\u89E6\u6478\u65F6\u67E5\u770B\u5750\u6807\u3002\u8981\u8BD5\u9A8C\u6B64\u793A\u4F8B\uFF0C\u60A8\u9700\u8981\u5728\u5B9E\u9645\u8BBE\u5907\u4E0A\u8FD0\u884C\u5B83\u3002</p>`,13),c=a("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),b={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},m=a("Hello World\u793A\u4F8B"),q=a("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),g=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u4EE5\u6DFB\u52A0\u591A\u70B9\u89E6\u63A7\u4EE3\u7801\u3002",-1),k=n("li",null,"\u4FEE\u6539res/layout/activity_main\u4EE5\u6DFB\u52A0\u76F8\u5E94\u7684XML\u7EC4\u4EF6\u3002",-1),_=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),y=s(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">MotionEvent</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">View</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">EditText</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">TextView</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>public class MainActivity extends Activity {</p><pre><code>  float xAxis = 0f;
  float yAxis = 0f;

  float lastXAxis = 0f;
  float lastYAxis = 0f;

  EditText ed1, ed2, ed3, ed4;
  TextView tv1;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      ed1 = (EditText) findViewById(R.id.editText);
      ed2 = (EditText) findViewById(R.id.editText2);
      ed3 = (EditText) findViewById(R.id.editText3);
      ed4 = (EditText) findViewById(R.id.editText4);

      tv1=(TextView)findViewById(R.id.textView2);

      tv1.setOnTouchListener(new View.OnTouchListener() {
          @Override
          public boolean onTouch(View v, MotionEvent event) {
              final int actionPeformed = event.getAction();

              switch(actionPeformed){
                  case MotionEvent.ACTION_DOWN:{
                      final float x = event.getX();
                      final float y = event.getY();

                      lastXAxis = x;
                      lastYAxis = y;

                      ed1.setText(Float.toString(lastXAxis));
                      ed2.setText(Float.toString(lastYAxis));
                      break;
                  }

                  case MotionEvent.ACTION_MOVE:{
                      final float x = event.getX();
                      final float y = event.getY();

                      final float dx = x - lastXAxis;
                      final float dy = y - lastYAxis;

                      xAxis += dx;
                      yAxis += dy;

                      ed3.setText(Float.toString(xAxis));
                      ed4.setText(Float.toString(yAxis));
                      break;
                  }
              }
              return true;
          }
      });
  }
</code></pre><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-

\`\`\`xml

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;RelativeLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot;
    android:transitionGroup=&quot;true&quot;&gt;

    &lt;TextView
        android:id=&quot;@+id/textview&quot;
        android:layout_width=&quot;385dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignParentTop=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;3dp&quot;
        android:text=&quot;\u591A\u70B9\u89E6\u63A7\u793A\u4F8B&quot;
        android:textSize=&quot;35dp&quot; /&gt;

    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:text=&quot;\u8774\u8776\u6559\u7A0B&quot;
        android:id=&quot;@+id/textView&quot;
        android:layout_below=&quot;@+id/textview&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:textColor=&quot;#ff7aff24&quot;
        android:textSize=&quot;35dp&quot; /&gt;

    &lt;ImageView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/imageView&quot;
        android:src=&quot;@drawable/logo&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:background=&quot;#22FFFF&quot;
        android:theme=&quot;@style/Base.TextAppearance.AppCompat&quot; /&gt;

    &lt;EditText
        android:id=&quot;@+id/editText&quot;
        android:layout_width=&quot;351dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/imageView&quot;
        android:layout_alignStart=&quot;@+id/textview&quot;
        android:layout_alignLeft=&quot;@+id/textview&quot;
        android:layout_alignEnd=&quot;@+id/textview&quot;
        android:layout_alignRight=&quot;@+id/textview&quot;
        android:layout_marginStart=&quot;-25dp&quot;
        android:layout_marginLeft=&quot;-25dp&quot;
        android:layout_marginTop=&quot;6dp&quot;
        android:hint=&quot;X-\u5750\u6807&quot;
        android:textColorHint=&quot;#ff69ff0e&quot; /&gt;

    &lt;EditText
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/editText2&quot;
        android:layout_below=&quot;@+id/editText&quot;
        android:layout_alignLeft=&quot;@+id/editText&quot;
        android:layout_alignStart=&quot;@+id/editText&quot;
        android:textColorHint=&quot;#ff21ff11&quot;
        android:hint=&quot;Y-\u5750\u6807&quot;
        android:layout_alignRight=&quot;@+id/editText&quot;
        android:layout_alignEnd=&quot;@+id/editText&quot; /&gt;

    &lt;EditText
        android:id=&quot;@+id/editText3&quot;
        android:layout_width=&quot;390dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/editText2&quot;
        android:layout_alignStart=&quot;@+id/editText2&quot;
        android:layout_alignLeft=&quot;@+id/editText2&quot;
        android:layout_alignEnd=&quot;@+id/editText2&quot;
        android:layout_alignRight=&quot;@+id/editText2&quot;
        android:layout_marginStart=&quot;-22dp&quot;
        android:layout_marginLeft=&quot;-22dp&quot;
        android:layout_marginTop=&quot;6dp&quot;
        android:hint=&quot;\u79FB\u52A8 X&quot;
        android:textColorHint=&quot;#ff33ff20&quot; /&gt;

    &lt;EditText
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/editText4&quot;
        android:layout_below=&quot;@+id/editText3&quot;
        android:layout_alignLeft=&quot;@+id/editText3&quot;
        android:layout_alignStart=&quot;@+id/editText3&quot;
        android:textColorHint=&quot;#ff31ff07&quot;
        android:hint=&quot;\u79FB\u52A8 Y&quot;
        android:layout_alignRight=&quot;@+id/editText3&quot;
        android:layout_alignEnd=&quot;@+id/editText3&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/textView2&quot;
        android:layout_width=&quot;231dp&quot;
        android:layout_height=&quot;123dp&quot;
        android:layout_alignStart=&quot;@+id/imageView&quot;
        android:layout_alignLeft=&quot;@+id/imageView&quot;
        android:layout_alignParentStart=&quot;true&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_marginStart=&quot;-6dp&quot;
        android:layout_marginLeft=&quot;-59dp&quot;
        android:layout_marginBottom=&quot;123dp&quot;
        android:clickable=&quot;true&quot;
        android:focusable=&quot;true&quot;
        android:text=&quot;\u89E6\u6478\u8FD9\u91CC&quot;
        android:textColor=&quot;#ff5480ff&quot;
        android:textSize=&quot;35dp&quot;
        android:typeface=&quot;sans&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/multitouch1.png" alt=""></p><p>\u5C1D\u8BD5\u89E6\u6478\u5C4F\u5E55\u6765\u770B\u6548\u679C</p>`,10);function x(h,w){const t=o("ExternalLinkIcon");return i(),r(l,null,[d,n("ol",null,[n("li",null,[c,n("a",b,[m,p(t)]),q]),g,k,_]),y],64)}var v=e(u,[["render",x]]);export{v as default};
