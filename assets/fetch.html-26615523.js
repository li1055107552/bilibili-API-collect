import{_ as p,r as e,o,c as l,a as n,b as s,d as r,w as c,e as a}from"./app-0a5b3274.js";const u={},d=a('<h1 id="拉取题目" tabindex="-1"><a class="header-anchor" href="#拉取题目" aria-hidden="true">#</a> 拉取题目</h1><h2 id="拉取基础题" tabindex="-1"><a class="header-anchor" href="#拉取基础题" aria-hidden="true">#</a> 拉取基础题</h2><blockquote><p>https://api.bilibili.com/x/answer/v4/base</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie或APP</p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>41014：答题过快或错误太多<br>41020：用户基础题已通过<br>41023：用户答题记录不存在</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>question</td><td>obj</td><td>题目内容</td><td></td></tr></tbody></table><p><code>data</code>中的<code>question</code>对象：</p>',11),i=n("thead",null,[n("tr",null,[n("th",null,"字段"),n("th",null,"类型"),n("th",null,"内容"),n("th",null,"备注")])],-1),k=n("tr",null,[n("td",null,"id"),n("td",null,"num"),n("td",null,"问题id"),n("td",null,[n("strong",null,"问题id不代表题图，因为选项是打乱的")])],-1),b=n("tr",null,[n("td",null,"number"),n("td",null,"num"),n("td",null,"当前题号"),n("td")],-1),m=n("tr",null,[n("td",null,"q_height"),n("td",null,"num"),n("td",null,"问题部分总高度"),n("td")],-1),v=n("tr",null,[n("td",null,"q_coord_y"),n("td",null,"num"),n("td",null,"问题部分Y裁剪起始"),n("td",null,"当然是0")],-1),q=n("tr",null,[n("td",null,"image"),n("td",null,"str"),n("td",null,"题图url"),n("td",null,"题目文字+所有的选项文字排版成一张图，存储在bfs中")],-1),h=n("tr",null,[n("td",null,"from"),n("td",null,"str"),n("td",null,"问题来源页面url"),n("td",null,"如：“xx弹幕是否违规”所在的视频页")],-1),y=n("tr",null,[n("td",null,"options"),n("td",null,"array"),n("td",null,"选项列表"),n("td")],-1),g=n("td",null,"type_id",-1),_=n("td",null,"num",-1),f=n("td",null,"题目父类型id",-1),x=n("br",null,null,-1),E=n("strong",null,"注：36为基础题",-1),A=n("tr",null,[n("td",null,"type_name"),n("td",null,"str"),n("td",null,"分院小电视提示文案"),n("td",null,"如：xx小电视")],-1),j=n("tr",null,[n("td",null,"type_image"),n("td",null,"str"),n("td",null,"分院小电视图标url"),n("td")],-1),w=a(`<p><code>question</code>中的<code>options</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>选项A</td><td></td></tr><tr><td>1</td><td>obj</td><td>选项B</td><td>选项至少2个</td></tr><tr><td>2</td><td>obj</td><td>选项C</td><td>数组长度取决于选项个数</td></tr><tr><td>3</td><td>obj</td><td>选项D</td><td></td></tr></tbody></table><p><code>question</code>中的<code>options</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>number</td><td>num</td><td>选项序号</td><td>如：1为A 2为B</td></tr><tr><td>high</td><td>num</td><td>选项部分总高度</td><td></td></tr><tr><td>coord_y</td><td>num</td><td>选项部分Y裁剪起始</td><td></td></tr><tr><td>hash</td><td>str</td><td>选项hash</td><td>作为提交对应选项时应传参</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/answer/v4/base&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;question&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">6511</span><span class="token punctuation">,</span>
      <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;q_height&quot;</span><span class="token operator">:</span> <span class="token number">38.4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;q_coord_y&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/member/9d7f1f1f0b7478a621d1b998a5a98982.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;high&quot;</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
          <span class="token property">&quot;coord_y&quot;</span><span class="token operator">:</span> <span class="token number">38.4</span><span class="token punctuation">,</span>
          <span class="token property">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f7619d6c2040d44f39dc87a7aa34fb9e&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;high&quot;</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
          <span class="token property">&quot;coord_y&quot;</span><span class="token operator">:</span> <span class="token number">80.4</span><span class="token punctuation">,</span>
          <span class="token property">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dce5140040f40ca4030783585684369d&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type_id&quot;</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小电视校长&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type_image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/7b67c0c0da64a6ab059ff49bb0d4b92988b91806.png&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="拉取附加题" tabindex="-1"><a class="header-anchor" href="#拉取附加题" aria-hidden="true">#</a> 拉取附加题</h2><blockquote><p>https://api.bilibili.com/x/answer/v4/extra</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie或APP</p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>41014：答题过快或错误太多<br>41021：用户基础题未通过<br>41023：用户答题记录不存在<br>41054：用户附加题已通过</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><p>同<a href="#%E6%8B%89%E5%8F%96%E5%9F%BA%E7%A1%80%E9%A2%98">拉取基础题</a>的<code>data</code>对象</p><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/answer/v4/extra&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;question&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">11492</span><span class="token punctuation">,</span>
            <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
            <span class="token property">&quot;q_height&quot;</span><span class="token operator">:</span> <span class="token number">76.8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;q_coord_y&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/member/b6c846613bd0b44cd7c8af1d83e3f0c2.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.bilibili.com/video/av14659093&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;high&quot;</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;coord_y&quot;</span><span class="token operator">:</span> <span class="token number">76.8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ca15e6009047cf82358c50ab90fd8d9e&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;high&quot;</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;coord_y&quot;</span><span class="token operator">:</span> <span class="token number">118.8</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60e86a1c736c68da3462f66377e4e8ca&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type_id&quot;</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小电视校长&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type_image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/7b67c0c0da64a6ab059ff49bb0d4b92988b91806.png&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="拉取自选题" tabindex="-1"><a class="header-anchor" href="#拉取自选题" aria-hidden="true">#</a> 拉取自选题</h2><blockquote><p>https://api.bilibili.com/x/answer/v4/pro</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie或APP</p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>41014：答题过快或错误太多<br>41021：用户基础题未通过<br>41023：用户答题记录不存在<br>41051：用户答题验证码未通过<br>41055：基础附加题未通过</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><p>同<a href="#%E6%8B%89%E5%8F%96%E5%9F%BA%E7%A1%80%E9%A2%98">拉取基础题</a>的<code>data</code>对象</p><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/answer/v4/pro&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;question&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">824</span><span class="token punctuation">,</span>
            <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">54</span><span class="token punctuation">,</span>
            <span class="token property">&quot;q_height&quot;</span><span class="token operator">:</span> <span class="token number">38.4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;q_coord_y&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/member/417e02be5652f79d0312fa2fcee28869.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;high&quot;</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;coord_y&quot;</span><span class="token operator">:</span> <span class="token number">38.4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c4574c23cf728c19abeab3e7525258d4&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;high&quot;</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;coord_y&quot;</span><span class="token operator">:</span> <span class="token number">80.4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ffd48760758fbb8a2c183d1d04f692f8&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;high&quot;</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;coord_y&quot;</span><span class="token operator">:</span> <span class="token number">122.4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;898d414dff49fe20c4a1da1e148fadb2&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;high&quot;</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;coord_y&quot;</span><span class="token operator">:</span> <span class="token number">164.4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;09018443f09d8ef4f6fec5e96e082270&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;游戏小电视&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type_image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/6590bee26086fed66ee7cc5bac26a32d2f733037.png&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,31);function B(S,T){const t=e("RouterLink");return o(),l("div",null,[d,n("table",null,[i,n("tbody",null,[k,b,m,v,q,h,y,n("tr",null,[g,_,f,n("td",null,[s("见"),r(t,{to:"/docs/newbie_exam/info.html#%E6%9F%A5%E8%AF%A2%E8%87%AA%E9%80%89%E9%A2%98%E5%88%86%E7%B1%BB"},{default:c(()=>[s("查询自选题分类")]),_:1}),x,E])]),A,j])]),w])}const F=p(u,[["render",B],["__file","fetch.html.vue"]]);export{F as default};
