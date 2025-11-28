# N3: MAP Function

The **MAP** function establishes context and identifies risks associated with AI systems. It helps organizations understand where AI is used, who is affected, and what risks may arise.

## Purpose

MAP ensures that:
- AI system context is fully understood
- Risks are identified before they materialize
- Stakeholders and impacts are characterized
- Benefits and risks are weighed appropriately

## MAP Categories

### MAP 1: Context Establishment

**MP 1.1** — Intended purpose is clearly defined
- Business objectives
- User needs
- Expected outcomes
- Success criteria

**MP 1.2** — Interdisciplinary teams are involved
- Technical experts
- Domain specialists
- Legal and compliance
- Ethics advisors
- Affected community representatives

**MP 1.3** — System requirements are documented
- Functional requirements
- Performance requirements
- Constraints and limitations
- Assumptions

**MP 1.4** — Deployment context is understood
- Operational environment
- User characteristics
- Integration points
- Geographic scope

**MP 1.5** — Organizational risk tolerance is applied
- Acceptable risk levels
- Risk appetite statements
- Escalation thresholds

### MAP 2: AI System Categorization

**MP 2.1** — AI system is characterized
- Type of AI (ML, rule-based, hybrid)
- Model architecture
- Training approach
- Data sources

**MP 2.2** — AI system capabilities are documented
- What the system can do
- What it cannot do
- Known limitations
- Edge cases

**MP 2.3** — Scientific integrity is maintained
- Methodology documentation
- Reproducibility
- Peer review where appropriate

### MAP 3: Benefits and Costs

**MP 3.1** — Potential benefits are assessed
- Efficiency gains
- Accuracy improvements
- Cost savings
- New capabilities

**MP 3.2** — Potential costs and risks are assessed
- Implementation costs
- Operational costs
- Risk mitigation costs
- Potential harms

**MP 3.3** — Benefits and costs are compared
- Cost-benefit analysis
- Risk-benefit trade-offs
- Alternative approaches

### MAP 4: Risk Identification

**MP 4.1** — Risks from third-party components are identified
- Pre-trained models
- Third-party data
- APIs and services
- Open-source components

**MP 4.2** — Internal risks are identified
- Data quality issues
- Model limitations
- Integration challenges
- Skill gaps

**MP 4.3** — Risks from deployment context are identified
- Misuse potential
- Unintended applications
- Environmental factors
- User behavior

### MAP 5: Impact Characterization

**MP 5.1** — Affected individuals and communities are identified
- Direct users
- Subjects of AI decisions
- Downstream affected parties
- Vulnerable populations

**MP 5.2** — Potential harms are characterized
- Physical harm
- Psychological harm
- Financial harm
- Reputational harm
- Societal harm
- Environmental harm

**MP 5.3** — Likelihood and severity are assessed
- Probability of occurrence
- Magnitude of impact
- Reversibility
- Scale of effect

---

## Risk Identification Techniques

### Structured Approaches

| Technique | Description |
|-----------|-------------|
| **FMEA** | Failure Mode and Effects Analysis — systematic review of potential failures |
| **HAZOP** | Hazard and Operability Study — structured brainstorming |
| **Threat Modeling** | Identify potential attack vectors and vulnerabilities |
| **Red Teaming** | Adversarial testing to find weaknesses |
| **Scenario Analysis** | Explore potential future states and outcomes |

### Stakeholder Engagement

- User interviews and surveys
- Community consultations
- Expert workshops
- Public comment periods

### Data and Model Analysis

- Data quality assessment
- Bias audits
- Fairness testing
- Robustness evaluation

---

## Context Documentation

### System Card / Model Card

Document key information about the AI system:

| Section | Content |
|---------|---------|
| **Overview** | Purpose, intended users, use cases |
| **Model Details** | Architecture, training data, performance metrics |
| **Intended Use** | Primary use cases, out-of-scope uses |
| **Limitations** | Known limitations, failure modes |
| **Ethical Considerations** | Bias, fairness, privacy implications |
| **Recommendations** | Deployment guidance, monitoring needs |

### Impact Assessment

Evaluate potential impacts across dimensions:

- **Individual** — Effects on specific persons
- **Group** — Effects on communities or demographics
- **Societal** — Broader social implications
- **Environmental** — Ecological impacts

---

## Common Mapping Pitfalls

1. **Narrow framing** — Only considering intended use, not misuse
2. **Incomplete stakeholder identification** — Missing affected parties
3. **Optimism bias** — Underestimating risks
4. **Static thinking** — Not considering how context may change
5. **Siloed analysis** — Missing cross-functional perspectives

---

## Key Takeaways

- MAP is about **understanding before acting**
- Context matters — the same AI system may have different risks in different settings
- **Diverse perspectives** improve risk identification
- Documentation enables **accountability and learning**
- Mapping is **iterative** — revisit as understanding evolves
