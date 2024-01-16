---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

### [A Black-box Approach for Non-stationary Multi-agent Reinforcement Learning](https://arxiv.org/pdf/2306.07465.pdf)  
**Haozhe Jiang**, Qiwen Cui, Zhihan Xiong, Maryam Fazel, Simon S Du
Published on ICLR 2024

Can we track Equilibria in non-stationary Multi-agent systems? We comprehensively analyze this problem and find most non-stationary bandit algorithms fail to generalize. In multi-agent systems, **different actions compete with different best responses**. This forbids us from comparing actions by comparing their own rewards, sabotaging all test-based algorithms. We solve this problem by using an Explore-then-Commit-then-Test algorithm, in combination with prior techniques. This black-box algorithm is simple but admits a no-regret guarantee.

### [Offline Meta Reinforcement Learning with In-Distribution Online Adaptation](https://arxiv.org/pdf/2305.19529.pdf)  
Jianhao Wang<sup>*</sup>, Jin Zhang<sup>*</sup>, **Haozhe Jiang**, Junyu Zhang, Liwei Wang, Chongjie Zhang  
Published on ICML 2023

Why is it hard to do offline meta-learning? We point out that the meta-learning setting induces a new type of **distribution shift between offline training and online adaptation**. We characterize this challenge and propose IDAQ, a simple greedy context-based algorithm to tackle this problem.

### [Practically Solving LPN in High Noise Regimes Faster Using Neural Networks](https://arxiv.org/pdf/2303.07987.pdf)  
**Haozhe Jiang**<sup>*</sup>, Kaiyue Wen<sup>*</sup>, Yilei Chen

Can we break the Learning Parity with Noise (LPN) problem with Neural Networks? Empirically, we find out that **when the noise is high, neural networks are particularly useful**. We corroborate this observation by proving that the sample complexity of some neural networks scales optimally with the noise. This is the first neural-network-based algorithm surpassing all classical counterparts in breaking cryptographic primitives.

### [Offline congestion games: How feedback type affects data coverage requirement](https://arxiv.org/pdf/2210.13396.pdf)  
**Haozhe Jiang**<sup>*</sup>, Qiwen Cui<sup>*</sup>, Zhihan Xiong, Maryam Fazel, Simon S Du  
Published on ICLR 2023

If we want to learn Nash Equilibrium in congestion games, what offline dataset should we have? By looking at **dataset coverage in facility space** instead of action space, we find out the minimal dataset coverage requirement. We also present efficient learning algorithms and demonstrate the **separation** of coverage requirements under different feedback models.

### [Offline reinforcement learning with reverse model-based imagination](https://proceedings.neurips.cc/paper_files/paper/2021/file/f5e647292cc4e1064968ca62bebe7e47-Paper.pdf)  
Jianhao Wang<sup>*</sup>, Wenzhe Li<sup>*</sup>, **Haozhe Jiang**, Guangxiang Zhu, Siyuan Li, Chongjie Zhang  
Published on NeurIPS 2021  

You can’t connect the dots looking forward; you can only connect them looking backwards. How to learn RL policy generalizing from offline datasets while avoiding dangerous actions? We propose to **learn a reverse dynamic model** instead of a forward one. If a forward model goes wrong, the learned policy may take dangerous actions. If a reverse model goes wrong, the agent still acts safely because it could not start at the wrong reversed state in the first place.
