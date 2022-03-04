import{_ as t,r as o,o as p,a as l,b as n,g as i,F as c,h as a,f as s}from"./app.a790e4a7.js";const r={},u=a(`<h1 id="\u62FC\u5199\u68C0\u67E5\u5668" tabindex="-1"><a class="header-anchor" href="#\u62FC\u5199\u68C0\u67E5\u5668" aria-hidden="true">#</a> \u62FC\u5199\u68C0\u67E5\u5668</h1><p>Android\u5E73\u53F0\u63D0\u4F9B\u4E86\u62FC\u5199\u68C0\u67E5\u5668\u6846\u67B6\uFF0C\u53EF\u8BA9\u60A8\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5B9E\u65BD\u548C\u8BBF\u95EE\u62FC\u5199\u68C0\u67E5\u3002\u4E3A\u4E86\u4F7F\u7528\u62FC\u5199\u68C0\u67E5\u5668\uFF0C\u60A8\u9700\u8981\u5B9E\u73B0<strong>SpellCheckerSessionListener</strong>\u63A5\u53E3\u5E76\u8986\u76D6\u5176\u65B9\u6CD5\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloSpellCheckerActivity</span> <span class="token keyword">extends</span> <span class="token class-name">Activity</span> <span class="token keyword">implements</span> <span class="token class-name">SpellCheckerSessionListener</span> <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onGetSuggestions</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">SuggestionsInfo</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arg0<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onGetSentenceSuggestions</span><span class="token punctuation">(</span><span class="token class-name">SentenceSuggestionsInfo</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arg0<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u590D\u5236</p><p>\u63A5\u4E0B\u6765\uFF0C\u60A8\u9700\u8981\u521B\u5EFA\u4E00\u4E2A<strong>SpellCheckerSession</strong>\u7C7B\u7684\u5BF9\u8C61\u3002\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528<strong>TextServicesManager</strong>\u7C7B\u7684<strong>newSpellCheckerSession</strong>\u65B9\u6CD5\u6765\u5B9E\u4F8B\u5316\u6B64\u5BF9\u8C61\u3002\u6B64\u7C7B\u5904\u7406\u5E94\u7528\u7A0B\u5E8F\u548C\u6587\u672C\u670D\u52A1\u4E4B\u95F4\u7684\u4EA4\u4E92\u3002\u60A8\u9700\u8981\u8BF7\u6C42\u7CFB\u7EDF\u670D\u52A1\u4EE5\u5B9E\u4F8B\u5316\u5B83\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">SpellCheckerSession</span> mScs<span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token class-name">TextServicesManager</span> tsm <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TextServicesManager</span><span class="token punctuation">)</span> <span class="token function">getSystemService</span><span class="token punctuation">(</span>
<span class="token class-name">Context</span><span class="token punctuation">.</span>TEXT_SERVICES_MANAGER_SERVICE<span class="token punctuation">)</span><span class="token punctuation">;</span>
mScs <span class="token operator">=</span> tsm<span class="token punctuation">.</span><span class="token function">newSpellCheckerSession</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u590D\u5236</p><p>\u60A8\u9700\u8981\u505A\u7684\u6700\u540E\u4E00\u4EF6\u4E8B\u662F\u8C03\u7528<strong>getSuggestions</strong>\u65B9\u6CD5\u4EE5\u83B7\u53D6\u60A8\u60F3\u8981\u7684\u4EFB\u4F55\u6587\u672C\u7684\u5EFA\u8BAE\u3002\u8FD9\u4E9B\u5EFA\u8BAE\u5C06\u4F20\u9012\u5230<strong>onGetSuggestions</strong>\u65B9\u6CD5\u4E0A\uFF0C\u60A8\u53EF\u4EE5\u5728\u5176\u4E2D\u6267\u884C\u4EFB\u4F55\u6240\u9700\u7684\u64CD\u4F5C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>mScs<span class="token punctuation">.</span><span class="token function">getSuggestions</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TextInfo</span><span class="token punctuation">(</span>editText1<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u6B64\u65B9\u6CD5\u6709\u4E24\u4E2A\u53C2\u6570\u3002\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6587\u672C\u4FE1\u606F\u5BF9\u8C61\u5F62\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u7528\u4E8E\u533A\u5206\u5EFA\u8BAE\u7684cookie\u7F16\u53F7\u3002\u9664\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u5916\uFF0CSpellCheckerSession\u7C7B\u8FD8\u63D0\u4F9B\u4E86\u5176\u4ED6\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u66F4\u597D\u5730\u5904\u7406\u5EFA\u8BAE\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5728\u4E0B\u9762\u5217\u51FA-</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>cancel()</strong></td><td>\u53D6\u6D88\u5F85\u5904\u7406\u4E14\u6B63\u5728\u8FD0\u884C\u7684\u62FC\u5199\u68C0\u67E5\u4EFB\u52A1</td></tr><tr><td><strong>close()</strong></td><td>\u5B8C\u6210\u6B64\u4F1A\u8BDD\uFF0C\u5E76\u5141\u8BB8TextServicesManagerService\u65AD\u5F00\u7ED1\u5B9A\u7684\u62FC\u5199\u68C0\u67E5\u5668</td></tr><tr><td><strong>getSentenceSuggestions(TextInfo[] textInfos, int suggestionsLimit)</strong></td><td>\u4ECE\u6307\u5B9A\u7684\u53E5\u5B50\u4E2D\u83B7\u53D6\u5EFA\u8BAE</td></tr><tr><td><strong>getSpellChecker()</strong></td><td>\u83B7\u53D6\u6B64\u62FC\u5199\u68C0\u67E5\u5668\u4F1A\u8BDD\u5177\u6709\u7684\u62FC\u5199\u68C0\u67E5\u5668\u670D\u52A1\u4FE1\u606F\u3002</td></tr><tr><td><strong>isSessionDisconnected()</strong></td><td>\u5982\u679C\u4E0E\u8BE5\u4F1A\u8BDD\u7684\u6587\u672C\u670D\u52A1\u7684\u8FDE\u63A5\u5DF2\u65AD\u5F00\u5E76\u4E14\u672A\u6FC0\u6D3B\uFF0C\u5219\u4E3ATrue\u3002</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u8FD9\u662F\u6F14\u793A\u62FC\u5199\u68C0\u67E5\u5668\u7528\u6CD5\u7684\u793A\u4F8B\u3002\u5B83\u521B\u5EFA\u4E86\u4E00\u4E2A\u57FA\u672C\u7684\u62FC\u5199\u68C0\u67E5\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F7F\u60A8\u53EF\u4EE5\u7F16\u5199\u6587\u672C\u5E76\u83B7\u5F97\u5EFA\u8BAE\u3002\u8981\u8BD5\u9A8C\u6B64\u793A\u4F8B\uFF0C\u53EF\u4EE5\u5728\u5B9E\u9645\u8BBE\u5907\u6216\u4EFF\u771F\u5668\u4E2D\u8FD0\u884C\u5B83\u3002</p>`,14),d=s("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),b={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},m=s("Hello World\u793A\u4F8B"),k=s("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),g=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u4EE5\u6DFB\u52A0\u5FC5\u8981\u7684\u4EE3\u7801\u3002",-1),q=n("li",null,"\u4FEE\u6539res/layout/main\u4EE5\u6DFB\u52A0\u76F8\u5E94\u7684XML\u7EC4\u4EF6",-1),w=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),v=a(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">Context</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">View</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>textservice<span class="token punctuation">.</span></span><span class="token class-name">SentenceSuggestionsInfo</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>textservice<span class="token punctuation">.</span></span><span class="token class-name">SpellCheckerSession</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>textservice<span class="token punctuation">.</span></span><span class="token class-name">SuggestionsInfo</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>textservice<span class="token punctuation">.</span></span><span class="token class-name">TextInfo</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>textservice<span class="token punctuation">.</span></span><span class="token class-name">TextServicesManager</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Button</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">EditText</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">TextView</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Toast</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>public class MainActivity extends Activity implements SpellCheckerSession.SpellCheckerSessionListener { Button b1; TextView tv1; EditText ed1; private SpellCheckerSession mScs;</p><pre><code>  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      b1=(Button)findViewById(R.id.button);
      tv1=(TextView)findViewById(R.id.textView3);

      ed1=(EditText)findViewById(R.id.editText);
      b1.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              Toast.makeText(getApplicationContext(), ed1.getText().toString(),Toast.LENGTH_SHORT).show();
              TextInfo item =  new TextInfo(ed1.getText().toString());
              //TextInfo[] ti = {item};
              mScs.getSuggestions(item, 3);
          }
      });
  }

  public void onResume() {
      super.onResume();
      final TextServicesManager tsm = (TextServicesManager) getSystemService(Context.TEXT_SERVICES_MANAGER_SERVICE);
      mScs = tsm.newSpellCheckerSession(null, null, this, true);
  }

  public void onPause() {
      super.onPause();
      if (mScs != null) {
          mScs.close();
      }
  }

  public void onGetSuggestions(final SuggestionsInfo[] arg0) {
      final StringBuilder sb = new StringBuilder();

      for (int i = 0; i &lt; arg0.length; ++i) {
          // Returned suggestions are contained in SuggestionsInfo
          final int len = arg0[i].getSuggestionsCount();
          sb.append(&#39;\\n&#39;);

          for (int j = 0; j &lt; len; ++j) {
              sb.append(&quot;,&quot; + arg0[i].getSuggestionAt(j));
          }

          sb.append(&quot; (&quot; + len + &quot;)&quot;);
      }

      runOnUiThread(new Runnable() {
          public void run() {
              tv1.append(sb.toString());
          }
      });
  }

  @Override
  public void onGetSentenceSuggestions(SentenceSuggestionsInfo[] arg0) {

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
        android:id=&quot;@+id/textview&quot;
        android:layout_width=&quot;343dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignParentTop=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;3dp&quot;
        android:text=&quot;\u62FC\u5199\u68C0\u67E5\u793A\u4F8B &quot;
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

    &lt;Button
        android:id=&quot;@+id/button&quot;
        android:layout_width=&quot;108dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginBottom=&quot;4dp&quot;
        android:text=&quot;\u5EFA\u8BAE&quot; /&gt;

    &lt;EditText
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/editText&quot;
        android:hint=&quot;Enter Text&quot;
        android:layout_above=&quot;@+id/button&quot;
        android:layout_marginBottom=&quot;56dp&quot;
        android:focusable=&quot;true&quot;
        android:textColorHighlight=&quot;#ff7eff15&quot;
        android:textColorHint=&quot;#ffff25e6&quot;
        android:layout_alignRight=&quot;@+id/textview&quot;
        android:layout_alignEnd=&quot;@+id/textview&quot;
        android:layout_alignLeft=&quot;@+id/textview&quot;
        android:layout_alignStart=&quot;@+id/textview&quot; /&gt;

    &lt;ImageView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/imageView&quot;
        android:src=&quot;@drawable/logo&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:background=&quot;#22113322&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/textView3&quot;
        android:gravity=&quot;start&quot;
        android:layout_width=&quot;325dp&quot;
        android:layout_height=&quot;308dp&quot;
        android:layout_below=&quot;@+id/imageView&quot;
        android:layout_alignLeft=&quot;@+id/imageView&quot;
        android:layout_marginLeft=&quot;-11dp&quot;
        android:layout_marginTop=&quot;8dp&quot;
        android:text=&quot;\u5EFA\u8BAE&quot;
        android:textSize=&quot;25sp&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/spellingchecker1.png" alt=""></p><p>\u5C1D\u8BD5\u591A\u6B21\u8F93\u5165\uFF0C\u70B9\u51FB\u5EFA\u8BAE</p><p><img src="https://www.jc2182.com/images/android/spellingchecker2.png" alt=""></p>`,11);function h(S,y){const e=o("ExternalLinkIcon");return p(),l(c,null,[u,n("ol",null,[n("li",null,[d,n("a",b,[m,i(e)]),k]),g,q,w]),v],64)}var _=t(r,[["render",h]]);export{_ as default};
