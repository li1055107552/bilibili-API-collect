import{_ as t,o as s,c as n,e as a}from"./app-0a5b3274.js";const e={},d=a(`<h1 id="用户状态数" tabindex="-1"><a class="header-anchor" href="#用户状态数" aria-hidden="true">#</a> 用户状态数</h1><h2 id="关系状态数" tabindex="-1"><a class="header-anchor" href="#关系状态数" aria-hidden="true">#</a> 关系状态数</h2><blockquote><p>https://api.bilibili.com/x/relation/stat</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或APP</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>vmid</td><td>num</td><td>目标用户mid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>目标用户mid</td><td></td></tr><tr><td>following</td><td>num</td><td>关注数</td><td></td></tr><tr><td>whisper</td><td>num</td><td>悄悄关注数</td><td>需要登录(Cookie或APP) <br>未登录或非自己恒为0</td></tr><tr><td>black</td><td>num</td><td>黑名单数</td><td>需要登录(Cookie或APP) <br>未登录或非自己恒为0</td></tr><tr><td>follower</td><td>num</td><td>粉丝数</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询用户<code>mid=332704117</code>的关系状态数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/relation/stat&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;vmid=332704117&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">332704117</span><span class="token punctuation">,</span>
		<span class="token property">&quot;following&quot;</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
		<span class="token property">&quot;whisper&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;black&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;follower&quot;</span><span class="token operator">:</span> <span class="token number">919515</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="up主状态数" tabindex="-1"><a class="header-anchor" href="#up主状态数" aria-hidden="true">#</a> UP主状态数</h2><blockquote><p>https://api.bilibili.com/x/space/upstat</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或APP</p><p>注：该接口需要<strong>任意用户</strong>登录，否则<strong>不会返回任何数据</strong></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>mid</td><td>num</td><td>目标用户mid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>archive</td><td>obj</td><td>视频播放量</td><td></td></tr><tr><td>article</td><td>obj</td><td>专栏阅读量</td><td></td></tr><tr><td>likes</td><td>num</td><td>获赞次数</td><td></td></tr></tbody></table><p><code>data</code>中的<code>archive</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>view</td><td>num</td><td>视频播放量</td><td></td></tr></tbody></table><p><code>data</code>中的<code>article</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>view</td><td>num</td><td>专栏阅读量</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询用户<code>mid=456664753</code>的UP主状态数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/space/upstat&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;mid=456664753&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;archive&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">213567370</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;article&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">3230808</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;likes&quot;</span><span class="token operator">:</span> <span class="token number">20295095</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="订阅-投稿状态数-已弃用" tabindex="-1"><a class="header-anchor" href="#订阅-投稿状态数-已弃用" aria-hidden="true">#</a> <s>订阅&amp;投稿状态数（已弃用）</s></h2><details><summary>查看折叠内容</summary> &gt; https://api.bilibili.com/x/space/navnum <p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>目标用户mid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>video</td><td>num</td><td>投稿视频数</td><td></td></tr><tr><td>bangumi</td><td>num</td><td>追番数</td><td>无视隐私设置</td></tr><tr><td>cinema</td><td>num</td><td>追剧数</td><td>无视隐私设置</td></tr><tr><td>channel</td><td>obj</td><td>频道数</td><td></td></tr><tr><td>favourite</td><td>obj</td><td>收藏夹数</td><td>无视隐私设置</td></tr><tr><td>tag</td><td>num</td><td>关注TAG数</td><td>无视隐私设置</td></tr><tr><td>article</td><td>num</td><td>投稿专栏数</td><td></td></tr><tr><td>playlist</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>album</td><td>num</td><td>投稿相簿数</td><td></td></tr><tr><td>audio</td><td>num</td><td>投稿音频数</td><td></td></tr><tr><td>pugv</td><td>num</td><td>投稿课程数</td><td></td></tr></tbody></table><p><code>data</code>中的<code>channel</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>master</td><td>num</td><td>频道数</td><td></td></tr><tr><td>guest</td><td>num</td><td>频道数</td><td></td></tr></tbody></table><p><code>data</code>中的<code>favourite</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>master</td><td>num</td><td>全部收藏夹数</td><td>需要登录(SESSDATA) <br>只能查看自己的</td></tr><tr><td>guest</td><td>num</td><td>公开收藏夹数</td><td>无视隐私设置</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询用户<code>mid=239202390</code>的订阅&amp;投稿状态数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/space/navnum&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;mid=239202390&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;video&quot;</span><span class="token operator">:</span> <span class="token number">290</span><span class="token punctuation">,</span>
		<span class="token property">&quot;bangumi&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
		<span class="token property">&quot;cinema&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
		<span class="token property">&quot;channel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;master&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
			<span class="token property">&quot;guest&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;favourite&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;master&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
			<span class="token property">&quot;guest&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;article&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;playlist&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;album&quot;</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
		<span class="token property">&quot;audio&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
		<span class="token property">&quot;pugv&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></details><h2 id="相簿投稿数" tabindex="-1"><a class="header-anchor" href="#相簿投稿数" aria-hidden="true">#</a> 相簿投稿数</h2><blockquote><p>https://api.vc.bilibili.com/link_draw/v1/doc/upload_count</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>uid</td><td>num</td><td>目标用户mid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>all_count</td><td>num</td><td>相簿总数</td><td>总数为以下三者之和</td></tr><tr><td>draw_count</td><td>num</td><td>发布绘画数</td><td></td></tr><tr><td>photo_count</td><td>num</td><td>发布摄影数</td><td></td></tr><tr><td>daily_count</td><td>num</td><td>发布日常（图片动态）数</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询用户<code>mid=53456</code>的投稿相簿数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.vc.bilibili.com/link_draw/v1/doc/upload_count&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;uid=53456&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;all_count&quot;</span><span class="token operator">:</span><span class="token number">92</span><span class="token punctuation">,</span>
        <span class="token property">&quot;draw_count&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;photo_count&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;daily_count&quot;</span><span class="token operator">:</span><span class="token number">87</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,52),p=[d];function o(r,l){return s(),n("div",null,p)}const i=t(e,[["render",o],["__file","status_number.html.vue"]]);export{i as default};
