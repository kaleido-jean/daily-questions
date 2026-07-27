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
    source:{url:"https://arxiv.org/abs/1612.00796", label:"代表方案 · EWC, Kirkpatrick et al. 2017"}},
  ppo:{abbr:"PPO", en:"Proximal Policy Optimization", zh:"近端策略优化",
    def:"目前机器人强化学习最常用的算法：每次只让策略在旧策略附近“小步”更新（用裁剪限制更新幅度），既稳定又容易并行采样。本站多篇工作（ANYmal 开门、DoorMan 教师等）的训练底座。",
    source:{url:"https://arxiv.org/abs/1707.06347", label:"原论文 · Schulman et al. 2017"}},
  il:{abbr:"模仿学习", en:"Imitation Learning", zh:"模仿学习",
    def:"不写奖励函数，直接让机器人模仿人类示教的动作轨迹（遥操作、动捕等采集）。优点是能学到难以用奖励描述的精细行为；缺点是数据贵、遇到示教没覆盖的状态容易失效。与强化学习是互补的两大范式。",
    source:null},
  act:{abbr:"ACT", en:"Action Chunking Transformer", zh:"动作分块 Transformer",
    def:"模仿学习的主流架构：用 Transformer 一次预测未来一段“动作块”（而非单步动作），配合 CVAE 编码示教风格，大幅降低误差累积。原为双臂精细操作提出，现广泛用于人形与移动操作。",
    source:{url:"https://arxiv.org/abs/2304.13705", label:"原论文 · Zhao et al. RSS 2023"}},
  impedance:{abbr:"阻抗控制", en:"Impedance / Admittance Control", zh:"阻抗/导纳控制",
    def:"让机器人末端表现得像“弹簧+阻尼”而不是死板的位置伺服：受到外力时会顺从地退让，力大时也不会硬顶。开弹簧门这类持续受力任务的关键——刚度太高会触发急停或损坏，太低则推不动门。",
    source:{url:"https://ieeexplore.ieee.org/document/1104644", label:"奠基 · Hogan 1985"}},
  domainrand:{abbr:"域随机化", en:"Domain Randomization", zh:"域随机化",
    def:"仿真训练时故意把物理参数（质量、摩擦、门的弹簧刚度）和外观（材质、光照、相机）大范围随机抖动，逼策略学出对参数不敏感的鲁棒行为，从而弥合仿真与现实的差距。sim2real 的第一支柱。",
    source:{url:"https://arxiv.org/abs/1703.06907", label:"奠基 · Tobin et al. 2017"}},
  articulated:{abbr:"铰接物体", en:"Articulated Object", zh:"铰接物体",
    def:"由关节（铰链、滑轨）连接的多刚体物体：门、抽屉、柜子、笔记本电脑。操作它们必须顺着关节约束运动——门只能绕铰链转。“估计关节参数（轴在哪、阻力多大）再顺势操作”是这一领域的核心范式，门是其中最典型也最难的一类。",
    source:{url:"https://arxiv.org/abs/2101.02692", label:"代表基准 · PartNet-Mobility/SAPIEN"}},
  teleop:{abbr:"遥操作", en:"Teleoperation", zh:"遥操作",
    def:"人通过 VR 头显、动捕或手柄实时驱动机器人完成任务。既是采集模仿学习示教数据的主要手段，也是评估“自主策略比人操作强多少”的基线。",
    source:null},
  proprioception:{abbr:"本体感知", en:"Proprioception", zh:"本体感知（本体感受）",
    def:"机器人对“自己”的感觉：关节编码器角度、关节力矩、IMU 的姿态与角速度。它便宜、高频、几乎不会失效，但看不见身体之外的世界——“盲走”策略就是只用本体感知走路。与之相对的是外感受（exteroception，相机/激光雷达等对环境的感知）。",
    source:null},
  heightmap:{abbr:"高程图", en:"Elevation / Height Map", zh:"高程图（地形高度栅格）",
    def:"把机器人周围地面离散成一张栅格、每格记录高度，是腿式机器人最主流的外感受表示。策略据此提前抬脚、选落点。代价是它由深度相机/雷达在线重建而来，有延迟、有空洞、脚下遮挡处最不准——而那恰恰是最需要它的地方。",
    source:{url:"https://doi.org/10.1126/scirobotics.abk2822", label:"代表作 · Miki et al. Science Robotics 2022"}},
  worldmodel:{abbr:"世界模型", en:"World Model", zh:"世界模型",
    def:"让策略在内部学一个“环境会怎么变”的预测模型，而不只学“该做什么动作”。腿式机器人里通常用作去噪与状态估计：从含噪历史观测里重建出真实状态（速度、地形、接触），再喂给策略——相当于给策略配了一个学出来的滤波器。",
    source:{url:"https://arxiv.org/abs/1803.10122", label:"提出 · Ha & Schmidhuber 2018"}},
  curriculum:{abbr:"课程学习", en:"Curriculum Learning", zh:"课程学习",
    def:"训练时按由易到难的顺序安排任务：先在矮台阶上走稳，再逐步升高、变陡、加噪声。腿式机器人几乎离不开它——直接从最难地形开局，策略连一次成功都采样不到，梯度无从谈起。代价是课程本身要人工设计，且策略能力常止步于课程的终点。",
    source:{url:"https://doi.org/10.1145/1553374.1553380", label:"提出 · Bengio et al. ICML 2009"}},
  clf:{abbr:"CLF", en:"Control Lyapunov Function", zh:"控制李雅普诺夫函数",
    def:"控制论里用来证明“系统会收敛到目标”的标量函数：只要能让它随时间单调下降，稳定性就有数学保证。用在强化学习里，它被改写成奖励项——不再只奖励“走到了”，而是奖励“每一步都更接近参考轨迹”，把模型论的稳定性结构注入无模型的 RL。",
    source:null},
  motionmatching:{abbr:"运动匹配", en:"Motion Matching", zh:"运动匹配",
    def:"游戏动画界的经典技术：不训练生成模型，而是把大量动作片段存成库，每帧按当前状态与目标的特征向量做最近邻检索，取出最合适的下一段接上去。优点是动作永远保持原始动捕的质感、且能任意拼接组合；用在机器人上就成了“把人类原子技能串成长时序动作”的现成工具。",
    source:{url:"https://doi.org/10.1145/3386569.3392440", label:"代表作 · Learned Motion Matching, Holden et al. 2020"}},
  dagger:{abbr:"DAgger", en:"Dataset Aggregation", zh:"数据集聚合",
    def:"蒸馏/模仿学习的关键修补：让学生自己去跑，在它自己走偏后到达的状态上问老师“这时该怎么办”，把答案加进训练集反复迭代。解决了纯行为克隆的致命伤——学生只见过老师的完美轨迹，一旦偏离就再也回不来。教师-学生框架里几乎都用它。",
    source:{url:"https://arxiv.org/abs/1011.0686", label:"原论文 · Ross et al. 2011"}},
  symbiotic:{abbr:"共生自主", en:"Symbiotic Autonomy", zh:"共生自主",
    def:"Veloso 组在 CoBot 上提出的范式：机器人明确知道自己能力的边界，遇到做不到的事（按电梯按钮、开门、拿东西）就主动开口请路过的人帮忙，而不是失败或死等。把“人”当成环境里可调用的一种能力。代价是机器人的自主性被外包出去了——没人的时候它会被困住。",
    source:{url:"https://doi.org/10.65109/vwzx6662", label:"提出 · Rosenthal, Biswas & Veloso AAMAS 2010"}},
  affordance:{abbr:"可供性", en:"Affordance", zh:"可供性（功能可供）",
    def:"源自心理学家 Gibson：环境对特定主体所“提供”的行动可能——把手供人转、地面供人站。机器人学里既指物体层面的（这个按钮可按、这条边可拉），也指空间层面的“affordance space”：要按到电梯按钮，机器人必须站在面板前那一小块地上，而那块地被人占住时，这个动作就不可行了。",
    source:null},
  socialnav:{abbr:"社交导航", en:"Social Navigation", zh:"社交导航",
    def:"在有人的空间里移动时，不只要求不撞到人，还要求行为符合人的社会预期：不切人的行进路线、不贴太近、排队时守序、进电梯前先让人出来。难点在于“礼貌”没有客观的成功/失败信号，评价高度依赖人的主观感受，因此至今缺乏公认的定量基准。",
    source:null},
  unitreeg1:{abbr:"Unitree G1", en:"Unitree G1 Humanoid", zh:"宇树 G1 人形机器人",
    def:"杭州宇树科技的全尺寸人形，约 1.3 m 高、23–43 自由度可选。意义不在参数而在价格——它把“能做研究的人形”拉到此前的零头，加上官方 Isaac Lab 仿真栈（与真机共用 DDS 接口），两年内成为学术界事实上的默认平台。代价是硬件天花板：1.3 m 身高下一级 20 cm 台阶占身高 15%，相当于人走 26 cm 一级。系列里 H1（约 1.8 m）、H1-2 是更高的型号。",
    source:null},
  cassie:{abbr:"Cassie", en:"Cassie (Agility Robotics)", zh:"Cassie 双足机器人",
    def:"俄勒冈州立大学出身、Agility Robotics 商业化的双足平台：只有腿、没有上身和手臂，形态取法鸟类。正因去掉上半身，它成了腿式强化学习最干净的试验台。2021 年它靠纯本体感知走下真实室外台阶，确立了“视觉总会失效、本体感知不会”这条安全底线。后继机型 Digit 加了躯干与手臂，已进入仓储物流现场。",
    source:null},
  limxoli:{abbr:"LimX Oli", en:"LimX Dynamics Oli", zh:"逐际动力 Oli 人形",
    def:"深圳逐际动力的全尺寸人形：55 kg、1.65 m、31 个主动自由度（每腿 6、每臂 7、腰 3、头 2）。楼梯速度纪录保持者——广州塔 33 级（17 cm/级）12 秒登顶、峰值 1.65 m/s，并在高速段涌现出一步跨两级的步态。",
    source:null},
  xbot:{abbr:"XBot", en:"XBot-S / XBot-L (Robot Era)", zh:"星动纪元 XBot 人形",
    def:"清华系创业公司星动纪元的人形本体。技术上最关键的是闭链机构的 2 自由度踝关节主动控制——此前工作要么只控 1 个自由度、要么让踝被动，而踝是双足对抗地形不平整的最后一道关节。它承载了 DWL（RSS 2024 最佳论文奖提名）的全部真机实验。",
    source:null},
  fouriergr1:{abbr:"Fourier GR-1", en:"Fourier Intelligence GR-1", zh:"傅利叶智能 GR-1 人形",
    def:"上海傅利叶智能的全尺寸通用人形，公司背景来自康复外骨骼。研究中常被当作跨本体验证的“第二台机器”——同一套策略能同时跑在它和 Unitree H1 上，才说明方法学到的是规律而非某台机器的标定。",
    source:null},
  armar7:{abbr:"ARMAR-7", en:"ARMAR-7 (KIT H²T)", zh:"KIT ARMAR-7 家用人形",
    def:"德国卡尔斯鲁厄理工学院 Asfour 组 ARMAR 家族的最新一代：双臂各 8 自由度力矩控制、欠驱动五指手、立体视觉头、全向移动底盘。它是迄今唯一一篇人形机器人乘电梯论文的平台——而那篇论文最诚实之处在于真机结果：按压约一半成功，且电梯门由研究者手动按住。",
    source:null},
  moxi:{abbr:"Moxi", en:"Moxi (Diligent Robotics)", zh:"Diligent Moxi 医院机器人",
    def:"美国 Diligent Robotics 的医院送物机器人：轮式底盘 + 一条机械臂 + 类人形上身。它是“用机械臂按物理按钮乘电梯”唯一规模化的案例——截至 2024 年 11 月公布口径累计 11 万次以上自主乘梯，仅靠既有 Wi-Fi、不要求楼宇改造，人在环远程监督兜底。它的形态选择本身就是结论：楼梯需要双足，电梯不需要。",
    source:null},
  cobot:{abbr:"CoBot", en:"CoBot (CMU)", zh:"CMU CoBot 服务机器人",
    def:"卡内基梅隆 Veloso 组的室内服务机器人，在校园长期运行。设计上最有洞见的一点是它干脆不装手臂——省下的复杂度全投进导航与调度，做不到的物理动作靠“共生自主”请人帮忙。边界也同样清晰：没人的时候它会被困住。",
    source:null},
  kinova:{abbr:"Kinova", en:"Kinova Gen II / Jaco", zh:"Kinova 轻量协作机械臂",
    def:"加拿大 Kinova 的轻量机械臂，出身是残障人士轮椅辅助臂（Jaco），因此强调轻、低功耗、对人安全，成为移动机器人最常见的车载臂。常见的 Gen II 为 7 自由度。",
    source:null},
  azurekinect:{abbr:"Azure Kinect", en:"Microsoft Azure Kinect DK", zh:"微软 Azure Kinect 深度相机",
    def:"微软 Kinect 血统的 RGB-D 相机，用飞行时间（ToF）测深。初代 Kinect 把深度相机打到消费级价格，几乎以一己之力启动了廉价 RGB-D 在机器人领域的普及。软肋是镜面与不锈钢——电梯轿厢正是它的失效场景。",
    source:null},
  isaaclab:{abbr:"Isaac Lab", en:"NVIDIA Isaac Lab / Isaac Gym", zh:"NVIDIA Isaac Lab 仿真栈",
    def:"NVIDIA 的机器人学习仿真栈，由 Isaac Gym（首次把上万个环境的物理仿真整个搬上 GPU，把腿式 RL 训练从天级压到小时级）与 Orbit 演进而来。相对 MuJoCo 的分工：Isaac 系强在大规模并行采样与 RTX 实时渲染，MuJoCo 强在接触求解精确轻量，因此常被拿来做 sim2sim 交叉验证。它也是域随机化变便宜、视觉泛化可以靠算力买到的根本原因。",
    source:null},
  lora:{abbr:"LoRA", en:"Low-Rank Adaptation", zh:"低秩适配",
    def:"微调大模型的主流省钱手法：冻结原权重，只训练一对低秩矩阵作为增量，推理时可合并回原权重、不增加延迟。一个常被忽略的性质是多个 LoRA 可按需加载或加权合并，天然适合“多专家合一”——FastStair 正是用它把若干速度专精专家整合成覆盖全速度区间的单一控制器。",
    source:{url:"https://arxiv.org/abs/2106.09685", label:"原论文 · Hu et al. 2021"}},
  fasterrcnn:{abbr:"Faster R-CNN", en:"Faster R-CNN", zh:"Faster R-CNN 两阶段检测器",
    def:"经典两阶段目标检测框架：先由区域候选网络（RPN）生成候选框，再由检测头分类与回归精修。相对 YOLO 这类单阶段检测器它慢但小目标定位更准——这正是它在“按钮只有 2 cm、且必须给出可供机械臂对准的精确位置”的电梯任务里至今仍是主力的原因。",
    source:{url:"https://arxiv.org/abs/1506.01497", label:"原论文 · Ren et al. 2015"}},
  elevatordataset:{abbr:"电梯按钮数据集", en:"Elevator Panel Dataset / OCR-RCNN", zh:"电梯面板数据集",
    def:"香港中文大学发布的第一个大规模公开电梯面板数据集：3718 张面板图像、35100 个按钮标注，配套 OCR-RCNN 把检测与字符识别串成三段式。它的意义超出数据本身——这是“机器人自主乘电梯”方向唯一像样的公共资产；相比之下电梯连一个含自动关门、可按面板、走动乘客的仿真环境都没有，而没有仿真器就没有 sim2real，也就没有 RL。",
    source:{url:"https://arxiv.org/abs/2103.09030", label:"论文与数据 · Zhu et al. 2021"}},
  elevatorapi:{abbr:"机器人电梯互联接口", en:"Robot–Elevator Integration API", zh:"机器人-电梯互联接口",
    def:"服务机器人跨楼层的产业界标准解法：不去操作电梯，而是调用它。Otis Integrated Dispatch（官方称已对接 60 多家机器人公司）、KONE Elevator Call API 都属此列，ISO 26159 系列则把电梯明确写成“机器人应用的基础设施要素”。它证明“机器人跨楼层”这个业务需求已被解决，也解释了为什么“按电梯按钮”这个科研问题热不起来。",
    source:null},
  vln:{abbr:"VLN", en:"Vision-and-Language Navigation", zh:"视觉语言导航",
    def:"给机器人一句自然语言指令（“上三楼，去走廊尽头右边那个房间”），它靠视觉一路走到目的地。近年与大模型结合后泛化能力大涨，但主流基准几乎全是单层平面环境——上下楼、乘电梯这类跨楼层动作基本不在评测范围内。",
    source:{url:"https://arxiv.org/abs/1711.07280", label:"奠基基准 · Anderson et al. CVPR 2018"}}
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
