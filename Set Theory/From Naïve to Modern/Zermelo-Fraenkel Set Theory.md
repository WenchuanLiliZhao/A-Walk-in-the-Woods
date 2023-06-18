# Zermelo-Fraenkel Set Theory

In ZFC, there are only two primitive notions: **sets** and **membership**.

Sets are denoted by letters,
$$
x,y,X,Y, \mathcal S, \mathscr S, \mathbb R \ldots
$$

Intuitively, we explain a set as collection of objects. But this is not how the term is defined. Even if we accept "collections" and"objects" as primitive notions, "collections of objects" does not tell us in what case a collection fails to be a set. If it was a definition, however, being a collection of objects must be the equivalent condition of being a set. In this case, the Axiom of Abstraction is accepted, for every predicate $P(x)$ is a way to collect objects. Then, we would encounter Russell's paradox.

As sets are the only primitive object within ZFC, the primitive relation, membership, only describe the relation between two sets. If $x$ and $y$ are two sets, the notation

$$
x \in y
$$

indicates that $x$ **is an element of** $y$, or $x$ **belongs to** $y$. Note that, here, the term "element" itself is not a primitive notion, but "is an element of" is. Namely, being an element just describes the state of a set that belongs to some sets.

For this reason, elements should not be considered an independent concept in set theory unless the concept of **urelements**, which are elements that are not themselves sets, is included in the theory. In Zermelo set theory of 1908, urelements are included. Although in common sense, we might treat objects like numbers, $1$, $2$, $\pi$, etc., as non-set objects, but in later discussions, we would find that every mathematical object that dose not contradict ZFC axioms can be modeled as a set within ZFC. Therefore, today's ZFC does not include urelements since they are unnecessary.

---

ZFC axioms are solely statements speaking the unprovable truth in the terms of sets and membership. So, as they derives all definitions within ZFC, 
each definition only explains a term indicating a specific type of sets or relation on sets. For example, set equality, $=$, can be formally defined from the following axiom.

It is obvious and intuitive that two sets are equal if and only if they consists of exactly the same elements. To express this in formal language, that is
$$
\forall A \forall B (A = B \iff \forall x(x \in A \Leftrightarrow x \in B)).
$$
If set equality, $=$, is a primitive notion, or it is defined previously, this can be accepted as an axioms. But, neither is set equality defined without accepting this statement as a truth nor it is a primitive notion in ZFC, we need to find a way to express the assertion without using $=$.

> ##### **The Axiom of Extension**
>
> For any set $A$ and $B$, $A$ and $B$ consist of exactly the same elements if and only if they both are elements of every set containing one of them. In formal language
> $$
> \forall A \forall B (\forall x(x \in A \Leftrightarrow x \in B) \iff \forall \mathcal S(A \in \mathcal S \Leftrightarrow B \in \mathcal S)).
> $$


Surprised, isn't it? In this way, the axiom of extension speaks the truth (at least we can't imagine if this fails so far) without having to say that "they are the same". By this axiom we can define set equality rather than merely accept it.


> ##### **Definition** (set equality. identical)
>
> For any set $A$ and $B$, $A$ and $B$ are **identical**, denoted by $A = B$, if and only if they consist of exactly the same elements; i.e., they satisfies the axiom of extension. In formal language,
> $$
> \forall A \forall B (A = B \iff \forall x(x \in A \Leftrightarrow x \in B)).
> $$


> ##### **Definition** (set enumeration and set builder notation)
>
> Let $A$ be a set, we **enumerate** $A$ as $\{a,b,c, \ldots\}$ if and only if $A$ consists of $a$, $b$, $c$, ... In formal language,
> $$
> \forall a,b,c, \ldots (A = \{a,b,c, \ldots\} \iff (a \in A \land b \in A \land c \in A \ldots)).
> $$
>
> We write $A = \{x: P(x)\}$, by **set-builder notation**, if and only if every elements $x \in A$ satisfies $P(x)$, and vise versa. In formal language,
> $$
> A = \{x: P(x)\} \iff \forall x(x \in A \iff P(x)).
> $$


The axiom of extension also bring us two important corollary. Firstly, changing the order in a set does not produce any new set. For example, $\{a,b\} = \{b,a\}$. Secondly, repeatedly enumerating any elements in a set does not produce any new set. For example, $\{a,a\} = \{a\}$. Because, none of the cases changes the relation, $\Leftrightarrow$, in the axiom's assertion.

---

The discussion about the axiom of extension is, in fact, inexhaustible. Although, with the first glance it is seemingly trivial.

The foundations of mathematics is a territory that intersects with philosophy. Even the term "extension" in the axiom of extension is derived from philosophy, specifically the notion of 'intensional definition' from logic and metaphysics.

Descartes introduces the extension in a quite geometrical and literal way. In his 1641 book *Meditations on First Philosophy*, it is described as a property taking up space more than one dimension. Take 3-dimensional for example, the extension of an object is literally the attribute composed by the depth, length and width.

Later, in Leibniz's philosophy, extension is also considered a space-filling property. The extension of a body is a "set" of monads, a kind of mental "atoms". A single monad has no extension, just as ur-elements in some set theories. Every monad is itself defined by a unique attribute in the universe. As the whole universe is constructed by monads filling the whole space, there are no two place in universe is identical. So, on one hand, two objects are identical if and only if their extensions consist of exactly the same monads, in which case, they are just one object expressed in two ways; and, on the other hand, two seemingly identical objects is different, if they do not share all there monads.

In set theory such as ZFC, however, things go abstract and simpler. There is no distinction between "monads" and "extension", as every object is a set (or class); and the extension of a set is solely the construction accumulated by its elements, namely, the set itself, and nothing more. Speaking in a Latin style, it is "a set is". For this reason, when the axiom of extension is to be expressed in natural language, mathematicians would say: **a set is uniquely defined by its elements**.

Within this context, the geometrical properties of a set treated as additional to the set, which are discussed in the subjects like geometry and topology; and the topic of the space-filling property, namely, the volumes of sets, is left to measure theory.