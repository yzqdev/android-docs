import{_ as t,r as p,o as r,a as i,b as n,g as l,F as o,h as s,f as a}from"./app.a790e4a7.js";const u={},b=s(`<h1 id="\u56FE\u50CF\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u56FE\u50CF\u6548\u679C" aria-hidden="true">#</a> \u56FE\u50CF\u6548\u679C</h1><p>Android\u5141\u8BB8\u60A8\u901A\u8FC7\u5728\u56FE\u50CF\u4E0A\u6DFB\u52A0\u4E0D\u540C\u79CD\u7C7B\u7684\u6548\u679C\u6765\u64CD\u7EB5\u56FE\u50CF\u3002\u60A8\u53EF\u4EE5\u8F7B\u677E\u5730\u5E94\u7528\u56FE\u50CF\u5904\u7406\u6280\u672F\u5728\u56FE\u50CF\u4E0A\u6DFB\u52A0\u67D0\u4E9B\u79CD\u7C7B\u7684\u6548\u679C\u3002\u6548\u679C\u53EF\u80FD\u662F\u4EAE\u5EA6\uFF0C\u6697\u5EA6\uFF0C\u7070\u5EA6\u8F6C\u6362\u7B49\uFF0CAndroid\u63D0\u4F9B\u4E86<strong>Bitmap</strong>\u7C7B\u6765\u5904\u7406\u56FE\u50CF\u3002\u53EF\u4EE5\u5728android.graphics.bitmap\u4E0B\u627E\u5230\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u591A\u79CD\u65B9\u5F0F\u5B9E\u4F8B\u5316\u4F4D\u56FE\u3002\u6211\u4EEC\u6B63\u5728\u4ECEimageView\u521B\u5EFA\u56FE\u50CF\u7684\u4F4D\u56FE\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">Bitmap</span> bmp<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name">ImageView</span> img<span class="token punctuation">;</span>
img <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ImageView</span><span class="token punctuation">)</span><span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>imageView1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BitmapDrawable</span>  abmp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BitmapDrawable</span><span class="token punctuation">)</span>img<span class="token punctuation">.</span><span class="token function">getDrawable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u590D\u5236</p><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7\u8C03\u7528<strong>BitmapDrawable</strong>\u7C7B\u7684**getBitmap()**\u51FD\u6570\u6765\u521B\u5EFA\u4F4D\u56FE\u3002\u5176\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>bmp <span class="token operator">=</span> abmp<span class="token punctuation">.</span><span class="token function">getBitmap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u56FE\u50CF\u4E0D\u8FC7\u662F\u4E8C\u7EF4\u77E9\u9635\u3002\u7528\u540C\u6837\u7684\u65B9\u5F0F\u5904\u7406\u4F4D\u56FE\u3002\u56FE\u50CF\u7531\u50CF\u7D20\u7EC4\u6210\u3002\u56E0\u6B64\uFF0C\u60A8\u5C06\u4ECE\u8BE5\u4F4D\u56FE\u4E2D\u83B7\u53D6\u50CF\u7D20\u5E76\u5BF9\u5176\u8FDB\u884C\u5904\u7406\u3002\u5B83\u7684\u8BED\u6CD5\u5982\u4E0B-</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> bmp<span class="token punctuation">.</span><span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> bmp<span class="token punctuation">.</span><span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">int</span> p <span class="token operator">=</span> bmp<span class="token punctuation">.</span><span class="token function">getPixel</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u590D\u5236</p><p>getWidth()\u548CgetHeight()\u51FD\u6570\u8FD4\u56DE\u77E9\u9635\u7684\u9AD8\u5EA6\u548C\u5BBD\u5EA6\u3002getPixel()\u65B9\u6CD5\u8FD4\u56DE\u6307\u5B9A\u7D22\u5F15\u5904\u7684\u50CF\u7D20\u3002\u4E00\u65E6\u83B7\u5F97\u50CF\u7D20\uFF0C\u5C31\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8F7B\u677E\u5730\u5BF9\u5176\u8FDB\u884C\u64CD\u4F5C\u3002\u9664\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u4E4B\u5916\uFF0C\u8FD8\u6709\u5176\u4ED6\u65B9\u6CD5\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u5904\u7406\u56FE\u50CF\u3002</p><p>/tr&gt;</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>copy(Bitmap.Config config, boolean isMutable)</strong></td><td>\u6B64\u65B9\u6CD5\u5C06\u6B64\u4F4D\u56FE\u7684\u50CF\u7D20\u590D\u5236\u5230\u65B0\u7684\u4F4D\u56FE\u4E2D</td></tr><tr><td><strong>createBitmap(DisplayMetrics display, int width, int height, Bitmap.Config config)</strong></td><td>\u8FD4\u56DE\u5177\u6709\u6307\u5B9A\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u7684\u53EF\u53D8\u4F4D\u56FE</td></tr><tr><td><strong>createBitmap(int width, int height, Bitmap.Config config)</strong></td><td>\u8FD4\u56DE\u5177\u6709\u6307\u5B9A\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u7684\u53EF\u53D8\u4F4D\u56FE</td></tr><tr><td><strong>createBitmap(Bitmap src)</strong></td><td>\u4ECE\u6E90\u4F4D\u56FE\u8FD4\u56DE\u4E00\u4E2A\u4E0D\u53D8\u7684\u4F4D\u56FE</td></tr><tr><td><strong>extractAlpha()</strong></td><td>\u8FD4\u56DE\u6355\u83B7\u539F\u59CB\u56FE\u50CF\u7684Alpha\u503C\u7684\u65B0\u4F4D\u56FE</td></tr><tr><td><strong>getConfig()</strong></td><td>\u6B64\u65B9\u6CD5\u5C06\u8FD4\u56DE\u8BE5\u914D\u7F6E\uFF0C\u5426\u5219\u8FD4\u56DEnull</td></tr><tr><td><strong>getDensity()</strong></td><td>\u8FD4\u56DE\u6B64\u4F4D\u56FE\u7684\u5BC6\u5EA6</td></tr><tr><td><strong>getRowBytes()</strong></td><td>\u8FD4\u56DE\u4F4D\u56FE\u50CF\u7D20\u4E2D\u884C\u4E4B\u95F4\u7684\u5B57\u8282\u6570</td></tr><tr><td><strong>setPixel(int x, int y, int color)</strong></td><td>W\u5047\u8BBE\u6307\u5B9A\u7684\u989C\u8272\u5728x\uFF0Cy\u5750\u6807\u5904\u662F\u53EF\u53D8\u7684\uFF0C\u5219\u5C06\u5176\u653E\u5165\u4F4D\u56FE</td></tr><tr><td><strong>setDensity(int density)</strong></td><td>\u6B64\u65B9\u6CD5\u6307\u5B9A\u6B64\u4F4D\u56FE\u7684\u5BC6\u5EA6</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u4E0B\u9762\u7684\u793A\u4F8B\u6F14\u793A\u4E86\u4F4D\u56FE\u4E0A\u7684\u67D0\u4E9B\u56FE\u50CF\u6548\u679C\u3002\u5B83\u521B\u5EFA\u4E86\u4E00\u4E2A\u57FA\u672C\u5E94\u7528\u7A0B\u5E8F\uFF0C\u53EF\u8BA9\u60A8\u5C06\u56FE\u7247\u8F6C\u6362\u4E3A\u7070\u5EA6\u56FE\u7B49\u7B49\u3002\u8981\u8BD5\u9A8C\u6B64\u793A\u4F8B\uFF0C\u60A8\u9700\u8981\u5728\u5B9E\u9645\u8BBE\u5907\u4E0A\u8FD0\u884C\u5B83\u3002</p>`,15),c=a("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),d={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},m=a("Hello World\u793A\u4F8B"),g=a("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),q=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u6DFB\u52A0\u5FC5\u8981\u4EE3\u7801\u3002",-1),h=n("li",null,"\u4FEE\u6539res/layout/activity_main.xml\u6587\u4EF6\u5982\u679C\u9700\u8981\uFF0C\u53EF\u6DFB\u52A0\u4EFB\u4F55GUI\u7EC4\u4EF6\u3002",-1),_=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),y=s(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002\u8BE5\u6587\u4EF6\u53EF\u4EE5\u5305\u62EC\u6BCF\u4E2A\u57FA\u672C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>import android.app.Activity; import android.graphics.Bitmap; import android.graphics.Color; import android.graphics.drawable.BitmapDrawable; import android.os.Bundle; import android.view.View; import android.widget.Button; import android.widget.ImageView;</p><p>public class MainActivity extends Activity { Button b1, b2, b3; ImageView im;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  private Bitmap bmp;
  private Bitmap operation;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      b1 = (Button) findViewById(R.id.button);
      b2 = (Button) findViewById(R.id.button2);
      b3 = (Button) findViewById(R.id.button3);
      im = (ImageView) findViewById(R.id.imageView);

      BitmapDrawable abmp = (BitmapDrawable) im.getDrawable();
      bmp = abmp.getBitmap();
  }

  public void gray(View view) {
      operation = Bitmap.createBitmap(bmp.getWidth(),bmp.getHeight(), bmp.getConfig());
      double red = 0.33;
      double green = 0.59;
      double blue = 0.11;

      for (int i = 0; i &lt; bmp.getWidth(); i++) {
          for (int j = 0; j &lt; bmp.getHeight(); j++) {
              int p = bmp.getPixel(i, j);
              int r = Color.red(p);
              int g = Color.green(p);
              int b = Color.blue(p);

              r = (int) red * r;
              g = (int) green * g;
              b = (int) blue * b;
              operation.setPixel(i, j, Color.argb(Color.alpha(p), r, g, b));
          }
      }
      im.setImageBitmap(operation);
  }

  public void bright(View view){
      operation= Bitmap.createBitmap(bmp.getWidth(), bmp.getHeight(),bmp.getConfig());

      for(int i=0; i&lt; bmp.getWidth(); i++){
          for(int j=0; j&lt; bmp.getHeight(); j++){
              int p = bmp.getPixel(i, j);
              int r = Color.red(p);
              int g = Color.green(p);
              int b = Color.blue(p);
              int alpha = Color.alpha(p);

              r = 100  +  r;
              g = 100  + g;
              b = 100  + b;
              alpha = 100 + alpha;
              operation.setPixel(i, j, Color.argb(alpha, r, g, b));
          }
      }
      im.setImageBitmap(operation);
  }

  public void dark(View view){
      operation= Bitmap.createBitmap(bmp.getWidth(),bmp.getHeight(),bmp.getConfig());

      for(int i=0; i &lt; bmp.getWidth(); i++){
          for(int j=0; j &lt; bmp.getHeight(); j++){
              int p = bmp.getPixel(i, j);
              int r = Color.red(p);
              int g = Color.green(p);
              int b = Color.blue(p);
              int alpha = Color.alpha(p);

              r =  r - 50;
              g =  g - 50;
              b =  b - 50;
              alpha = alpha -50;
              operation.setPixel(i, j, Color.argb(Color.alpha(p), r, g, b));
          }
      }
      im.setImageBitmap(operation);
  }

  public void gama(View view) {
      operation = Bitmap.createBitmap(bmp.getWidth(),bmp.getHeight(),bmp.getConfig());

      for(int i=0; i &lt; bmp.getWidth(); i++){
          for(int j=0; j &lt; bmp.getHeight(); j++){
              int p = bmp.getPixel(i, j);
              int r = Color.red(p);
              int g = Color.green(p);
              int b = Color.blue(p);
              int alpha = Color.alpha(p);

              r =  r + 150;
              g =  0;
              b =  0;
              alpha = 0;
              operation.setPixel(i, j, Color.argb(Color.alpha(p), r, g, b));
          }
      }
      im.setImageBitmap(operation);
  }

  public void green(View view){
      operation = Bitmap.createBitmap(bmp.getWidth(),bmp.getHeight(), bmp.getConfig());

      for(int i=0; i &lt; bmp.getWidth(); i++){
          for(int j=0; j &lt; bmp.getHeight(); j++){
              int p = bmp.getPixel(i, j);
              int r = Color.red(p);
              int g = Color.green(p);
              int b = Color.blue(p);
              int alpha = Color.alpha(p);

              r =  0;
              g =  g+150;
              b =  0;
              alpha = 0;
              operation.setPixel(i, j, Color.argb(Color.alpha(p), r, g, b));
          }
      }
      im.setImageBitmap(operation);
  }

  public void blue(View view){
      operation = Bitmap.createBitmap(bmp.getWidth(),bmp.getHeight(), bmp.getConfig());

      for(int i=0; i &lt; bmp.getWidth(); i++){
          for(int j=0; j &lt; bmp.getHeight(); j++){
              int p = bmp.getPixel(i, j);
              int r = Color.red(p);
              int g = Color.green(p);
              int b = Color.blue(p);
              int alpha = Color.alpha(p);

              r =  0;
              g =  0;
              b =  b+150;
              alpha = 0;
              operation.setPixel(i, j, Color.argb(Color.alpha(p), r, g, b));
          }
      }
      im.setImageBitmap(operation);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br></div></div><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-

\`\`\`xml

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;RelativeLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;com.jc2182.demo.MainActivity&quot;&gt;

    &lt;TextView
        android:id=&quot;@+id/textView&quot;
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignParentTop=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;110dp&quot;
        android:paddingTop=&quot;50dp&quot;
        android:text=&quot;\u56FE\u50CF\u6548\u679C&quot;
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

    &lt;ImageView
        android:id=&quot;@+id/imageView&quot;
        android:layout_width=&quot;353dp&quot;
        android:layout_height=&quot;112dp&quot;
        android:layout_below=&quot;@+id/textView2&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;70dp&quot;
        android:src=&quot;@drawable/logo&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button&quot;
        android:layout_width=&quot;134dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignParentStart=&quot;true&quot;
        android:layout_alignParentLeft=&quot;true&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_centerInParent=&quot;true&quot;
        android:layout_marginStart=&quot;10dp&quot;
        android:layout_marginLeft=&quot;10dp&quot;
        android:layout_marginBottom=&quot;117dp&quot;
        android:onClick=&quot;gray&quot;
        android:text=&quot;\u7070\u6697&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button2&quot;
        android:layout_width=&quot;135dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignBottom=&quot;@+id/button&quot;
        android:layout_alignParentEnd=&quot;true&quot;
        android:layout_alignParentRight=&quot;true&quot;
        android:onClick=&quot;dark&quot;
        android:text=&quot;\u9ED1\u6697&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button3&quot;
        android:layout_width=&quot;117dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignTop=&quot;@+id/button2&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:layout_marginTop=&quot;3dp&quot;
        android:layout_marginBottom=&quot;20dp&quot;
        android:onClick=&quot;bright&quot;
        android:text=&quot;\u660E\u4EAE&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button4&quot;
        android:layout_width=&quot;127dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/button3&quot;
        android:layout_alignParentStart=&quot;true&quot;
        android:layout_alignParentLeft=&quot;true&quot;
        android:layout_marginTop=&quot;9dp&quot;
        android:layout_marginBottom=&quot;20dp&quot;
        android:onClick=&quot;gama&quot;
        android:paddingBottom=&quot;50dp&quot;
        android:text=&quot;\u6BB7\u7EA2&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button5&quot;
        android:layout_width=&quot;111dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_alignStart=&quot;@+id/button3&quot;
        android:layout_alignLeft=&quot;@+id/button3&quot;
        android:layout_alignTop=&quot;@+id/button4&quot;
        android:layout_marginStart=&quot;0dp&quot;
        android:layout_marginLeft=&quot;0dp&quot;
        android:layout_marginTop=&quot;3dp&quot;
        android:layout_marginBottom=&quot;20dp&quot;
        android:onClick=&quot;green&quot;
        android:paddingBottom=&quot;50dp&quot;
        android:text=&quot;\u7FE0\u7EFF&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button6&quot;
        android:layout_width=&quot;93dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/button2&quot;
        android:layout_alignParentEnd=&quot;true&quot;
        android:layout_marginStart=&quot;49dp&quot;
        android:layout_marginLeft=&quot;49dp&quot;
        android:layout_marginTop=&quot;6dp&quot;
        android:layout_marginEnd=&quot;0dp&quot;
        android:layout_toEndOf=&quot;@+id/textView&quot;
        android:layout_toRightOf=&quot;@+id/textView&quot;
        android:onClick=&quot;blue&quot;
        android:paddingBottom=&quot;50dp&quot;
        android:text=&quot;\u5929\u84DD&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br></div></div><p>\u590D\u5236</p><p>\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u521A\u521A\u4FEE\u6539\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6211\u5047\u8BBE\u60A8\u5728\u8FDB\u884C\u73AF\u5883\u8BBE\u7F6E\u65F6\u5DF2\u521B\u5EFA\u4E86AVD\u3002\u8981\u4ECEAndroid Studio\u8FD0\u884C\u8BE5\u5E94\u7528\uFF0C\u8BF7\u6253\u5F00\u60A8\u9879\u76EE\u7684\u6D3B\u52A8\u6587\u4EF6\u4E4B\u4E00\uFF0C\u7136\u540E\u5DE5\u5177\u680F\u4E2D\u5355\u51FB\u201C\u8FD0\u884C\u201D\u56FE\u6807\u3002Android studio\u5C06\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5728\u60A8\u7684AVD\u4E0A\u5E76\u542F\u52A8\u5B83\uFF0C\u5982\u679C\u8BBE\u7F6E\u548C\u5E94\u7528\u7A0B\u5E8F\u4E00\u5207\u6B63\u5E38\uFF0C\u5B83\u5C06\u663E\u793A\u5728\u201C\u6A21\u62DF\u5668\u201D\u7A97\u53E3\u4E0B\u9762-</p><p><img src="https://www.jc2182.com/images/android/imageeffects1.png" alt=""></p><p>\u70B9\u51FB\u6309\u94AE\u5C55\u793A\u5404\u79CD\u56FE\u7247\u6548\u679C-</p>`,11);function k(w,v){const e=p("ExternalLinkIcon");return r(),i(o,null,[b,n("ol",null,[n("li",null,[c,n("a",d,[m,l(e)]),g]),q,h,_]),y],64)}var f=t(u,[["render",k]]);export{f as default};
