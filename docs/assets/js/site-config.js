window.SITE_CONFIG = {
  repoName: "DECS",
  venue: "ICLR 2026",
  paperTitle: "Overthinking Reduction with Decoupled Rewards and Curriculum Data Scheduling",
  subtitle: "Efficient reasoning without sacrificing capability: token-level decoupling plus curriculum prompt scheduling.",
  links: [
    {
      label: "📄 Paper",
      url: "https://openreview.net/forum?id=kdeiRledV6"
    },
    {
      label: "💻 GitHub",
      url: "https://github.com/pixas/DECS",

    },
    {
      label: "🤗 Hugging Face",
      url: "https://huggingface.co/pixas/DECS_7B",
    }
  ],
  authors: [
    {
      name: "Shuyang Jiang",
      email: "shuyangjiang23@m.fudan.edu.cn",
      affiliation: "Fudan University"
    },
    {
      name: "Yusheng Liao",
      email: "liao20160907@sjtu.edu.cn",
      affiliation: "School of AI, SJTU"
    },
    {
      name: "Ya Zhang",
      email: "ya_zhang@sjtu.edu.cn",
      affiliation: "School of AI, SJTU"
    },
    {
      name: "Yanfeng Wang",
      email: "wangyanfeng622@sjtu.edu.cn",
      affiliation: "School of AI, SJTU"
    },
    {
      name: "Yu Wang",
      email: "yuwangsjtu@sjtu.edu.cn",
      affiliation: "School of AI, SJTU"
    }
  ],
  affiliations: [
    "Fudan University",
    "School of Artificial Intelligence, Shanghai Jiao Tong University",
    "Shanghai Artificial Intelligence Laboratory"
  ],
  heroStats: [
    { value: ">50%", label: "Reasoning Tokens Reduced" },
    { value: "+2.48", label: "Pass@1 Gain (1.5B)" },
    { value: "7", label: "Benchmarks Evaluated" }
  ],
  quickTakeaways: [
    "Existing length penalties misalign sequence rewards with token-level optimization.",
    "DeCS identifies NRP boundaries and penalizes only redundant reasoning tokens.",
    "Curriculum scheduling preserves exploratory behavior while compressing token usage."
  ],
  abstractText:
    "Large reasoning models often overthink: they generate long reasoning traces with little or no performance gain. DeCS addresses this by decoupling rewards at token level and scheduling training data difficulty over time. Across two model scales and seven benchmarks, DeCS substantially reduces reasoning tokens while maintaining or improving Pass@1 and Pass@K performance.",
  bibtex: `@inproceedings{jiang2026decs,
  title={Overthinking Reduction with Decoupled Rewards and Curriculum Data Scheduling},
  author={Jiang, Shuyang and Liao, Yusheng and Zhang, Ya and Wang, Yanfeng and Wang, Yu},
  booktitle={International Conference on Learning Representations (ICLR)},
  year={2026}
}`
};
