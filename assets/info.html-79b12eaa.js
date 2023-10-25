import{_ as t,o as s,c as n,e as a}from"./app-0a5b3274.js";const o={},e=a(`<h1 id="专栏基本信息" tabindex="-1"><a class="header-anchor" href="#专栏基本信息" aria-hidden="true">#</a> 专栏基本信息</h1><h2 id="获取专栏文章基本信息" tabindex="-1"><a class="header-anchor" href="#获取专栏文章基本信息" aria-hidden="true">#</a> 获取专栏文章基本信息</h2><blockquote><p>https://api.bilibili.com/x/article/viewinfo</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>专栏cvid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误<br>-404：无此信息</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>like</td><td>num</td><td>是否点赞</td><td>0：未点赞<br>1：已点赞<br>需要登录(Cookie) <br>未登录为0</td></tr><tr><td>attention</td><td>bool</td><td>是否关注文章作者</td><td>false：未关注<br>true：已关注<br>需要登录(Cookie) <br>未登录为false</td></tr><tr><td>favorite</td><td>bool</td><td>是否收藏</td><td>false：未收藏<br>true：已收藏<br>需要登录(Cookie) <br>未登录为false</td></tr><tr><td>coin</td><td>num</td><td>为文章投币数</td><td></td></tr><tr><td>stats</td><td>obj</td><td>状态数信息</td><td></td></tr><tr><td>title</td><td>str</td><td>文章标题</td><td></td></tr><tr><td>banner_url</td><td>str</td><td>文章头图url</td><td></td></tr><tr><td>mid</td><td>num</td><td>文章作者mid</td><td></td></tr><tr><td>author_name</td><td>str</td><td>文章作者昵称</td><td></td></tr><tr><td>is_author</td><td>bool</td><td>true</td><td>作用尚不明确</td></tr><tr><td>image_urls</td><td>array</td><td>动态封面</td><td></td></tr><tr><td>origin_image_urls</td><td>array</td><td>封面图片</td><td></td></tr><tr><td>shareable</td><td>bool</td><td>true</td><td>作用尚不明确</td></tr><tr><td>show_later_watch</td><td>bool</td><td>true</td><td>作用尚不明确</td></tr><tr><td>show_small_window</td><td>bool</td><td>true</td><td>作用尚不明确</td></tr><tr><td>in_list</td><td>bool</td><td>是否收于文集</td><td>false：否<br>true：是</td></tr><tr><td>pre</td><td>num</td><td>上一篇文章cvid</td><td>无为0</td></tr><tr><td>next</td><td>num</td><td>下一篇文章cvid</td><td>无为0</td></tr><tr><td>share_channels</td><td>array</td><td>分享方式列表</td><td></td></tr><tr><td>type</td><td>num</td><td>文章类别</td><td>0：文章<br>2：笔记</td></tr></tbody></table><p><code>stats</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>view</td><td>num</td><td>阅读数</td><td></td></tr><tr><td>favorite</td><td>num</td><td>收藏数</td><td></td></tr><tr><td>like</td><td>num</td><td>点赞数</td><td></td></tr><tr><td>dislike</td><td>num</td><td>点踩数</td><td></td></tr><tr><td>reply</td><td>num</td><td>评论数</td><td></td></tr><tr><td>share</td><td>num</td><td>分享数</td><td></td></tr><tr><td>coin</td><td>num</td><td>投币数</td><td></td></tr><tr><td>dynamic</td><td>num</td><td>动态转发数</td><td></td></tr></tbody></table><p><code>data</code>中的<code>image_urls</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>动态封面图片url</td><td></td></tr></tbody></table><p><code>data</code>中的<code>origin_image_urls</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>文章封面图片url</td><td></td></tr></tbody></table><p><code>data</code>中的<code>share_channels</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>分享项：qq</td><td></td></tr><tr><td>1</td><td>obj</td><td>分享项：qq空间</td><td></td></tr><tr><td>2</td><td>obj</td><td>分享项：微信</td><td></td></tr><tr><td>3</td><td>obj</td><td>分享项：朋友圈</td><td></td></tr><tr><td>4</td><td>obj</td><td>分享项：微博</td><td></td></tr></tbody></table><p><code>data</code>中的<code>share_channels</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>name</td><td>str</td><td>分享名称</td><td></td></tr><tr><td>picture</td><td>str</td><td>分享图片url</td><td></td></tr><tr><td>share_channel</td><td>str</td><td>分享代号</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询文章<code>cv2</code>的基本信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/article/viewinfo&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;id=2&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;like&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;attention&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;favorite&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">1072619</span><span class="token punctuation">,</span>
            <span class="token property">&quot;favorite&quot;</span><span class="token operator">:</span> <span class="token number">5481</span><span class="token punctuation">,</span>
            <span class="token property">&quot;like&quot;</span><span class="token operator">:</span> <span class="token number">16465</span><span class="token punctuation">,</span>
            <span class="token property">&quot;dislike&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;reply&quot;</span><span class="token operator">:</span> <span class="token number">1865</span><span class="token punctuation">,</span>
            <span class="token property">&quot;share&quot;</span><span class="token operator">:</span> <span class="token number">351</span><span class="token punctuation">,</span>
            <span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token number">3436</span><span class="token punctuation">,</span>
            <span class="token property">&quot;dynamic&quot;</span><span class="token operator">:</span> <span class="token number">37</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专栏行为准则  &quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;banner_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/article/131b1d41b857d5308f5bff36591d117bddc48d96.jpg@90p.webp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">144900660</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专栏小天使&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_author&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;image_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;https://i0.hdslb.com/bfs/article/0a72422ce8e77d8512f010d93b1b7f9bc4e64e52.jpg&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;origin_image_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;https://i0.hdslb.com/bfs/article/131b1d41b857d5308f5bff36591d117bddc48d96.jpg&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;shareable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;show_later_watch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;show_small_window&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;in_list&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pre&quot;</span><span class="token operator">:</span> <span class="token number">115914</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token number">38575</span><span class="token punctuation">,</span>
        <span class="token property">&quot;share_channels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;picture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/album/114ccfb3a999df9c4d11f274c8c61a804c8f8803.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;share_channel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ空间&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;picture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/album/30e9608bbce725bca45b5910866f60ab4d5e18b3.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;share_channel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QZONE&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;picture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/album/658af3c22431cd78bb7c50be3394f7c032eba12c.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;share_channel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WEIXIN&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;朋友圈&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;picture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/album/c1ebcec8c5302f29f792d15f04e0d6dcef53ec27.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;share_channel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WEIXIN_MONMENT&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微博&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;picture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/album/3707fc23f7d3e24022712320284b0de9aa78c87d.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;share_channel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SINA&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;video_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;disable_share&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,26),p=[e];function d(r,l){return s(),n("div",null,p)}const u=t(o,[["render",d],["__file","info.html.vue"]]);export{u as default};
