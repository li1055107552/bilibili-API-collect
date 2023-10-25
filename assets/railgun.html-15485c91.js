import{_ as t,o as n,c as s,e as a}from"./app-0a5b3274.js";const e={},p=a(`<h1 id="电磁力相关" tabindex="-1"><a class="header-anchor" href="#电磁力相关" aria-hidden="true">#</a> 电磁力相关</h1><p>电磁力每周日下午刷新</p><h2 id="获取电磁力等级-web端" tabindex="-1"><a class="header-anchor" href="#获取电磁力等级-web端" aria-hidden="true">#</a> 获取电磁力等级（web端）</h2><blockquote><p>https://api.bilibili.com/studio/up-rating/v3/rating/info</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：仅可Cookie（SESSDATA）</p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>当前用户mid</td><td></td></tr><tr><td>level</td><td>num</td><td>电磁力等级</td><td></td></tr><tr><td>score</td><td>num</td><td>电磁力分数</td><td></td></tr><tr><td>credit</td><td>num</td><td>信用分</td><td></td></tr><tr><td>state</td><td>num</td><td>?</td><td>一直是2</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://member.bilibili.com/x/web/elec/user&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> ***<span class="token punctuation">,</span>
        <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">326</span><span class="token punctuation">,</span>
        <span class="token property">&quot;credit&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;update_date&quot;</span><span class="token operator">:</span> <span class="token number">1694966400</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="失效-获取电磁力详细数值-双端" tabindex="-1"><a class="header-anchor" href="#失效-获取电磁力详细数值-双端" aria-hidden="true">#</a> （失效）获取电磁力详细数值（双端）</h2><blockquote><p>https://api.bilibili.com/studio/up-rating/rating/summary</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或APP</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>date</td><td>str</td><td>数据刷新时间</td><td>YYYY-MM-DD</td></tr><tr><td>level</td><td>obj</td><td>电磁力等级</td><td></td></tr><tr><td>creative</td><td>obj</td><td>创作力</td><td></td></tr><tr><td>influence</td><td>obj</td><td>影响力</td><td></td></tr><tr><td>credit</td><td>obj</td><td>信用分</td><td></td></tr></tbody></table><p><code>data</code>中的<code>level</code> <code>creative</code> <code>influence</code> <code>credit</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>data</td><td>num</td><td>数值</td><td></td></tr><tr><td>prev</td><td>num</td><td>？？？</td><td><strong>作用尚不明确</strong></td></tr><tr><td>desc</td><td>str</td><td>描述</td><td></td></tr><tr><td>date</td><td>num</td><td>刷新时间</td><td>时间戳</td></tr></tbody></table><p><strong>示例：</strong></p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/studio/up-rating/rating/summary&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>APP方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/studio/up-rating/rating/summary&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-07-05&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;正式开启创作之路，希望未来的路上我们携手相伴，创作更多优质内容~&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token number">1593878400</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;creative&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
            <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;考察近一年来的创作行为，良好的原创投稿行为和互动数据有助于提升创作力。&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token number">1593878400</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;influence&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">54</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token number">54</span><span class="token punctuation">,</span>
            <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;根据近一年活跃粉丝数据进行评估，良好的粉丝活跃度是影响力的基础。&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token number">1593878400</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;credit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;良好的投稿记录将维持较高的信用分，违反投稿公约的行为将扣除信用分。&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token number">1594106147</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取电磁力数值历史变化-双端" tabindex="-1"><a class="header-anchor" href="#获取电磁力数值历史变化-双端" aria-hidden="true">#</a> 获取电磁力数值历史变化（双端）</h2><blockquote><p>https://api.bilibili.com/studio/up-rating/rating/history</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或APP</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>type</td><td>num</td><td>目标数据类型</td><td>必要</td><td>类型代码见下表</td></tr></tbody></table><p>类型代码<code>type</code>：</p><table><thead><tr><th>代码</th><th>含义</th></tr></thead><tbody><tr><td>1</td><td>创作力</td></tr><tr><td>2</td><td>影响力</td></tr><tr><td>3</td><td>信用分</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>date</td><td>array</td><td>数据记录时间</td><td>每周更新</td></tr><tr><td>score</td><td>array</td><td>电磁力等级</td><td>每周更新</td></tr></tbody></table><p><code>data</code>中的<code>date</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>1周前的日期</td><td>MM-DD</td></tr><tr><td>n</td><td>str</td><td>（n+1）周前的日期</td><td>与数值一一对应</td></tr><tr><td>……</td><td>str</td><td>……</td><td>……</td></tr><tr><td>7</td><td>str</td><td>8周前的日期</td><td>最后一条</td></tr></tbody></table><p><code>data</code>中的<code>score</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>num</td><td>1周前的数值</td><td></td></tr><tr><td>n</td><td>num</td><td>（n+1）周前的数值</td><td>与日期一一对应</td></tr><tr><td>……</td><td>num</td><td>……</td><td>……</td></tr><tr><td>7</td><td>num</td><td>8周前的数值</td><td>最后一条</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询创作力的历史变化</p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/studio/up-rating/rating/history&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=1&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>APP方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/studio/up-rating/rating/history&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;05-17&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;05-24&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;05-31&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;06-07&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;06-14&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;06-21&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;06-28&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;07-05&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">48</span><span class="token punctuation">,</span>
            <span class="token number">48</span><span class="token punctuation">,</span>
            <span class="token number">49</span><span class="token punctuation">,</span>
            <span class="token number">49</span><span class="token punctuation">,</span>
            <span class="token number">49</span><span class="token punctuation">,</span>
            <span class="token number">49</span><span class="token punctuation">,</span>
            <span class="token number">49</span><span class="token punctuation">,</span>
            <span class="token number">49</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,57),d=[p];function o(r,l){return n(),s("div",null,d)}const c=t(e,[["render",o],["__file","railgun.html.vue"]]);export{c as default};
