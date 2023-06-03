# Introduction

## Primitive notions

A theory is essentially a rational discussion on a set of undefined concepts known as **primitive notions** or **primitive concepts**, which serve as the initial hypotheses of the theory. Philosophical, legal, and mathematical theories are examples of such discussions. This article focuses specifically on mathematical theories.

In a theory, a term is a primitive notion only if it cannot be defined in the terms of any other primitive notions.

For example, in Zermelo-Fraenkel set theory with the axiom of choice (ZFC), **sets** and "**belongs to**" are typical primitive notions. Intuitively, sets are collections of objects, but we do not know what exactly kind of collections they are. Indeed, we have several propositions, axioms, on sets which are believed to be true, and each of them is either a necessary or sufficient condition of "being a set", but none of them is both. "Belongs to" or "is an element of", on the other hand, is a relation between sets, in which sets cannot be defined, and vise versa.

This is indeed a little unsettling that our theories are build upon such undefinable concepts. In this sense, a primitive notion is required to be as widely acceptable as possible. For example, limits in calculus is not an idea candidate to be a primitive notion, because it raises to many controversies until it is clearly defined in the terms of simpler concepts.

Can we find a theory that only contains definitions, the concepts being unambiguously defined within the theory? The answer is no. No matter how big the theory is, we will inevitably encounter the situation of accepting primitive notions, if the theory is built with logic. Here is an intuitive explanation.

Aiming for a contradiction, suppose we have a theory in which every concept is defined within the theory. By this assumption, if $A$ is defined, there must be another definition, $B$, such that $A$ can be defined in terms of $B$. Similarly, $B$ can be defined in terms of $C$, which is a definition or a set of definitions distinct from $B$ and $A$. Therefore, $A$ is also defined in terms of $C$. Even if circular definitions are avoided, for any definition $D$ in which $A$ is defined, we can always find a distinct definition $E$ in which $D$ is defined. This leads to an infinite loop of definitions, which essentially implies that $A$ is defined from "nowhere".

Euclid's [*Elements*](https://mathcs.clarku.edu/~djoyce/java/elements/toc.html) is usually considered to be the first axiomatic system in mathematics in human history. But, in this book, none of the concepts is declared to be undefined. However, in *Definitions*, of *Book I*, we read the following statements that defines three types of geometrical objects.

1. A **point** is that which has no part.
2. A **line** is breadthless length.
3. A **straight line** is a line which lies evenly with the points on itself.

In *Elements*, the term, "part", is unexplained and "has no part" is only a sufficient condition of being a point, but what we need, is actually an equivalent condition (i.e., a necessary and sufficient condition) to define this concept. It seems that the above conditions describing points, lines, and straight lines together define straight lines. So, if an object is a straight line, it must be a breadthless long object made of points in a specific arrangement described in the definition. But, both of the geometric properties, "breadthless length" and "lies evenly with the points on itself" remain unexplained in the book.

David Hilbert, in his 1899 work *Grundlagen der Geometrie* ([the Foundation of Geometry](https://math.berkeley.edu/~wodzicki/160/Hilbert.pdf)), includes points and lines (referring to straight lines) in the set of primitive notions within Euclidean geometry.

The choice of primitive notions in Hilbert's investigation is quite similar to Euclid's definitions in a sense. Moritz Pasch, however, provided a different choice of primitive notions, in which the concept of lines is not primitive, but that of **segments** is. In this case, lines are defined in the terms of segments. As both of the choices can explain the consistency of geometry, the choice of primitive notions is not unique.

## Axioms

In a theory, an **axiom** is a proposition on primitive notions. It is believed to be true, but is unprovable by any other axioms.

Most of the axioms are obvious. But, as they are unprovable within the theory, we can never say that they are definitely true -- we just believe in them, nothing more. The only way to verify the consistency of an axiom is to disprove it by discovering a paradox derived from it.

For example, the irrationality of $\sqrt{2}$ is proven by assuming that it is rational, which was the only type of number that the Pythagoreans believed in.

A **definition**, on the other hand, is a statement that explains the meaning of a term which indicates a special type of a primitive notion. As, in any definition, conditions on are required for the primitive notion, and all conditions are supported by at least one axiom, definitions are derived from axioms.

For example, in ZFC, the definition of Cartesian product is supported by the axiom of pairing, the axiom of union, the axiom schema of specification, the axiom of power, and the axiom of extension. By these axioms, the "primitive form" of Cartesian products is proven to be sets. But, the concept of classes (defined in Von Neumann–Bernays–Gödel set theory) is not formally defined in ZFC, because either the primitive notions or the set of required axioms are not the same.

















