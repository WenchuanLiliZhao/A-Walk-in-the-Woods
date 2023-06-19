# Subsets





#### **Definition** (subsets)

Let $A$ and $B$ be two sets. $B$ is a **subset** of $A$, denoted by $B \subseteq A$, if and only if
$$
\forall x(x \in B \implies x \in A).
$$
$B$ is a **proper subset** of $A$, denoted by $B \subsetneq A$, if and only if
$$
B \subseteq A \land \exists x(x \in A \land x \notin B).
$$

---

If you ask GPT, there is a 99% chance that it tells you that the definition of subsets is derived from the axiom schema of specification. It is maybe because many people believed that. However, this derivation is not true, but a common misleading by the terminology, as the axiom is sometimes called the **axiom of subsets**.

The axiom schema of specification does provide a way to create a new set $B$ from a given set $A$ with $B \subseteq A$. But, note that, in the definition of subsets, $B \subseteq A$ is assumed as a set in the first place. So, the qualifier before $B$ is $\forall$ but not $\exists$. If we rewrite the definition in formal language,
$$
\forall A \forall B (A \subseteq B \iff \forall x(x \in A \Rightarrow x \in B)).
$$
we would find that it is only an assertion omitting some condition in the definition of set equality (following the axiom of extension).
$$
\underbrace{x \in A \Leftrightarrow x \in B)}_{\text{def. set equality}} \implies \underbrace{x \in A \Rightarrow x \in B)}_{\text{def. subsets}}.
$$

---

None of the two axioms we introduced so far avoids Russell's paradox, but the axiom schema of specification brings us another fact within ZFC: there is no **universal set**, a set containing all sets; in other words, there is no universe. Accepting the concept of classes, there is indeed a class containing all sets, called the **universal class**, $\mathscr S$. As all classes are collections of sets, in class-builder notation, we can write $\mathscr S = \{x: x = x\}$. In class theory, $\mathscr S$ is a proper class; in ZFC, however, it does not exist.

As Russell's paradox shows that $R=\{x: x \notin x\}$ is not a set, if $\mathscr S = \{x: x = x\}$ is a set, then $R \subseteq \mathscr S$, as every $x \in R$ is also a set. By the axiom schema of specification, $R$ is a set. Again, we encounter Russell's paradox. So $\mathscr S$ is not a set.

---

Def....

#### **Lemma**

Let $\phi(x)$ be a predicate on sets. There is a set $S$, such that
$$
\forall x (x \in S \iff \forall A(\phi(A) \Rightarrow x \in A)).
$$

---

**Proof.** Let $X$ be a predicate satisfying $\phi(X)$. Let $P(x)$ be a predicate defined as
$$
P(x) \iff [\forall A(\phi(X) \Rightarrow x \in A)].
$$

As for any $x$, $P(x)$ implies $x \in X$,

$$
P(x) \iff x \in X \land P(x)
$$

By the axiom schema of specification, there is a set $S$, such that for any $x$,
$$
x \in S \iff x \in X \land P(x) \iff P(x).
$$

$\blacksquare$

---

#### **Definition** (intersections)

Let $\phi(x)$ be a predicate on sets. The **intersection** of all sets $A$ satisfying $\phi(x)$ is defined as the set
$$
\bigcup_{\phi(A)} A := \{ x: \forall A(\phi(A) \Rightarrow x \in A) \}.
$$

If $\phi(x)$ defines a set, i.e., there is a set $\mathcal A = \{x: \phi(x)\}$, we can write
$$
\bigcup \mathcal A \text{ for } \bigcup_{A \in \mathcal A} A.
$$

---