import{_ as t,o as a,c as s,e as n}from"./app-0a5b3274.js";const e={},d=n(`<h1 id="动态操作" tabindex="-1"><a class="header-anchor" href="#动态操作" aria-hidden="true">#</a> 动态操作</h1><h2 id="删除动态" tabindex="-1"><a class="header-anchor" href="#删除动态" aria-hidden="true">#</a> 删除动态</h2><blockquote><p>https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/rm_dynamic</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（multipart/form-data）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th></tr></thead><tbody><tr><td>dynamic_id</td><td>num</td><td>动态id</td></tr><tr><td>csrf_token</td><td>str</td><td>csrf</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>0:成功</td></tr><tr><td></td><td></td><td>500404:已经删除过</td></tr><tr><td></td><td></td><td>500406:不是自己的</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td></tr><tr><td>message</td><td>str</td><td>和msg一样</td></tr><tr><td>data</td><td>obj</td><td>未知</td></tr></tbody></table><details><summary>查看示例</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/rm_dynamic&#39;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-X</span> POST <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&#39;User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0&#39;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&#39;Referer: https://t.bilibili.com/&#39;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: SESSDATA=********; bili_jct=de2731532b4ab96bc8536da948932668;&#39;</span> <span class="token punctuation">\\</span>
    --data-raw <span class="token string">&#39;dynamic_id=588320531406678918&amp;csrf_token=de2731532b4ab96bc8536da948932668&amp;csrf=de2731532b4ab96bc8536da948932668&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_gt_&quot;</span><span class="token operator">:</span><span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="删除草稿" tabindex="-1"><a class="header-anchor" href="#删除草稿" aria-hidden="true">#</a> 删除草稿</h2><blockquote><p>https://api.vc.bilibili.com/dynamic_draft/v1/dynamic_draft/rm_draft</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（application/x-www-form-urlencoded）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th></tr></thead><tbody><tr><td>draft_id</td><td>num</td><td>定时发送草稿id</td></tr><tr><td>csrf_token</td><td>str</td><td>csrf</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>0:成功<br>4120015: 系统异常</td></tr><tr><td>message</td><td>str</td><td>错误信息</td></tr><tr><td>ttl</td><td>num</td><td>1</td></tr><tr><td>data</td><td>obj</td><td>空对象</td></tr></tbody></table><details><summary>查看示例</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://api.vc.bilibili.com/dynamic_draft/v1/dynamic_draft/rm_draft&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;draft_id=755409289278914611&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxxx&#39;</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx;&#39;</span> <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
 	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span> 
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
 	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,21),r=[d];function o(p,i){return a(),s("div",null,r)}const l=t(e,[["render",o],["__file","action.html.vue"]]);export{l as default};
