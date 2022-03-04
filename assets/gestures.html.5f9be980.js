import{_ as t,r as p,o,a as l,b as n,g as r,F as c,h as a,f as s}from"./app.a790e4a7.js";const i={},u=a(`<h1 id="\u624B\u52BF" tabindex="-1"><a class="header-anchor" href="#\u624B\u52BF" aria-hidden="true">#</a> \u624B\u52BF</h1><p>Android\u63D0\u4F9B\u4E86\u7279\u6B8A\u7C7B\u578B\u7684\u89E6\u6478\u5C4F\u4E8B\u4EF6\uFF0C\u4F8B\u5982\u634F\uFF0C\u53CC\u51FB\uFF0C\u6EDA\u52A8\uFF0C\u957F\u6309\u548C\u9000\u683C\u3002\u8FD9\u4E9B\u90FD\u79F0\u4E3A\u624B\u52BF\u3002Android\u63D0\u4F9B\u4E86<strong>GestureDetector</strong>\u7C7B\u6765\u63A5\u6536\u624B\u52BF\u4E8B\u4EF6\uFF0C\u5E76\u544A\u8BC9\u6211\u4EEC\u8FD9\u4E9B\u4E8B\u4EF6\u662F\u5426\u4E0E\u624B\u52BF\u76F8\u5BF9\u5E94\u3002\u8981\u4F7F\u7528\u5B83\uFF0C\u60A8\u9700\u8981\u521B\u5EFA\u4E00\u4E2A<strong>GestureDetector</strong>\u5BF9\u8C61\uFF0C\u7136\u540E\u4F7F\u7528<strong>GestureDetector.SimpleOnGestureListener</strong>\u6269\u5C55\u53E6\u4E00\u4E2A\u7C7B\u4EE5\u5145\u5F53\u4FA6\u542C\u5668\u5E76\u91CD\u5199\u67D0\u4E9B\u65B9\u6CD5\u3002\u5176\u8BED\u6CD5\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">GestureDetector</span> myG<span class="token punctuation">;</span>
myG <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GestureDetector</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Gesture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Gesture</span> <span class="token keyword">extends</span> <span class="token class-name">GestureDetector<span class="token punctuation">.</span>SimpleOnGestureListener</span><span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">onSingleTapUp</span><span class="token punctuation">(</span><span class="token class-name">MotionEvent</span> ev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onLongPress</span><span class="token punctuation">(</span><span class="token class-name">MotionEvent</span> ev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">onScroll</span><span class="token punctuation">(</span><span class="token class-name">MotionEvent</span> e1<span class="token punctuation">,</span> <span class="token class-name">MotionEvent</span> e2<span class="token punctuation">,</span> <span class="token keyword">float</span> distanceX<span class="token punctuation">,</span>
   <span class="token keyword">float</span> distanceY<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">onFling</span><span class="token punctuation">(</span><span class="token class-name">MotionEvent</span> e1<span class="token punctuation">,</span> <span class="token class-name">MotionEvent</span> e2<span class="token punctuation">,</span> <span class="token keyword">float</span> velocityX<span class="token punctuation">,</span>
   <span class="token keyword">float</span> velocityY<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u590D\u5236</p><h2 id="\u5904\u7406\u634F\u624B\u52BF" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u634F\u624B\u52BF" aria-hidden="true">#</a> \u5904\u7406\u634F\u624B\u52BF</h2><p>Android\u63D0\u4F9B\u4E86<strong>ScaleGestureDetector</strong>\u7C7B\u6765\u5904\u7406\u8BF8\u5982\u634F\u7B49\u7684\u624B\u52BF\u3002\u8981\u4F7F\u7528\u5B83\uFF0C\u60A8\u9700\u8981\u5B9E\u4F8B\u5316\u6B64\u7C7B\u7684\u5BF9\u8C61\u3002\u5B83\u7684\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ScaleGestureDetector</span> SGD<span class="token punctuation">;</span>
SGD <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ScaleGestureDetector</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">ScaleListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u590D\u5236</p><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E0A\u4E0B\u6587\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E8B\u4EF6\u4FA6\u542C\u5668\u3002\u6211\u4EEC\u5FC5\u987B\u5B9A\u4E49\u4E8B\u4EF6\u4FA6\u542C\u5668\uFF0C\u5E76\u91CD\u5199\u51FD\u6570OnTouchEvent\u4F7F\u5176\u8D77\u4F5C\u7528\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">onTouchEvent</span><span class="token punctuation">(</span><span class="token class-name">MotionEvent</span> ev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   SGD<span class="token punctuation">.</span><span class="token function">onTouchEvent</span><span class="token punctuation">(</span>ev<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">ScaleListener</span> <span class="token keyword">extends</span> <span class="token class-name">ScaleGestureDetector<span class="token punctuation">.</span>SimpleOnScaleGestureListener</span> <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">onScale</span><span class="token punctuation">(</span><span class="token class-name">ScaleGestureDetector</span> detector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">float</span> scale <span class="token operator">=</span> detector<span class="token punctuation">.</span><span class="token function">getScaleFactor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u590D\u5236</p><p>\u9664\u4E86\u634F\u5408\u624B\u52BF\u5916\uFF0C\u8FD8\u6709\u5176\u4ED6\u65B9\u6CD5\u53EF\u4EE5\u901A\u77E5\u66F4\u591A\u6709\u5173\u89E6\u6478\u4E8B\u4EF6\u7684\u4FE1\u606F\u3002\u5B83\u4EEC\u5728\u4E0B\u9762\u5217\u51FA-</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>getEventTime()</strong></td><td>\u6B64\u65B9\u6CD5\u83B7\u53D6\u6B63\u5728\u5904\u7406\u7684\u5F53\u524D\u4E8B\u4EF6\u7684\u4E8B\u4EF6\u65F6\u95F4\u3002</td></tr><tr><td><strong>getFocusX()</strong></td><td>\u6B64\u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u624B\u52BF\u7684\u7126\u70B9\u7684X\u5750\u6807\u3002</td></tr><tr><td><strong>getFocusY()</strong></td><td>\u6B64\u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u624B\u52BF\u7126\u70B9\u7684Y\u5750\u6807\u3002</td></tr><tr><td><strong>getTimeDelta()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u4EE5\u524D\u63A5\u53D7\u7684\u7F29\u653E\u4E8B\u4EF6\u548C\u5F53\u524D\u7F29\u653E\u4E8B\u4EF6\u4E4B\u95F4\u7684\u65F6\u95F4\u5DEE\uFF08\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF09\u3002</td></tr><tr><td><strong>isInProgress()</strong></td><td>\u5982\u679C\u6B63\u5728\u8FDB\u884C\u7F29\u653E\u624B\u52BF\uFF0C\u5219\u6B64\u65B9\u6CD5\u8FD4\u56DEtrue\u3002</td></tr><tr><td><strong>onTouchEvent(MotionEvent event)</strong></td><td>\u6B64\u65B9\u6CD5\u63A5\u53D7MotionEvents\u5E76\u5728\u9002\u5F53\u65F6\u8C03\u5EA6\u4E8B\u4EF6\u3002</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u8FD9\u662F\u4E00\u4E2A\u6F14\u793A<strong>ScaleGestureDetector</strong>\u7C7B\u7684\u7528\u6CD5\u7684\u793A\u4F8B\u3002\u5B83\u521B\u5EFA\u4E86\u4E00\u4E2A\u57FA\u672C\u5E94\u7528\u7A0B\u5E8F\uFF0C\u53EF\u8BA9\u60A8\u901A\u8FC7\u634F\u653E\u5927\u548C\u7F29\u5C0F\u3002 \u4E3A\u4E86\u8BD5\u9A8C\u8BE5\u793A\u4F8B\uFF0C\u60A8\u53EF\u4EE5\u5728\u5B9E\u9645\u8BBE\u5907\u4E0A\u6216\u5728\u542F\u7528\u4E86\u89E6\u6478\u5C4F\u7684\u4EFF\u771F\u5668\u4E2D\u8FD0\u884C\u6B64\u793A\u4F8B\u3002</p>`,15),d=s("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),b={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},m=s("Hello World\u793A\u4F8B"),k=s("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),v=n("li",null,"\u4ECE\u4E92\u8054\u7F51\u4E0A\u4E0B\u8F7D\u4E00\u79CD\u5B57\u4F53\uFF0C\u5E76\u5C06\u5176\u653E\u5728assets/font\u6587\u4EF6\u5939\u4E0B\u3002",-1),g=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u6DFB\u52A0\u5FC5\u8981\u4EE3\u7801\u3002",-1),h=n("li",null,"\u4FEE\u6539res/layout/activity_main.xml\u6587\u4EF6\u5982\u679C\u9700\u8981\uFF0C\u53EF\u6DFB\u52A0\u4EFB\u4F55GUI\u7EC4\u4EF6\u3002",-1),w=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),y=a(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002\u8BE5\u6587\u4EF6\u53EF\u4EE5\u5305\u62EC\u6BCF\u4E2A\u57FA\u672C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>import android.app.Activity; import android.graphics.Matrix; import android.os.Bundle; import android.view.MotionEvent; import android.view.ScaleGestureDetector; import android.widget.ImageView;</p><p>public class MainActivity extends Activity { private ImageView iv; private Matrix matrix = new Matrix(); private float scale = 1f; private ScaleGestureDetector SGD;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      iv=(ImageView)findViewById(R.id.imageView);
      SGD = new ScaleGestureDetector(this,new ScaleListener());
  }

  public boolean onTouchEvent(MotionEvent ev) {
      SGD.onTouchEvent(ev);
      return true;
  }

  private class ScaleListener extends ScaleGestureDetector.
          SimpleOnScaleGestureListener {

      @Override
      public boolean onScale(ScaleGestureDetector detector) {
          scale *= detector.getScaleFactor();
          scale = Math.max(0.1f, Math.min(scale, 5.0f));
          matrix.setScale(scale, scale);
          iv.setImageMatrix(matrix);
          return true;
      }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-

\`\`\`xml

&lt;RelativeLayout
    xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot; &gt;

    &lt;TextView android:text=&quot;\u624B\u52BF\u4F8B\u5B50&quot; android:layout_width=&quot;wrap_content&quot;
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

    &lt;ImageView
        android:background=&quot;#22112200&quot;
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/imageView&quot;
        android:src=&quot;@drawable/logo&quot;
        android:scaleType=&quot;matrix&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_alignParentLeft=&quot;true&quot;
        android:layout_alignParentStart=&quot;true&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_alignParentRight=&quot;true&quot;
        android:layout_alignParentEnd=&quot;true&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/gestures1.png" alt=""></p><p>\u73B0\u5728\uFF0C\u5C06\u4E24\u6839\u624B\u6307\u653E\u5728android\u5C4F\u5E55\u4E0A\uFF0C\u5C06\u5B83\u4EEC\u5206\u5F00\u4E00\u90E8\u5206\uFF0C\u60A8\u5C06\u770B\u5230android\u56FE\u50CF\u6B63\u5728\u7F29\u653E\u3002\u5982\u4E0B\u9762\u7684\u56FE\u50CF\u6240\u793A-</p>`,11);function q(_,x){const e=p("ExternalLinkIcon");return o(),l(c,null,[u,n("ol",null,[n("li",null,[d,n("a",b,[m,r(e)]),k]),v,g,h,w]),y],64)}var f=t(i,[["render",q]]);export{f as default};
