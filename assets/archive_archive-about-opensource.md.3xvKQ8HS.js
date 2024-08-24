import{_ as o,D as i,c as l,j as e,a as t,I as r,a8 as a,o as n}from"./chunks/framework.C4h01PAh.js";const T=JSON.parse('{"title":"开源程序相关","description":"","frontmatter":{"lang":"zh-cn","title":"开源程序相关"},"headers":[],"relativePath":"archive/archive-about-opensource.md","filePath":"archive/archive-about-opensource.md","lastUpdated":1723441920000}'),c={name:"archive/archive-about-opensource.md"},u=a('<h1 id="开源程序相关" tabindex="-1">开源程序相关 <a class="header-anchor" href="#开源程序相关" aria-label="Permalink to &quot;开源程序相关&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将针对先前未曾接触过计算机以及服务器，或者对计算机或服务器知之甚少的用户进行更易懂的科普，方便用户在提问的过程中表述得简单直接，减少因沟通产生的不必要的麻烦。</p></div><div class="info custom-block"><p class="custom-block-title">写在前面：为什么这个页面会诞生</p><p>如前篇「计算机相关科普」所说，用户群出现了预料之中但情理之外的问题。 如果说前篇的科普是知识层面的科普较多。那么，本篇的科普希望大家能知道如何方便自己也方便他人地提问、如何更快更便捷地自行排查问题等人文层面的科普。 当然，我们没有资格教屏幕前的你如何做人，这篇科普也一样，只是给你一个或许更好的建议，是否跟着这么做，取决于你。</p></div><h2 id="什么是开源-什么是开源程序" tabindex="-1">什么是开源，什么是开源程序？ <a class="header-anchor" href="#什么是开源-什么是开源程序" aria-label="Permalink to &quot;什么是开源，什么是开源程序？&quot;">​</a></h2><p>开源，即 Open Source，简言之，就是把程序的源代码放在公共平台（如 GitHub 等），任何人都可以在开源许可协议允许的范围内下载、修改以及使用这份源代码。</p><p>开源程序，顾名思义就是开放了源代码在公共平台的程序。SealDice 就作为一个开源程序活动在大家的视线中。</p><h2 id="为什么我在-sealdice-用户群问问题会被要求发送截图-为什么不能拍屏" tabindex="-1">为什么我在 SealDice 用户群问问题会被要求发送截图？为什么不能拍屏？ <a class="header-anchor" href="#为什么我在-sealdice-用户群问问题会被要求发送截图-为什么不能拍屏" aria-label="Permalink to &quot;为什么我在 SealDice 用户群问问题会被要求发送截图？为什么不能拍屏？&quot;">​</a></h2><p>所有 SealDice 用户群的群员、管理、甚至是开发者，都不具备未卜先知的能力，要求你发送截图也只是为了更好地了解你的问题究竟出在哪里。知道问题出在哪里之后，排查问题或复现 bug 就会更简单。这不仅方便了群员和管理回答你的问题，也有助于你<strong>更快地</strong>解决问题。</p><p>不提倡拍屏而是提倡截图的原因是，拍摄屏幕时会出现各种各样的问题：因拍摄角度而看不到部分信息、屏幕因反射光线而不能让摄像头拍到真正的图片（俗称反光），而截图能避免这些问题，给解决带来更高的效率。</p><div class="warning custom-block"><p class="custom-block-title">注意：请做好截图保护！</p><p>如果需要发送截图，请在没有<strong>必须要展示</strong>的情况下隐藏好截图内可能存在的敏感信息，比如：IP 地址、端口号、文件夹内布局、密码/auth/key/salt 等。</p><p>最好的方式是通过在图片上加马赛克进行遮挡（俗称打码），不建议进行剪裁，除非敏感信息的范围过大。</p></div><h2 id="提问的智慧到底该怎么实现" tabindex="-1">提问的智慧到底该怎么实现？ <a class="header-anchor" href="#提问的智慧到底该怎么实现" aria-label="Permalink to &quot;提问的智慧到底该怎么实现？&quot;">​</a></h2><p>群内「提问的智慧」文件已经说得足够清楚，但考虑到在看这个界面的你可能会对一些部分有所疑惑，所以，让我们用更易懂的方式解释它所想宣传的思想。</p><h3 id="遇到问题先查询资料-尝试自己思考问题所在-排除问题" tabindex="-1">遇到问题先查询资料，尝试自己思考问题所在，排除问题 <a class="header-anchor" href="#遇到问题先查询资料-尝试自己思考问题所在-排除问题" aria-label="Permalink to &quot;遇到问题先查询资料，尝试自己思考问题所在，排除问题&quot;">​</a></h3><p>很多时候，SealDice 用户群里都在问几乎一样的问题，但是，这些问题的解决方法在很多地方写有，例如<strong>这个手册</strong>、<strong>群公告</strong>、<strong>群精华消息</strong>、乃至群内作为帮助骰的 @Dt.Dice Twenty 的<strong>自定义回复的触发词里</strong>也有许多你可能关心的问题在内。如果不知道方法的你通过这些途径知道了如何解决这个问题，并且自己解决了问题，一定会比在群里问群员快。如果真的按照了方法去做，仍然没有办法解决问题，这时再来询问，效率会更高。</p><div class="info custom-block"><p class="custom-block-title">自行排查问题的参考步骤</p><p>对于屏幕前或许没有编程经验的你，可以通过平日里学的「五要素」法则来思考遇到的程序错误问题。下面是一个可行的思考过程。</p><ul><li><strong>Where</strong><ul><li>我是在哪里做了一些事情让我的骰子出现问题了？是在服务器还是在我自己的电脑上？</li></ul></li><li><strong>When</strong><ul><li>我在什么时候做了这些事情让骰子出现问题了？</li></ul></li><li><strong>What</strong><ul><li>我做了什么让我的骰子出现了问题？</li></ul></li><li><strong>Why</strong><ul><li>为什么我这么做会让骰子出现问题？</li></ul></li><li><strong>How</strong><ul><li>我怎么做才能去修复这个问题？</li></ul></li></ul><p>通过这样的思考过程，你即使猜测不出问题所在，也可以很好地通过复述这五个要素的思考过程向 SealDice 用户群的群员或管理员提问，让他们清晰地知道你的操作流程，更快地找到问题所在，为你解决问题。</p></div><h3 id="问问题要有前因后果-相对客观地陈述问题会比只表示主观情绪有用" tabindex="-1">问问题要有前因后果，相对客观地陈述问题会比只表示主观情绪有用 <a class="header-anchor" href="#问问题要有前因后果-相对客观地陈述问题会比只表示主观情绪有用" aria-label="Permalink to &quot;问问题要有前因后果，相对客观地陈述问题会比只表示主观情绪有用&quot;">​</a></h3><p>时常，在 SealDice 用户群中会看到以下这样的问题</p><blockquote><ul><li>「呜呜我的骰子怎么不能用了」</li><li>「很急！我的骰子怎么突然不回复了急急急！」</li><li>……</li></ul></blockquote><p>我们非常能理解你以及问出这些问题的用户的心情，群员和管理也很希望能帮你解决问题，但是，无法通过第一眼就看到问题的来龙去脉，只会减慢排查问题和解决问题的速度，这不只是影响到群员、管理，更多的，其实是在耽误你个人的时间。</p><p>问题既然已经发生了，与其在用户群里发出主观情绪并且焦急地等待回答，不如先试试看<strong>自己解决</strong>（如上一条所说），实在是<strong>无法自己解决</strong>，就把这些问题<strong>完整地说出来</strong>，包括：<strong>你猜测的、问题发生的可能原因</strong>和<strong>你所尝试但是无法解决的措施</strong>，以及<strong>你使用的程序版本号</strong>，还有出现问题的<strong>完整截图</strong>发到用户群，或者带着这些去问其他有经验者，这样能比上面那些不能一眼看出问题的语句能让群员、管理更快速地知道问题所在，并且协助你排查问题、解决问题。</p><p>如果实在没有思路该如何说，下面是一个可以作为参考的问问题的方式，可以自行进行替换。</p>',21),p={class:"info custom-block"},h=e("p",{class:"custom-block-title"},"一个便于理解的提问",-1),d=e("p",null,"我试过对我的海豹骰进行重启，还有撤去一些自定义回复文件以及 json 牌堆文件，但是基本对数据库文件夹的异常磁盘占用问题没有效果。",-1),g=e("p",null,"我现在使用的是 Lagrange 分离部署，使用正向 WS 进行部署。",-1),b=e("p",null,"初步排查，我怀疑是海豹的数据库文件 data.db 出现了异常的问题，有知道这个解决办法的管理/群友来帮我看看吗？截图都在下面了",-1),_=e("p",null,"[相关截图]",-1),m=a('<h3 id="保持耐心-对回答问题者表现出友善和配合的态度" tabindex="-1">保持耐心，对回答问题者表现出友善和配合的态度 <a class="header-anchor" href="#保持耐心-对回答问题者表现出友善和配合的态度" aria-label="Permalink to &quot;保持耐心，对回答问题者表现出友善和配合的态度&quot;">​</a></h3><p>群员、管理和开发者们都有自己的生活，SealDice 也只是兴趣的一部分。所以，在你的问题看起来没有获得回答的时候，保持耐心。当有群员或管理进一步地询问相关问题，也希望你能友善且相对客观地叙述问题，而不是对他们发泄自己的主观情绪，同时，配合他们进行操作，这样，问题才能更快速地解决。</p><h3 id="如果有需要-可以去-github-代码仓库上提交-issue" tabindex="-1">如果有需要，可以去 GitHub 代码仓库上提交 issue <a class="header-anchor" href="#如果有需要-可以去-github-代码仓库上提交-issue" aria-label="Permalink to &quot;如果有需要，可以去 GitHub 代码仓库上提交 issue&quot;">​</a></h3><p>如果你想要问的问题是新的、程序上的需求（例如希望加入一个新的接口），或者你的问题明确了是一个 bug，你希望 SealDice 开发组尽快满足这个需求或修复这个 bug，你可以通过在 GitHub 的 <a href="https://github.com/sealdice/sealdice-core" target="_blank" rel="noreferrer">sealdice/sealdice-core</a> 仓库中提交一个 issue，开发组的开发者们会通过讨论进行回复，并且，如果确定需要通过你的反馈对程序进行改动，也会更方便开发者们归档问题和修改程序。</p><p>以上就是提问的智慧中我们总结出的，要在 SealDice 用户社区里<strong>更快地解决问题</strong>，<strong>应该怎么做</strong>的办法。希望通过这样的办法，能让你更有效率地解决在部署 SealDice 的过程中遇到的问题。</p><h2 id="什么是-github-怎么提-issue" tabindex="-1">什么是 GitHub？怎么提 issue？ <a class="header-anchor" href="#什么是-github-怎么提-issue" aria-label="Permalink to &quot;什么是 GitHub？怎么提 issue？&quot;">​</a></h2><p>GitHub 是多数开源程序发布代码的地方，SealDice 开发者们平时也通过 GitHub 查看用户的需求和 bug 反馈，同时对程序进行修改，并且在 GitHub 上同步发布更新。</p><p>所以，我们希望你如果真的非常需要加入功能、或者反馈 bug，可以自己试试看除了在 SealDice 用户群中向管理说明以外，额外地再提交一份 issue 到海豹的 GitHub 的代码仓库中，这会让开发者们可能记住这个问题，同时在程序中修复它。</p><p>对于如何提 issue、怎么样提 issue 不会被关闭，以及如何在 GitHub 上下载文件之类的问题，百度应该是你更好的选择。</p><p><strong>希望你通过这两篇科普，能更清晰地知道如何提问 SealDice 相关的问题会更有效率。</strong></p>',10);function k(S,f,q,D,v,P){const s=i("Badge");return n(),l("div",null,[u,e("div",p,[h,e("p",null,[t("我在使用 "),r(s,{type:"tip",text:"x.y.z"}),t(" 版本的海豹骰中，发现我的海豹骰的数据库文件的磁盘占用出现了无法通过重启解决的故障，它变得非常大，大概有 300 MB 这样的大小。但是我的骰子并没有如此大的数据量，它只是一个私骰。")]),d,g,b,_]),m])}const H=o(c,[["render",k]]);export{T as __pageData,H as default};
