---
tags:
  - topic/physics/quantumComputing
  - topic/compsci
  - A-level
  - A-level/EPQ
share: true
---
[[Commercial applications of quantum computing|Commercial applications of quantum computing]]

# 1 introduction
- Classical computers cannot do large scale **combinatorics problems**
	- Involve the way items are arranged
- As items increase in a combinatorics problem, so does the computing time
- Many practical problems van be viewed as combinatorics problems such as problems in:
	- cryptography
	- chemistry
	- Finance
	- Advanced manufacturing
	- Materials science
- Some quantum algorithms can inspire classical algorithms better than what came before “quantum inspired algorithms” 

# 2 Quantum and combinatorics
> Combinatorics problems ask the question “how many ways can this set of objects be combined?”
> Or “what combinations are “best” in some metric or if a certain combination is possible
- Problem grows *exponentially*
## How do quantum computers help
- Can drastically reduce time it takes to solve problems
- Utilising quantum physics enabled algorithms
- **However,** current quantum computers are neither large enough nor reliable enough to solve any practical problems
	- Google did demonstrate quantum “supremacy” on a complex problem of “little practical use”

# 4 Chemical engineering
- Material discovery and drug development
- Original conception of QCs by Feynman was as a way for simulating quantum processes
## Why is this to do with combinatorics?
- Developing new useful molecules requires simulating many possible atom combinations and different bonding configurations
	- development of drugs and materials has historically been mainly down to luck and serendipity 
- quantum computing would take the luck and trial & error out of drug and materials R&D
## Why is computational chemistry so challenging?
- A molecules’s properties are influenced strongly by its lowest energy state
- So starting point is often to find the structure that would yield the lowest energy state
- Which is a difficult combinatorics problem
	- Involves assessing every interaction between every electron and every proton in the structure
	- Increasing by just 1 e<sup>-</sup> can mean an exponent increase in the number interactions
## Quantum annealing to save the day?
- D-Wave systems have pioneered a noisy quantum device to provide advantage
- Despite being noisy, combinatorics problems (not all) can be formulated to work with them
- D-Wave launched in Sept 2020 a 5,000 qubit system
- Quantum annealing finds the best solution to a problem by exploiting quantum tunnelling
## Advances:
- D-wave with their 5,000 qubit annealer
- IBM Q’s simulation of a a beryllium hydride in 2017
## Companies involved with Q. Chemical engineering
- OTI Lumionics
	- Quantum molecule discovery
	- Using D-Wave’s systems to simulate molecules
	- Has also developed quantum-inspired classical programs
- Menten AI
	- Uses QC, synthetic biology, and machine learning to aid new protein creating
- Zapata Computing
	- “Pioneered a number of new-term quantum computing methods for chemical simulations”

# 5 Banking/Finance
- Combinatorics problems are very common
	- Arbitrage
	- Credit scoring
	- Derivatives development etc.
- Many of these challenge relate to the ***“traveling salesman problem”***
	- One salesman has n cities to travel through
	- Goal is to find shortest route that:
		- Goes to each city once
		- Ends at staring city
	- Problem becomes increasingly more complex as n increases
	- Quantum computer can solve it
	- Business problems that are travelling salesmen in disguise:
		- Circuit design
		- Package delivery
		- Train scheduling etc.
- Risk assessment is a massive combinatorics problem
	- Requires how many different values relate to each other
	- Using Monte Carlo on classical computers is incredibly slow
		- So much so that “a McKinsey report notes that many banks have reduced the use of Monte Carlo simulations for value-at-risk calculations.”
	- Montecarlo on QC would have a massive speedup
- Fixing banking issues with QC has the potential to be VERY profitable 
> Overall, combinatorics problems are common in finance and banking, and solving them would be extremely valuable. Nevertheless, the highest value combinatorics problems in finance and banking will likely require substantial advances in quantum computing technology. Until such technology becomes available, there is near-term potential for quantum-inspired algorithms to generate profit opportunities.