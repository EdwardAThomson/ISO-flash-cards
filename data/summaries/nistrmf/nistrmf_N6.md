# N6: AI Lifecycle

The NIST AI RMF emphasizes that risk management should occur **throughout the AI system lifecycle**, not just at deployment. Different stages present different risks and require different approaches.

## Lifecycle Stages

### 1. Plan and Design

**Activities:**
- Define objectives and requirements
- Identify stakeholders and affected parties
- Assess feasibility and alternatives
- Establish success criteria
- Plan for risk management

**Key Risks:**
- Unclear or misaligned objectives
- Inadequate stakeholder engagement
- Unrealistic expectations
- Missing requirements

**Risk Management Focus:**
- Context establishment (MAP)
- Governance setup (GOVERN)
- Initial risk identification

### 2. Collect and Process Data

**Activities:**
- Identify data sources
- Collect or acquire data
- Clean and preprocess data
- Label and annotate data
- Validate data quality

**Key Risks:**
- Biased or unrepresentative data
- Privacy violations
- Data quality issues
- Insufficient data
- Labeling errors

**Risk Management Focus:**
- Data governance
- Bias assessment
- Privacy protection
- Quality assurance

### 3. Build and Train Model

**Activities:**
- Select model architecture
- Train model on data
- Tune hyperparameters
- Validate performance
- Document model characteristics

**Key Risks:**
- Model limitations
- Overfitting or underfitting
- Bias amplification
- Lack of reproducibility
- Inadequate documentation

**Risk Management Focus:**
- Technical evaluation (MEASURE)
- Fairness testing
- Robustness assessment
- Documentation

### 4. Verify and Validate

**Activities:**
- Test against requirements
- Evaluate on held-out data
- Conduct adversarial testing
- Assess fairness and bias
- Verify safety properties

**Key Risks:**
- Inadequate testing
- Missed failure modes
- Overconfidence in results
- Testing on non-representative data

**Risk Management Focus:**
- Comprehensive testing (MEASURE)
- Red teaming
- Stakeholder review
- Go/no-go decisions

### 5. Deploy

**Activities:**
- Integrate into production systems
- Configure for operational use
- Train users and operators
- Establish monitoring
- Communicate to stakeholders

**Key Risks:**
- Integration failures
- User misunderstanding
- Inadequate monitoring
- Unexpected interactions
- Scale-related issues

**Risk Management Focus:**
- Deployment controls (MANAGE)
- User training
- Monitoring setup
- Incident response preparation

### 6. Operate and Monitor

**Activities:**
- Monitor performance
- Collect feedback
- Detect anomalies
- Respond to incidents
- Maintain documentation

**Key Risks:**
- Performance degradation
- Distribution shift
- Misuse
- Emerging vulnerabilities
- Changing context

**Risk Management Focus:**
- Continuous monitoring (MANAGE)
- Incident response
- Feedback integration
- Periodic reassessment

### 7. Update and Maintain

**Activities:**
- Retrain models
- Update components
- Address discovered issues
- Adapt to changing requirements
- Manage technical debt

**Key Risks:**
- Regression in performance
- Unintended consequences
- Compatibility issues
- Inadequate testing of changes

**Risk Management Focus:**
- Change management
- Regression testing
- Impact assessment
- Documentation updates

### 8. Retire and Decommission

**Activities:**
- Plan transition
- Archive data and models
- Notify stakeholders
- Secure disposal
- Document lessons learned

**Key Risks:**
- Data leakage
- Service disruption
- Loss of institutional knowledge
- Inadequate transition

**Risk Management Focus:**
- Secure disposal
- Knowledge preservation
- Stakeholder communication
- Lessons learned

---

## Lifecycle Considerations

### Iteration and Feedback

The lifecycle is **not strictly linear**:
- Findings at any stage may require revisiting earlier stages
- Monitoring may reveal need for retraining
- Stakeholder feedback may change requirements
- New risks may emerge at any point

### Documentation Throughout

Each stage should produce documentation:

| Stage | Key Documents |
|-------|---------------|
| Plan/Design | Requirements, risk assessment, project plan |
| Data | Data cards, quality reports, privacy assessment |
| Build/Train | Model cards, training logs, architecture docs |
| Verify/Validate | Test results, audit reports, approval records |
| Deploy | Deployment plan, user guides, monitoring config |
| Operate | Monitoring reports, incident logs, feedback |
| Update | Change records, regression tests, release notes |
| Retire | Decommission plan, archive records, lessons learned |

### Stakeholder Engagement

Different stakeholders are relevant at different stages:

| Stage | Key Stakeholders |
|-------|------------------|
| Plan/Design | Business owners, affected communities, legal |
| Data | Data owners, privacy officers, domain experts |
| Build/Train | ML engineers, domain experts, ethicists |
| Verify/Validate | QA, security, compliance, affected parties |
| Deploy | Operations, users, support teams |
| Operate | Users, support, monitoring teams |
| Update | All of the above |
| Retire | Users, data owners, compliance |

---

## Third-Party AI Considerations

When using AI from third parties:

### Due Diligence
- Assess vendor's risk management practices
- Review documentation and testing results
- Understand limitations and failure modes
- Evaluate support and update commitments

### Contractual Protections
- Define performance requirements
- Specify compliance obligations
- Establish incident notification requirements
- Address liability and indemnification

### Ongoing Oversight
- Monitor third-party AI performance
- Stay informed of updates and changes
- Maintain ability to switch providers
- Conduct periodic reassessments

---

## Key Takeaways

- Risk management is **continuous** throughout the lifecycle
- Each stage has **unique risks** requiring different approaches
- **Documentation** at each stage enables accountability
- The lifecycle is **iterative** — expect to revisit earlier stages
- **Third-party AI** requires special attention to due diligence
