# N7: Risk Types & Actors

The NIST AI RMF identifies various types of AI risks and the different actors involved in AI systems. Understanding both is essential for comprehensive risk management.

## Types of AI Risk

### By Source

#### Technical Risks
Risks arising from the AI system itself:

| Risk | Description |
|------|-------------|
| **Model limitations** | Inherent constraints of the algorithm or architecture |
| **Data quality** | Errors, biases, or gaps in training data |
| **Robustness failures** | Sensitivity to input variations or adversarial attacks |
| **Performance degradation** | Accuracy decline over time due to drift |
| **Integration issues** | Problems when combining with other systems |

#### Human Risks
Risks arising from human interaction with AI:

| Risk | Description |
|------|-------------|
| **Misuse** | Intentional use for harmful purposes |
| **Misunderstanding** | Incorrect interpretation of AI outputs |
| **Over-reliance** | Excessive trust in AI recommendations |
| **Under-reliance** | Failure to use AI when it would be beneficial |
| **Automation bias** | Tendency to favor AI suggestions over other information |

#### Organizational Risks
Risks arising from organizational context:

| Risk | Description |
|------|-------------|
| **Governance gaps** | Inadequate policies or oversight |
| **Skill shortages** | Lack of expertise to manage AI responsibly |
| **Resource constraints** | Insufficient investment in risk management |
| **Misaligned incentives** | Pressure to deploy without adequate safeguards |
| **Communication failures** | Poor information flow about risks |

#### Societal Risks
Risks with broader social implications:

| Risk | Description |
|------|-------------|
| **Bias and discrimination** | Unfair treatment of groups or individuals |
| **Privacy erosion** | Inappropriate collection or use of personal data |
| **Job displacement** | Economic disruption from automation |
| **Concentration of power** | Imbalances from AI capabilities |
| **Misinformation** | AI-generated false or misleading content |

### By Harm Type

| Harm Category | Examples |
|---------------|----------|
| **Physical** | Injury, death, property damage |
| **Psychological** | Distress, manipulation, addiction |
| **Financial** | Economic loss, fraud, discrimination in lending |
| **Reputational** | Damage to individual or organizational reputation |
| **Legal** | Regulatory violations, liability exposure |
| **Societal** | Erosion of trust, democratic harm, inequality |
| **Environmental** | Energy consumption, resource depletion |

### By Timing

| Timing | Description |
|--------|-------------|
| **Pre-deployment** | Risks identified before system is operational |
| **Deployment** | Risks that emerge during rollout |
| **Post-deployment** | Risks that develop during operation |
| **Emergent** | Risks that arise unexpectedly from system behavior |

---

## AI Actors

The framework identifies different actors in the AI ecosystem, each with distinct roles and responsibilities.

### AI Developers

**Who:** Engineers, data scientists, researchers who build AI systems

**Responsibilities:**
- Design systems with risk management in mind
- Document capabilities and limitations
- Test for safety, fairness, and robustness
- Communicate risks to downstream actors

**Key Risks to Manage:**
- Technical limitations
- Data quality and bias
- Security vulnerabilities
- Documentation gaps

### AI Deployers

**Who:** Organizations that integrate and operate AI systems

**Responsibilities:**
- Assess fitness for intended use
- Configure and integrate appropriately
- Train users and operators
- Monitor performance and incidents
- Maintain human oversight

**Key Risks to Manage:**
- Deployment context mismatch
- User misunderstanding
- Operational failures
- Incident response

### AI Users

**Who:** Individuals who interact with AI systems directly

**Responsibilities:**
- Understand system capabilities and limitations
- Use as intended
- Report problems and provide feedback
- Maintain appropriate skepticism

**Key Risks to Manage:**
- Over-reliance
- Misinterpretation
- Unintended use

### Affected Parties

**Who:** Individuals and communities impacted by AI decisions

**Responsibilities:**
- Understand how AI affects them
- Provide input on acceptable use
- Report concerns and harms
- Advocate for their interests

**Key Risks to Manage:**
- Discrimination
- Privacy violations
- Lack of recourse

### Regulators and Policymakers

**Who:** Government bodies that oversee AI use

**Responsibilities:**
- Set standards and requirements
- Enforce compliance
- Protect public interest
- Balance innovation and safety

**Key Risks to Manage:**
- Regulatory gaps
- Enforcement challenges
- Unintended consequences of regulation

### Third-Party Providers

**Who:** Vendors of AI components, data, or services

**Responsibilities:**
- Provide accurate documentation
- Disclose known limitations
- Support responsible use
- Address discovered issues

**Key Risks to Manage:**
- Supply chain risks
- Dependency risks
- Transparency gaps

---

## Shared Responsibility

AI risk management is a **shared responsibility** across actors:

```
┌─────────────────────────────────────────────────────────┐
│                    AI ECOSYSTEM                         │
│                                                         │
│  ┌─────────┐    ┌──────────┐    ┌─────────┐            │
│  │Developer│───▶│ Deployer │───▶│  User   │            │
│  └─────────┘    └──────────┘    └─────────┘            │
│       │              │              │                   │
│       ▼              ▼              ▼                   │
│  ┌─────────────────────────────────────────┐           │
│  │           Affected Parties              │           │
│  └─────────────────────────────────────────┘           │
│                      ▲                                  │
│                      │                                  │
│  ┌─────────────────────────────────────────┐           │
│  │    Regulators & Third-Party Providers   │           │
│  └─────────────────────────────────────────┘           │
└─────────────────────────────────────────────────────────┘
```

### Collaboration Points

| Interface | Key Considerations |
|-----------|-------------------|
| Developer → Deployer | Documentation, support, updates |
| Deployer → User | Training, guidance, feedback channels |
| All → Affected Parties | Transparency, recourse, engagement |
| Regulators → All | Standards, enforcement, guidance |

---

## Key Takeaways

- AI risks are **multi-dimensional** — technical, human, organizational, societal
- Different **actors** have different roles and responsibilities
- Risk management requires **collaboration** across the ecosystem
- **Affected parties** should have voice in AI governance
- **Shared responsibility** doesn't mean diffused accountability
