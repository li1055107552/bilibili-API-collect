import{_ as p,r as d,o as l,c as r,a as n,b as t,d as o,w as e,e as s}from"./app-0a5b3274.js";const u={},c=s(`<h1 id="笔记详细信息" tabindex="-1"><a class="header-anchor" href="#笔记详细信息" aria-hidden="true">#</a> 笔记详细信息</h1><h2 id="查询该稿件是否禁止笔记" tabindex="-1"><a class="header-anchor" href="#查询该稿件是否禁止笔记" aria-hidden="true">#</a> 查询该稿件是否禁止笔记</h2><blockquote><p>https://api.bilibili.com/x/note/is_forbid</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td><code>0</code>成功<br><code>-400</code>请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>forbid_note_entrance</td><td>bool</td><td>是否禁止笔记</td><td><code>true</code>禁止笔记<br><code>false</code>允许笔记</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询视频稿件<code>av338677252</code>是否禁止笔记</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/note/info&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=338677252&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;forbid_note_entrance&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="查询私有笔记内容" tabindex="-1"><a class="header-anchor" href="#查询私有笔记内容" aria-hidden="true">#</a> 查询私有笔记内容</h2><blockquote><p>https://api.bilibili.com/x/note/info</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>oid</td><td>num</td><td>目标id</td><td>必要</td><td></td></tr><tr><td>oid_type</td><td>num</td><td>目标id类型</td><td>必要</td><td><code>0</code>视频(oid=avid)</td></tr><tr><td>note_id</td><td>num</td><td>笔记id</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td><code>0</code>成功<br><code>-400</code>请求错误<br><code>-101</code>账号未登录<br><code>79502</code>笔记详情未找到<br><code>79503</code>笔记正文未找到</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p>`,25),i=n("thead",null,[n("tr",null,[n("th",null,"字段"),n("th",null,"类型"),n("th",null,"内容"),n("th",null,"备注")])],-1),k=n("tr",null,[n("td",null,"arc"),n("td",null,"obj"),n("td",null,"对应视频稿件信息"),n("td")],-1),b=n("tr",null,[n("td",null,"audit_status"),n("td",null,"num"),n("td",null,"0"),n("td",null,"作用暂不明确")],-1),v=n("tr",null,[n("td",null,"cid_count"),n("td",null,"num"),n("td",null,"视频分P数"),n("td")],-1),m=n("td",null,"content",-1),h=n("td",null,"str",-1),q=n("td",null,"笔记正文json序列",-1),_=n("tr",null,[n("td",null,"forbid_note_entrance"),n("td",null,"bool"),n("td"),n("td")],-1),y=n("tr",null,[n("td",null,"pub_reason"),n("td",null,"str"),n("td",null,"公开笔记相关原因"),n("td")],-1),g=n("tr",null,[n("td",null,"pub_status"),n("td",null,"num"),n("td",null,"公开笔记状态"),n("td",null,[n("code",null,"1"),t("未公开"),n("br"),n("code",null,"2"),t("已公开"),n("br"),n("code",null,"4"),t("退回")])],-1),f=n("tr",null,[n("td",null,"pub_version"),n("td",null,"num"),n("td"),n("td")],-1),x=n("tr",null,[n("td",null,"summary"),n("td",null,"str"),n("td",null,"笔记预览文本"),n("td")],-1),j=n("tr",null,[n("td",null,"tags"),n("td",null,"array"),n("td",null,"笔记跳转标签列表"),n("td")],-1),E=n("tr",null,[n("td",null,"title"),n("td",null,"str"),n("td",null,"笔记标题"),n("td")],-1),A=s(`<p><code>data</code>中的<code>arc</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>oid</td><td>num</td><td>目标id</td><td></td></tr><tr><td>oid_type</td><td>num</td><td>目标id类型</td><td><code>0</code>视频(oid=avid)</td></tr><tr><td>title</td><td>str</td><td>视频标题</td><td></td></tr><tr><td>pic</td><td>str</td><td>视频封面</td><td></td></tr><tr><td>status</td><td>num</td><td></td><td></td></tr><tr><td>desc</td><td>str</td><td>视频简介</td><td></td></tr></tbody></table><p><code>data</code>中的<code>tags</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>标签1</td><td></td></tr><tr><td>n</td><td>obj</td><td>标签（n+1）</td><td>按照笔记中位置排列</td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>tags</code>中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>cid</td><td>num</td><td>视频cid</td><td></td></tr><tr><td>status</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>index</td><td>num</td><td>在稿件中的分P索引</td><td></td></tr><tr><td>seconds</td><td>num</td><td>视频进度</td><td></td></tr><tr><td>pos</td><td>num</td><td>笔记中位置</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询视频<code>av338677252</code>中笔记<code>24508729145690112</code>的内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/note/info&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid=338677252&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid_type=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;note_id=24508729145690112&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022哔哩哔哩拜年纪&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot; ...&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{&quot;</span>insert<span class="token string">&quot;:&quot;</span>\\n<span class="token string">&quot;}]&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cid_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;audit_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pub_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pub_reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pub_version&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;forbid_note_entrance&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;arc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;oid&quot;</span><span class="token operator">:</span> <span class="token number">338677252</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022哔哩哔哩拜年纪&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oid_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/1e683a5363f35aa0a65419dbf145177099e38f90.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="查询公开笔记内容" tabindex="-1"><a class="header-anchor" href="#查询公开笔记内容" aria-hidden="true">#</a> 查询公开笔记内容</h2><blockquote><p>https://api.bilibili.com/x/note/publish/info</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>cvid</td><td>num</td><td>笔记对应的专栏cvid</td><td>必要</td><td>非笔记id</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td><code>0</code>成功<br><code>-400</code>请求错误<br><code>79514</code>公开笔记详情未找到</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p>`,19),B=n("thead",null,[n("tr",null,[n("th",null,"字段"),n("th",null,"类型"),n("th",null,"内容"),n("th",null,"备注")])],-1),C=n("tr",null,[n("td",null,"cvid"),n("td",null,"num"),n("td",null,"公开笔记对应的专栏cvid"),n("td")],-1),S=n("tr",null,[n("td",null,"note_id"),n("td",null,"num"),n("td",null,"笔记id"),n("td")],-1),T=n("tr",null,[n("td",null,"title"),n("td",null,"str"),n("td",null,"笔记标题"),n("td")],-1),V=n("tr",null,[n("td",null,"summary"),n("td",null,"str"),n("td",null,"笔记预览"),n("td")],-1),D=n("td",null,"content",-1),F=n("td",null,"str",-1),N=n("td",null,"笔记正文json序列",-1),G=n("tr",null,[n("td",null,"cid_count"),n("td",null,"num"),n("td",null,"(?)"),n("td")],-1),L=n("tr",null,[n("td",null,"pub_status"),n("td",null,"num"),n("td",null,"公开状态"),n("td")],-1),w=n("tr",null,[n("td",null,"tags"),n("td",null,"array"),n("td"),n("td")],-1),P=n("tr",null,[n("td",null,"arc"),n("td",null,"obj"),n("td",null,"稿件信息"),n("td")],-1),R=n("tr",null,[n("td",null,"author"),n("td",null,"obj"),n("td",null,"作者信息"),n("td")],-1),O=n("tr",null,[n("td",null,"forbid_note_entrance"),n("td",null,"bool"),n("td"),n("td")],-1),Q=s(`<p><code>data</code>中的<code>arc</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>oid</td><td>num</td><td>目标id</td><td></td></tr><tr><td>oid_type</td><td>num</td><td>目标id类型</td><td><code>0</code>视频(oid=avid)</td></tr><tr><td>title</td><td>str</td><td>标题</td><td></td></tr><tr><td>status</td><td>num</td><td>(?)</td><td></td></tr><tr><td>pic</td><td>str</td><td>封面url</td><td></td></tr><tr><td>desc</td><td>str</td><td>简介</td><td></td></tr></tbody></table><p><code>data</code>中的<code>author</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>用户mid</td><td></td></tr><tr><td>name</td><td>str</td><td>昵称</td><td></td></tr><tr><td>face</td><td>str</td><td>头像url</td><td></td></tr><tr><td>level</td><td>num</td><td>用户等级</td><td></td></tr><tr><td>vip_info</td><td>obj</td><td>会员信息</td><td></td></tr><tr><td>pendant</td><td>obj</td><td>头像框信息</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查看公开笔记<code>cv15160286</code>的信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/note/publish/info&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cvid=15160286&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;cvid&quot;</span><span class="token operator">:</span> <span class="token number">15160286</span><span class="token punctuation">,</span>
        <span class="token property">&quot;note_id&quot;</span><span class="token operator">:</span> <span class="token number">24114044116402190</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022哔哩哔哩拜年纪&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我决定再重新做一个系列，叫做影评系列 那么我们这一次是影系列的第n期 我也不知道是多少期，到时候回去统计一下 今天的影评是写，2022年哔哩哔哩拜年纪 【...&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{&quot;</span>insert<span class="token string">&quot;:&quot;</span>我决定再重新做一个系列，叫做影评系列\\n那么我们这一次是影系列的第n期\\n我也不知道是多少期，到时候回去统计一下\\n今天的影评是写，<span class="token number">2022</span>年哔哩哔哩拜年纪\\n【以及往年的拜年祭，会提一下】\\n看完哔哩哔哩拜年纪之后，我的触动真的很大，那今天就先写哔哩哔哩拜年纪吧。\\n字数同样有点长，希望看过<span class="token number">2022</span>哔哩哔哩拜年纪的人可以认真看完吧！也可以说说你的想法啊！\\n\\n首先先说一说它的时间，因为每次都在除夕夜播放而出现要和家人看春晚，又要去抢红包之类的，所以每次都看不了直播。这一点就很糟心了。\\n所以说这次同往年一样，我也是看的回放。\\n一\\n一开始是<span class="token number">2233</span>跳舞，因为我不太关注这些二次元，所以说就不详细评述了\\n但是这个和去年的不问天，应该是一个系列的。都是<span class="token number">2233</span>在一起出镜，然后配的是一首歌，但是我觉得这首歌确实没有不问天那么惊艳我了。\\n【我觉得很大的可能是今年的作曲没有泡泡老师，去年，前年的泡泡老师作的曲都真的非常的好听，而且今年的拜年纪的预告片上也有一个三首他写的歌的串烧。真的很不错。】\\n二\\n然后就说一下\\n今年以及往年的动画\\n这个主体动画真的每年做的都很不错。就是既有意义，又有故事，还有深度，同时还介绍了风俗人情和乡土民俗，真的都是非常非常好的动画，并且动画制作也很精良。\\n真的想知道这些动画的主创人员都是谁，可是每次都没有标注。\\n【既然谈到动画，就来说一下去年预告的一个动画叫盒中之海。其实我本来是去年看拜年纪的时候是没有看到这个预告片的\\n但是今年的评论区底下，几乎每一个评论区中都在催盒中之海，于是我便去看了一下。我发现这个真的变得更有意义和深度了。\\n他讲的是一个游戏，还有海神等等\\n虽然感觉到它的预告片很乱，但是总觉得其中有什么联系？就是很悬疑又很惊恐但一看就很有深度的动画了！\\n所以我也期待着了！】\\n今年讲的是哔哩楼的故事，我觉得他的那个创意真的很好，就是自助餐厅的创意\\n可以让每一个人都尝到厨师的快乐，\\n但又不是真正去做厨师，如果真的能有这样一家店就好了！\\n然后拜年纪传统的视频串烧节目就不说了吧。\\n三\\n再后来就是新春小记，俗称的是拜年曲\\n去年的拜年曲是吉祥话，我觉得两个都很好听，但是说去年的都是我认识并且比较喜欢的歌手，可以今年的歌手一个都不认识了<span class="token punctuation">[</span>em<span class="token punctuation">]</span>e107<span class="token punctuation">[</span>/em<span class="token punctuation">]</span>\\n但是近两年的但连许都用了说话开篇，然后其中高潮的时候都是顶针的方式来演唱，可能这也是一个习俗吧，但真的还比较好听！\\n四\\n一些没有触动的作品就不说了\\n所以接下来是灯火！\\n我没有想到今年过年能再一次听到\\n《灯火里的中国》！\\n因为今年春晚没有周深还有些遗憾呢！\\n但虽然这首歌不是周深唱的，但也温暖人心！\\n这个应该与去年的《我的祖国》是一个系列的！\\n五\\n四迹老师的动画一如既往的有意思\\n【但就是少了灵魂快板……】\\n去年和前年的快板真的深入人心了！\\n所以我还是最喜欢去年的\\n“这个好诶！”\\n六\\n邪教老师好几年没有写燃曲了哈哈哈哈哈哈\\n但这个风灵玉秀和拜年祭一起做的动画挺好的\\n虽然我不知道风灵玉秀是什么动画\\n但武侠版的这个动画的动作做的很细致\\n又不是很快，看的舒服又清晰\\n配上音乐……\\n【我不在想再说还不错了哈哈哈哈哈哈哈】\\n七\\n终于到我最喜欢的一首人演唱的歌曲\\n【哈哈哈哈哈为了不与卡农冲突】\\n《快乐手帐》\\n我要把纳兰寻风的词吹爆！！！！！！！！！\\n“跟着我，哒哒哒哒，搭个舞台\\n跟着我，哒哒哒哒，大步迈开”\\n“生活就是平平淡淡，偶尔磕磕绊绊\\n让脑筋多转转，往好处看看！”\\n真的好温暖！积极向上！向前看！\\n这个初音未来的声音也没有不适感了！\\n这个真的好棒！\\n八\\n然后是沃玛！\\n沃玛的脑回路真的很独特！\\n他的这个系列是视频真的很独特又新奇！\\n这个不好描述……自己去看吧！\\n沃玛的声音也好听！哈哈哈哈哈哈哈\\n九\\n魔术跳过吧\\n上面是这次拜年级我最喜欢的一个节目，第大调卡农。\\n这个真的很温暖，还有小提琴和钢琴的两个二重奏，就是非常的震撼人心，很感动。\\n再配上他的画面，从一个小孩儿到最后的老人，感觉这一生都可以用这首歌来概括。所以说真的很感动又很温暖，\\n而且这个节目的副标题是：\\n致敬一生中每一个重要时刻\\n所以更感动了！\\n十\\n拜年祭燃曲《弈》\\n意境真的很扩大，不看注释完全看不懂词啊\\n但去还比较好听，但感觉没有去年的《万象霜天》惊艳\\n那我在b站上面看到一个视频，把这八年的八个燃曲在一起放，然后《弈》真的听起来很明显，很明显。\\n高潮很高，很好听！\\n所以苍穹是sv还是v啊？\\n十一\\n这次cilicili的《另一个我》没有做好\\n可能是因为去年是《时光盲盒》真的太棒了！！！！\\n“一遍遍，我回来了！……辛苦了！”\\n反而今年的歌没有触动\\n这是我唯一一个跳过了大约一分钟的节目\\n十二\\n后面几个节目都具有讽刺意义\\n但那个三年都放的那个讽刺动画系列\\n我属实看不懂哈哈哈哈哈哈哈哈\\n梗太多了哈哈哈哈哈哈真有些看不懂\\n十三\\n终于到《除夕》了\\n音阙诗听第二次上拜年祭！\\n第一次安安和镜子演唱《与梦盛开》\\n第二次是音阙诗听团队创作《除夕》\\n同样是音阙诗听味啊！\\n这次的词写的还不错！\\n所以，节日系列开更！\\n【但A-SOUL究竟是什么组合，根本没听说过啊】\\n十四\\n最后一个节目。\\n流年如歌，是前年的最后一个节目，但是我那时候还不习惯听V曲，所以说几乎完全就跳过了，那个节目没有听。\\n但是这个纳兰寻风作的词，以及这个西门振作的曲，真的配合起来好好听。\\n还是要再吹一下纳兰寻风老师的词真的好棒，然后同样和上一个说的一样，温暖，感动，就有积极向上的那种乐观。\\n“你是冰雪消融唤醒万物第一缕花香……”\\n“湖面上小船儿晃晃岁月长……”\\n【但是纳兰寻风老师究竟是做什么的？\\n好像经常调教也能看到他哈哈哈哈哈哈\\n没有特别关注】\\n然后我每次听一听的是泠鸢翻唱的版本，这一次是让刷牙老师来唱的，男声和女声唱有有别样的风味\\n这真的就像《难忘今宵》一样，要待在每一场拜年纪嘛?\\n新年的那一天晚上都随着流年如歌，进入梦乡！\\n人生如梦，流年似水，岁月如歌，\\n春夏秋冬，年复一年\\n唯有自己不变\\n去下一个十年找到属于自己的答案吧！\\n哔哩哔哩乾杯！\\n\\n\\n十五【正好是十五哈哈哈哈哈】\\n《五十》这个节目是很晚的时候看的\\n有些悬疑，甚至有些恐怖，但引起了许多思考\\n写太多了，就不详说了……\\n【再次期待艾导的《盒中之海》！】\\n\\n哔哩哔哩( ゜ -゜)つロ 乾杯~​\\n——今日发布于Q，转到哔哩哔哩！\\n<span class="token string">&quot;}]&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cid_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pub_status&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;arc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;oid&quot;</span><span class="token operator">:</span> <span class="token number">338677252</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022哔哩哔哩拜年纪&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oid_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/1e683a5363f35aa0a65419dbf145177099e38f90.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">523870870</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;夜达星xxxxxxx&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/face/2cdfd277e63b6bb1f400ed616b5caf0a04196f28.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;vip_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;due_date&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vip_pay_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;theme_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label_theme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;text_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;bg_style&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;bg_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;border_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            	<span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;avatar_subscript&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;nickname_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;avatar_subscript_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pendant&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;expire&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;image_enhance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;image_enhance_frame&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;forbid_note_entrance&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8);function U(z,H){const a=d("RouterLink");return l(),r("div",null,[c,n("table",null,[i,n("tbody",null,[k,b,v,n("tr",null,[m,h,q,n("td",null,[t("格式见"),o(a,{to:"/docs/note/#%E9%99%84%E8%A1%A8-%E7%AC%94%E8%AE%B0%E6%AD%A3%E6%96%87%E5%BA%8F%E5%88%97%E6%A0%BC%E5%BC%8F"},{default:e(()=>[t("附表")]),_:1})])]),_,y,g,f,x,j,E])]),A,n("table",null,[B,n("tbody",null,[C,S,T,V,n("tr",null,[D,F,N,n("td",null,[t("格式见"),o(a,{to:"/docs/note/#%E9%99%84%E8%A1%A8-%E7%AC%94%E8%AE%B0%E6%AD%A3%E6%96%87%E5%BA%8F%E5%88%97%E6%A0%BC%E5%BC%8F"},{default:e(()=>[t("附表")]),_:1})])]),G,L,w,P,R,O])]),Q])}const J=p(u,[["render",U],["__file","info.html.vue"]]);export{J as default};
