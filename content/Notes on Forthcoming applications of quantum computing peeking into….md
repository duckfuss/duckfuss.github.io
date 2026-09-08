---
tags:
  - topic/physics/quantumComputing
  - topic/compsci
  - A-level
  - A-level/EPQ
share: true
---
[[applications of quantum computers|applications of quantum computers]]
[[Forthcoming applications of quantum computing peeking into the future|Forthcoming applications of quantum computing peeking into the future]]

![[Screenshot 2023-11-10 at 6.06.58 pm.png|Screenshot 2023-11-10 at 6.06.58 pm.png]]


![[Screenshot 2023-12-05 at 4.18.13 pm.png|Screenshot 2023-12-05 at 4.18.13 pm.png]]

# 2 Applications of various quantum algorithms 
## ***2.1 Shor’s Factor*** **algorithm and cryptography**
- Shor’s algorithm can break public key RSA encryption 
- This will undermine current encryption (bad)

## 2.2 Unstructured Search using ***Grover’s Algorithm***
- “Unstructured data accounts for a significant portion of the total data generated”
- Examples:
	- Text
	- Dates
	- values
- Means data is not organised in a definable manner
- Grover’s algorithm shows an improvement by a “quadratic factor” over classical computing

![[Screenshot 2023-11-10 at 6.16.07 pm 1.png|Screenshot 2023-11-10 at 6.16.07 pm 1.png]]


## 2.4 Applications of search
- Search can be used as part of a larger quantum algorithm
- “A quantum algorithm by Durr and Hoyer can be used to find the minimum of an unsorted list” v fast
	- This uses grover’s search function
- **Pattern matching**
	- A “fundamental problem in text processing and bioinformatics”

## 2.6 Harrow, Hassidim and Lloyd (HHL) algorithm
> - “Provides unparalleled applications for quantum computers”
- Can solve a system of linear equations
- Used for many machine learning tasks

## 2.7 quantum annealing
- a.k.a *adiabatic quantum computation (AQC)*
- Solves **optimisation problems**
- Used to find global minimum 

![[Screenshot 2023-12-05 at 7.22.24 am.png|Screenshot 2023-12-05 at 7.22.24 am.png]]

- D-wave company have developed a processor - the “D-Wave 2X” that can outperform classical computers at annealing


# 3 applications of quantum computing for machine learning
- Most commonly used to achieve faster speed in learning
- But can be used to enhance performance through “deep learning algorithms on specialised hardware like AQC)

## 3.1 Nearest neighbour classification and k-means clustering
- The K-nearest neighbour (KNN) algorithms takes prev. Data into account and classifies a new data item based on its similarity and classification to its neighbours.
- Closer a vector is to its neighbour, the closer the similarity
- Can use the overlap of 2 quantum states **a** and **b** to measure similarity between vectors
	- Overlap is found through smthn called a “swap test”
	- Results in exponential speed up

## 3.3 Quantum Neural Networks (QNNs) and deep learning
- There is little practical evidence of a successful QNN
	- “No proposals now that truly harness the power of quantum computers”
	- Hard to build as quantum states need to be normalised - thus can only use unitary operations
- Current approaches are to replace bits with qubits, thus creating neural network in superposition of active/inactive states
- Quantum annealers are easily scalable - make good candidate for deep QNN 

## 3.4 Hidden quantum Markov models (HQMM)
- Markov model models sequential data and predicts future values based on current info (like autocomplete)
- HQMM were first introduced in 2010

# 4 Quantum simulation
- Classical computers struggle to simulate quantum mechanical phenomena
	- Requires large amounts of memory to store vast no. quantum states
	- Quantum system grow exponentially as system size increases
> Get a quantum computer to do it → “one controllable quantum system simulate another” - Richard Feynman
- Would be able to solve, for example, many body problems
- Provide insight into many quantum phenomena
- allows testing and verification of various quantum models
	- eg. “hard problems in condensed matter physics like quantum magnetism and correlated electrons”
- Unlike quantum computing, quantum simulation does not require:
	- [explicit] Error gates
	- Error correction
	- High accuracy
	- Large numbers of qubits (Shor’s factor algorithm by contrast uses thousands)

# 5 miscellaneous applications
## 5.1 logistics
- Finding optimal route is essential
- Strong supply chains are crucial to competitive capitalism
- Sub-optimal transport efficiency is bad for planet
	- Global warming
### Vehicle routing problem
- Visiting 10 cities = 200,000 different routs
- Problem increases exponentially 
- Beyond capabilities of a classical computer
- Using quantum computers, transport operations can see a reduction in cost by 19.8%, when implemented with just 10 vehicles

![[Screenshot 2023-12-05 at 4.11.32 pm.png|Screenshot 2023-12-05 at 4.11.32 pm.png]]


## 5.2 Financial risk analysis
### Current methods:
- Use Monte Carlo simulation to assess Value at Risk (VaR) on a classical computer
	- computationally expensive
	- Slow - especially on classical computers
	- theoretically can work, but requires large number of random samples 
### Quantum method:
- Can assist ML to solve the problem (see above)
- Can use quantum techniques like amplitude estimation instead of Monte Carlo
	- Require only a few thousand (MC requires millions)
	- Can run in a few hrs (MC takes Classical C. Weeks)