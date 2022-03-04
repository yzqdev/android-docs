import{_ as t,r as p,o as l,a as r,b as n,g as i,F as o,h as a,f as s}from"./app.a790e4a7.js";const c={},u=a(`<h1 id="\u76F8\u673A" tabindex="-1"><a class="header-anchor" href="#\u76F8\u673A" aria-hidden="true">#</a> \u76F8\u673A</h1><p>\u8FD9\u662F\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\uFF0C\u60A8\u53EF\u4EE5\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u76F8\u673A</p><ul><li>\u5728\u6211\u4EEC\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u73B0\u6709\u7684android camera\u5E94\u7528\u7A0B\u5E8F</li><li>\u5728\u6211\u4EEC\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u76F4\u63A5\u4F7F\u7528android\u63D0\u4F9B\u7684Camera API</li></ul><h2 id="\u73B0\u6709\u7684android-camera\u5E94\u7528\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u73B0\u6709\u7684android-camera\u5E94\u7528\u7A0B\u5E8F" aria-hidden="true">#</a> \u73B0\u6709\u7684android camera\u5E94\u7528\u7A0B\u5E8F</h2><p>\u60A8\u5C06\u4F7F\u7528<strong>MediaStore.ACTION_IMAGE_CAPTURE</strong>\u6765\u542F\u52A8\u624B\u673A\u4E0A\u5B89\u88C5\u7684\u73B0\u6709\u76F8\u673A\u5E94\u7528\u7A0B\u5E8F\u3002\u5176\u8BED\u6CD5\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">android<span class="token punctuation">.</span>provider<span class="token punctuation">.</span></span>MediaStore</span><span class="token punctuation">.</span>ACTION_IMAGE_CAPTURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u9664\u4E0A\u8FF0\u5185\u5BB9\u5916\uFF0CMediaStore\u8FD8\u63D0\u4F9B\u5176\u4ED6\u53EF\u7528\u7684Intent\u3002\u5B83\u4EEC\u5217\u51FA\u5982\u4E0B</p><table><thead><tr><th>\u5E38\u91CF</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>ACTION_IMAGE_CAPTURE_SECURE</strong></td><td>\u56FA\u5B9A\u8BBE\u5907\u540E\uFF0C\u5B83\u5C06\u8FD4\u56DE\u4ECE\u76F8\u673A\u6355\u83B7\u7684\u56FE\u50CF</td></tr><tr><td><strong>ACTION_VIDEO_CAPTURE</strong></td><td>\u5B83\u8C03\u7528android\u4E2D\u7684\u73B0\u6709\u89C6\u9891\u5E94\u7528\u7A0B\u5E8F\u4EE5\u6355\u83B7\u89C6\u9891</td></tr><tr><td><strong>EXTRA_SCREEN_ORIENTATION</strong></td><td>\u7528\u4E8E\u5C06\u5C4F\u5E55\u7684\u65B9\u5411\u8BBE\u7F6E\u4E3A\u5782\u76F4\u6216\u6A2A\u5411</td></tr><tr><td><strong>EXTRA_FULL_SCREEN</strong></td><td>\u5B83\u7528\u4E8E\u63A7\u5236ViewImage\u7684\u7528\u6237\u754C\u9762</td></tr><tr><td><strong>INTENT_ACTION_VIDEO_CAMERA</strong></td><td>\u6B64\u610F\u56FE\u7528\u4E8E\u5728\u89C6\u9891\u6A21\u5F0F\u4E0B\u542F\u52A8\u76F8\u673A</td></tr><tr><td><strong>EXTRA_SIZE_LIMIT</strong></td><td>\u7528\u4E8E\u6307\u5B9A\u89C6\u9891\u6216\u56FE\u50CF\u6355\u83B7\u5927\u5C0F\u7684\u5927\u5C0F\u9650\u5236</td></tr></tbody></table><p>\u73B0\u5728\uFF0C\u60A8\u5C06\u4F7F\u7528\u51FD\u6570**startActivityForResult()**\u542F\u52A8\u6B64\u6D3B\u52A8\u5E76\u7B49\u5F85\u5176\u7ED3\u679C\u3002\u5176\u8BED\u6CD5\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">startActivityForResult</span><span class="token punctuation">(</span>intent<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u590D\u5236</p><p>\u8BE5\u65B9\u6CD5\u5DF2\u5728Activity\u7C7B\u4E2D\u5B9A\u4E49\u3002\u6211\u4EEC\u4ECE\u4E3B\u8981\u6D3B\u52A8\u4E2D\u8C03\u7528\u5B83\u3002\u5728\u6D3B\u52A8\u7C7B\u4E2D\u5B9A\u4E49\u7684\u65B9\u6CD5\u5177\u6709\u76F8\u540C\u7684\u4F5C\u7528\uFF0C\u4F46\u662F\u5728\u60A8\u4E0D\u662F\u4ECE\u6D3B\u52A8\u800C\u662F\u4ECE\u5176\u4ED6\u5730\u65B9\u8FDB\u884C\u8C03\u7528\u65F6\u4F7F\u7528\u3002\u5B83\u4EEC\u5728\u4E0B\u9762\u5217\u51FA</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>startActivityForResult(Intent intent, int requestCode, Bundle options)</strong></td><td>\u5B83\u5F00\u59CB\u4E00\u4E2A\u6D3B\u52A8\uFF0C\u4F46\u53EF\u4EE5\u5E26\u4E0A\u989D\u5916\u7684\u9009\u9879\u3002</td></tr><tr><td><strong>startActivityFromChild(Activity child, Intent intent, int requestCode)</strong></td><td>\u5F53\u60A8\u7684\u6D3B\u52A8\u662F\u5176\u4ED6\u4EFB\u4F55\u6D3B\u52A8\u7684\u5B50\u9879\u65F6\uFF0C\u5B83\u5C06\u542F\u52A8\u6D3B\u52A8\u3002</td></tr><tr><td><strong>startActivityFromChild(Activity child, Intent intent, int requestCode, Bundle options)</strong></td><td>\u5B83\u7684\u5DE5\u4F5C\u539F\u7406\u4E0E\u4E0A\u8FF0\u76F8\u540C\uFF0C\u4F46\u53EF\u4EE5\u9644\u5E26\u6346\u7ED1\u5F62\u5F0F\u7684\u5176\u4ED6\u503C\u3002</td></tr><tr><td><strong>startActivityFromFragment(Fragment fragment, Intent intent, int requestCode)</strong></td><td>\u5B83\u4ECE\u60A8\u5F53\u524D\u6240\u5728\u7684\u7247\u6BB5\u4E2D\u542F\u52A8\u6D3B\u52A8\u3002</td></tr><tr><td><strong>startActivityFromFragment(Fragment fragment, Intent intent, int requestCode, Bundle options)</strong></td><td>\u5B83\u4E0D\u4EC5\u4ECE\u7247\u6BB5\u542F\u52A8\u6D3B\u52A8\uFF0C\u800C\u4E14\u53EF\u4EE5\u5E26\u8D70\u989D\u5916\u7684\u4EF7\u503C\u3002</td></tr></tbody></table><p>\u65E0\u8BBA\u60A8\u4F7F\u7528\u4E86\u54EA\u4E2A\u51FD\u6570\u6765\u542F\u52A8\u6D3B\u52A8\uFF0C\u5B83\u4EEC\u90FD\u5C06\u8FD4\u56DE\u7ED3\u679C\u3002\u53EF\u4EE5\u901A\u8FC7\u91CD\u5199<strong>onActivityResult</strong>\u51FD\u6570\u6765\u83B7\u5F97\u7ED3\u679C\u3002</p><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u8FD9\u662F\u4E00\u4E2A\u793A\u4F8B\uFF0C\u663E\u793A\u4E86\u5982\u4F55\u542F\u52A8\u73B0\u6709\u7684\u76F8\u673A\u5E94\u7528\u7A0B\u5E8F\u4EE5\u6355\u83B7\u56FE\u50CF\u5E76\u4EE5\u4F4D\u56FE\u7684\u5F62\u5F0F\u663E\u793A\u7ED3\u679C\u3002\u8981\u5C1D\u8BD5\u4F7F\u7528\u6B64\u793A\u4F8B\uFF0C\u60A8\u9700\u8981\u5728\u652F\u6301\u76F8\u673A\u7684\u5B9E\u9645\u8BBE\u5907\u4E0A\u8FD0\u884C\u5B83\u3002</p>`,17),b=s("\u60A8\u5C06\u4F7F\u7528Android Studio\u521B\u5EFA\u4E00\u4E2AAndroid\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3ADemo\uFF0C\u4F4D\u4E8Ecom.jc2182.demo\u5305\u4E0B\uFF0C\u5982"),m={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},d=s("Hello World\u793A\u4F8B"),k=s("\u4E00\u7AE0\u4E2D\u6240\u8FF0\u3002"),g=n("li",null,"\u4FEE\u6539src/MainActivity.java\u6587\u4EF6\u7528\u4E8E\u542F\u52A8Camera\u7684\u610F\u56FE\u4EE3\u7801\u3002",-1),A=n("li",null,"\u4FEE\u6539res/layout/activity_main.xml\u6587\u4EF6\u5982\u679C\u9700\u8981\uFF0C\u53EF\u6DFB\u52A0\u4EFB\u4F55GUI\u7EC4\u4EF6\u3002",-1),h=n("li",null,"\u4FEE\u6539AndroidManifest.xml\u4EE5\u6DFB\u52A0\u5FC5\u8981\u7684\u6743\u9650\u3002",-1),v=n("li",null,"\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4EE5\u542F\u52A8Android\u6A21\u62DF\u5668\u5E76\u9A8C\u8BC1\u5728\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u505A\u66F4\u6539\u7684\u7ED3\u679C\u3002",-1),_=a(`<p>\u4EE5\u4E0B\u662F\u4FEE\u6539\u540E\u7684\u4E3B\u8981\u6D3B\u52A8\u6587\u4EF6src/com.jc2182.demo/MainActivity.java\u7684\u5185\u5BB9\u3002\u8BE5\u6587\u4EF6\u53EF\u4EE5\u5305\u62EC\u6BCF\u4E2A\u57FA\u672C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span></span><span class="token class-name">Manifest</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">AlertDialog</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">Context</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">DialogInterface</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">Intent</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">SharedPreferences</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span>pm<span class="token punctuation">.</span></span><span class="token class-name">PackageManager</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Uri</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>provider<span class="token punctuation">.</span></span><span class="token class-name">Settings</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">androidx<span class="token punctuation">.</span>core<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">ActivityCompat</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">androidx<span class="token punctuation">.</span>core<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">ContextCompat</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>public class MainActivity extends Activity { public static final int MY_PERMISSIONS_REQUEST_CAMERA = 100; public static final String ALLOW_KEY = &quot;ALLOWED&quot;; public static final String CAMERA_PREF = &quot;camera_pref&quot;;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
          if (getFromPref(this, ALLOW_KEY)) {
              showSettingsAlert();
          } else if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {

              // Should we show an explanation?
              if (ActivityCompat.shouldShowRequestPermissionRationale(this, Manifest.permission.CAMERA)) {
                  showAlert();
              } else {
                  // No explanation needed, we can request the permission.
                  ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, MY_PERMISSIONS_REQUEST_CAMERA);
              }
          }
      } else {
          openCamera();
      }

  }
  public static void saveToPreferences(Context context, String key, Boolean allowed) {
      SharedPreferences myPrefs = context.getSharedPreferences(CAMERA_PREF, Context.MODE_PRIVATE);
      SharedPreferences.Editor prefsEditor = myPrefs.edit();
      prefsEditor.putBoolean(key, allowed);
      prefsEditor.commit();
  }

  public static Boolean getFromPref(Context context, String key) {
      SharedPreferences myPrefs = context.getSharedPreferences(CAMERA_PREF, Context.MODE_PRIVATE);
      return (myPrefs.getBoolean(key, false));
  }

  private void showAlert() {
      AlertDialog alertDialog = new AlertDialog.Builder(MainActivity.this).create();
      alertDialog.setTitle(&quot;Alert&quot;);
      alertDialog.setMessage(&quot;App needs to access the Camera.&quot;);

      alertDialog.setButton(AlertDialog.BUTTON_NEGATIVE, &quot;DONT ALLOW&quot;, new DialogInterface.OnClickListener() {
                  public void onClick(DialogInterface dialog, int which) {
                      dialog.dismiss();
                      finish();
                  }
              });

      alertDialog.setButton(AlertDialog.BUTTON_POSITIVE, &quot;ALLOW&quot;, new DialogInterface.OnClickListener() {

                  public void onClick(DialogInterface dialog, int which) {
                      dialog.dismiss();
                      ActivityCompat.requestPermissions(MainActivity.this,
                              new String[]{Manifest.permission.CAMERA},
                              MY_PERMISSIONS_REQUEST_CAMERA);
                  }
              });
      alertDialog.show();
  }

  private void showSettingsAlert() {
      AlertDialog alertDialog = new AlertDialog.Builder(MainActivity.this).create();
      alertDialog.setTitle(&quot;Alert&quot;);
      alertDialog.setMessage(&quot;App needs to access the Camera.&quot;);

      alertDialog.setButton(AlertDialog.BUTTON_NEGATIVE, &quot;DONT ALLOW&quot;,
              new DialogInterface.OnClickListener() {

                  public void onClick(DialogInterface dialog, int which) {
                      dialog.dismiss();
                      //finish();
                  }
              });

      alertDialog.setButton(AlertDialog.BUTTON_POSITIVE, &quot;SETTINGS&quot;,
              new DialogInterface.OnClickListener() {

                  public void onClick(DialogInterface dialog, int which) {
                      dialog.dismiss();
                      startInstalledAppDetailsActivity(MainActivity.this);
                  }
              });

      alertDialog.show();
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
      switch (requestCode) {
          case MY_PERMISSIONS_REQUEST_CAMERA: {
              for (int i = 0, len = permissions.length; i &lt; len; i++) {
                  String permission = permissions[i];

                  if (grantResults[i] == PackageManager.PERMISSION_DENIED) {
                      boolean
                              showRationale =
                              ActivityCompat.shouldShowRequestPermissionRationale(
                                      this, permission);

                      if (showRationale) {
                          showAlert();
                      } else if (!showRationale) {
                          // user denied flagging NEVER ASK AGAIN
                          // you can either enable some fall back,
                          // disable features of your app
                          // or open another dialog explaining
                          // again the permission and directing to
                          // the app setting
                          saveToPreferences(MainActivity.this, ALLOW_KEY, true);
                      }
                  }
              }
          }

          // other &#39;case&#39; lines to check for other
          // permissions this app might request
      }
  }

  @Override
  protected void onResume() {
      super.onResume();
  }

  public static void startInstalledAppDetailsActivity(final Activity context) {
      if (context == null) {
          return;
      }

      final Intent i = new Intent();
      i.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
      i.addCategory(Intent.CATEGORY_DEFAULT);
      i.setData(Uri.parse(&quot;package:&quot; + context.getPackageName()));
      i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
      i.addFlags(Intent.FLAG_ACTIVITY_NO_HISTORY);
      i.addFlags(Intent.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS);
      context.startActivity(i);
  }

  private void openCamera() {
      Intent intent = new Intent(&quot;android.media.action.IMAGE_CAPTURE&quot;);
      startActivity(intent);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br></div></div><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u590D\u5236

\u4EE5\u4E0B\u662Fres/layout/activity_main.xml\u6587\u4EF6\u7684\u5185\u5BB9-

\`\`\`xml

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;RelativeLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot;&gt;
&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u590D\u5236</p><p>\u4EE5\u4E0B\u662FAndroidManifest.xml\u6587\u4EF6\u7684\u5185\u5BB9-</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.jc2182.demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.CAMERA<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span>
        <span class="token attr-name"><span class="token namespace">android:</span>allowBackup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@mipmap/ic_launcher<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@string/app_name<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>roundIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@mipmap/ic_launcher_round<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>supportsRtl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@style/AppTheme<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.MainActivity<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.action.MAIN<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.category.LAUNCHER<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>application</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manifest</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u590D\u5236</p><p>\u5728\u771F\u5B9E\u7684\u8BBE\u5907\u4E0A\u6D4B\u8BD5\u60A8\u7684demo\u3002</p>`,11);function E(q,I){const e=p("ExternalLinkIcon");return l(),r(o,null,[u,n("ol",null,[n("li",null,[b,n("a",m,[d,i(e)]),k]),g,A,h,v]),_],64)}var C=t(c,[["render",E]]);export{C as default};
