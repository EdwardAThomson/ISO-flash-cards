# N1: Overview & Trustworthy AI

## What is the AI RMF?

The NIST AI Risk Management Framework is a **voluntary guidance document** that helps organizations manage risks associated with AI systems. Published in January 2023, it provides a structured approach to developing and deploying AI responsibly.

## Why AI Risk Management Matters

AI systems present unique challenges compared to traditional software:

| Challenge | Description |
|-----------|-------------|
| **Emergent behavior** | AI can produce unexpected outputs not explicitly programmed |
| **Data dependency** | Performance depends heavily on training data quality |
| **Opacity** | Complex models may be difficult to interpret |
| **Evolving capabilities** | Systems may change behavior over time |
| **Societal impact** | AI decisions can affect individuals and communities at scale |

## Framing AI Risk

The framework defines AI risk as the **composite measure** of:
- **Probability** of an event occurring
- **Magnitude** of the consequences (positive or negative)

### Risk Categories

AI risks can be:
- **Known** — Identified and understood
- **Unknown** — Not yet identified or fully understood
- **Emergent** — Arising from system interactions or deployment context

### Sources of AI Risk

1. **Technical factors** — Model limitations, data issues, system failures
2. **Human factors** — Misuse, over-reliance, lack of oversight
3. **Organizational factors** — Inadequate governance, resource constraints
4. **Societal factors** — Bias amplification, privacy erosion, job displacement

---

## Characteristics of Trustworthy AI

The framework identifies **seven characteristics** that contribute to trustworthy AI:

### 1. Valid & Reliable

- **Validity** — System performs as intended for the specific use case
- **Reliability** — Consistent performance over time and across conditions
- **Accuracy** — Outputs are correct within acceptable tolerances

Key considerations:
- Define clear performance metrics
- Test across diverse conditions
- Monitor for performance drift

### 2. Safe

AI systems should not endanger:
- Human life or health
- Property
- The environment

Safety considerations:
- Fail-safe mechanisms
- Human override capabilities
- Bounded operational parameters

### 3. Secure & Resilient

- **Security** — Protected against unauthorized access and manipulation
- **Resilience** — Maintains function despite adversarial attacks or failures

Threats include:
- Data poisoning
- Model extraction
- Adversarial inputs
- Supply chain attacks

### 4. Accountable & Transparent

- **Accountability** — Clear assignment of responsibility for AI outcomes
- **Transparency** — Openness about AI system capabilities and limitations

Elements:
- Documented decision-making processes
- Clear roles and responsibilities
- Audit trails and logging

### 5. Explainable & Interpretable

- **Explainability** — Ability to describe how the system works
- **Interpretability** — Ability to understand why specific outputs occurred

Levels of explanation:
- Technical (for developers)
- Operational (for deployers)
- User-facing (for affected individuals)

### 6. Privacy-Enhanced

AI systems should:
- Minimize data collection
- Protect personal information
- Enable individual control over data
- Prevent re-identification

Privacy techniques:
- Differential privacy
- Federated learning
- Data anonymization
- Purpose limitation

### 7. Fair with Harmful Bias Managed

- **Fairness** — Equitable treatment across groups
- **Bias management** — Identification and mitigation of harmful biases

Types of bias:
- **Systemic** — Historical or societal biases in data
- **Computational** — Biases introduced by algorithms
- **Human** — Biases from developers or users

---

## Balancing Characteristics

These characteristics often involve **trade-offs**:

| Trade-off | Example |
|-----------|---------|
| Accuracy vs. Explainability | Complex models may be more accurate but harder to explain |
| Privacy vs. Fairness | Limiting data access may hinder bias detection |
| Security vs. Transparency | Revealing system details may enable attacks |

Organizations must balance these based on:
- Use case requirements
- Stakeholder needs
- Risk tolerance
- Regulatory requirements

---

## Key Takeaways

1. AI risk management is **context-dependent** — no one-size-fits-all approach
2. Trustworthiness requires attention to **multiple characteristics**
3. Trade-offs must be **explicitly managed** based on priorities
4. Risk management is **continuous** throughout the AI lifecycle
