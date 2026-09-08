---
tags:
  - topic/physics/quantumComputing
  - topic/compsci
  - A-level
  - A-level/EPQ
share: true
---
[[An Introduction to Quantum Computing for Non-Physicists|An Introduction to Quantum Computing for Non-Physicists]]

# Ch1. Introduction
- history of quantum computers
- basic rundown of how they function

## Quantum vs classical parallel processors
- For **classical computers**, exponential decrease in time means exponential increase in parallel processors
- For **quantum computers,** exponential decrease requires only linear increase - <span style="color:#ff0cff;"><b><i>quantum parallelism</i></b></span>
	- A single qubit can be in superposition of 0 AND 1
		- So can therefore compute **instantly** for all input states due to **superposition of output states**
		- BUT can only measure **ONE** of those output states (see the catch below)
	- <span style="font-family:AppleSymbols;">∴</span> **n qubits** can hold **2**<b><sup>n</sup></b> possible values (see [[Why quantum computers  scale at 2n whilst classical computers scale…|Why quantum computers  scale at 2n whilst classical computers scale…]])

## The catch with quantum computers
- You have to make a **measurement** 
	- Measurement disturbs quantum state
- **Decoherence** 
	- Hard to isolate qubits from external environment
	- Fixed by <span style="font-size:12.26530647277832pt;"><i>software</i></span><span style="font-size:12.26530647277832pt;">, NOT just physical improvements</span> 
		- <b><u>Quantum error correction</u></b>

## Methods to get around the measurement problem
- Tweak quantum state so a common property of output values (eg. Symmetry or period of a function) can be read
	- Used in Shor’s factor algorithm 
- Transform quantum state to increase chance output of interest will be read (amplification)
	- Used in Grover’s search algorithm 

## Operations a quantum computer can undergo:
- Transformation
	- Primitive transformations serve as “quantum” gates - like logic gates
	- All transformations must be reversible fsr
- Measurement

## Teleportation and dense coding
> - “Teleportation is the transfer of a quantum state from one place to another through classical channels“
> - “Dense coding uses a single quantum bit to transmit two bits of classical information”

## Types of quantum computer:
(Outdated)
- **NMR** - nuclear magnetic resonance
	- Macroscopic amounts of matter for qubits
		- The qubit is encoded into the *average spin* of many nuclei
	- Manipulated by magnetic fields
	- Doesn’t scale well - weak signal
- **Ion trap**
	- Qubits: ions confined in electric fields
	- Arranged linearly
	- Manipulated by lasers
	- **Limitations**
		- Must be kept in extreme vacuum
		- Must be kept at extremely low temperatures

# Ch2.1 - Photon polarisation 
> - Photons are only particle that can be measured directly 

## <b><u>The experiment</u></b>
- 3 polarising filters:
	- A - polarised horizontally (→)
	- B - polarised at 45 degrees (↗)
	- C - polarised vertically (↑)
- If you place A after a light beam (source → A → C) the **intensity** of the light beam is halved

![[Pasted Graphic 24.png|Pasted Graphic 24.png]]

- If you source → A → C, there is no beam after C

![[Pasted Graphic 1 8.png|Pasted Graphic 1 8.png]]

- However, if you set up the beams like: source → A → B → C, one eighth of the light exits after C

![[Pasted Graphic 2 4.png|Pasted Graphic 2 4.png]]

### 2 possible Models to explain this:
- **The incorrect Classical model** Often polarising filters are seen as “sieves”, which only let light through that’s polarised in the same direction 
	- **Problems with this model:**
		- Can’t account for the 50% intensity drop (should be much lower if all photons are randomly polarised in any angle)
		- Can account for A→B→C→1/8th decrease in intensity (should be 0 according to this theory)
		- Can’t account for any light leaving filter B having passed through A
- The **Quantum model: (see below)**

## <b><u>The explanation:</u></b>

## Setup and preamble:
- Let photon’s polarisation state be a unit vector in the direction of its polarisation
	- Don’t care about magnitude, only direction here, so let magnitude = 1 for all vectors (unit vectors)
- Therefore, polarisation state can be given as the multiples of 2 directions:
	- a|↑〉+ b|→〉
	- Where |↑〉and |→〉are the two orthogonal **basis vectors** (vectors which define the axes)
	- Where a and b are complex numbers
		- such that |a|^2 and |b|^2 = 1 (so it’s a unit vector)
- The bases is arbitrary (just depends where you set the axes), and thus dependant on what the measuring device sets them as
	- This is known as the **measurement postulate**
> 		- “*Any device measuring a two dimensional system as and associated orthonormal basis”*
			- Orthonormal basis means **orthogonal (90 deg) unit vectors** as the basis

## How measuring a photon’s state works

```
(see here for a qubit - based copy of this explanation)
```
- <span style="color:#fff0ff;"><b><i>When you measure a photon’s state, the state itself transforms into either one of the basis vectors (which are set by the measuring device)</i></b></span>
- *The probability that a photon changes into a particular basis vector is given by the magnitude of the photon’s vector’s component in the basis vector’s direction squared*
### Why???
- Energy is delivered in discrete chunks, not continuous amounts, so it either has to be ↑ or ->.

### So in the example below:
- The photon’s state is |ψ<span style="font-family:.PingFangSC-Regular;">〉</span>= ***a***|↑<span style="font-family:.PingFangSC-Regular;">〉</span>+ ***b***|→<span style="font-family:.PingFangSC-Regular;">〉</span>
- The horizontal component is given by ***b***
- The vertical component is given by ***a***
- Thus, the probability that, when measured, |ψ〉snaps to |↑〉is given by |a|<sup>2</sup>

![[Pasted Graphic 4 5.png|Pasted Graphic 4 5.png]]

- N.B. → as different measuring devices set their basis vectors in different directions, they will have different outcomes
### **To summarise:**

- &nbsp;
	- Measuring a photon’s state “snaps” it to either of the basis vectors of the measuring equipment, with a probability of the photon’s magnitude in the basis vector’s direction squared
	- This measurement changes the photons state into the new snapped state, making it impossible to determine what the original state was

## How this applies to polarisers
- It’s better to see the filters themselves as measuring devices, and their basis being the direction of their polarisation angle, and a direction orthogonal to that 
- When photons pass through the filter they are “snapped” to the filter’s basis vectors
- The photons that are snapped to the filter’s basis vector in the direction of it’s polarisation are let through
### How this applies to the experiment
- The photons that have passed through A are all snapped to A’s basis vector in the direction of polarisation
	- So they all have the polarisation of |→〉exiting A
	- This is why 50% of photons pass through, given they **snap** to the “nearest” basis vector
- If filter C is placed in front of A, no light would pass through as all photons are of a state that’s identical to the basis vector orthogonal to C’s polarisation angle
- However, placing B in front of A means that 50% of photons (which all have the state:  |→〉) entering B “snap” to each basis vector of filter B (for B is at 45 degrees to A)
	- Therefore 50% of photons pass through B
- So if those |↗〉photons enter A, as in scenario 3, 50% of the photons would pass through for the same reason
- Therefore total probability is ½•½•½=⅛

# Ch2.2 - state space and [[BraKet notation|BraKet notation]]
- Kets like |x⟩ describe vectors
- Bras like ⟨x| describe the transformed conjugate (think transforming matrices)
- see [here](https://www.mathsisfun.com/physics/bra-ket-notation.html) for a better explanation

 Ch 3Intro - quantum bits ([[Qubits|Qubits]])
- A qubit is just a unit vector in the “region” of possible states a quantum system could hold
	- This is often given in terms of the ***basis vectors***
	- Remember, we only really care about direction here
- Therefore, the KET represents the state of the qubit
	- So |0⟩ is the quantum equivalent of the binary digit 0 (same for 1)
- Unlike classical bits however, qubits can be in superposition, such that:
> 	*a*|0⟩ + *b*|1⟩, where *a* and *b* are complex numbers such that **|*****a*****|^2 + |*****b*****|^2 = 1.** 
- Qubits could hold an infinite number of states, but **only one state can be measured** as any superposition will collapse and it will “snap” to the orthogonal basis of the measuring device
	- This means that we can only gain the **same info/qubit as a classical bit**

# Ch3.2 - Multiple [[Qubits|Qubits]]
- The state of a quantum system (eg. 3 qubits) cannot always be described in terms of each component (eg. You cannot always describe the state of a system of 3 qubits in terms of just those three qubits) (see [[Why quantum computers  scale at 2n whilst classical computers scale…|here for more)]]
	- By contrast, for every state of 3 classical binary bits, you only need those three bits to describe the state of the overall binary number
	- This will be discussed further later
## Qubit state space dimensions: (see [[Why quantum computers  scale at 2n whilst classical computers scale…|Why quantum computers  scale at 2n whilst classical computers scale…]])
- ***For every system of n-qubits, the state space is 2***<b><i><sup>n</sup></i></b> ***dimensions in size***
	- State space = multidimensional region of all possible combinations 
	- Each combination of qubits is a basis vector in its own right, for they represent possible areas that the qubits could exist in. (Remember each qubit has 2 basis vectors)
		- Therefore each new basis gives a new axis
		- Therefore a new dimension
	- e.g. given in paper:
    the state space for two qubits, each with basis {**|0⟩, |1⟩**}, has basis:
    > 		{**|0⟩ ⊗ |0⟩, |0⟩ ⊗ |1⟩, |1⟩ ⊗ |0⟩, |1⟩ ⊗ |1⟩**}, 
    > 		which can be written more compactly as {**|00⟩, |01⟩, |10⟩, |11⟩**} 
		- N.B. The 2 qubits there share a basis → this isn’t necessarily always the case 
	- Example of a 3-qubit system:
    {**|000⟩, |001⟩, |010⟩, |011⟩,** 
    > 		**|100⟩, |101⟩, |110⟩, |111⟩**} 
		- This system has 8 dimensions of basis vectors given 8 possible combinations
	- **Remember**: for each qubit, their directions in the multidimensional space is given as: 
      *a*|v⟩ + *b*|w⟩ + ••• , for basis vectors v and w
## On states that cannot be described in terms of the states of its constituent qubits
> - States like |00⟩ + |11⟩ cannot be described in terms of the states of each of their component units separately 

```
In other words, we cannot find a1, a2, b1, b2 such that: 
(a1|0⟩ + b1|1⟩) ⊗ (a2|0⟩ + b2|1⟩) = |00⟩ + |11⟩, 
since; (a1|0⟩ + b1|1⟩) ⊗ (a2|0⟩ + b2|1⟩) = a1a2|00⟩ +a1b2 |01⟩+b1a2|10⟩+b1b2|11⟩ 
and a1b2 = 0 implies that either a1a2 = 0 or b1 b2 = 0. 
```
- These states are **entangled!!!**
[[Entangled qubits|Entangled qubits]]
- Multiple possible qubit positions could lead to theses states - I think
- These are the “extra” states which classical bits don’t have


# 3.3 [[Measuring Qubits|Measuring Qubits]]
- The process of measuring the state of the entire system can be broken down into a series of single-qubit measurements
- This means that measuring the *state space* of the entire system can be done by measuring *subspaces* made up of different orthogonal axes/bases
## Example for a 2 qubit system:
- The 4 orthogonal axes are:

```
|00⟩, |01⟩, |10⟩, |11⟩
```
- Measuring this system - measuring the unit vector that points in a direction within this 4d state space, can be treated as measuring 2 separate 2d subspaces:

```
Subspace 1 axes - where qubit 1 resides:
    |00⟩, |01⟩
Subspace 2 axes - where qubit 2 resides:
    |10⟩, |11⟩
```
- Multiplying these 2 vectors together yields the vector of the overall quantum system
## Measurement of entangled particles
### Example of entangled particles: 

```
The state 1/√2 (|00⟩ + |11⟩) is entangled
This is because if the first qubit is measured to be |0⟩, the second qubit MUST also be |0⟩ as the only possible options you can measure the system to be are |00⟩ or |11⟩
```
- This shows that measuring the 1st qubit before the second also impacts the 2nd qubits result (or v.v.) 
### Example of unentangled particles:

```
The state 1/√2 (|00⟩ + |01⟩) is NOT entangled
This is because if the first qubit is measured to be |0⟩, the second qubit can be |0⟩ or |1⟩ as the possible options you can measure the system to be are |00⟩ or |01⟩
```
- Measurement of one qubit will not affect the other

# 3.4 The EPR paradox
- Irrelevant 
- Just shows that there is not communication between entangled qubits nor are there hidden variables predetermining their states
- Proves ***Non-locality***

# 4.1 Simple Quantum Gates
- Everything so far has been about **static** quantum systems, that change when measured, but there are 2 operations a quantum computer can undergo!
	- Measurement
	- Transformations
- In order to preserve orthogonality, **unitary transformations** are used on the *complex vector state space* as kinda *logic gates*
- These transformations can be **described by a matrix**
- Unitary transformation of quantum state space = quantum transformation irl
- Think of a unitary transformation a s a rotation in the state space
	- Rotations b.c. the vector must remain unit vector (we only care about direction, not magnitude),
	- ..so rotation it means changing its state
- Unitary transformation and therefore, by extension quantum transformations are **reversible**
## Single-bit quantum state transformations
(on basis vector: **{|0⟩|1⟩})**

```
I : |0⟩ → |0⟩    ⎛1  0⎞
    |1⟩ → |1⟩    ⎝0  1⎠

X : |0⟩ → |1⟩    ⎛0  1⎞
    |1⟩ → |0⟩    ⎝1  0⎠

Y : |0⟩ → −|1⟩   ⎛0  1⎞
    |1⟩ → |0⟩    ⎝-1 0⎠

Z : |0⟩ → |0⟩    ⎛1  0⎞
    |1⟩ → −|1⟩   ⎝0 -1⎠
```
- The given names are convention:

```
    I: Identity matrix
    X: Negation
    Z: Phase shift
    Y = ZX
```
- **Graphical representation:**

![[Pasted Graphic 1 9.png|Pasted Graphic 1 9.png]]



# 4.2 Complex qubit transformations:
- All quantum transformations **must** be reversible
	- However not all classical gates are reversible (e.g. AND, OR, NAND)
- For all classical functions, there are reversible quantum equivalents
## **KEY:**

| **Open circle** | Control bit |
| -- | -- |
| **Cross** | Conditional negation (changing) of the subject bit |


## C<b><sub>not</sub></b> Gate:
- Changes the 2nd bit when the first bit is 1
- Leaves 1st bit unchanged

```
Cnot :  |00⟩ → |00⟩    ⎛1 0 0 0⎞ 
        |01⟩ → |01⟩    ⎢0 1 0 0⎟
        |10⟩ → |11⟩    ⎢0 0 0 1⎟
        |11⟩ → |11⟩    ⎝0 0 1 0⎠
```
### **Graphical representation:**

![[Pasted Graphic 25.png|Pasted Graphic 25.png]]


## Toffoli Gate:
- a.k.a “Controlled controlled Not Gate”
- Negates (0→1 or 1→0) last bit of 3 qubits if **BOTH** the first 2 are 1

![[Pasted Graphic 2 5.png|Pasted Graphic 2 5.png]]


## The Hadamard Transformation
- Generates superposition states

```
H : |0⟩ → √1 (|0⟩+|1⟩)
    |1⟩ → √1 (|0⟩−|1⟩) 
```

# 5 QUANTUM COMPUTERS
### One bit adder:

![[Pasted Graphic 3 1.png|Pasted Graphic 3 1.png]]


```
|c⟩    incomming carry bit
|x⟩    data bit
|y⟩    data bit
|s⟩    SUM of x and y
|c'⟩   new carry bit
```
### Worked example of one bit adder:

![[1CC48727-3AEE-4263-A78D-CDA4F9B25072.jpg|1CC48727-3AEE-4263-A78D-CDA4F9B25072.jpg]]

# 5.2 quantum parallelism

```
For every classical function f, with m input and k output bits, there exists a quantum gate array, Uf that implements f
```
- When U<sub>f</sub> <span style="font-size:13.82616138458252pt;">is applied to an input that’s in superposition, it is applied</span> <span style="font-size:13.82616138458252pt;"><b>simultaneously</b></span> <span style="font-size:13.82616138458252pt;">to all basis vectors in the superposition</span>
- <span style="font-size:13.82616138458252pt;">This allows us to computer f(x) for n values of x in one fell swoop by applying U</span><span style="font-size:11.475714683532715pt;"><sub>f</sub></span> <span style="font-size:13.82616138458252pt;">on a quantum computer</span>
[[Quantum parallelism|Quantum parallelism]]