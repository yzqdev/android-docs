import{_ as e,r as o,o as p,a as i,b as n,g as r,F as l,h as s,f as a}from"./app.a790e4a7.js";const u={},c=s(`<h1 id="\u5A92\u4F53\u64AD\u653E\u5668" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u64AD\u653E\u5668" aria-hidden="true">#</a> \u5A92\u4F53\u64AD\u653E\u5668</h1><p>Android\u63D0\u4F9B\u4E86\u8BB8\u591A\u65B9\u6CD5\u6765\u63A7\u5236\u97F3\u9891/\u89C6\u9891\u6587\u4EF6\u548C\u6D41\u7684\u64AD\u653E\u3002\u4E00\u79CD\u65B9\u6CD5\u662F\u901A\u8FC7\u79F0\u4E3A<strong>MediaPlayer</strong>\u7684\u7C7B\u3002Android\u63D0\u4F9B\u4E86MediaPlayer\u7C7B\u6765\u8BBF\u95EE\u5185\u7F6E\u7684\u5A92\u4F53\u64AD\u653E\u5668\u670D\u52A1\uFF0C\u4F8B\u5982\u64AD\u653E\u97F3\u9891\uFF0C\u89C6\u9891\u7B49\u3002\u4E3A\u4E86\u4F7F\u7528<strong>MediaPlayer</strong>\uFF0C\u6211\u4EEC\u5FC5\u987B\u8C03\u7528\u6B64\u7C7B\u7684\u9759\u6001\u65B9\u6CD5<strong>create()</strong>\u3002\u6B64\u65B9\u6CD5\u8FD4\u56DE<strong>MediaPlayer</strong>\u7C7B\u7684\u5B9E\u4F8B\u3002\u5B83\u7684\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">MediaPlayer</span> mediaPlayer <span class="token operator">=</span> <span class="token class-name">MediaPlayer</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>raw<span class="token punctuation">.</span>media<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u60A8\u8981\u64AD\u653E\u7684\u5A92\u4F53\u8D44\u6E90\u3002\u60A8\u5FC5\u987B\u5728\u9879\u76EE\u4E0B\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Araw\u7684\u65B0\u6587\u4EF6\u5939\uFF0C\u5E76\u5C06\u5A92\u4F53\u8D44\u6E90\u6587\u4EF6\u653E\u5165\u5176\u4E2D\u3002\u521B\u5EFAMediaplayer\u5BF9\u8C61\u540E\uFF0C\u60A8\u53EF\u4EE5\u8C03\u7528\u4E00\u4E9B\u65B9\u6CD5\u6765\u542F\u52A8\u6216\u505C\u6B62\u64AD\u653E\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5728\u4E0B\u9762\u5217\u51FA\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>mediaPlayer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mediaPlayer<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u590D\u5236</p><p>\u5728\u8C03\u7528start()\u65B9\u6CD5\u65F6\uFF0C\u97F3\u4E50\u5C06\u4ECE\u5934\u5F00\u59CB\u64AD\u653E\u3002\u5982\u679C\u5728pause()\u65B9\u6CD5\u4E4B\u540E\u518D\u6B21\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u5219\u97F3\u4E50\u5C06\u4ECE\u5DE6\u7AEF\u5F00\u59CB\u64AD\u653E\uFF0C\u800C\u4E0D\u662F\u4ECE\u5934\u5F00\u59CB\u3002\u4E3A\u4E86\u4ECE\u5934\u5F00\u59CB\u64AD\u653E\u97F3\u4E50\uFF0C\u60A8\u5FC5\u987B\u8C03\u7528reset()\u65B9\u6CD5\u3002\u5176\u8BED\u6CD5\u5982\u4E0B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>mediaPlayer<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u9664\u4E86start\u548Cpause\u65B9\u6CD5\u5916\uFF0C\u6B64\u7C7B\u8FD8\u63D0\u4F9B\u4E86\u5176\u4ED6\u65B9\u6CD5\u6765\u66F4\u597D\u5730\u5904\u7406\u97F3\u9891/\u89C6\u9891\u6587\u4EF6\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5728\u4E0B\u9762\u5217\u51FA-</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>isPlaying()</strong></td><td>\u6B64\u65B9\u6CD5\u4EC5\u8FD4\u56DEtrue / false\uFF0C\u6307\u793A\u6B4C\u66F2\u662F\u5426\u6B63\u5728\u64AD\u653E</td></tr><tr><td><strong>seekTo(position)</strong></td><td>\u6B64\u65B9\u6CD5\u9700\u8981\u4E00\u4E2A\u6574\u6570\uFF0C\u5E76\u5C06\u6B4C\u66F2\u79FB\u52A8\u5230\u8BE5\u7279\u5B9A\u4F4D\u7F6E\uFF08\u6BEB\u79D2\uFF09</td></tr><tr><td><strong>getCurrentPosition()</strong></td><td>\u6B64\u65B9\u6CD5\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\u8FD4\u56DE\u6B4C\u66F2\u7684\u5F53\u524D\u4F4D\u7F6E</td></tr><tr><td><strong>getDuration()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u6B4C\u66F2\u7684\u603B\u6301\u7EED\u65F6\u95F4\uFF08\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF09</td></tr><tr><td><strong>reset()</strong></td><td>\u6B64\u65B9\u6CD5\u91CD\u7F6E\u5A92\u4F53\u64AD\u653E\u5668</td></tr><tr><td><strong>release()</strong></td><td>\u6B64\u65B9\u6CD5\u91CA\u653E\u4E0EMediaPlayer\u5BF9\u8C61\u5173\u8054\u7684\u6240\u6709\u8D44\u6E90</td></tr><tr><td><strong>setVolume(float leftVolume, float rightVolume)</strong></td><td>\u6B64\u65B9\u6CD5\u8BBE\u7F6E\u6B64\u64AD\u653E\u5668\u7684\u8C03\u4F4E\u97F3\u91CF</td></tr><tr><td><strong>setDataSource(FileDescriptor fd)</strong></td><td>\u6B64\u65B9\u6CD5\u8BBE\u7F6E\u97F3\u9891/\u89C6\u9891\u6587\u4EF6\u7684\u6570\u636E\u6E90</td></tr><tr><td><strong>selectTrack(int index)</strong></td><td>\u6B64\u65B9\u6CD5\u91C7\u7528\u6574\u6570\uFF0C\u7136\u540E\u4ECE\u8BE5\u7279\u5B9A\u7D22\u5F15\u7684\u5217\u8868\u4E2D\u9009\u62E9\u8F68\u9053</td></tr><tr><td><strong>getTrackInfo()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u8F68\u9053\u4FE1\u606F\u6570</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u8FD9\u662F\u6F14\u793A\u767B\u5F55\u5E94\u7528\u7A0B\u5E8F\u7684\u793A\u4F8B\u3002\u5B83\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4EC5\u7ED9\u60A8\u4E09\u79CD\u5C1D\u8BD5\u767B\u5F55\u5E94\u7528\u7A0B\u5E8F\u7684\u673A\u4F1A\u3002 \u8981\u8BD5\u9A8C\u8BE5\u793A\u4F8B\uFF0C\u60A8\u53EF\u4EE5\u5728\u5B9E\u9645\u8BBE\u5907\u6216\u4EFF\u771F\u5668\u4E0A\u8FD0\u884C\u5B83\u3002</p>`,14),d=a("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),b={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},m=a("Hello World\u793A\u4F8B"),q=a("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),k=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u4EE5\u6DFB\u52A0MediaPlayer\u4EE3\u7801\u3002",-1),g=n("li",null,"\u4FEE\u6539res/layout/activity_main\u4EE5\u6DFB\u52A0\u76F8\u5E94\u7684XML\u7EC4\u4EF6",-1),y=n("li",null,"\u5728MediaPlayer\u4E0B\u521B\u5EFA\u4E00\u4E2A\u540D\u79F0\u4E3Araw\u7684\u65B0\u6587\u4EF6\u5939\uFF0C\u5E76\u5728\u5176\u4E2D\u653E\u7F6E\u4E00\u4E2A\u540D\u79F0\u4E3A.mp3\u7684mp3\u97F3\u4E50\u6587\u4EF6\u3002",-1),_=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),w=s(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>media<span class="token punctuation">.</span></span><span class="token class-name">MediaPlayer</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Handler</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">View</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Button</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">ImageView</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">SeekBar</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">TextView</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Toast</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>public class MainActivity extends Activity {</p><pre><code>  private Button b1,b2,b3,b4;
  private ImageView iv;
  private MediaPlayer mediaPlayer;

  private double startTime = 0;
  private double finalTime = 0;

  private Handler myHandler = new Handler();;
  private int forwardTime = 5000;
  private int backwardTime = 5000;
  private SeekBar seekbar;
  private TextView tx1,tx2,tx3;

  public static int oneTimeOnly = 0;
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      b1 = (Button) findViewById(R.id.button);
      b2 = (Button) findViewById(R.id.button2);
      b3 = (Button)findViewById(R.id.button3);
      b4 = (Button)findViewById(R.id.button4);
      iv = (ImageView)findViewById(R.id.imageView);

      tx1 = (TextView)findViewById(R.id.textView2);
      tx2 = (TextView)findViewById(R.id.textView3);
      tx3 = (TextView)findViewById(R.id.textView4);
      tx3.setText(&quot;demo.mp3&quot;);

      mediaPlayer = MediaPlayer.create(this, R.raw.demo);
      seekbar = (SeekBar)findViewById(R.id.seekBar);
      seekbar.setClickable(false);
      b2.setEnabled(false);

      b3.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              Toast.makeText(getApplicationContext(), &quot;\u64AD\u653E\u97F3\u9891&quot;,Toast.LENGTH_SHORT).show();
                      mediaPlayer.start();

              finalTime = mediaPlayer.getDuration();
              startTime = mediaPlayer.getCurrentPosition();

              if (oneTimeOnly == 0) {
                  seekbar.setMax((int) finalTime);
                  oneTimeOnly = 1;
              }

              tx2.setText(String.format(&quot;%d min, %d sec&quot;,
                      TimeUnit.MILLISECONDS.toMinutes((long) finalTime),
                      TimeUnit.MILLISECONDS.toSeconds((long) finalTime) - TimeUnit.MINUTES.toSeconds(TimeUnit.MILLISECONDS.toMinutes((long) finalTime)))
              );

              tx1.setText(String.format(&quot;%d min, %d sec&quot;,
                      TimeUnit.MILLISECONDS.toMinutes((long) startTime),
                      TimeUnit.MILLISECONDS.toSeconds((long) startTime) - TimeUnit.MINUTES.toSeconds(TimeUnit.MILLISECONDS.toMinutes((long)
                                      startTime)))
              );

              seekbar.setProgress((int)startTime);
              myHandler.postDelayed(UpdateSongTime,100);
              b2.setEnabled(true);
              b3.setEnabled(false);
          }
      });

      b2.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              Toast.makeText(getApplicationContext(), &quot;\u6682\u505C\u97F3\u9891&quot;,Toast.LENGTH_SHORT).show();
              mediaPlayer.pause();
              b2.setEnabled(false);
              b3.setEnabled(true);
          }
      });

      b1.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              int temp = (int)startTime;

              if((temp+forwardTime)&lt;=finalTime){
                  startTime = startTime + forwardTime;
                  mediaPlayer.seekTo((int) startTime);
                  Toast.makeText(getApplicationContext(),&quot;\u60A8\u5411\u524D\u8DF3\u4E865\u79D2&quot;,Toast.LENGTH_SHORT).show();
              }else{
                  Toast.makeText(getApplicationContext(),&quot;\u65E0\u6CD5\u5411\u524D\u8DF35\u79D2&quot;,Toast.LENGTH_SHORT).show();
              }
          }
      });

      b4.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              int temp = (int)startTime;

              if((temp-backwardTime)&gt;0){
                  startTime = startTime - backwardTime;
                  mediaPlayer.seekTo((int) startTime);
                  Toast.makeText(getApplicationContext(),&quot;\u60A8\u5411\u540E\u8DF3\u4E865\u79D2&quot;,Toast.LENGTH_SHORT).show();
              }else{
                  Toast.makeText(getApplicationContext(),&quot;\u65E0\u6CD5\u5411\u540E\u8DF35\u79D2&quot;,Toast.LENGTH_SHORT).show();
              }
          }
      });
  }

  private Runnable UpdateSongTime = new Runnable() {
      public void run() {
          startTime = mediaPlayer.getCurrentPosition();
          tx1.setText(String.format(&quot;%d min, %d sec&quot;,
                  TimeUnit.MILLISECONDS.toMinutes((long) startTime),
                  TimeUnit.MILLISECONDS.toSeconds((long) startTime) - TimeUnit.MINUTES.toSeconds(TimeUnit.MILLISECONDS. toMinutes((long) startTime)))
          );
          seekbar.setProgress((int)startTime);
          myHandler.postDelayed(this, 100);
      }
  };
</code></pre><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-

\`\`\`xml

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;RelativeLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot; android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot;&gt;

    &lt;TextView
        android:id=&quot;@+id/textview&quot;
        android:layout_width=&quot;239dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignParentTop=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;13dp&quot;
        android:text=&quot;\u97F3\u9891\u64AD\u653E&quot;
        android:textSize=&quot;35dp&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/textView&quot;
        android:layout_width=&quot;261dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/textview&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;6dp&quot;
        android:text=&quot;\u8774\u8776\u6559\u7A0B&quot;
        android:textColor=&quot;#ff7aff24&quot;
        android:textSize=&quot;35dp&quot; /&gt;

    &lt;ImageView
        android:id=&quot;@+id/imageView&quot;
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;129dp&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;20dp&quot;
        android:background=&quot;#22112200&quot;
        android:src=&quot;@drawable/logo&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button&quot;
        android:layout_width=&quot;51dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignParentStart=&quot;true&quot;
        android:layout_alignParentLeft=&quot;true&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:text=&quot;@string/forward&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button2&quot;
        android:layout_width=&quot;59dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignLeft=&quot;@+id/imageView&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_marginLeft=&quot;39dp&quot;
        android:layout_marginBottom=&quot;4dp&quot;
        android:text=&quot;@string/pause&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button3&quot;
        android:layout_width=&quot;117dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignTop=&quot;@+id/button2&quot;
        android:layout_marginStart=&quot;73dp&quot;
        android:layout_marginLeft=&quot;73dp&quot;
        android:layout_marginTop=&quot;3dp&quot;
        android:layout_toEndOf=&quot;@+id/button2&quot;
        android:layout_toRightOf=&quot;@+id/button2&quot;
        android:text=&quot;@string/back&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button4&quot;
        android:layout_width=&quot;145dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignTop=&quot;@+id/button3&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_marginStart=&quot;76dp&quot;
        android:layout_marginLeft=&quot;76dp&quot;
        android:layout_marginTop=&quot;3dp&quot;
        android:layout_marginBottom=&quot;0dp&quot;
        android:layout_toEndOf=&quot;@+id/button3&quot;
        android:layout_toRightOf=&quot;@+id/button3&quot;
        android:text=&quot;@string/rewind&quot; /&gt;

    &lt;SeekBar
        android:id=&quot;@+id/seekBar&quot;
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_above=&quot;@+id/button&quot;
        android:layout_alignStart=&quot;@+id/textview&quot;
        android:layout_alignLeft=&quot;@+id/textview&quot;
        android:layout_alignEnd=&quot;@+id/textview&quot;
        android:layout_alignRight=&quot;@+id/textview&quot;
        android:layout_marginStart=&quot;12dp&quot;
        android:layout_marginLeft=&quot;12dp&quot;
        android:layout_marginEnd=&quot;-6dp&quot;
        android:layout_marginRight=&quot;-6dp&quot;
        android:layout_marginBottom=&quot;120dp&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/textView2&quot;
        android:layout_width=&quot;105dp&quot;
        android:layout_height=&quot;39dp&quot;
        android:layout_above=&quot;@+id/seekBar&quot;
        android:layout_marginEnd=&quot;-30dp&quot;
        android:layout_marginRight=&quot;-30dp&quot;
        android:layout_marginBottom=&quot;8dp&quot;
        android:layout_toStartOf=&quot;@+id/textView&quot;
        android:layout_toLeftOf=&quot;@+id/textView&quot;
        android:text=&quot;Small Text&quot;
        android:textAppearance=&quot;?android:attr/textAppearanceSmall&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/textView3&quot;
        android:layout_width=&quot;57dp&quot;
        android:layout_height=&quot;35dp&quot;
        android:layout_above=&quot;@+id/seekBar&quot;
        android:layout_alignEnd=&quot;@+id/button4&quot;
        android:layout_alignRight=&quot;@+id/button4&quot;
        android:layout_marginEnd=&quot;17dp&quot;
        android:layout_marginRight=&quot;17dp&quot;
        android:layout_marginBottom=&quot;120dp&quot;
        android:text=&quot;Small Text&quot;
        android:textAppearance=&quot;?android:attr/textAppearanceSmall&quot; /&gt;

    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:textAppearance=&quot;?android:attr/textAppearanceMedium&quot;
        android:text=&quot;Medium Text&quot;
        android:id=&quot;@+id/textView4&quot;
        android:layout_alignBaseline=&quot;@+id/textView2&quot;
        android:layout_alignBottom=&quot;@+id/textView2&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br></div></div><p>\u590D\u5236</p><p>\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>back<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token cdata">&lt;![CDATA[&lt;]]&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rewind<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token cdata">&lt;![CDATA[&lt;&lt;]]&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>forward<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token cdata">&lt;![CDATA[&gt;&gt;]]&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pause<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>||<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/mediaplayer1.png" alt=""></p><p>\u5C1D\u8BD5\u53BB\u70B9\u51FB\u6309\u94AE\u67E5\u770B\u6548\u679C</p>`,13);function T(x,h){const t=o("ExternalLinkIcon");return p(),i(l,null,[c,n("ol",null,[n("li",null,[d,n("a",b,[m,r(t)]),q]),k,g,y,_]),w],64)}var f=e(u,[["render",T]]);export{f as default};
