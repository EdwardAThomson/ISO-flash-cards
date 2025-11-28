# N5: MANAGE Function

The **MANAGE** function prioritizes risks and implements responses based on the assessments from MAP and MEASURE. It ensures that identified risks are addressed and monitored over time.

## Purpose

MANAGE ensures that:
- Risks are prioritized based on impact and likelihood
- Appropriate responses are selected and implemented
- Residual risks are understood and accepted
- Continuous monitoring detects new or changing risks

## MANAGE Categories

### MANAGE 1: Risk Prioritization

**MG 1.1** — Risks are prioritized
- Rank by severity and likelihood
- Consider organizational risk tolerance
- Account for resource constraints

**MG 1.2** — Risk treatment options are identified
- Avoid, mitigate, transfer, or accept
- Cost-benefit analysis of options
- Feasibility assessment

**MG 1.3** — Decisions are documented
- Rationale for prioritization
- Selected treatment approach
- Responsible parties

### MANAGE 2: Risk Response

**MG 2.1** — Risk responses are implemented
- Technical controls
- Procedural controls
- Organizational controls

**MG 2.2** — Residual risks are documented
- Risks remaining after treatment
- Acceptance rationale
- Monitoring requirements

**MG 2.3** — Third-party risks are managed
- Vendor requirements
- Contractual protections
- Ongoing oversight

### MANAGE 3: Risk Monitoring

**MG 3.1** — AI systems are monitored post-deployment
- Performance tracking
- Anomaly detection
- User feedback collection

**MG 3.2** — Mechanisms exist to address issues
- Incident response procedures
- Escalation pathways
- Remediation processes

**MG 3.3** — Responses to incidents are documented
- Incident details
- Actions taken
- Lessons learned

### MANAGE 4: Continuous Improvement

**MG 4.1** — Risk management is regularly reviewed
- Periodic assessments
- Triggered reviews (after incidents or changes)
- Stakeholder feedback integration

**MG 4.2** — Improvements are implemented
- Process enhancements
- Control updates
- Training and awareness

---

## Risk Treatment Options

### The Four T's

| Option | Description | When to Use |
|--------|-------------|-------------|
| **Terminate (Avoid)** | Eliminate the risk by not proceeding | Risk exceeds tolerance, no viable mitigation |
| **Treat (Mitigate)** | Reduce likelihood or impact | Risk can be reduced to acceptable level |
| **Transfer** | Shift risk to another party | Insurance, contracts, outsourcing |
| **Tolerate (Accept)** | Accept the residual risk | Risk is within tolerance, treatment not cost-effective |

### Common Mitigation Controls

#### Technical Controls

| Control | Purpose |
|---------|---------|
| **Input validation** | Prevent malicious or malformed inputs |
| **Output filtering** | Block harmful or inappropriate outputs |
| **Confidence thresholds** | Require human review for uncertain predictions |
| **Rate limiting** | Prevent abuse through volume restrictions |
| **Monitoring and alerting** | Detect anomalies in real-time |
| **Model updates** | Address discovered issues through retraining |

#### Procedural Controls

| Control | Purpose |
|---------|---------|
| **Human-in-the-loop** | Require human approval for high-stakes decisions |
| **Escalation procedures** | Define when and how to escalate issues |
| **Incident response plans** | Prepare for potential problems |
| **Change management** | Control modifications to AI systems |
| **Access controls** | Limit who can use or modify systems |

#### Organizational Controls

| Control | Purpose |
|---------|---------|
| **Training programs** | Ensure users understand capabilities and limitations |
| **Policies and standards** | Set expectations for AI use |
| **Audit and review** | Verify compliance and effectiveness |
| **Stakeholder communication** | Keep affected parties informed |

---

## Post-Deployment Monitoring

### What to Monitor

| Category | Metrics |
|----------|---------|
| **Performance** | Accuracy, latency, throughput |
| **Fairness** | Outcome disparities across groups |
| **Safety** | Incidents, near-misses, complaints |
| **Usage** | Volume, user types, use cases |
| **Drift** | Changes in input data or model behavior |

### Monitoring Approaches

1. **Automated monitoring** — Dashboards, alerts, anomaly detection
2. **Periodic audits** — Scheduled reviews of system performance
3. **User feedback** — Surveys, complaints, suggestions
4. **Incident tracking** — Log and analyze problems
5. **External review** — Third-party assessments

### Triggers for Action

- Performance drops below threshold
- Fairness metrics show disparities
- User complaints increase
- Incidents occur
- Context changes (new users, new use cases)
- Regulatory requirements change

---

## Incident Response

### Incident Categories

| Severity | Description | Response Time |
|----------|-------------|---------------|
| **Critical** | Immediate harm, system failure | Immediate |
| **High** | Significant impact, potential harm | Hours |
| **Medium** | Moderate impact, degraded service | Days |
| **Low** | Minor impact, inconvenience | Scheduled |

### Response Process

1. **Detect** — Identify that an incident has occurred
2. **Assess** — Determine severity and scope
3. **Contain** — Limit further damage
4. **Investigate** — Understand root cause
5. **Remediate** — Fix the underlying issue
6. **Recover** — Restore normal operations
7. **Learn** — Document lessons and improve

---

## Decommissioning

When AI systems are retired:

- **Data handling** — Secure deletion or archival
- **Model disposal** — Prevent unauthorized use
- **Documentation** — Preserve records for accountability
- **Stakeholder notification** — Inform affected parties
- **Transition planning** — Ensure continuity of service

---

## Key Takeaways

- MANAGE turns assessment into **action**
- Risk treatment should be **proportional** to risk level
- **Residual risk** must be explicitly accepted
- **Monitoring is continuous** — risks evolve over time
- **Incident response** requires preparation before incidents occur
