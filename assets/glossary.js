/* 问题篓子 · 全站共享术语表（单一数据源）
 * 用法：页面中写 <dfn data-t="mappo">MAPPO</dfn>，并在末尾引入本文件
 *       <script src="../assets/glossary.js"></script>
 * 同一术语在任何文章中都链接到此处同一份定义。改这里 = 全站同步。
 * 每条：abbr 缩写 / en 英文全称 / zh 中文全称 / def 定义 / source {url,label} 原论文(可为 null)
 */
window.GLOSSARY = {
  mappo:{abbr:"MAPPO", en:"Multi-Agent Proximal Policy Optimization", zh:"多智能体近端策略优化",
    def:"把单智能体 PPO 扩展到合作式多智能体任务的 on-policy 算法：中心化价值函数训练、分散化策略执行。",
    source:{url:"https://arxiv.org/abs/2103.01955", label:"原论文 · Yu et al. 2021"}},
  fsp:{abbr:"FSP", en:"Fictitious Self-Play", zh:"虚拟自我对弈",
    def:"用采样式强化学习 + 监督学习近似博弈论的 fictitious play，使智能体收敛到不完美信息博弈的近似纳什均衡。",
    source:{url:"https://proceedings.mlr.press/v37/heinrich15.html", label:"原论文 · Heinrich et al. ICML 2015"}},
  npmp:{abbr:"NPMP", en:"Neural Probabilistic Motor Primitives", zh:"神经概率运动基元",
    def:"通过带隐变量瓶颈的逆模型，离线压缩上千个专家策略、学出可复用的运动基元嵌入空间，用于高维仿真人形控制。",
    source:{url:"https://arxiv.org/abs/1811.11711", label:"原论文 · Merel et al. 2019"}},
  pbt:{abbr:"PBT", en:"Population Based Training", zh:"基于种群的训练",
    def:"并行训练一个模型种群，训练途中动态“利用/探索”超参数，联合优化权重与超参调度。",
    source:{url:"https://arxiv.org/abs/1711.09846", label:"原论文 · Jaderberg et al. 2017"}},
  dmpo:{abbr:"MPO / DMPO", en:"Maximum a Posteriori Policy Optimisation", zh:"最大后验策略优化",
    def:"基于相对熵目标坐标上升的 off-policy actor-critic，用 EM 式的策略评估与改进交替求解；DMPO 是把 critic 换成分布式价值函数的变体。",
    source:{url:"https://arxiv.org/abs/1806.06920", label:"原论文 · Abdolmaleki et al. 2018"}},
  amp:{abbr:"AMP", en:"Adversarial Motion Priors", zh:"对抗式运动先验",
    def:"用对抗式模仿学习（GAN 判别器）自动学“运动风格”奖励，让物理角色/机器人完成任务的同时产生贴近参考动捕的自然动作。",
    source:{url:"https://arxiv.org/abs/2104.02180", label:"原论文 · Peng et al. SIGGRAPH 2021"}},
  gee:{abbr:"GEE", en:"Global Entity Encoder", zh:"全局实体编码器",
    def:"排列不变的网络结构：同类实体各经共享 MLP 编码后做 max-pooling 聚合成全局特征，从而处理任意数量、无固定顺序的输入。",
    source:{url:"https://arxiv.org/abs/2402.18345", label:"原论文 · An et al. 2024"}},
  marl:{abbr:"MARL", en:"Multi-Agent Reinforcement Learning", zh:"多智能体强化学习",
    def:"多个智能体在共享环境中同时学习、策略互相影响（合作/竞争/混合）的强化学习范式。",
    source:null},
  multicritic:{abbr:"Multi-Critic", en:"Multi-Critic Reinforcement Learning", zh:"多评论家（多值函数）强化学习",
    def:"为不同奖励分量各维护独立 critic、再加权组合其优势估计，用于多目标奖励平衡、稳定训练。",
    source:{url:"https://arxiv.org/abs/2203.14912", label:"代表性用法 · Vollenweider et al. 2022"}},
  priv:{abbr:"Privileged Learning", en:"Privileged Learning / Teacher-Student", zh:"特权学习（教师-学生框架）",
    def:"先训练可访问仿真“特权信息”（真值状态、地形、周围物体位姿）的教师策略，再蒸馏出仅依赖真实传感器观测的学生策略。",
    source:{url:"https://arxiv.org/abs/1912.12294", label:"奠基论文 · Learning by Cheating 2019"}},
  sim2real:{abbr:"Sim2Real", en:"Simulation-to-Real Transfer", zh:"仿真到现实迁移",
    def:"把仿真训练的策略迁移到真机、并设法弥合两者差异（reality gap）的一类方法（域随机化、域自适应等）。",
    source:{url:"https://arxiv.org/abs/2009.13303", label:"综述 · Zhao et al. 2020"}},
  bt:{abbr:"BT", en:"Behavior Tree", zh:"行为树",
    def:"以树状结构组织决策的模块化、可响应控制架构；Sequence / Fallback 等内部节点按 tick 递归调度叶子上的动作/条件节点。",
    source:{url:"https://arxiv.org/abs/1709.00084", label:"标准教材 · Colledanchise & Ögren 2018"}},
  hier:{abbr:"HRL", en:"Hierarchical Reinforcement Learning", zh:"分层强化学习",
    def:"把策略分解为多个时间尺度层级（高层选子目标/技能、低层执行原始动作），用时间抽象简化长时序任务的学习。",
    source:{url:"http://incompleteideas.net/papers/SPS-98.pdf", label:"options 框架 · Sutton et al. 1999"}},
  selfplay:{abbr:"自博弈", en:"Self-Play", zh:"自我对弈",
    def:"让智能体反复与自身、或自身的历史版本对战来自我提升的训练范式：对手随训练同步变强，策略被持续逼到更高水平。本文里的 FSP、PBT 联赛都是它的具体实现，AlphaGo/AlphaZero 亦属此列。",
    source:{url:"https://www.science.org/doi/10.1126/science.aar6404", label:"代表作 · AlphaZero, Silver et al. 2018"}},
  emergence:{abbr:"涌现", en:"Emergent Behavior", zh:"涌现（行为）",
    def:"未被显式编程、也没写进奖励函数，却从简单目标的优化中自发长出来的高层行为。本文指传球/跑位/分工——奖励里根本没有“传球”一项，它是自博弈中被抢断压力逼出的最优解，而非人工设计。",
    source:null},
  distillation:{abbr:"知识蒸馏", en:"Knowledge Distillation", zh:"知识蒸馏",
    def:"让一个学生模型（student）去模仿老师模型（teacher）的输出，从而把老师学到的能力转移过去。学生学的是老师的“软输出”（完整概率分布）而非仅正确答案，信息量更大。是压缩、迁移、融合模型能力的通用手段。",
    source:{url:"https://arxiv.org/abs/1503.02531", label:"原论文 · Hinton et al. 2015"}},
  skilldistill:{abbr:"技能蒸馏", en:"Skill / Policy Distillation", zh:"技能蒸馏 / 策略蒸馏",
    def:"知识蒸馏用在控制策略上。机器人里通常指把多个各自精通一件事的专家策略，蒸馏进一个统一网络（分而治之、再合一）；也指把仿真中的特权教师蒸馏成真机可部署的学生。区别于 LLM 里“大模型压成小模型”。",
    source:{url:"https://arxiv.org/abs/1511.06295", label:"原论文 · Rusu et al. 2015"}},
  skillembed:{abbr:"技能隐空间", en:"Skill Embedding / Latent Skill Space", zh:"技能隐空间 / 技能嵌入",
    def:"把大量动作/技能压进一个低维连续隐空间，每个点对应一种可执行技能。下游任务只需冻结这个空间、训一个上层策略在其中“挑点”即可复用组合技能，不必重训底层。ASE/PULSE 是代表。",
    source:{url:"https://arxiv.org/abs/2205.01906", label:"代表作 · ASE, Peng et al. 2022"}},
  vla:{abbr:"VLA", en:"Vision-Language-Action model", zh:"视觉-语言-动作模型",
    def:"把视觉、语言、机器人动作统一进一个大模型：输入图像+自然语言指令，直接输出动作。借大语言/多模态模型的泛化力，让一个模型跨任务、跨物体做操作。OpenVLA、π0、GR00T 均属此类。",
    source:{url:"https://arxiv.org/abs/2307.15818", label:"提出 · RT-2, Brohan et al. 2023"}},
  crossembody:{abbr:"跨本体", en:"Cross-Embodiment", zh:"跨本体（跨机器人形态）",
    def:"让一个策略/数据集跨越不同机器人硬件形态（不同臂、不同自由度、四足/人形）通用。核心发现是把多种机器人的数据混训能正向迁移、互相涨点。Open X-Embodiment 是奠基数据集。",
    source:{url:"https://arxiv.org/abs/2310.08864", label:"奠基 · Open X-Embodiment 2023"}},
  diffpolicy:{abbr:"扩散策略", en:"Diffusion Policy", zh:"扩散策略",
    def:"用扩散模型（denoising diffusion）表示机器人动作分布：从噪声逐步去噪采样出动作序列，擅长表达多模态、连续的动作。因为本质是概率分布，多个独立扩散策略可在推理时把去噪梯度（score）相加做“免重训组合”。",
    source:{url:"https://arxiv.org/abs/2303.04137", label:"原论文 · Chi et al. 2023"}},
  moe:{abbr:"MoE", en:"Mixture of Experts", zh:"专家混合",
    def:"网络由多个“专家”子网络 + 一个路由器组成，每次只激活与当前输入相关的少数专家。机器人里用来让不同技能由不同专家承载、按情境路由组合，兼顾容量与推理效率。",
    source:{url:"https://arxiv.org/abs/1701.06538", label:"代表作 · Shazeer et al. 2017"}},
  wbc:{abbr:"全身控制", en:"Whole-Body Control", zh:"全身控制",
    def:"协调机器人全身所有关节（腿+躯干+手臂）共同完成任务的控制，而非把运动与操作分开。人形边走边搬、边平衡边够取都属全身控制，难点是各部位动力学强耦合。",
    source:null},
  foundationmodel:{abbr:"基础模型", en:"Foundation Model", zh:"基础模型",
    def:"在超大规模数据上预训练、可迁移到众多下游任务的大模型。机器人基础模型（如 GR00T、π0）想做到“一个模型打底、少量数据适配各种机器人和任务”。",
    source:{url:"https://arxiv.org/abs/2108.07258", label:"提出 · Bommasani et al. 2021"}},
  retarget:{abbr:"动作重定向", en:"Motion Retargeting", zh:"动作重定向",
    def:"把一具骨架（如人体动捕/SMPL）的动作映射到另一具比例、自由度不同的骨架（如人形机器人）上，使其做出对应姿态。是“用人类动作教机器人”的必经预处理。",
    source:null},
  forgetting:{abbr:"灾难性遗忘", en:"Catastrophic Forgetting", zh:"灾难性遗忘",
    def:"神经网络学新任务时会覆盖旧任务的权重，导致旧技能急剧退化。这正是“加一个新技能就得整体重训”的根源，也是持续/增量学习要解决的核心难题。",
    source:{url:"https://arxiv.org/abs/1612.00796", label:"代表方案 · EWC, Kirkpatrick et al. 2017"}}
};

(function(){
  // 允许把数据拆到单独文件先于本文件加载；这里做兜底合并
  var G = window.GLOSSARY || {};

  // 注入弹窗 + dfn 样式（依赖宿主页的 CSS 变量：--surface/--ink/--ink-soft/--accent/--line）
  if(!document.getElementById('glossary-css')){
    var css = document.createElement('style'); css.id='glossary-css';
    css.textContent =
      'dfn[data-t]{font-style:normal;color:var(--accent);border-bottom:1px dotted var(--accent);cursor:pointer}'+
      'dfn[data-t]:hover{border-bottom-style:solid}'+
      '#gpop{position:absolute;z-index:60;max-width:min(23rem,calc(100vw - 24px));'+
        'background:var(--surface);color:var(--ink);border:1px solid var(--line);'+
        'border-left:3px solid var(--accent);border-radius:10px;'+
        'padding:.8rem 2.1rem .85rem .95rem;font-size:.9rem;line-height:1.75;'+
        'box-shadow:0 8px 30px rgba(0,0,0,.22)}'+
      '#gpop .gp-abbr{font-weight:700;color:var(--accent);font-size:1rem}'+
      '#gpop .gp-full{color:var(--ink-soft);font-size:.78rem;margin:.15rem 0 .5rem;line-height:1.5}'+
      '#gpop .gp-def{margin:0 0 .5rem}'+
      '#gpop .gp-src{display:inline-block;font-size:.8rem;font-weight:600;text-decoration:none;color:var(--accent)}'+
      '#gpop .gp-src:hover{text-decoration:underline}'+
      '#gpop .gp-x{position:absolute;top:.35rem;right:.4rem;background:none;border:none;'+
        'color:var(--ink-soft);cursor:pointer;font-size:.9rem;line-height:1;padding:.25rem;font-family:inherit}'+
      '#gpop .gp-x:hover{color:var(--accent)}';
    document.head.appendChild(css);
  }

  var pop=null;
  function closePop(){ if(pop){ pop.remove(); pop=null; } }
  function openPop(el){
    closePop();
    var key=el.getAttribute('data-t'), g=G[key];
    if(!g){ return; }
    pop=document.createElement('div'); pop.id='gpop';

    var x=document.createElement('button'); x.className='gp-x'; x.type='button';
    x.setAttribute('aria-label','关闭'); x.textContent='✕';
    x.addEventListener('click',function(ev){ ev.stopPropagation(); closePop(); });
    pop.appendChild(x);

    var abbr=document.createElement('div'); abbr.className='gp-abbr'; abbr.textContent=g.abbr||el.textContent; pop.appendChild(abbr);
    var fullTxt=[g.en,g.zh].filter(Boolean).join(' · ');
    if(fullTxt){ var full=document.createElement('div'); full.className='gp-full'; full.textContent=fullTxt; pop.appendChild(full); }
    var def=document.createElement('div'); def.className='gp-def'; def.textContent=g.def||''; pop.appendChild(def);
    if(g.source && g.source.url){
      var a=document.createElement('a'); a.className='gp-src'; a.href=g.source.url;
      a.target='_blank'; a.rel='noopener noreferrer';
      a.textContent=(g.source.label||'原论文')+' ↗';
      a.addEventListener('click',function(ev){ ev.stopPropagation(); });
      pop.appendChild(a);
    }

    document.body.appendChild(pop);
    var r=el.getBoundingClientRect(), pw=pop.offsetWidth, ph=pop.offsetHeight;
    var x0=r.left+window.scrollX;
    var maxX=window.scrollX+document.documentElement.clientWidth-pw-12;
    if(x0>maxX) x0=Math.max(12,maxX);
    if(x0<12) x0=12;
    var y0=r.top+window.scrollY-ph-8;          // 悬浮在术语上方
    if(r.top-ph-8<0) y0=r.bottom+window.scrollY+8;  // 顶部放不下则落到下方
    pop.style.left=x0+'px'; pop.style.top=y0+'px';
    pop._for=el;
  }

  document.addEventListener('click',function(e){
    var t=e.target.closest && e.target.closest('dfn[data-t]');
    if(t){ e.preventDefault(); (pop&&pop._for===t)?closePop():openPop(t); }
    else if(!(e.target.closest && e.target.closest('#gpop'))) closePop();
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape') closePop();
    if((e.key==='Enter'||e.key===' ') && document.activeElement && document.activeElement.matches && document.activeElement.matches('dfn[data-t]')){
      e.preventDefault(); openPop(document.activeElement);
    }
  });
  window.addEventListener('resize', closePop);

  // 为所有术语补上可访问性属性
  function wire(){
    var ds=document.querySelectorAll('dfn[data-t]');
    for(var i=0;i<ds.length;i++){ var d=ds[i];
      if(!d.hasAttribute('tabindex')) d.setAttribute('tabindex','0');
      if(!d.hasAttribute('role')) d.setAttribute('role','button');
      if(!G[d.getAttribute('data-t')]) d.style.borderBottom='none', d.style.color='inherit', d.style.cursor='default';
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', wire); else wire();

  // 供 glossary.html 渲染总表用
  window.renderGlossaryList = function(mount){
    var keys=Object.keys(G).sort(function(a,b){ return (G[a].abbr||a).localeCompare(G[b].abbr||b); });
    keys.forEach(function(k){
      var g=G[k];
      var card=document.createElement('div'); card.className='gterm'; card.id='term-'+k;
      var h=document.createElement('div'); h.className='gt-abbr'; h.textContent=g.abbr||k; card.appendChild(h);
      var full=[g.en,g.zh].filter(Boolean).join(' · ');
      if(full){ var f=document.createElement('div'); f.className='gt-full'; f.textContent=full; card.appendChild(f); }
      var d=document.createElement('div'); d.className='gt-def'; d.textContent=g.def||''; card.appendChild(d);
      if(g.source&&g.source.url){ var a=document.createElement('a'); a.className='gt-src'; a.href=g.source.url;
        a.target='_blank'; a.rel='noopener noreferrer'; a.textContent=(g.source.label||'原论文')+' ↗'; card.appendChild(a); }
      mount.appendChild(card);
    });
  };
})();
