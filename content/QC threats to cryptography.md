---
tags:
  - topic/physics/quantumComputing
  - topic/compsci
  - A-level
  - A-level/EPQ
share: true
---
[[applications of quantum computers|applications of quantum computers]]
[[Quantum Computing’s Cyber-Threat to National Security|Quantum Computing’s Cyber-Threat to National Security]]
[[Security|Security]]
## Source (1):
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