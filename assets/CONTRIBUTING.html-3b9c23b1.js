import{_ as c,r as a,o as r,c as i,a as n,b as e,d as t,w as l,e as o}from"./app-0a5b3274.js";const p={},u=n("h1",{id:"bilibili-api-collect",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bilibili-api-collect","aria-hidden":"true"},"#"),e(" bilibili-API-collect")],-1),h=n("p",null,"欢迎来到 bilibili-API-collect 社区贡献指南，本文主要面向需要进行提交贡献文档内容的用户。",-1),b=n("h2",{id:"总则",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总则","aria-hidden":"true"},"#"),e(" 总则")],-1),m={href:"https://github.com/SocialSisterYi/bilibili-API-collect",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.bilibili.com/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"主站业务接口",-1),_={href:"https://zh.wikipedia.org/zh-cn/Markdown",target:"_blank",rel:"noopener noreferrer"},f=n("strong",null,"路径",-1),x=n("strong",null,"文件",-1),P=n("p",null,[e("本项目收集的接口类型包括但不限于 REST API、gRPC、WebSocket，文档内统一优先使用安全套接字协议，如"),n("code",null,"https"),e("、"),n("code",null,"securityRpc"),e("、"),n("code",null,"wss"),e("。")],-1),y=n("h2",{id:"目录与路径结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录与路径结构","aria-hidden":"true"},"#"),e(" 目录与路径结构")],-1),q=n("h3",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),e(" 目录")],-1),w=n("strong",null,"Markdown无序列表",-1),A=n("code",null,"视频",-1),I=n("code",null,"基本信息",-1),S=n("code",null,"快照",-1),T=n("code",null,"推荐",-1),E=n("strong",null,"Markdown 复选框",-1),C=o(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [x] 视频
  <span class="token list punctuation">-</span> [x] 基本信息
  <span class="token list punctuation">-</span> [x] 快照
  <span class="token list punctuation">-</span> [x] 推荐
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> 路径</h3><p>路径层级应当与文档目录一致，以文件夹的形式存放在项目中的<code>/docs</code>路径下，命名统一使用英文，如<code>video</code>、<code>danmaku</code>、<code>comment</code></p><p>二级、三级路径应当存在二级三级目录，以<code>README.md</code>的形式</p><h3 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h3><p>各个子接口集整理为 md 文件，命名统一使用英文，如<code>info.md</code>、<code>action.md</code>、<code>list.md</code></p><p>文档文件中用于存放相关的接口的说明，如<code>video/</code>下的<code>info.md</code>，存在<code>查询视频基本信息</code>、<code>查询视频简介</code>、<code>查询视频分P列表</code>等内容</p><h2 id="markdown文档内容格式" tabindex="-1"><a class="header-anchor" href="#markdown文档内容格式" aria-hidden="true">#</a> Markdown文档内容格式</h2>`,8),N={href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://vuepress.vuejs.org/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"},j=o(`<p>注：以下文档范式可根据<strong>实际情况</strong>进行调整</p><h3 id="头部" tabindex="-1"><a class="header-anchor" href="#头部" aria-hidden="true">#</a> 头部</h3><p>文档首行为 <strong>一级标签</strong> 格式标题</p><p><strong>文档头部不再需要手写索引</strong></p><h3 id="接口说明" tabindex="-1"><a class="header-anchor" href="#接口说明" aria-hidden="true">#</a> 接口说明</h3><p>文档中可存在多个接口说明，应当遵守同一范式，依次排列在文档中</p><p>接口说明分为<code>标题</code>、<code>地址</code>、<code>说明</code>、<code>请求参数</code>、<code>响应正文</code>、<code>示例</code>这些部分</p><p>接口标题为 <strong>二级以下</strong> 的标签，接口地址使用 <strong>引用</strong> 语法，地址只保留 REST API 路径，不应携带 query 等内容</p><p>接口地址下方需要注明接口的请求方式，如<code>GET</code>、<code>POST</code>、<code>PUT</code>等，使用 <strong>斜体</strong> 语法</p><p>若接口存在认证或鉴权，需要在说明中注明，如<code>Cookie(SESSDATA)</code>、<code>APP</code>（认证是针对用户的，鉴权是针对接口使用的</p><p>其他使用说明也可写在这里，如<code>限制游客访问的视频需要登录</code></p><p>eg：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 获取视频详细信息_web端</span>

<span class="token blockquote punctuation">&gt;</span> https://api.bilibili.com/x/web-interface/view

<span class="token italic"><span class="token punctuation">*</span><span class="token content">请求方式：GET</span><span class="token punctuation">*</span></span>

认证方式：Cookie(SESSDATA)

限制游客访问的视频需要登录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>请求参数</strong>应在<strong>接口说明</strong>的下方，应注明参数类型 url 参数或 正文参数（正文参数应注明 content-type，如<code>application/x-www-form-urlencoded</code>或<code>multipart/form-data</code>），使用 <strong>加粗</strong> 语法</p><p>对象的字段及其含义使用 <strong>表格</strong> 进行整理，表头统一为<code>参数名</code>、<code>类型</code>、<code>内容</code>、<code>必要性</code>、<code>备注</code>，类型为<code>num</code>、<code>str</code>、<code>bool</code>、<code>nums</code>、<code>strs</code>、<code>file</code>等，必要性为<code>必要</code>、<code>非必要</code>、<code>必要(可选)</code>等，表格内每个字段为一行</p><p>eg：</p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件 avid</td><td>必要 (可选)</td><td>avid 与 bvid 任选</td></tr><tr><td>bvid</td><td>str</td><td>稿件 bvid</td><td>必要 (可选)</td><td>avid 与 bvid 任选</td></tr></tbody></table><p><strong>响应正文</strong>应在<strong>请求参数</strong>的下方，接口响应的数据格式应标注，如<code>JSON回复</code>、<code>XML回复</code>、<code>Protobuf回复</code>，使用 <strong>加粗</strong> 语法</p><p>json object 或 protobuf message 应以对象的 <strong>表格</strong> 形式书写，表头为<code>根对象</code>或<code>xx中的yy对象</code>，若对象位于数组中为<code>xx数组中的对象</code></p><p>表头统一为<code>字段</code>、<code>类型</code>、<code>内容</code>、<code>备注</code>，类型为 JSON / Protobuf 的标准类型</p><p>不明确定义的字段说明在末尾添加问号，如<code>播放数？</code>；定义尚未明确的字段使用问号包于括号中占位，如<code>（？）</code></p><p>多个对象及数组，使用<strong>遍历树</strong>的顺序进行排列</p><p>eg：</p><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>bvid</td><td>str</td><td>稿件 bvid</td><td></td></tr><tr><td>aid</td><td>num</td><td>稿件 avid</td><td></td></tr><tr><td>videos</td><td>num</td><td>稿件分P总数</td><td>默认为 1</td></tr><tr><td>tid</td><td>num</td><td>分区 tid</td><td></td></tr></tbody></table><p>json array 或 protobuf repeated 类型使用数组的 <strong>表格</strong> 形式书写，表头统一为<code>项</code>、<code>类型</code>、<code>内容</code>、<code>备注</code>，无限长度数组表尾需要添加<strong>省略号</strong></p><p>数组每项内容若与实际数据有关联，<code>内容</code>字段则可标为<code>(n+1)P 视频内容</code>这样的形式</p><p>eg：</p><p><code>data</code>中的<code>pages</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>1P 视频内容</td><td>无分P仅有此项</td></tr><tr><td>n</td><td>obj</td><td>(n+1)P 视频内容</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><strong>示例</strong>部分位于所有<strong>响应正文</strong>部分下方，需要<strong>加粗</strong>格式，分为请求命令示例与响应体示例两部分</p><p>请求命令示例为一段可测试该接口的 curl 命令或 Python 脚本，使用 <strong>代码块</strong> 语法书写，命令应当尽可能简短、便于使人阅读</p><p>示例命令中的认证信息应做<strong>脱敏处理</strong>，如 Cookie、Token、access_key 等，可替换为<code>xxx</code>占位</p><p>示例命令前后可以适当添加一些文字说明</p><p>响应体示例为一段格式化后的 JSON 或 protobuf message，使用 <strong>代码块</strong> 语法书写，并使用<code>&lt;details&gt;</code>标签进行折叠</p><p>eg：</p><p><strong>示例：</strong></p><p>获取视频<code>av85440373</code>的基本信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/view&#39;</span> <span class="token punctuation">\\</span>
	--data-urlencode <span class="token string">&#39;aid=85440373&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span>查看响应示例：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV117411r7R1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">85440373</span><span class="token punctuation">,</span>
    <span class="token property">&quot;videos&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tid&quot;</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;原创音乐&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;copyright&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="枚举值与属性位" tabindex="-1"><a class="header-anchor" href="#枚举值与属性位" aria-hidden="true">#</a> 枚举值与属性位</h3><p>接口返回或请求中若存在一些 enum 类型或二进制属性位，应当单独进行探讨，如视频的属性位<code>attribute</code>或视频清晰度<code>qn</code></p><p>这些值及其说明使用 <strong>表格</strong> 进行整理，表头统一为<code>位</code> / <code>代码</code> / <code>值</code>、<code>含义</code>、<code>备注</code></p><p>这些枚举值或属性位的用法应附加文字说明</p><p>eg：</p><table><thead><tr><th>值</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>6</td><td>240P 极速</td><td>仅 MP4 格式支持<br>仅<code>platform=html5</code>时有效</td></tr><tr><td>16</td><td>360P 流畅</td><td></td></tr><tr><td>32</td><td>480P 清晰</td><td></td></tr><tr><td>64</td><td>720P 高清</td><td>WEB 端默认值<br>B站前端需要登录才能选择，但是直接发送请求可以不登录就拿到 720P 的取流地址<br><strong>无 720P 时则为 720P60</strong></td></tr><tr><td>74</td><td>720P60 高帧率</td><td>登录认证</td></tr><tr><td>80</td><td>1080P 高清</td><td>TV 端与 APP 端默认值<br>登录认证</td></tr></tbody></table><h2 id="proto定义格式" tabindex="-1"><a class="header-anchor" href="#proto定义格式" aria-hidden="true">#</a> Proto定义格式</h2>`,49),B={href:"https://protobuf.dev/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://grpc.io/docs/",target:"_blank",rel:"noopener noreferrer"},O=o(`<p>存放于项目的<code>/grpc_api</code>路径下，使用包名进行路径层级的组织，如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/grpc_api/bilibili/main/community/reply/v1/reply.proto
/grpc_api/bilibili/app/archive/v1/archive.proto
/grpc_api/bilibili/app/view/v1/view.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>proto 文件内使用 <strong>单行注释</strong> 标注字段或对象的含义，如</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token comment">// UP主信息</span>
<span class="token keyword">message</span> <span class="token class-name">Author</span> <span class="token punctuation">{</span>
	<span class="token comment">// UP主mid</span>
	<span class="token builtin">int64</span> mid <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token comment">// UP主昵称</span>
	<span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token comment">// UP主头像url</span>
	<span class="token builtin">string</span> face <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文档提交" tabindex="-1"><a class="header-anchor" href="#文档提交" aria-hidden="true">#</a> 文档提交</h2><p>TODO</p><h2 id="issue与社群讨论" tabindex="-1"><a class="header-anchor" href="#issue与社群讨论" aria-hidden="true">#</a> Issue与社群讨论</h2><p>对文档内容存在<strong>不理解</strong>之处、以及发现文档内容有所<strong>缺失</strong>或<strong>错误</strong>，可直接提出，强烈建议以发 <strong>Issue</strong> 的形式参与用户反馈，并希望关于本项目的各种交流都是<strong>公开进行</strong>的，因为这样才可以保证关键信息的一致性。</p><p>由于本项目属于文档型项目，故不设置 Issue 模板，同时允许中英文标题，但提交 Issue 请遵守以下原则：</p>`,9),V=o("<li>标题言简意骇，说明欲提出的问题要点，如<code>如何通过xx接口获取yy</code>、<code>xx接口地址已失效</code>、<code>关于xx字段意义的探讨</code>、<code> 建议将xx加入yy分类</code>等标题；切勿使用表意含糊不清或索取性的标题，如<code>怎么解决风控</code>、<code>补充</code>、<code>搜索的接口是什么</code>、<code>好兄弟有没有投稿的接口</code>等标题</li><li>Issue 正文应对问题进行尽可能详细的描述，展开并聚焦有关的信息，例如：“在前端页面某地址 / APP 某界面会访问某 API（标明地址），它的某参数与文档中不符（标明文档地址）”</li>",2),D={href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways",target:"_blank",rel:"noopener noreferrer"},U=n("p",null,"同时，你还可以通过加入社群的方式参与讨论（包括但不限于本项目",-1),G={href:"https://jq.qq.com/?_wv=1027&k=s1M0LCcu",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://t.me/bilibili_API_collect_community",target:"_blank",rel:"noopener noreferrer"},W=n("p",null,[e("注意：群内讨论同样需要遵守"),n("strong",null,"公开交流"),e("的原则，以及群内会定期清理不活跃成员")],-1);function z(J,Y){const s=a("ExternalLinkIcon"),d=a("RouterLink");return r(),i("div",null,[u,h,b,n("p",null,[n("a",m,[e("bilibili-API-collect"),t(s)]),e(" 项目（简称 BAC 或 b-a-c）是一个仅用于学习研究、社区开源、公益性质的 "),n("a",g,[e("B站（哔哩哔哩）"),t(s)]),e(" API（应用程序接口） 文档，使用 "),n("a",v,[e("CC-BY-NC 4.0 协议"),t(s)]),e(" 开源，它将无差别收集整理相关的"),k,e("。")]),n("p",null,[e("该项目使用 "),n("a",_,[e("MarkDown"),t(s)]),e(" 语法进行文档书写，按照业务类型及功能以 "),f,e(" + "),x,e(" 形式索引，任何用户都可通过 Pull Request 提供自己分析出的接口地址与使用说明。")]),P,y,q,n("p",null,[e("文档目录以 "),w,e(" 语法写在 "),t(d,{to:"/"},{default:l(()=>[e("README.md")]),_:1}),e(" 中，使用缩进标识文档的层级，如"),A,e("下存在"),I,e("、"),S,e("、"),T,e("等子分类，使用 "),E,e(" 语法该标注文档是否编写完成")]),C,n("p",null,[e("文档使用 "),n("a",N,[e("Vuepress"),t(s)]),e(" 生成，可以使用 "),n("a",R,[e("Vuepress md 扩展语法"),t(s)]),e("编写")]),j,n("p",null,[e("proto 文件为 "),n("a",B,[e("Protocol Buffers"),t(s)]),e(" 以及 "),n("a",M,[e("gRPC"),t(s)]),e(" 的数据结构体定义，多用于客户端的接口，本文档也做相关的收集")]),O,n("ol",null,[V,n("li",null,[e("提出问题时注意 "),n("a",D,[e("提问的智慧"),t(s)]),e(" 并且 "),n("a",L,[e("别像弱智一样提问"),t(s)])])]),U,n("ul",null,[n("li",null,[n("p",null,[e("QQ 交流群："),n("a",G,[e("邀请链接"),t(s)])])]),n("li",null,[n("p",null,[e("Telegram 交流群："),n("a",Q,[e("@bilibili_API_collect_community"),t(s)])])])]),W])}const X=c(p,[["render",z],["__file","CONTRIBUTING.html.vue"]]);export{X as default};
