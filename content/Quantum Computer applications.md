---
tags:
  - topic/physics/quantumComputing
  - topic/compsci
  - A-level
  - A-level/EPQ
share: true
---
## How QC’s help
- QC’s can simulate exactly (1)
- Due to the inherently quantum (real) nature of the computation and the massive superposition of states (1)
	- See [[Quantum parallelism|Quantum parallelism]], [[Why quantum computers  scale at 2n whilst classical computers scale…|Why quantum computers  scale at 2n whilst classical computers scale…]]

### Quantum computers can solve 3 main types of problem (2):
1. **Combinatorial optimisation:** finding the max/min of an objective function, e.g. shortest distance among a given set of points. [[Combinatorics Problems|Combinatorics Problems]]
2. **Problems in linear algebra:** prominent pillar of machine learning
3. **Problems involving differential equations:** an equation that can be states as an equation that relates one or more functions a their derivatives. Used to model behaviour of complex systems involving fundamental laws of physics. (Used in many Simulation)
4. **Factorisation:** current cryptography (RSA) is heavily reliant on classical computers being unable to factor large numbers.


## Searching/sorting (1,4)
- Searching efficiently and sorting  (grover’s algorithm) is significantly faster than any classical computer (1)
- “Unstructured data accounts for a significant portion of the total data generated”
- Examples:
	- Text
	- Dates
	- values
- Means data is not organised in a definable manner
- Grover’s algorithm shows an improvement by a “quadratic factor” over classical computing

![[Screenshot 2023-11-10 at 6.16.07 pm.png|Screenshot 2023-11-10 at 6.16.07 pm.png]]

- Search can be used as part of a larger quantum algorithm
- “A quantum algorithm by Durr and Hoyer can be used to find the minimum of an unsorted list” v fast
	- This uses grover’s search function
- **Pattern matching**
	- A “fundamental problem in text processing and bioinformatics”

## Inexact models (1)
- Classical models about the real world (or otherwise) often need to approximate and ignore fine details due to things like chaos theory 
- These approximations often propagate errors into solutions


## Using exact models, QC’s can allow: (1)
- Better fertilisers
- Reduce carbon footprint in manufacturing 
- Faster accurate patient diagnosis
	- Comparing reports with a global database
- Traffic control
- Understanding :
	- Chemistry - see [[Quantum Chemical Engineering|Quantum Chemical Engineering]]
	- Photosynthesis 
	- Superconductivity
	- Magnetism
	- And other **quantum** phenomena 
### Proof of concept
- IMB simulated beryllium hydride molecule


## Quantum-assisted machine learning (1)
- QC can easily handle large datasets
	- Requires large device sizes (100-1000qubits this paper estimates)
- Can efficiently sample probability distributions very easily 
	- Used in ML
> ## *There is a need for millions of qubits to handle the current demand and tackle large datasets*


## Energy management  (1)
- Current powerful supercomputers and data centres consume A LOT of energy
- QC are more energy efficient 
	- Superconducting QC chips have 0 resistance so produce no heat
[[Quantum parallelism|Quantum parallelism]] enables more efficient calculations
- Reduces cost and carbon emissions
- Hybrid QC-Classical computers could exist
	- QC does energy intensive stuff
	- Classical computer uses Low energy stuff through cloud
	- Would dramatically reduce costs


## Quantum Internet (1)
- Enables distributed QC
- Uses quantum mechanics laws
	- Constraints are teleportation
	- Entanglement
	- Quantum measurement
	- No-cloning 
- Requires a paradigm shift in network design
- Decoherence is v easy - especially over long distances


## Robotics (1)
- Robots use energy intensive GPUs to solve intense computational tasks:
	- Drug discovery
	- Logistics
	- Cryptography
	- Finance etc. 
- QC can help “enhance robotic senses” for manufacturing
	- Eg. Finding faults in a jet engine quickly
- QC image processing is significantly faster than classical means
- QC can improve kinematic problems that robots have to solve much faster
	- Account for more factors like robot’s joint fractions and inertia
- Improve automatic learning 
	- Can distinguish between observed movement and actual movement and discern what needs adjusting to match
- **BUT, will increase cost due to increased complexities**
	- This is unfortunately true in most areas that we may try apply QC’s to


## Simulations for complex quantum experiments (1)
- Small scale (50-100 qubit) quantum systems (known as **quantum simulators**) can accurately simulate natural phenomena like complex chemistry, physics, and biology problems that elude classical computers 
- This is due to quantum computers being inherently a representation of quantum phenomena 
- Lead to major advancements in many fields of natural sciences 


## Numerical weather prediction (1)
- Gives a method to more accurately solve the chaotic problem of weather predictions
- These predictions are at the limits of modern supercomputers 
- Could predict storm paths and tornado likelihood’s etc. way more accurately saving lives
- More accurately model the effects of climate change 


[[Quantum Chemical Engineering|Quantum Chemical Engineering]] (3)
- Material discovery and drug development
- Original conception by Feynman was a way of simulating quantum processes
- Takes the serendipity out of chemical engineering

[[Quantum Banking and Finance|Quantum Banking and Finance]] (3)
- Many complex problems too big for classical computers
- e.g. traveling salesman problems (combinatorics problems)