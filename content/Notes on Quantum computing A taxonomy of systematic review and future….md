---
tags:
  - topic/physics/quantumComputing
  - topic/compsci
  - A-level
  - A-level/EPQ
share: true
---
[[Quantum computing A taxonomy of systematic review and future directions|Quantum computing A taxonomy of systematic review and future directions]]

# Introduction
- QC’s scale at 2<sup>n</sup> unlike classical computers
	- See ( [[Why quantum computers  scale at 2n whilst classical computers scale…|Why quantum computers  scale at 2n whilst classical computers scale…]])
## Major challenges:
- Major challenge: **decoherence**
	- Where [[Qubits|Qubits]] loose their “coherent properties” from interaction with the environment 
	- Qubits in superposition will decohere into classical bits
		- Quantum advantage would be lost
- Other major challenge
	- Qubit connectivity
		- Many 2 qubit [[Transforming Qubits  Quantum Logic Gates|Transforming Qubits  Quantum Logic Gates]] require inter-qubit interactions via “direct coupling”
## **NISQ -** Noisy Intermediate Scale Quantum
- “Noisy” → what’s happening in the environment would disturb the devices
- Research efforts in QC’s focus on overcoming errors in NISQ devices
	- Developing efficient error correction protocols
> - *The full potential of QC for real-world applications can only be realised when a large-scale fault-tolerant universal quantum computer will be available which requires several years of further development. However, the quantum speed-up on the existing NISQ era devices is already being accessed for prototype applications exhibiting promising results.* 

### Research for NISQ devices focus on 2 main areas:

- &nbsp;
	- **Quantum machine learning**
	- See [[Quantum Computer applications|Quantum Computer applications]]
		- Speed up machine learning algorithms for analysing classical data
			- Current ML is data hungry and energy intensive, QC’s consumer less energy reducing energy cost and dependency on fossil fuels
		- Not established whether QML would offer ↑er computational efficiency than classical machine learning
> 		- *“Recent work has shown promising results”*
	- **Variational quantum algorithms**
## Types of NISQ QC:
- Quantum circuit model for Gate based universal QC
	- Considered most practical
	- Possibility of reprogramming QC based on target problem
- Adiabatic QC
- Quantum annealing
- One-way quantum computer


# 1.1    |    Basics of QC
- In a QC the basic unit of information is a qubit, not a bit
- Qubits can be in 3 possible states:
	- 0
	- 1
	- Superposition of 2
- Qubits can be represented as a|0⟩ + b|1⟩
	- A and b are coefficients allowing for the “mixing” of both states

![[Pasted Graphic 4 6.png|Pasted Graphic 4 6.png]]

	- %p.age given is the probability of resulting in each state
### Multi-qubit superpositions:
- 3 bit QC can be in state with these values:
    a |000) + b |001) + c |010) + d |011) + e |100) + f 1101) + g |110) + h |111)
- This implies doubling number of bits in classical computing will only double computational space, but in QC will exponentially increase it
### Entanglement
- Qubit properties are linked
> *“Spooky action at a distance”*
> *-Einstein*
- Can be exploited for **dense coding**

### Steps for simulation of computational problem on a quantum computer 
1. Preparation of superposition state - assigns equal prob. To all possible outcomes
2. Quantum operations, exploiting:
	1. Superposition
	2. Entanglement
1. Quantum operations should lead to the prob. Of desired outcome increasing
2. Measurement - leads to collapse of quantum state into highest probability state providing desired answer

# 2.1    |    Background

![[Screenshot 2023-10-26 at 6.45.23 pm 1.png|Screenshot 2023-10-26 at 6.45.23 pm 1.png]]

> ## Building blocks of a large scale quantum computer
> - Quantum CPU
> 	- Waffle
> - Quantum gates
> 	- Perform “unitary” operations
> 	- Combination of multiple quantum circuits - use qubits for their operations
> - Quantum control and measurement circuitry
> 	- “required for the proper monitoring of various manipulations of quantum states and computations while handling error correction and detection processes”
> - Quantum error detection and correction tools
> 	- Used to locate and correct errors from the operations of the quantum gates
> 	- Protects quantum information from errors resulting from **quantum noise** and **decoherence**
> - Quantum memories
> 	- “Collection of multiple quantum states in various superposition arrangements constitutes quantum memories”
> 	- Quantum registers saves the quantum states of quantum circuits


## System decoherence
> *“The progressive deterioration of the state of a quantum system is known as system decoherence”*
- When a quantum system interacts with environment
- The leakage of important quantum information 
	- Cannot be recovered and used

# 2.2 | QC algorithms

![[Pasted Graphic 26.png|Pasted Graphic 26.png]]


# 4 | Quantum software tools, technologies and practices
- Unlike QC hardware, QC software is a lot less established 
- Low level languages only

![[Screenshot 2023-11-05 at 1.23.38 pm.png|Screenshot 2023-11-05 at 1.23.38 pm.png]]


# 6 | Scalable quantum computer hardware

## Methods by which to build qubits and quantum gates:
- **Trapped ions** 
- **Superconducting circuits**
- Optical lattices
- Solid state spins
- Quantum wells
- NMR (nuclear magnetic resonance)
> Trapped ions and superconducting circuits most widely used

# 6.1 | quantum computers and speed-up
### **Quantum supremacy** 
- solving smthn on QC that would take classical orders of magnitudes longer
### **Quantum advantage**
- solving useful real world problem which cannot yet be efficiently solved on a QC
> Q. supremacy has already beed demonstrated, but Q. Advantage hasn’t

## Current quantum machines
- Bulky, big
- Limited computational power bc. Made up of materials that must be kept at superconducting temps
## AI and QC
- Could AI be the “quantum advantage”

# 6.2 | Industrial applications of quantum computers
## Searching/sorting
- Searching efficiently and sorting  (grover’s algorithm) is significantly faster than any classical computer
## Inexact models
- Classical models about the real world (or otherwise) often need to approximate and ignore fine details due to things like chaos theory 
- These approximations often propagate errors into solutions
### Examples:
- Weather models
- Computational chemistry
### How QC’s help
- QC’s can simulate exactly
- Due to the inherently quantum (real) nature of the computation and the massive superposition of states
	- See [[Quantum parallelism|Quantum parallelism]], [[Why quantum computers  scale at 2n whilst classical computers scale…|Why quantum computers  scale at 2n whilst classical computers scale…]]
### What QCs can unlock through using exact models
- Better fertilisers
- Reduce carbon footprint in manufacturing 
- Faster accurate patient diagnosis
	- Comparing reports with a global database
- Traffic control
- Understanding :
	- chemistry
	- Photosynthesis 
	- Superconductivity
	- Magnetism
	- And other **quantum** phenomena 
### Proof of concept
- IMB simulated beryllium hydride molecule

### What will become vulnerable by the development of and industrial quantum computer
- Encryption (RSA)
- Financial transaction
- Critical infrastructure 
- Blockchain / crypto

# 6.3 | [[Hardware requirements of industrial quantum computers|Hardware requirements of industrial quantum computers]]
- Qubits
- Quantum gates
- Classical control circuitry
	- Applications of electromagnetic fields 
	- Cooling system]user interface
	- Networks
	- Data storage capabilities
## 4 layers of hardware requirements

| <b><u>Requirement</u></b> | <b><u>Description</u></b> |
| -- | -- |
| *Quantum data plane* | Where qubit sates are stored |
| *Control and measurement plane* | Where measurements are carried out |
| Control processor plane | Sequence of operations in algorithms |
| *Host processor plane* | User interface, networks and storage of large arrays |



# 6.4 | Challenges in scalable production of industrial quantum computers
- It is currently not possible to have a demonstrable design for a QC of the scale required to crack cryptography
- Scaling up qubit numbers using current qubit methods is not enough - they suffer to many issues like decoherence  

## Table of current candidates of quantum computers:

![[Screenshot 2023-11-05 at 1.29.00 pm.png|Screenshot 2023-11-05 at 1.29.00 pm.png]]

## Possible qubit choices:
- **Photons**
	- Remain coherent for a long time 
	- Hard to create quantum circuits out of them
- **Superconductors**
	- Possess quantum properties that can be used to make quantum circuits
	- Used by IBM, Google, Rigetti and more to make QC’s
	- Fidelity (particularly in 2 qubit operations) is low
		- Require error correction/mitigation techniques
- **Trapped ions**
	- Alongside superconductors is the current most advanced candidate for a supercomputer 
- **Silicon qubits**
	- Offer the great *theoretical* scalability
	- Rubbish gate fidelity 
		- Require error correction schemes

# 6.5 | Currently available platforms
## IBM Quantum Experience
- 5 Qubit system
- Free to the public quantum computer
- Cloud based
## Rigetti Forest
- Similar cloud based QC service

# 6.6 | State-of-the-art and future outlook in industrial quantum computers
- QC market is expected to reach $8 Billion by 2027
- QC’s are being developed by various companies:
	- **BIG companies**
		- IBM
		- Google
		- Alibaba
		- Microsoft
	- **Dedicated quantum enterprise**
		- D-wave
		- Rigetti
		- Nvision imaging technologies
	- **Governments**
		- US
		- EU quantum technologies flagship
		- IL national quantum technologies program
		- Australian centre for quantum computation and communication technology (CQC2T)
		- Chinese quantum national laboratory for quantum information science

# 7 | Future Directions
- As illustrated below, different QC technologies are in different stages of development and hype

![[Screenshot 2023-11-05 at 1.44.38 pm.png|Screenshot 2023-11-05 at 1.44.38 pm.png]]

- This paper expects fault tolerant QCs to blossom as they emerge from the hype cycle in 10 yrs (11th entry along in the graph)

# 7.1 | Engineering/Design challenges
- An efficient quantum algorithm requires many physical qubits in close and continuous connection between classical platform and quantum chip
	- Forms a colossal control overhead
- This interaction & resulting overhead increases complexity
## **Main drawback is fragility**
- **Short coherence time** bc superconducting qubits forget their information v frequently (in nanoseconds)
- **Unreliability in quantum operations** due to relatively large error rates - v hard to develop QC with low error rates
- Small **material fault** of **environmental instabilities** can generate an error in qubits - make them lose their quantum data
	- This reduces the useful period of time for a qubit
## **Difficulty of error correction**
- Unlike classical computers errors are *continuous* (involve both amplitude and phase)
- Cannot copy quantum states (no cloning principal)
- Measurement collapses a quantum state - destroying and data saved in the qubits

# 7.2 | Reliable QC
- Require very low temperatures
- Fabrication of qubit states needs to be highly accurate
- Effective error correction
- AI and ML-based techniques can improve error correction

# 7.3 | Quantum-assisted machine learning
- QC can easily handle large datasets
	- Requires large device sizes (100-1000qubits this paper estimates)
- Can efficiently sample probability distributions very easily 
	- Used in ML
> ## *There is a need for millions of qubits to handle the current demand and tackle large datasets*

# 7.4 | Energy management 
- Current powerful supercomputers and data centres consume A LOT of energy
- QC are more energy efficient 
	- Superconducting QC chips have 0 resistance so produce no heat
[[Quantum parallelism|Quantum parallelism]] enables more efficient calculations
- Reduces cost and carbon emissions
- Hybrid QC-Classical computers could exist
	- QC does energy intensive stuff
	- Classical computer uses Low energy stuff through cloud
	- Would dramatically reduce costs
# 7.5 | Quantum Internet
- Enables distributed QC
- Uses quantum mechanics laws
	- Constraints are teleportation
	- Entanglement
	- Quantum measurement
	- No-cloning 
- Requires a paradigm shift in network design
- Decoherence is v easy - especially over long distances

# 7.6 | Robotics
- Robots use energy intensive GPUs to solve intense computational tasks:
	- Drug discovery
	- Logistics
	- Cryptography
	- Finance 
	- Etc.
- QC can be augmented to help 
- QC can help “enhance robotic senses” for manufacturing
	- Eg. Finding faults in a jet engine quickly
- QC image processing is significantly faster than classical means
- QC can improve kinematic problems that robots have to solve much faster
	- Account for more factors like robot’s joint fractions and inertia
- Improve automatic learning 
	- Can distinguish between observed movement and actual movement and discern what needs adjusting to match
- **BUT, will increase cost due to increased complexities**
	- This is unfortunately true in most areas that we may try apply QC’s to

# 7.7 | Simulations for complex quantum experiments
- Small scale (50-100 qubit) quantum systems (known as **quantum simulators**) can accurately simulate natural phenomena like complex chemistry, physics, and biology problems that elude classical computers 
- This is due to quantum computers being inherently a representation of quantum phenomena 
- Lead to major advancements in many fields of natural sciences 

# 7.9 | Numerical weather prediction
- Gives a method to more accurately solve the chaotic problem of weather predictions
- These predictions are at the limits of modern supercomputers 
- Could predict storm paths and tornado likelihood’s etc. way more accurately saving lives
- More accurately model the effects of climate change