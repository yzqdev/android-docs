import{_ as e,r as o,o as i,a as p,b as n,g as r,F as l,h as t,f as a}from"./app.a790e4a7.js";const u={},d=t(`<h1 id="\u5185\u90E8\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u5185\u90E8\u5B58\u50A8" aria-hidden="true">#</a> \u5185\u90E8\u5B58\u50A8</h1><p>Android\u4E3A\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u4E86\u591A\u79CD\u5B58\u50A8\u65B9\u5F0F\u6765\u5B58\u50A8\u5176\u6570\u636E\u3002\u8FD9\u4E9B\u5B58\u50A8\u4F4D\u7F6E\u662F\u5171\u4EAB\u9996\u9009\u9879\uFF0C\u5185\u90E8\u548C\u5916\u90E8\u5B58\u50A8\uFF0CSQLite\u5B58\u50A8\u4EE5\u53CA\u901A\u8FC7\u7F51\u7EDC\u8FDE\u63A5\u7684\u5B58\u50A8\u3002\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u7814\u7A76\u5185\u90E8\u5B58\u50A8\u3002\u5185\u90E8\u5B58\u50A8\u662F\u79C1\u6709\u6570\u636E\u5728\u8BBE\u5907\u5B58\u50A8\u5668\u4E0A\u7684\u5B58\u50A8\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u662F\u5E94\u7528\u7A0B\u5E8F\u79C1\u6709\u6587\u4EF6\uFF0C\u4EC5\u5F53\u60A8\u5220\u9664\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u624D\u80FD\u8BBF\u95EE\u5B83\u4EEC\u5E76\u5220\u9664\u5B83\u4EEC\u3002</p><h2 id="\u5199\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5199\u6587\u4EF6" aria-hidden="true">#</a> \u5199\u6587\u4EF6</h2><p>\u4E3A\u4E86\u4F7F\u7528\u5185\u90E8\u5B58\u50A8\u5728\u6587\u4EF6\u4E2D\u5199\u5165\u4E00\u4E9B\u6570\u636E\uFF0C\u8BF7\u4F7F\u7528\u6587\u4EF6\u540D\u548C\u6A21\u5F0F\u8C03\u7528openFileOutput()\u65B9\u6CD5\u3002\u8BE5\u6A21\u5F0F\u53EF\u4EE5\u662Fprivate\uFF0Cpublic\u7B49\uFF0C\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">FileOutputStream</span> fOut <span class="token operator">=</span> <span class="token function">openFileOutput</span><span class="token punctuation">(</span><span class="token string">&quot;file name here&quot;</span><span class="token punctuation">,</span>MODE_WORLD_READABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u65B9\u6CD5openFileOutput()\u8FD4\u56DEFileOutputStream\u7684\u5B9E\u4F8B\u3002\u56E0\u6B64\uFF0C\u60A8\u53EF\u4EE5\u5728FileInputStream\u5BF9\u8C61\u4E2D\u63A5\u6536\u5B83\u3002\u4E4B\u540E\uFF0C\u60A8\u53EF\u4EE5\u8C03\u7528write\u65B9\u6CD5\u5728\u6587\u4EF6\u4E0A\u5199\u5165\u6570\u636E\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;data&quot;</span><span class="token punctuation">;</span>
fOut<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fOut<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u590D\u5236</p><h2 id="\u8BFB\u53D6\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u53D6\u6587\u4EF6" aria-hidden="true">#</a> \u8BFB\u53D6\u6587\u4EF6</h2><p>\u4E3A\u4E86\u4ECE\u521A\u521A\u521B\u5EFA\u7684\u6587\u4EF6\u4E2D\u8BFB\u53D6\uFF0C\u8BF7\u4F7F\u7528\u6587\u4EF6\u540D\u8C03\u7528openFileInput()\u65B9\u6CD5\u3002\u5B83\u8FD4\u56DEFileInputStream\u7684\u5B9E\u4F8B\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">FileInputStream</span> fin <span class="token operator">=</span> <span class="token function">openFileInput</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u4E4B\u540E\uFF0C\u60A8\u53EF\u4EE5\u8C03\u7528read\u65B9\u6CD5\u4ECE\u6587\u4EF6\u4E2D\u4E00\u6B21\u8BFB\u53D6\u4E00\u4E2A\u5B57\u7B26\uFF0C\u7136\u540E\u8FDB\u884C\u6253\u5370\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> c<span class="token punctuation">;</span>
<span class="token class-name">String</span> temp<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>c <span class="token operator">=</span> fin<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   temp <span class="token operator">=</span> temp <span class="token operator">+</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//string temp contains all the data of the file.</span>
fin<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u590D\u5236</p><p>\u9664\u4E86write\u548Cclose\u65B9\u6CD5\u5916\uFF0CFileOutputStream\u7C7B\u8FD8\u63D0\u4F9B\u4E86\u5176\u4ED6\u65B9\u6CD5\u6765\u66F4\u597D\u5730\u5199\u5165\u548C\u8BFB\u53D6\u6587\u4EF6\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5728\u4E0B\u9762\u5217\u51FA-</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>FileOutputStream(File file, boolean append)</strong></td><td>\u6B64\u65B9\u6CD5\u6784\u9020\u4E00\u4E2A\u65B0\u7684FileOutputStream\u5199\u5165\u6587\u4EF6\u3002</td></tr><tr><td><strong>getChannel()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u53EA\u5199FileChannel\uFF0C\u4E0E\u8BE5\u6D41\u5171\u4EAB\u5176\u4F4D\u7F6E\u3002</td></tr><tr><td><strong>getFD()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u57FA\u7840\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002</td></tr><tr><td><strong>write(byte[] buffer, int byteOffset, int byteCount)</strong></td><td>\u6B64\u65B9\u6CD5\u4ECE\u5B57\u8282\u6570\u7EC4\u7F13\u51B2\u533A\u7684\u4F4D\u7F6E\u504F\u79FB\u5904\u5F00\u59CB\u5C06\u8BA1\u6570\u5B57\u8282\u5199\u5165\u6B64\u6D41\u3002</td></tr><tr><td><strong>available()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u4F30\u8BA1\u7684\u5B57\u8282\u6570\uFF0C\u53EF\u4EE5\u8BFB\u53D6\u6216\u8DF3\u8FC7\u8FD9\u4E9B\u5B57\u8282\u800C\u4E0D\u4F1A\u963B\u585E\u4EE5\u83B7\u5F97\u66F4\u591A\u8F93\u5165</td></tr><tr><td><strong>getChannel()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u53EA\u8BFBFileChannel\uFF0C\u4E0E\u8BE5\u6D41\u5171\u4EAB\u5176\u4F4D\u7F6E</td></tr><tr><td><strong>getFD()</strong></td><td>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u57FA\u7840\u6587\u4EF6\u63CF\u8FF0\u7B26</td></tr><tr><td><strong>read(byte[] buffer, int byteOffset, int byteCount)</strong></td><td>\u6B64\u65B9\u6CD5\u4ECE\u6B64\u6D41\u4E2D\u8BFB\u53D6\u6700\u5927\u957F\u5EA6\u7684\u5B57\u8282\uFF0C\u5E76\u5C06\u5176\u5B58\u50A8\u5728\u4ECEoffset\u5F00\u59CB\u7684\u5B57\u8282\u6570\u7EC4b\u4E2D</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u8FD9\u662F\u4E00\u4E2A\u793A\u4F8B\uFF0C\u6F14\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u5185\u90E8\u5B58\u50A8\u6765\u5B58\u50A8\u548C\u8BFB\u53D6\u6587\u4EF6\u3002\u5B83\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7684\u5B58\u50A8\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F7F\u60A8\u53EF\u4EE5\u4ECE\u5185\u90E8\u5B58\u50A8\u8BFB\u53D6\u548C\u5199\u5165\u3002\u8981\u8BD5\u9A8C\u8BE5\u793A\u4F8B\uFF0C\u60A8\u53EF\u4EE5\u5728\u5B9E\u9645\u8BBE\u5907\u6216\u4EFF\u771F\u5668\u4E0A\u8FD0\u884C\u5B83\u3002</p>`,20),c=a("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),b={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},m=a("Hello World\u793A\u4F8B"),q=a("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),g=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u6DFB\u52A0\u5FC5\u8981\u4EE3\u7801\u3002",-1),h=n("li",null,"\u4FEE\u6539res/layout/activity_main.xml\u6587\u4EF6\u5982\u679C\u9700\u8981\uFF0C\u53EF\u6DFB\u52A0\u4EFB\u4F55GUI\u7EC4\u4EF6\u3002",-1),k=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),_=t(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002\u8BE5\u6587\u4EF6\u53EF\u4EE5\u5305\u62EC\u6BCF\u4E2A\u57FA\u672C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>import android.app.Activity; import android.os.Bundle; import android.view.View; import android.widget.Button; import android.widget.EditText; import android.widget.TextView; import android.widget.Toast;</p><p>import java.io.FileInputStream; import java.io.FileOutputStream;</p><p>public class MainActivity extends Activity { Button b1,b2; TextView tv; EditText ed1;</p><pre><code>  String data;
  private String file = &quot;mydata&quot;;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      b1=(Button)findViewById(R.id.button);
      b2=(Button)findViewById(R.id.button2);

      ed1=(EditText)findViewById(R.id.editText);
      tv=(TextView)findViewById(R.id.textView2);
      b1.setOnClickListener(new View.OnClickListener() {

          @Override
          public void onClick(View v) {
              data=ed1.getText().toString();
              try {
                  FileOutputStream fOut = openFileOutput(file,MODE_PRIVATE);
                  fOut.write(data.getBytes());
                  fOut.close();
                  Toast.makeText(getBaseContext(),&quot;\u6587\u4EF6\u4FDD\u5B58&quot;,Toast.LENGTH_SHORT).show();
              }
              catch (Exception e) {
                  // TODO Auto-generated catch block
                  e.printStackTrace();
              }
          }
      });

      b2.setOnClickListener(new View.OnClickListener() {

          @Override
          public void onClick(View v) {
              try {
                  FileInputStream fin = openFileInput(file);
                  int c;
                  String temp=&quot;&quot;;
                  while( (c = fin.read()) != -1){
                      temp = temp + (char) c;
                  }
                  tv.setText(temp);
                  Toast.makeText(getBaseContext(),&quot;\u6587\u4EF6\u8BFB\u53D6&quot;,Toast.LENGTH_SHORT).show();
              }
              catch(Exception e){
              }
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

    &lt;TextView android:text=&quot;\u5185\u90E8\u5B58\u50A8\u793A\u4F8B&quot;
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/textview&quot;
        android:textSize=&quot;35dp&quot;
        android:layout_alignParentTop=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/textView&quot;
        android:layout_width=&quot;273dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/textview&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;6dp&quot;
        android:text=&quot;\u8774\u8776\u6559\u7A0B&quot;
        android:textColor=&quot;#ff7aff24&quot;
        android:textSize=&quot;35dp&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button&quot;
        android:layout_width=&quot;60dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignStart=&quot;@+id/textView&quot;
        android:layout_alignLeft=&quot;@+id/textView&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_marginStart=&quot;-67dp&quot;
        android:layout_marginLeft=&quot;-67dp&quot;
        android:layout_marginBottom=&quot;4dp&quot;
        android:text=&quot;\u4FDD\u5B58&quot; /&gt;

    &lt;EditText
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/editText&quot;
        android:hint=&quot;\u8F93\u5165\u6587\u672C&quot;
        android:focusable=&quot;true&quot;
        android:textColorHighlight=&quot;#ff7eff15&quot;
        android:textColorHint=&quot;#ffff25e6&quot;
        android:layout_below=&quot;@+id/imageView&quot;
        android:layout_alignRight=&quot;@+id/textView&quot;
        android:layout_alignEnd=&quot;@+id/textView&quot;
        android:layout_marginTop=&quot;42dp&quot;
        android:layout_alignLeft=&quot;@+id/imageView&quot;
        android:layout_alignStart=&quot;@+id/imageView&quot; /&gt;

    &lt;ImageView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/imageView&quot;
        android:src=&quot;@drawable/logo&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:background=&quot;#22552200&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button2&quot;
        android:layout_width=&quot;51dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignTop=&quot;@+id/button&quot;
        android:layout_alignEnd=&quot;@+id/editText&quot;
        android:layout_alignRight=&quot;@+id/editText&quot;
        android:layout_marginTop=&quot;3dp&quot;
        android:text=&quot;\u52A0\u8F7D&quot; /&gt;

    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:text=&quot;\u8BFB\u53D6&quot;
        android:id=&quot;@+id/textView2&quot;
        android:layout_below=&quot;@+id/editText&quot;
        android:layout_toLeftOf=&quot;@+id/button2&quot;
        android:layout_toStartOf=&quot;@+id/button2&quot;
        android:textColor=&quot;#ff5bff1f&quot;
        android:textSize=&quot;25dp&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/internalstorage1.png" alt=""></p><p>\u8F93\u5165\u6570\u636E\uFF0C\u70B9 \u4FDD\u5B58\uFF0C\u7136\u540E\u52A0\u8F7D-</p><p><img src="https://www.jc2182.com/images/android/internalstorage2.png" alt=""></p><p>\u51FA\u73B0\u5982\u4E0B\u89C6\u56FE-</p><p><img src="https://www.jc2182.com/images/android/internalstorage3.png" alt=""></p>`,15);function w(f,y){const s=o("ExternalLinkIcon");return i(),p(l,null,[d,n("ol",null,[n("li",null,[c,n("a",b,[m,r(s)]),q]),g,h,k]),_],64)}var x=e(u,[["render",w]]);export{x as default};
