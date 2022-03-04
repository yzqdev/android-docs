import{_ as t,r as o,o as r,a as p,b as n,g as i,F as l,h as a,f as s}from"./app.1275d7df.js";const u={},c=a(`<h1 id="\u8FDB\u5EA6\u5708" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5EA6\u5708" aria-hidden="true">#</a> \u8FDB\u5EA6\u5708</h1><p>\u8FDB\u884C\u8FDB\u5EA6\u5708\u7684\u6700\u7B80\u5355\u65B9\u6CD5\u662F\u4F7F\u7528\u540D\u4E3A<strong>ProgressDialog</strong>\u7684\u7C7B\u3002\u52A0\u8F7D\u680F\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BE5\u7C7B\u5236\u4F5C\u3002\u6761\u5F62\u548C\u5706\u5F62\u4E4B\u95F4\u552F\u4E00\u7684\u903B\u8F91\u533A\u522B\u662F\uFF0C\u5F53\u60A8\u77E5\u9053\u7B49\u5F85\u7279\u5B9A\u4EFB\u52A1\u7684\u603B\u65F6\u95F4\u65F6\u4F7F\u7528\u524D\u8005\uFF0C\u800C\u5F53\u60A8\u4E0D\u77E5\u9053\u7B49\u5F85\u65F6\u95F4\u65F6\u4F7F\u7528\u540E\u8005\u3002\u4E3A\u6B64\uFF0C\u60A8\u9700\u8981\u5B9E\u4F8B\u5316\u6B64\u7C7B\u7684\u5BF9\u8C61\u3002\u5B83\u7684\u8BED\u6CD5\u662F\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ProgressDialog</span> progress <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProgressDialog</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u73B0\u5728\uFF0C\u60A8\u53EF\u4EE5\u8BBE\u7F6E\u6B64\u5BF9\u8BDD\u6846\u7684\u67D0\u4E9B\u5C5E\u6027\u3002\u4F8B\u5982\uFF0C\u5176\u6837\u5F0F\uFF0C\u5176\u6587\u5B57\u7B49</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>progress<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Downloading Music :) &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
progress<span class="token punctuation">.</span><span class="token function">setProgressStyle</span><span class="token punctuation">(</span><span class="token class-name">ProgressDialog</span><span class="token punctuation">.</span>STYLE_SPINNER<span class="token punctuation">)</span><span class="token punctuation">;</span>
progress<span class="token punctuation">.</span><span class="token function">setIndeterminate</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u590D\u5236</p><p>\u9664\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u5916\uFF0C<strong>ProgressDialog</strong>\u7C7B\u8FD8\u63D0\u4F9B\u5176\u4ED6\u65B9\u6CD5\u3002</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>getMax()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u8FDB\u5EA6\u7684\u6700\u5927\u503C</td></tr><tr><td><strong>incrementProgressBy(int diff)</strong></td><td>\u6B64\u65B9\u6CD5\u5C06\u8FDB\u5EA6\u6761\u589E\u52A0\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7684\u503C\u7684\u5DEE</td></tr><tr><td><strong>setIndeterminate(boolean indeterminate)</strong></td><td>\u6B64\u65B9\u6CD5\u5C06\u8FDB\u5EA6\u6307\u793A\u5668\u8BBE\u7F6E\u4E3A\u201C\u786E\u5B9A\u201D\u6216\u201C\u4E0D\u786E\u5B9A\u201D</td></tr><tr><td><strong>setMax(int max)</strong></td><td>\u6B64\u65B9\u6CD5\u8BBE\u7F6E\u8FDB\u5EA6\u5BF9\u8BDD\u6846\u7684\u6700\u5927\u503C</td></tr><tr><td><strong>setProgress(int value)</strong></td><td>\u6B64\u65B9\u6CD5\u7528\u4E8E\u4F7F\u7528\u67D0\u4E9B\u7279\u5B9A\u503C\u66F4\u65B0\u8FDB\u5EA6\u5BF9\u8BDD\u6846</td></tr><tr><td><strong>show(Context context, CharSequence title, CharSequence message)</strong></td><td>\u8FD9\u662F\u4E00\u79CD\u9759\u6001\u65B9\u6CD5\uFF0C\u7528\u4E8E\u663E\u793A\u8FDB\u5EA6\u5BF9\u8BDD\u6846</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u672C\u793A\u4F8B\u6F14\u793A\u4E86\u8FDB\u5EA6\u5BF9\u8BDD\u6846\u7684\u65CB\u8F6C\u7528\u6CD5\u3002\u6309\u4E0B\u6309\u94AE\u65F6\u5C06\u663E\u793A\u65CB\u8F6C\u8FDB\u5EA6\u5BF9\u8BDD\u6846\u3002 \u8981\u5C1D\u8BD5\u4F7F\u7528\u6B64\u793A\u4F8B\uFF0C\u60A8\u9700\u8981\u5728\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u5F00\u53D1\u5E94\u7528\u7A0B\u5E8F\u540E\uFF0C\u5728\u5B9E\u9645\u8BBE\u5907\u4E0A\u8FD0\u884C\u6B64\u793A\u4F8B\u3002</p>`,11),d=s("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),b={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},m=s("Hello World\u793A\u4F8B"),g=s("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),k=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u4EE5\u6DFB\u52A0\u8FDB\u5EA6\u4EE3\u7801\u4EE5\u663E\u793A\u65CB\u8F6C\u8FDB\u5EA6\u5BF9\u8BDD\u6846\u3002",-1),q=n("li",null,"\u4FEE\u6539res/layout/activity_main.xml\u6587\u4EF6\u4EE5\u6DFB\u52A0\u76F8\u5E94\u7684XML\u4EE3\u7801\u3002",-1),h=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),w=a(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">ProgressDialog</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Handler</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">View</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Button</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>public class MainActivity extends Activity {</p><pre><code>  Button b1;
  private ProgressDialog progressBar;
  private int progressBarStatus = 0;
  private Handler progressBarbHandler = new Handler();
  private long fileSize = 0;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);
      b1=(Button)findViewById(R.id.button);

      b1.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              progressBar = new ProgressDialog(v.getContext());
              progressBar.setCancelable(true);
              progressBar.setMessage(&quot;File downloading ...&quot;);
              progressBar.setProgressStyle(ProgressDialog.STYLE_SPINNER);
              progressBar.setProgress(0);
              progressBar.setMax(100);
              progressBar.show();
              progressBarStatus = 0;

              fileSize = 0;
              new Thread(new Runnable() {
                  public void run() {
                      while (progressBarStatus &lt; 100) {
                          progressBarStatus = downloadFile();

                          try {
                              Thread.sleep(1000);
                          } catch (InterruptedException e) {
                              e.printStackTrace();
                          }

                          progressBarbHandler.post(new Runnable() {
                              public void run() {
                                  progressBar.setProgress(progressBarStatus);
                              }
                          });
                      }

                      if (progressBarStatus &gt;= 100) {
                          try {
                              Thread.sleep(2000);
                          } catch (InterruptedException e) {
                              e.printStackTrace();
                          }
                          progressBar.dismiss();
                      }
                  }
              }).start();
          }
      });
  }

  public int downloadFile() {
      while (fileSize &lt;= 1000000) {
          fileSize++;

          if (fileSize == 100000) {
              return 10;
          }else if (fileSize == 200000) {
              return 20;
          }else if (fileSize == 300000) {
              return 30;
          }else if (fileSize == 400000) {
              return 40;
          }else if (fileSize == 500000) {
              return 50;
          }else if (fileSize == 700000) {
              return 70;
          }else if (fileSize == 800000) {
              return 80;
          }
      }
      return 100;
  }
</code></pre><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-

\`\`\`xml

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;RelativeLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot; android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot;&gt;

    &lt;TextView android:text=&quot;\u8FDB\u5EA6\u5708\u793A\u4F8B&quot; android:layout_width=&quot;wrap_content&quot;
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

    &lt;Button
        android:id=&quot;@+id/button&quot;
        android:layout_width=&quot;111dp&quot;
        android:layout_height=&quot;79dp&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginBottom=&quot;112dp&quot;
        android:text=&quot;\u4E0B\u8F7D&quot; /&gt;

    &lt;ImageView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/imageView&quot;
        android:src=&quot;@drawable/logo&quot;
        android:background=&quot;#22110055&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/progresscircle1.png" alt=""></p><p>\u5C1D\u8BD5\u70B9\u51FB\u4E0B\u8F7D\u5982\u4E0B\uFF1A</p><p><img src="https://www.jc2182.com/images/android/progresscircle2.png" alt=""></p>`,11);function _(v,y){const e=o("ExternalLinkIcon");return r(),p(l,null,[c,n("ol",null,[n("li",null,[d,n("a",b,[m,i(e)]),g]),k,q,h]),w],64)}var f=t(u,[["render",_]]);export{f as default};
