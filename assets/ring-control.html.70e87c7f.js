import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o,a as d,b as n,d as l,F as u,c as a,e as t}from"./app.d726b4f4.js";const r={},c=a(`<h1 id="\u94C3\u58F0\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u94C3\u58F0\u63A7\u5236" aria-hidden="true">#</a> \u94C3\u58F0\u63A7\u5236</h1><p>\u60A8\u53EF\u4EE5\u5728Android\u4E2D\u8F7B\u677E\u63A7\u5236\u94C3\u58F0\u7684\u97F3\u91CF\u548C\u94C3\u58F0\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F8B\u5982\uFF1A\uFF08\u9759\u97F3\uFF0C\u632F\u52A8\uFF0C\u54CD\u4EAE\u7B49\uFF09\u3002Android\u63D0\u4F9B\u4E86AudioManager\u7C7B\uFF0C\u8BE5\u7C7B\u63D0\u4F9B\u5BF9\u8FD9\u4E9B\u63A7\u4EF6\u7684\u8BBF\u95EE\u3002\u4E3A\u4E86\u4F7F\u7528<strong>AndroidManager</strong>\u7C7B\uFF0C\u60A8\u5FC5\u987B\u9996\u5148\u901A\u8FC7\u8C03\u7528getSystemService()\u65B9\u6CD5\u521B\u5EFAAudioManager\u7C7B\u7684\u5BF9\u8C61\u3002\u5176\u8BED\u6CD5\u5982\u4E0B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token keyword">private</span> <span class="token class-name">AudioManager</span> myAudioManager<span class="token punctuation">;</span>
  myAudioManager <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">AudioManager</span><span class="token punctuation">)</span><span class="token function">getSystemService</span><span class="token punctuation">(</span><span class="token class-name">Context</span><span class="token punctuation">.</span>AUDIO_SERVICE<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u590D\u5236</p><p>\u5B9E\u4F8B\u5316AudioManager\u7C7B\u7684\u5BF9\u8C61\u540E\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528setRingerMode\u65B9\u6CD5\u8BBE\u7F6E\u8BBE\u5907\u7684\u97F3\u9891\u6216\u94C3\u58F0\u914D\u7F6E\u6587\u4EF6\u3002\u5176\u8BED\u6CD5\u5982\u4E0B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  myAudioManager<span class="token punctuation">.</span><span class="token function">setRingerMode</span><span class="token punctuation">(</span><span class="token class-name">AudioManager</span><span class="token punctuation">.</span>RINGER_MODE_VIBRATE<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u590D\u5236</p><p>setRingerMode\u65B9\u6CD5\u91C7\u7528\u6574\u6570\u4F5C\u4E3A\u53C2\u6570\u3002\u5BF9\u4E8E\u6BCF\u79CD\u6A21\u5F0F\uFF0C\u5206\u914D\u4E00\u4E2A\u6574\u6570\uFF0C\u4EE5\u533A\u5206\u4E0D\u540C\u7684\u6A21\u5F0F\u3002\u53EF\u80FD\u7684\u6A21\u5F0F\u662F\u3002</p><table><thead><tr><th>\u6A21\u5F0F</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>RINGER_MODE_VIBRATE</strong></td><td>\u6B64\u6A21\u5F0F\u5C06\u8BBE\u5907\u8BBE\u7F6E\u4E3A\u632F\u52A8\u6A21\u5F0F\u3002</td></tr><tr><td><strong>RINGER_MODE_NORMAL</strong></td><td>\u6B64\u6A21\u5F0F\u5C06\u8BBE\u5907\u8BBE\u7F6E\u4E3A\u6B63\u5E38\uFF08\u5927\u58F0\uFF09\u6A21\u5F0F\u3002</td></tr><tr><td><strong>RINGER_MODE_SILENT</strong></td><td>\u6B64\u6A21\u5F0F\u5C06\u8BBE\u5907\u8BBE\u7F6E\u4E3A\u9759\u97F3\u6A21\u5F0F\u3002</td></tr></tbody></table><p>\u8BBE\u7F6E\u6A21\u5F0F\u540E\uFF0C\u53EF\u4EE5\u8C03\u7528getRingerMode()\u65B9\u6CD5\u6765\u83B7\u53D6\u7CFB\u7EDF\u7684\u8BBE\u7F6E\u72B6\u6001\u3002\u5176\u8BED\u6CD5\u5982\u4E0B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token keyword">int</span> mod <span class="token operator">=</span> myAudioManager<span class="token punctuation">.</span><span class="token function">getRingerMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u590D\u5236</p><p>\u9664\u4E86getRingerMode\u65B9\u6CD5\u5916\uFF0CAudioManager\u7C7B\u4E2D\u8FD8\u6709\u5176\u4ED6\u65B9\u6CD5\u53EF\u7528\u4E8E\u63A7\u5236\u97F3\u91CF\u548C\u5176\u4ED6\u6A21\u5F0F\u3002\u5B83\u4EEC\u5728\u4E0B\u9762\u5217\u51FA\u3002</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>adjustVolume(int direction, int flags)</strong></td><td>\u6B64\u65B9\u6CD5\u8C03\u6574\u6700\u76F8\u5173\u6D41\u7684\u97F3\u91CF</td></tr><tr><td><strong>getMode()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u5F53\u524D\u7684\u97F3\u9891\u6A21\u5F0F</td></tr><tr><td><strong>getStreamMaxVolume(int streamType)</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u7279\u5B9A\u6D41\u7684\u6700\u5927\u97F3\u91CF\u7D22\u5F15</td></tr><tr><td><strong>getStreamVolume(int streamType)</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u7279\u5B9A\u6D41\u7684\u5F53\u524D\u4F53\u79EF\u7D22\u5F15</td></tr><tr><td><strong>isMusicActive()</strong></td><td>\u6B64\u65B9\u6CD5\u68C0\u67E5\u662F\u5426\u6709\u4EFB\u4F55\u97F3\u4E50\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001\u3002</td></tr><tr><td><strong>startBluetoothSco()</strong></td><td>\u6B64\u65B9\u6CD5\u542F\u52A8\u84DD\u7259SCO\u97F3\u9891\u8FDE\u63A5</td></tr><tr><td><strong>stopBluetoothSco()</strong></td><td>\u6B64\u65B9\u6CD5\u505C\u6B62\u84DD\u7259SCO\u97F3\u9891\u8FDE\u63A5</td></tr></tbody></table>`,14),p=n("p",null,[n("em",null,"\uE63F")],-1),v=n("h2",{id:"\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#"),t(" \u793A\u4F8B")],-1),m=n("p",null,"\u4E0B\u9762\u7684\u793A\u4F8B\u6F14\u793AAudioManager\u7C7B\u7684\u7528\u6CD5\u3002\u5B83\u521B\u5EFA\u4E86\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\uFF0C\u53EF\u8BA9\u60A8\u4E3A\u8BBE\u5907\u8BBE\u7F6E\u4E0D\u540C\u7684\u94C3\u58F0\u6A21\u5F0F\u3002\u8981\u8BD5\u9A8C\u6B64\u793A\u4F8B\uFF0C\u60A8\u9700\u8981\u5728\u5B9E\u9645\u8BBE\u5907\u4E0A\u8FD0\u884C\u5B83\u3002",-1),g=t("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),b={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},q=t("Hello World\u793A\u4F8B"),_=t("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),k=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u4EE5\u6DFB\u52A0AudioManager\u4EE3\u7801",-1),h=n("li",null,"\u4FEE\u6539res/layout/activity_main.xml\u6587\u4EF6\u5982\u679C\u9700\u8981\uFF0C\u53EF\u6DFB\u52A0\u4EFB\u4F55GUI\u7EC4\u4EF6\u3002",-1),y=n("li",null,"\u4FEE\u6539AndroidManifest.xml\u4EE5\u6DFB\u52A0\u5FC5\u8981\u7684\u6743\u9650\u3002",-1),w=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),M=n("p",null,"\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002\u8BE5\u6587\u4EF6\u53EF\u4EE5\u5305\u62EC\u6BCF\u4E2A\u57FA\u672C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u3002",-1),A=a(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>
  
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">Context</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>media<span class="token punctuation">.</span></span><span class="token class-name">AudioManager</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">View</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Button</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Toast</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public class MainActivity extends Activity { Button mode,ring,vibrate,silent; private AudioManager myAudioManager;</p><pre><code>  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      vibrate=(Button)findViewById(R.id.button3);
      ring=(Button)findViewById(R.id.button2);

      mode=(Button)findViewById(R.id.button);
      silent=(Button)findViewById(R.id.button4);
      myAudioManager = (AudioManager)getSystemService(Context.AUDIO_SERVICE);

      vibrate.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              myAudioManager.setRingerMode(AudioManager.RINGER_MODE_VIBRATE);
              Toast.makeText(MainActivity.this,&quot;\u73B0\u5728\u8FDB\u5165\u632F\u52A8\u6A21\u5F0F&quot;,
                      Toast.LENGTH_LONG).show();
          }
      });

      ring.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              myAudioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
              Toast.makeText(MainActivity.this,&quot;\u73B0\u5728\u8FDB\u5165\u54CD\u94C3\u6A21\u5F0F&quot;,
                      Toast.LENGTH_LONG).show();
          }
      });

      silent.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              myAudioManager.setRingerMode(AudioManager.RINGER_MODE_SILENT);
              Toast.makeText(MainActivity.this,&quot;\u73B0\u5728\u8FDB\u5165\u9759\u97F3\u6A21\u5F0F&quot;,
                      Toast.LENGTH_LONG).show();
          }
      });

      mode.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              int mod=myAudioManager.getRingerMode();
              if(mod==AudioManager.RINGER_MODE_VIBRATE){
                  Toast.makeText(MainActivity.this,&quot;\u73B0\u5728\u8FDB\u5165\u632F\u52A8\u6A21\u5F0F&quot;,
                          Toast.LENGTH_LONG).show();
              } else if(mod==AudioManager.RINGER_MODE_NORMAL){
                  Toast.makeText(MainActivity.this,&quot;\u73B0\u5728\u8FDB\u5165\u54CD\u94C3\u6A21\u5F0F&quot;,
                          Toast.LENGTH_LONG).show();
              } else {
                  Toast.makeText(MainActivity.this,&quot;\u73B0\u5728\u8FDB\u5165\u9759\u97F3\u6A21\u5F0F&quot;,
                          Toast.LENGTH_LONG).show();
              }
          }
      });
  }
</code></pre><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

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
        android:id=&quot;@+id/textView&quot;
        android:layout_width=&quot;403dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignParentTop=&quot;true&quot;
        android:layout_alignParentRight=&quot;true&quot;
        android:layout_marginTop=&quot;158dp&quot;
        android:layout_marginRight=&quot;130dp&quot;
        android:text=&quot;\u94C3\u58F0\u63A7\u5236\u793A\u4F8B&quot;
        android:textSize=&quot;30dp&quot; /&gt;

    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:text=&quot;\u8774\u8776\u6559\u7A0B&quot;
        android:id=&quot;@+id/textView2&quot;
        android:textColor=&quot;#ff3eff0f&quot;
        android:textSize=&quot;35dp&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

    &lt;ImageView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/imageView&quot;
        android:src=&quot;@drawable/logo&quot;
        android:background=&quot;#33223311&quot;
        android:layout_below=&quot;@+id/textView2&quot;
        android:layout_alignLeft=&quot;@+id/textView2&quot;
        android:layout_alignStart=&quot;@+id/textView2&quot;
        android:layout_alignRight=&quot;@+id/textView2&quot;
        android:layout_alignEnd=&quot;@+id/textView2&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button&quot;
        android:layout_width=&quot;79dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/imageView&quot;
        android:layout_alignParentStart=&quot;true&quot;
        android:layout_alignParentLeft=&quot;true&quot;
        android:layout_marginTop=&quot;59dp&quot;
        android:text=&quot;\u6A21\u5F0F&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button2&quot;
        android:layout_width=&quot;97dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignTop=&quot;@+id/button&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:text=&quot;\u54CD\u94C3&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button3&quot;
        android:layout_width=&quot;98dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignTop=&quot;@+id/button2&quot;
        android:layout_alignEnd=&quot;@+id/textView&quot;
        android:layout_alignRight=&quot;@+id/textView&quot;
        android:text=&quot;\u632F\u52A8&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button4&quot;
        android:layout_width=&quot;92dp&quot;
        android:layout_height=&quot;59dp&quot;
        android:layout_below=&quot;@+id/button2&quot;
        android:layout_alignStart=&quot;@+id/button2&quot;
        android:layout_alignLeft=&quot;@+id/button2&quot;
        android:layout_marginStart=&quot;-35dp&quot;
        android:layout_marginLeft=&quot;-35dp&quot;
        android:layout_marginTop=&quot;-40dp&quot;
        android:text=&quot;\u9759\u97F3&quot; /&gt;
&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/ringer1.png" alt=""></p><p>\u60A8\u53EF\u4EE5\u4F9D\u6B21\u70B9\u51FB\u5404\u4E2A\u6309\u94AE\u6765\u6D4B\u8BD5\u94C3\u58F0\u6548\u679C\u3002</p>`,9);function x(R,V){const i=s("ExternalLinkIcon");return o(),d(u,null,[c,n("ul",null,[n("li",null,[p,v,m,n("ol",null,[n("li",null,[g,n("a",b,[q,l(i)]),_]),k,h,y,w]),M])]),A],64)}var O=e(r,[["render",x],["__file","ring-control.html.vue"]]);export{O as default};
