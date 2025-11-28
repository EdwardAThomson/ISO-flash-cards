# N8: Practical Application

This section provides practical guidance for implementing the NIST AI RMF in your organization.

## Getting Started

### Step 1: Assess Current State

Before implementing the framework:

- **Inventory AI systems** — What AI do you develop, deploy, or use?
- **Review existing practices** — What risk management is already in place?
- **Identify gaps** — Where are the biggest opportunities for improvement?
- **Understand context** — What are your organization's risk tolerance and priorities?

### Step 2: Establish Governance

Build the foundation:

- **Secure executive sponsorship** — Leadership commitment is essential
- **Define roles and responsibilities** — Who owns AI risk management?
- **Develop policies** — Set expectations for AI development and use
- **Allocate resources** — Budget for risk management activities

### Step 3: Prioritize Efforts

Focus on highest-impact areas:

- **Risk-based prioritization** — Address highest risks first
- **Quick wins** — Identify improvements that are easy to implement
- **Phased approach** — Build capabilities incrementally
- **Learn and adapt** — Adjust based on experience

---

## Implementation by Organization Type

### AI Developers

**Priority actions:**
1. Implement documentation practices (model cards, data cards)
2. Establish testing protocols for fairness, robustness, safety
3. Create processes for communicating limitations to deployers
4. Build monitoring capabilities into systems

**Key challenges:**
- Balancing speed to market with thorough risk assessment
- Anticipating deployment contexts you don't control
- Maintaining documentation as systems evolve

### AI Deployers

**Priority actions:**
1. Develop vendor assessment criteria
2. Establish use case review processes
3. Train users on AI capabilities and limitations
4. Implement monitoring and incident response

**Key challenges:**
- Limited visibility into third-party AI systems
- Adapting general-purpose AI to specific contexts
- Managing user expectations and behavior

### Organizations Using AI

**Priority actions:**
1. Inventory AI systems in use (including embedded AI)
2. Assess risks of current AI applications
3. Develop guidelines for AI procurement and use
4. Train staff on responsible AI use

**Key challenges:**
- Identifying all AI in use (shadow AI)
- Limited technical expertise
- Balancing efficiency gains with risk management

---

## Practical Tools and Techniques

### AI System Inventory

Track all AI systems with key information:

| Field | Description |
|-------|-------------|
| System name | Identifier for the AI system |
| Purpose | What the system does |
| Type | Developer, deployer, or user |
| Risk level | High, medium, low |
| Owner | Responsible party |
| Status | Development, production, retired |
| Last assessment | Date of most recent risk review |

### Risk Assessment Template

For each AI system, document:

1. **Context** — Purpose, users, affected parties
2. **Risks identified** — What could go wrong?
3. **Likelihood** — How probable is each risk?
4. **Impact** — How severe would the consequences be?
5. **Controls** — What mitigations are in place?
6. **Residual risk** — What risk remains after controls?
7. **Action items** — What additional steps are needed?

### Incident Response Checklist

When an AI incident occurs:

- [ ] Assess severity and scope
- [ ] Contain immediate harm
- [ ] Notify appropriate stakeholders
- [ ] Investigate root cause
- [ ] Implement remediation
- [ ] Document lessons learned
- [ ] Update risk assessment
- [ ] Communicate resolution

---

## Integration with Other Frameworks

### NIST Cybersecurity Framework

| CSF Function | AI RMF Connection |
|--------------|-------------------|
| Identify | MAP — understand AI assets and risks |
| Protect | MANAGE — implement controls |
| Detect | MEASURE — monitor for issues |
| Respond | MANAGE — incident response |
| Recover | MANAGE — restore operations |

### ISO/IEC 42001

| ISO 42001 Element | AI RMF Connection |
|-------------------|-------------------|
| Context | MAP 1 — context establishment |
| Leadership | GOVERN 2, 4 — accountability, culture |
| Planning | MAP 3, 4 — risk identification |
| Support | GOVERN 3, 4 — resources, competence |
| Operation | MANAGE 2 — risk treatment |
| Performance | MEASURE — evaluation |
| Improvement | MANAGE 4 — continuous improvement |

### EU AI Act

| EU AI Act Requirement | AI RMF Support |
|-----------------------|----------------|
| Risk management system | All four functions |
| Data governance | MAP 2, MEASURE 2 |
| Technical documentation | MAP, MEASURE documentation |
| Human oversight | GOVERN 2, MANAGE 2 |
| Transparency | GOVERN 1, MEASURE 2 |
| Accuracy & robustness | MEASURE 2 |

---

## Common Pitfalls to Avoid

### Governance Pitfalls
- **Paper compliance** — Policies exist but aren't followed
- **Siloed responsibility** — AI risk seen as only IT's problem
- **Lack of resources** — Expecting risk management without investment

### Assessment Pitfalls
- **One-time assessment** — Treating risk assessment as a checkbox
- **Technical focus only** — Ignoring organizational and societal risks
- **Optimism bias** — Underestimating likelihood or impact of risks

### Implementation Pitfalls
- **Perfect is enemy of good** — Waiting for perfect solution
- **Boiling the ocean** — Trying to address everything at once
- **Ignoring feedback** — Not learning from incidents and near-misses

---

## Measuring Success

### Process Metrics

| Metric | What It Measures |
|--------|------------------|
| AI systems inventoried | Coverage of risk management |
| Risk assessments completed | Thoroughness of evaluation |
| Training completion rate | Staff awareness |
| Policy compliance rate | Adherence to standards |

### Outcome Metrics

| Metric | What It Measures |
|--------|------------------|
| Incidents prevented | Effectiveness of controls |
| Time to detect issues | Monitoring capability |
| Time to resolve incidents | Response capability |
| Stakeholder satisfaction | Trust and confidence |

### Maturity Indicators

| Level | Characteristics |
|-------|-----------------|
| **Initial** | Ad hoc, reactive, individual efforts |
| **Developing** | Some processes defined, inconsistent application |
| **Defined** | Standardized processes, organization-wide |
| **Managed** | Measured and controlled, data-driven |
| **Optimizing** | Continuous improvement, industry-leading |

---

## Key Takeaways

1. **Start where you are** — Build on existing practices
2. **Focus on high-risk systems** — Prioritize based on potential impact
3. **Make it practical** — Integrate into existing workflows
4. **Learn continuously** — Adapt based on experience
5. **Collaborate** — Share learnings across the organization and industry
