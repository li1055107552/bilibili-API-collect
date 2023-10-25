import{_ as e}from"./download-d77df227.js";import{_ as d,r as l,o as r,c as u,a as t,b as n,d as a,w as o,e as p}from"./app-0a5b3274.js";const c={},i=p('<h1 id="课程视频流url" tabindex="-1"><a class="header-anchor" href="#课程视频流url" aria-hidden="true">#</a> 课程视频流URL</h1><img src="'+e+'" width="100" height="100"><h2 id="获取课程视频流url-web端" tabindex="-1"><a class="header-anchor" href="#获取课程视频流url-web端" aria-hidden="true">#</a> 获取课程视频流URL（web端）</h2><blockquote><p>https://api.bilibili.com/pugv/player/web/playurl</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>注：</strong></p>',7),k=t("li",null,"本接口为课程视频专用，故与普通视频不互通",-1),v=t("p",null,[t("strong",null,"url参数：")],-1),m=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),b=t("tr",null,[t("td",null,"avid"),t("td",null,"num"),t("td",null,"课程avid"),t("td",null,"必要"),t("td")],-1),q=t("tr",null,[t("td",null,"ep_id"),t("td",null,"num"),t("td",null,"课程epid"),t("td",null,"必要"),t("td")],-1),h=t("tr",null,[t("td",null,"cid"),t("td",null,"num"),t("td",null,"视频cid"),t("td",null,"必要"),t("td")],-1),_=t("td",null,"qn",-1),g=t("td",null,"num",-1),y=t("td",null,"视频清晰度选择",-1),f=t("td",null,"非必要",-1),N=t("td",null,"fnver",-1),E=t("td",null,"num",-1),B=t("td",null,"视频流版本",-1),x=t("td",null,"非必要",-1),A=t("td",null,"fnval",-1),T=t("td",null,"num",-1),j=t("td",null,"视频流类型",-1),C=t("td",null,"非必要",-1),P=t("tr",null,[t("td",null,"fourk"),t("td",null,"num"),t("td",null,"是否允许4K视频"),t("td",null,"非必要"),t("td",null,[n("默认为0"),t("br"),n("画质最高1080P：0"),t("br"),n("画质最高4K：1")])],-1),V=p(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-400：请求错误<br>-404：无视频<br>-403：权限不足（未购买）</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>obj</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>accept_format</td><td>str</td><td>视频支持的分辨率的格式</td><td></td></tr><tr><td>code</td><td>num</td><td>0</td><td></td></tr><tr><td>durl</td><td>array</td><td>视频分段</td><td></td></tr><tr><td>seek_param</td><td>str</td><td>start</td><td></td></tr><tr><td>no_rexcode</td><td>num</td><td>0</td><td></td></tr><tr><td>format</td><td>str</td><td>视频格式</td><td></td></tr><tr><td>fnval</td><td>num</td><td>0</td><td></td></tr><tr><td>video_project</td><td>bool</td><td>true</td><td></td></tr><tr><td>fnver</td><td>num</td><td>0</td><td></td></tr><tr><td>message</td><td>str</td><td>空</td><td></td></tr><tr><td>type</td><td>str</td><td>视频格式</td><td></td></tr><tr><td>accept_quality</td><td>array</td><td>视频支持的分辨率列表</td><td></td></tr><tr><td>quality</td><td>num</td><td>视频分辨率代码</td><td><strong>值含义见上表</strong></td></tr><tr><td>timelength</td><td>num</td><td>视频长度</td><td>单位为毫秒<br>不同分辨率可能有略微差异</td></tr><tr><td>result</td><td>str</td><td>suee</td><td><strong>作用尚不明确</strong></td></tr><tr><td>seek_type</td><td>str</td><td>offset</td><td><strong>作用尚不明确</strong></td></tr><tr><td>has_paid</td><td>bool</td><td>false</td><td><strong>作用尚不明确</strong></td></tr><tr><td>supportFormats</td><td>array</td><td>视频分辨率详细列表</td><td></td></tr><tr><td>from</td><td>str</td><td>local</td><td><strong>作用尚不明确</strong></td></tr><tr><td>video_codecid</td><td>num</td><td>？？？</td><td><strong>作用尚不明确</strong></td></tr><tr><td>accept_description</td><td>array</td><td>视频支持的分辨率列表</td><td></td></tr><tr><td>status</td><td>num</td><td>0</td><td><strong>作用尚不明确</strong></td></tr></tbody></table><p><code>data</code>中的<code>durl</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>视频分段1信息</td><td></td></tr><tr><td>n</td><td>obj</td><td>视频分段(n+1)信息</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td></td></tr></tbody></table><p><code>durl</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>size</td><td>num</td><td>视频大小</td><td>单位为Byte</td></tr><tr><td>ahead</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>length</td><td>num</td><td>视频长度</td><td>单位为毫秒</td></tr><tr><td>vhead</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>backup_url</td><td>array</td><td>备用视频流</td><td></td></tr><tr><td>url</td><td>str</td><td>视频流url</td><td>链接有效时间为120min</td></tr><tr><td>order</td><td>num</td><td>视频分段序号</td><td>某些视频会分为多个片段</td></tr></tbody></table><p><code>durl</code>数组中的对象中的<code>backup_url</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>备用视频流url</td><td>有效时间为120min</td></tr></tbody></table><p><code>data</code>中的<code>supportFormats</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>分辨率详细信息1</td><td></td></tr><tr><td>n</td><td>obj</td><td>分辨率详细信息(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>supportFormats</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>format</td><td>str</td><td>分辨率名称</td><td></td></tr><tr><td>description</td><td>atr</td><td>分辨率备注</td><td></td></tr><tr><td>quality</td><td>num</td><td>分辨率代码</td><td></td></tr></tbody></table><p><code>data</code>中的<code>accept_description</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>分辨率名称1</td><td></td></tr><tr><td>n</td><td>str</td><td>分辨率名称(n+1)</td><td></td></tr><tr><td>……</td><td>str</td><td>……</td><td>……</td></tr></tbody></table><p><strong>示例：</strong></p><p>获取课程<code>ep790</code>（cid=<code>132105993</code>，avid=<code>76973173</code>）的视频流url，清晰度为1080P60</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/pugv/player/web/playurl&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;ep_id=790&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;avid=76973173&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=132105993&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;qn=116&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;accept_format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv_p60,flv720_p60,flv,flv720,flv480,flv360&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;durl&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1105854161</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ahead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;length&quot;</span><span class="token operator">:</span> <span class="token number">2222204</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vhead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;backup_url&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;https://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/93/59/132105993/132105993_da2-1-116.flv?e=ig8euxZM2rNcNbNghzTBhwdlhbNz7bUVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&amp;uipk=5&amp;nbs=1&amp;deadline=1591596728&amp;gen=playurl&amp;os=ks3cbv&amp;oi=606633803&amp;trid=76bea9a9e56f4cb89a9aff2f8213c9acu&amp;platform=pc&amp;upsig=b271bf493bff32ffe62969582c8d18b4&amp;uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&amp;mid=0&amp;orderid=1,2&amp;logo=40000000&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://upos-sz-mirrorks3.bilivideo.com/upgcxcode/93/59/132105993/132105993_da2-1-116.flv?e=ig8euxZM2rNcNbNghzTBhwdlhbNz7bUVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&amp;uipk=5&amp;nbs=1&amp;deadline=1591596728&amp;gen=playurl&amp;os=ks3bv&amp;oi=606633803&amp;trid=76bea9a9e56f4cb89a9aff2f8213c9acu&amp;platform=pc&amp;upsig=6a8ae3711bd0bb2a484ec2427d659b14&amp;uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&amp;mid=0&amp;orderid=0,2&amp;logo=80000000&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;md5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;seek_param&quot;</span><span class="token operator">:</span> <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;no_rexcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv_p60&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fnval&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;video_project&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fnver&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FLV&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;accept_quality&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">116</span><span class="token punctuation">,</span>
            <span class="token number">74</span><span class="token punctuation">,</span>
            <span class="token number">80</span><span class="token punctuation">,</span>
            <span class="token number">64</span><span class="token punctuation">,</span>
            <span class="token number">32</span><span class="token punctuation">,</span>
            <span class="token number">16</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;quality&quot;</span><span class="token operator">:</span> <span class="token number">116</span><span class="token punctuation">,</span>
        <span class="token property">&quot;timelength&quot;</span><span class="token operator">:</span> <span class="token number">2222204</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;suee&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;seek_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offset&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;has_paid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;supportFormats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv_p60&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;高清 1080P60&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;quality&quot;</span><span class="token operator">:</span> <span class="token number">116</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv720_p60&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;高清 720P60&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;quality&quot;</span><span class="token operator">:</span> <span class="token number">74</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;高清 1080P&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;quality&quot;</span><span class="token operator">:</span> <span class="token number">80</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv720&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;高清 720P&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;quality&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv480&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;清晰 480P&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;quality&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv360&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;流畅 360P&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;quality&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;local&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;video_codecid&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        <span class="token property">&quot;accept_description&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;高清 1080P60&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;高清 720P60&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;高清 1080P&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;高清 720P&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;清晰 480P&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;流畅 360P&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,21);function M(F,w){const s=l("RouterLink");return r(),u("div",null,[i,t("ol",null,[k,t("li",null,[n("大部分使用方法及视频的取流方法继承"),a(s,{to:"/docs/video/videostream_url.html"},{default:o(()=>[n("视频流url文档")]),_:1})])]),v,t("table",null,[m,t("tbody",null,[b,q,h,t("tr",null,[_,g,y,f,t("td",null,[n("参考"),a(s,{to:"/docs/video/videostream_url.html#qn%E8%A7%86%E9%A2%91%E6%B8%85%E6%99%B0%E5%BA%A6%E6%A0%87%E8%AF%86"},{default:o(()=>[n("qn定义")]),_:1})])]),t("tr",null,[N,E,B,x,t("td",null,[n("参考"),a(s,{to:"/docs/video/videostream_url.html#fnver%E8%A7%86%E9%A2%91%E6%B5%81%E7%89%88%E6%9C%AC%E6%A0%87%E8%AF%86"},{default:o(()=>[n("fnver定义")]),_:1})])]),t("tr",null,[A,T,j,C,t("td",null,[n("参考"),a(s,{to:"/docs/video/videostream_url.html#fnval%E8%A7%86%E9%A2%91%E6%B5%81%E6%A0%BC%E5%BC%8F%E6%A0%87%E8%AF%86"},{default:o(()=>[n("fnval定义")]),_:1})])]),P])]),V])}const Z=d(c,[["render",M],["__file","videostream_url.html.vue"]]);export{Z as default};
