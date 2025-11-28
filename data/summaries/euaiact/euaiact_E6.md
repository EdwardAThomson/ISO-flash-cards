# E6: General-Purpose AI (GPAI) Models

The EU AI Act introduces specific rules for **General-Purpose AI (GPAI) models** — foundation models that can be adapted for many different tasks. These rules apply from **August 2025**.

## What is a GPAI Model?

A **General-Purpose AI Model** is an AI model that:
- Is trained on a **large amount of data** using self-supervision at scale
- Displays **significant generality**
- Can competently perform a **wide range of distinct tasks**
- Can be **integrated into downstream AI systems**

Examples include large language models (LLMs) like GPT-4, Claude, and Llama.

## Two Tiers of GPAI

### Tier 1: All GPAI Models
Basic obligations for all GPAI model providers.

### Tier 2: GPAI with Systemic Risk
Additional obligations for models that pose **systemic risk** due to high-impact capabilities.

---

## Tier 1: Obligations for All GPAI Providers

### 1. Technical Documentation
Maintain and make available:
- General description of the model
- Training and testing processes
- Evaluation results
- Information on compute used for training
- Known limitations and risks

### 2. Information for Downstream Providers
Provide sufficient information to enable downstream AI system providers to:
- Understand the model's capabilities and limitations
- Comply with their own obligations under the Act

### 3. Copyright Compliance Policy
- Implement a policy to comply with EU copyright law
- Particularly the **Text and Data Mining** opt-out provisions
- Make available a sufficiently detailed summary of training data content

### 4. EU Summary of Training Data
Publish a **sufficiently detailed summary** of the content used for training, following a template provided by the AI Office.

---

## Tier 2: GPAI Models with Systemic Risk

### What Triggers Systemic Risk Classification?

A GPAI model is presumed to have systemic risk if:

1. **High-impact capabilities** — Capabilities matching or exceeding the most advanced models, which could have significant impact on the EU market due to reach or negative effects

2. **Compute threshold** — Training used more than **10²⁵ FLOPs** (floating-point operations)

The Commission can update this threshold and add other criteria.

### Additional Obligations for Systemic Risk Models

| Obligation | Description |
|------------|-------------|
| **Model evaluation** | Perform standardized evaluations, including adversarial testing |
| **Risk assessment** | Assess and mitigate systemic risks, including from misuse |
| **Incident tracking** | Track, document, and report serious incidents to the AI Office |
| **Cybersecurity** | Ensure adequate cybersecurity protection for the model and infrastructure |

### Serious Incidents
Providers must report to the AI Office:
- Incidents with potential systemic risk implications
- Capabilities that could pose systemic risks
- Unforeseen risks discovered post-deployment

---

## Codes of Practice

The AI Office will facilitate the development of **Codes of Practice** to help GPAI providers demonstrate compliance.

Codes may cover:
- Technical documentation standards
- Information sharing with downstream providers
- Copyright compliance measures
- Risk assessment methodologies
- Incident reporting procedures

Adherence to codes creates a **presumption of conformity** with the relevant obligations.

---

## Open-Source GPAI Models

**Simplified obligations** apply to GPAI models released under **free and open-source licenses**:

- Only required to publish training data summary and copyright policy
- Exempt from most documentation and information-sharing requirements

**Exception**: Open-source models with **systemic risk** must comply with all Tier 2 obligations.

---

## Downstream Integration

When a GPAI model is integrated into a high-risk AI system:

- The **GPAI provider** is responsible for model-level compliance
- The **downstream provider** is responsible for system-level compliance
- Both must cooperate to enable overall compliance

---

## Key Definitions

| Term | Meaning |
|------|---------|
| **GPAI Model** | The trained model itself (weights, architecture) |
| **GPAI System** | An AI system based on a GPAI model, capable of various purposes |
| **Downstream Provider** | Provider who integrates a GPAI model into their AI system |
| **Systemic Risk** | Risk affecting the EU market or population due to high-impact capabilities |
| **FLOPs** | Floating-point operations — measure of compute used in training |
