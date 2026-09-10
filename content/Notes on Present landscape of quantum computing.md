---
tags:
  - topic/physics/quantumComputing
  - topic/compsci
  - A-level
  - A-level/EPQ
share: true
---
[[Present landscape of quantum computing|Present landscape of quantum computing]]

## 2 How quantum computers work
- Qubits are 2D vectors in Hilbert space
	- Can be represented physically as an atom, electron, photon or a cold superconducting circuit with moving electrons 
- Qubits can be in superpositions of |0⟩ and |1⟩
	- Can point n any direction within a unit sphere (Bloch sphere, see Fig2.a)
- When measured qubits collapse into either |0⟩ or |1⟩
- Most common computation model for quantum computers is the quantum circuit model
	- Uses gates to transform input qubit
	- Fig 2b shows the Hadamard gate acting on a initial state of |1⟩
		- which creates “an equal superposition state” where the qubit is equally likely to collapse into each state
- Other quantum models include adiabatic quantum computer (annealing) and quantum Turing machine

![[Screenshot 2023-12-06 at 6.15.44 am 2.png|Screenshot 2023-12-06 at 6.15.44 am 2.png]]


## What makes quantum computers special?
- Entanglement
	- 2 quits act not individually but as a group
	- Increases information density of quantum computers
	- If, for example, an entangled qubit’s output is |1⟩, then the second qubit will also collapse to |1⟩
- Superposition
	- Qubits can exist in both |1⟩ and |0⟩ at same time

## 3 Types of problems QC can solve
1. **Combinatorial optimisation:** finding the max/min of an objective function, e.g. shortest distance among a given set of points.
2. **Problems in linear algebra:** prominent pillar of machine learning
3. **Problems involving differential equations:** an equation that can be states as an equation that relates one or more functions a their derivatives. Used to model behaviour of complex systems involving fundamental laws of physics. (Used in many Simulation)
4. **Factorisation:** current cryptography (RSA) is heavily reliant on classical computers being unable to factor large numbers.

## 4 Threats to existing cryptography
- Quantum computers can process data at an exponential rate
- “Shor’s algorithm”, developed in 1994, can factor v large numbers, thus break RSA
- Present QC do not meet hardware requirements to implement Shor’s algorithm 
	- Require a QC with 4,000 qubits, 100million gates to break 2048bit long RSA key
- Security threats have prompted R&D to establish QC-resistant cryptography 
	- National Institute of Standards and Technology (NIST) has started process of evaluating and standardising post-quantum cryptographic algorithms 
- 2 methods to fix this:
	- Use more complex mathematical problems that are too hard for QCs to solve
		- Lattice based cryptography
		- Code-based cryptography 
		- Hash based cryptography etc.
	- Use quantum phenomena
		- No-cloning theorem, and uncertainty principle  can be exploited
		- Already have many protocols
			- BD84, SARG04, etc.

![[Screenshot 2023-12-06 at 6.24.14 am.png|Screenshot 2023-12-06 at 6.24.14 am.png]]


## 5 quantum computing hardware landscape
- We are in NISQ Era
	- Noisy Intermediate-Scale Quantum
		- QC that we don’t have full control over qubits 
		- big milestone as classical computers cannot simulate > 50 qubits
	- Slight disturbances can cause qubit to collapse
		- Must use error correction

![[Screenshot 2023-12-06 at 6.31.28 am.png|Screenshot 2023-12-06 at 6.31.28 am.png]]

### Superconducting qubits
- Leading technology of our NISQ era
- Large companies like Google, IBM, and Intel are betting on it
- Superconducting materials: 
	- have 0 resistance
		- Means qubits can remain error-free
	- Require v. Low temps (around 1K)
- Qubits are LC oscillators comprising of na inductor and a capacitor
### Trapped ions
- Charged ions are trapped in an electromagnetic field
- Qubit is represented by the ion’s spin energy level
- Can help in study of condensed0matter physics
- Can perform high level simulations eg. Cosmology and high energy physics
### Others
> “Scope for research to find alternative technologies for building a quantum computer is huge.”
- Topological quantum computing
	- Still in infancy, but is pursued bc Microsoft
	- Aims to drastically reduce errors
	- Information is encoded in an objects topology
		- Properties that are preserved under continuous deformations like twisting
	- Since only interested in topology → more error resistant 
- Photons 
	- operate at room temp
	- Based on silicon chips
- NMR (nuclear magnetic resonance)
	- Was initially the most popular approach used
	- Discarded as its hard to scale
- Quantum dot
	- Semiconductor based
	- Qubits are electron spins trapped in the semiconductor nanostructure

## 7 Growth in QC field

![[Screenshot 2023-12-06 at 6.48.08 am.png|Screenshot 2023-12-06 at 6.48.08 am.png]]


![[Screenshot 2023-12-06 at 6.48.15 am.png|Screenshot 2023-12-06 at 6.48.15 am.png]]


![[Screenshot 2023-12-06 at 6.48.24 am.png|Screenshot 2023-12-06 at 6.48.24 am.png]]