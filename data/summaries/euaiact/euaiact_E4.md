# E4: High-Risk AI Requirements

High-risk AI systems must comply with extensive requirements **before** being placed on the EU market. These requirements apply from **August 2026**.

## The Seven Core Requirements

### 1. Risk Management System (Article 9)

A continuous, iterative process throughout the AI system lifecycle:

- **Identify and analyze** known and reasonably foreseeable risks
- **Estimate and evaluate** risks from intended use and reasonably foreseeable misuse
- **Adopt risk mitigation measures** (design, testing, information to deployers)
- **Eliminate or reduce** risks as far as possible through design and development
- **Test** against defined metrics and probabilistic thresholds

Residual risks must be communicated to deployers and, where appropriate, to affected persons.

### 2. Data & Data Governance (Article 10)

Training, validation, and testing datasets must be subject to appropriate governance:

| Requirement | Description |
|-------------|-------------|
| **Design choices** | Document choices about data collection, preparation, and labeling |
| **Relevance** | Data must be relevant, sufficiently representative, and error-free |
| **Completeness** | Appropriate statistical properties for the intended purpose |
| **Bias examination** | Examine for possible biases likely to affect health, safety, or fundamental rights |
| **Gap identification** | Identify and address data gaps or shortcomings |

**Special category data** (race, health, etc.) may be processed for bias monitoring only with strict safeguards.

### 3. Technical Documentation (Article 11)

Comprehensive documentation must be prepared **before** market placement:

- General description and intended purpose
- Design specifications and system architecture
- Development process and techniques used
- Data requirements and data governance practices
- Risk management documentation
- Monitoring, functioning, and control measures
- Relevant harmonized standards or specifications applied
- EU declaration of conformity

Documentation must enable authorities to assess compliance.

### 4. Record-Keeping / Logging (Article 12)

High-risk AI systems must have **automatic logging** capabilities:

- Traceability of system functioning throughout its lifecycle
- Recording of events relevant to:
  - Identifying high-risk situations
  - Substantial modifications
  - Conformity assessment
- Logs must be kept for an **appropriate period** (minimum 6 months unless otherwise specified)
- Logs must be accessible to deployers

### 5. Transparency & Information to Deployers (Article 13)

Systems must be designed to enable deployers to:

- **Interpret outputs** and use them appropriately
- **Understand capabilities and limitations**

Instructions for use must include:
- Provider identity and contact details
- System characteristics, capabilities, and limitations
- Performance metrics and known risks
- Technical measures for human oversight
- Expected lifetime and maintenance requirements
- Computational and hardware requirements

### 6. Human Oversight (Article 14)

Systems must be designed to allow **effective human oversight** during use:

| Measure | Purpose |
|---------|---------|
| **Understand capabilities** | Humans can properly interpret AI outputs |
| **Awareness of automation bias** | Recognize tendency to over-rely on AI |
| **Correct interpretation** | Ability to correctly interpret outputs |
| **Decide not to use** | Freedom to disregard, override, or reverse AI output |
| **Intervene or stop** | Ability to interrupt system operation |

For biometric identification: at least **two qualified persons** must verify results before action.

### 7. Accuracy, Robustness & Cybersecurity (Article 15)

Systems must achieve appropriate levels of:

- **Accuracy** — Consistent with intended purpose, declared in documentation
- **Robustness** — Resilient to errors, faults, and inconsistencies
- **Cybersecurity** — Protected against unauthorized access and manipulation

Technical solutions may include:
- Redundancy and fail-safe mechanisms
- Data poisoning and adversarial attack prevention
- Output confidence levels and uncertainty measures

---

## Conformity Assessment

Before placing on market, providers must:

1. Complete a **conformity assessment** (self-assessment or third-party, depending on category)
2. Draw up an **EU declaration of conformity**
3. Affix the **CE marking**
4. Register in the **EU database**

## Quality Management System

Providers must implement a **quality management system** covering:
- Regulatory compliance strategy
- Design and development procedures
- Testing and validation procedures
- Data management procedures
- Risk management procedures
- Post-market monitoring
- Incident reporting
- Communication with authorities
