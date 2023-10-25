import{_ as t,o as s,c as n,e as a}from"./app-0a5b3274.js";const e={},o=a(`<h1 id="通过ip确定地理位置" tabindex="-1"><a class="header-anchor" href="#通过ip确定地理位置" aria-hidden="true">#</a> 通过ip确定地理位置</h1><h2 id="通过ip确定位置" tabindex="-1"><a class="header-anchor" href="#通过ip确定位置" aria-hidden="true">#</a> 通过ip确定位置</h2><blockquote><p>https://api.bilibili.com/x/web-interface/zone</p></blockquote><p><em>请求方式：GET</em></p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>addr</td><td>str</td><td>公网IP地址</td><td></td></tr><tr><td>country</td><td>str</td><td>国家/地区名</td><td></td></tr><tr><td>province</td><td>str</td><td>省/州</td><td>非必须存在项</td></tr><tr><td>city</td><td>str</td><td>城市</td><td>非必须存在项</td></tr><tr><td>isp</td><td>str</td><td>运营商名</td><td></td></tr><tr><td>latitude</td><td>num</td><td>纬度</td><td></td></tr><tr><td>longitude</td><td>num</td><td>经度</td><td></td></tr><tr><td>zone_id</td><td>num</td><td>ip数据库id</td><td></td></tr><tr><td>country_code</td><td>num</td><td>国家/地区代码</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/zone&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;addr&quot;</span><span class="token operator">:</span><span class="token string">&quot;36.40.120.145&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;country&quot;</span><span class="token operator">:</span><span class="token string">&quot;中国&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;province&quot;</span><span class="token operator">:</span><span class="token string">&quot;陕西&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;city&quot;</span><span class="token operator">:</span><span class="token string">&quot;渭南&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isp&quot;</span><span class="token operator">:</span><span class="token string">&quot;电信&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;latitude&quot;</span><span class="token operator">:</span><span class="token number">34.4995</span><span class="token punctuation">,</span>
            <span class="token property">&quot;longitude&quot;</span><span class="token operator">:</span><span class="token number">109.492821</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zone_id&quot;</span><span class="token operator">:</span><span class="token number">4472912</span><span class="token punctuation">,</span>
            <span class="token property">&quot;country_code&quot;</span><span class="token operator">:</span><span class="token number">86</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,12),d=[o];function p(r,i){return s(),n("div",null,d)}const l=t(e,[["render",p],["__file","ip.html.vue"]]);export{l as default};
