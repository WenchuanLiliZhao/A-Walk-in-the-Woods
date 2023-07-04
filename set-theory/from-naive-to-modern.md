

> # From Naïve to Mordern 
> 
> ![](https://i.pinimg.com/564x/62/8b/c5/628bc5549374204b3f0fc1535d17a068.jpg)
>

> #### Section
>
> ## On Primitive Notions
>
> ###### Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros ante, posuere ac urna nec, rutrum ultrices nunc. Ut tortor lorem, iaculis malesuada arcu in, semper vestibulum mi. Cras vitae tellus commodo, venenatis felis eget, porttitor sem. Fusce interdum sodales magna, mattis ultrices risus suscipit ut. Etiam ac tempor massa, vitae commodo lacus. Nullam nec orci in lacus fringilla convallis non non massa. Nam facilisis nisi ac aliquam aliquet. Mauris nec nisl ullamcorper, iaculis odio ac, interdum tellus. Morbi vehicula eu leo scelerisque congue.

> #### Orpheus
>
> Yes, you’re right. A set is a collection of object. But, is it the definition of sets? I mean, can we say that an object is a set *if and only if* it is a collection of objects? If so, how do we define the term “collections” and “objects”? Or, we just accept them without explaination, just like we accept axioms?
>
> <u>👺</u> <u>🤔️ 2</u>

> ###### Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros ante, posuere ac urna nec, rutrum ultrices nunc. Ut tortor lorem, iaculis malesuada arcu in, semper vestibulum mi. Cras vitae tellus commodo, venenatis felis eget, porttitor sem. Fusce interdum sodales magna, mattis ultrices risus suscipit ut. Etiam ac tempor massa, vitae commodo lacus. Nullam nec orci in lacus fringilla convallis non non massa. Nam facilisis nisi ac aliquam aliquet. Mauris nec nisl ullamcorper, iaculis odio ac, interdum tellus. Morbi vehicula eu leo scelerisque congue.

> #### Antigone
>
> I think we can accept these two terms without explaination, because their meanings are obvious. Then, indeed, there seem to be no issue with it.

> #### Orpheus
>
> Well, Antigone, let’s assume that you’re right. Then, how do we collect objects? Can we collect objects by a predicate $\phi(x)$?

> #### Antigone
>
> Yes, why not? Say, if $\phi(x)$ means “$x$ is a human”, then, in set-builder notation, $\{x: P(x)\}$ is the set of all human beings.

> #### Orpheus
>
> If $R$ is a set, then either $R \in R$ or $R \notin R$ is true.

> #### Antigone
>
> Intuively, I don’t think $R \in R$ can be true, but by the property of “or”, you’re right.

> #### Orpheus
>
> Can $R$ be a set of sets?

> ###### Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros ante, posuere ac urna nec, rutrum ultrices nunc. Ut tortor lorem, iaculis malesuada arcu in, semper vestibulum mi. Cras vitae tellus commodo, venenatis felis eget, porttitor sem. Fusce interdum sodales magna, mattis ultrices risus suscipit ut. Etiam ac tempor massa, vitae commodo lacus. Nullam nec orci in lacus fringilla convallis non non massa. Nam facilisis nisi ac aliquam aliquet. Mauris nec nisl ullamcorper, iaculis odio ac, interdum tellus. Morbi vehicula eu leo scelerisque congue.

> #### Antigone
>
> Why not.

> #### Orpheus
>
> Okey, then. So, if we have a predicate, $P(\cdot)$, defined as
> $$
> P(x) \iff x \notin x,
> $$
> then, there must be a set $R = \{x: P(x)\}$.

> #### Antigone
>
> Wait, (I knew it is a trap!) it is **Russell’s paradox**! In this case, if $R \in R$, then $\neg P(R)$ implies $R \notin R$; however, if $R \notin R$, then $P(R)$ implies $R \in R$. That is a paradox!

> #### Orpheus
>
> It’s famous, isn’t it? As you hold the idea that sets can be defined as collections of object, the axiom of abstraction was tacitly accepted.
>
> > #### (Caution!) The Axiom of Abstraction
> >
> > If $P(\cdot)$ is a predicate, then there is a set $A$ such that
> >$$
> > \forall x :(x \in A \iff P(x)).
> > $$
> 
> This “axiom” raises the paradox.
>
> Sometimes, we are taught that a set is a collection of objects. It’s nothing wrong, but notice that, on one hand, it is only an intuitive comprehension, and on the other hand, the word “is” is an implication with the single direction – I mean, “$A$ is $B$” doesn’t necessarily imply “$B$ is $A$”.

> #### Antigone
>
> But, can’t we define sets in some other way?

> #### Orpheus
>
> Indeed, we can, but not always necessary. It depends on the theory. You know, there is more than one set theory – I believe they speak different versions of the same truth. But no matter what theory we discuss within, we have to accept some *undefined* concepts. In some theories, the concept of “sets” is remain undefined, and in some others, sets can be formally defined in terms of some other undefined concepts.

> #### Antigone
>
> I know. Just like we have to accept axioms, every theory contains only finitely many concepts. If every concept is required to be defined in terms of some others, then we encounter cirlucar definition, which is worst case for definitions ever.

> #### Orpheus
>
> Indeed! We call these undefined concepts **primitive notions**.
>
> Antigone, you are an expert on handling problems in calculus. So, tell me, how about the concept of “limits of functions”? Can it be a primitive notion in a theory?

> #### Antigone
>
> I can’t say no, but I wouldn’t recommend it. Given a function $f: X \to Y$, an element $q \in Y$ is a limit of $f$ at $p$ if and only if
> $$
> \forall \varepsilon > 0: \exists \delta > 0: \forall x \in X: |q - f(p + \delta)| < \varepsilon.
> $$
> So, it can be defined in other terms. Besides, the concept was controversial until it was formally defined as this in the 19th century.
>
> In conclusion, I don’t think primitive notions should be randomly picked. If I am going to build a theory, I would choose those terms as acceptable as possible, and one of them can be defined in terms of the other. So, I think “sets” is a good candidate to be a primitive notion in set theory.

> #### Orpheus
>
> Excellent! Let’s take “sets” as a primitive notion!

> ###### Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros ante, posuere ac urna nec, rutrum ultrices nunc. Ut tortor lorem, iaculis malesuada arcu in, semper vestibulum mi. Cras vitae tellus commodo, venenatis felis eget, porttitor sem. Fusce interdum sodales magna, mattis ultrices risus suscipit ut. Etiam ac tempor massa, vitae commodo lacus. Nullam nec orci in lacus fringilla convallis non non massa. Nam facilisis nisi ac aliquam aliquet. Mauris nec nisl ullamcorper, iaculis odio ac, interdum tellus. Morbi vehicula eu leo scelerisque congue.

> #### Section
>
> ## Sets, Classes, and Membership
>
> ###### Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros ante, posuere ac urna nec, rutrum ultrices nunc. Ut tortor lorem, iaculis malesuada arcu in, semper vestibulum mi. Cras vitae tellus commodo, venenatis felis eget, porttitor sem. Fusce interdum sodales magna, mattis ultrices risus suscipit ut. Etiam ac tempor massa, vitae commodo lacus. Nullam nec orci in lacus fringilla convallis non non massa. Nam facilisis nisi ac aliquam aliquet. Mauris nec nisl ullamcorper, iaculis odio ac, interdum tellus. Morbi vehicula eu leo scelerisque congue.

> Now, we have our first primitive notion, “sets”. What else do we need?

> #### Antigone
>
> I think we need one more type of primitive objects, **elements**, and a primitive relation, **membership**, namely, $\in$-relation. Therefore, sets can be constructed. If $A$ is a set, and $x$ is a set or an element, then $x \in A$ means $x$ **is an element of** $A$, or $x$ **belongs to** $A$.

> #### Orpheus
>
> Good. But, why do we need elements? There are some elements like real numbers, $0$, $1$, $2$, $\pi$, etc, are treated as non-set elements. But it doesn’t means they can’t be constructed as sets.

> #### Antigone
>
> Well, they are just examples. So, I think it based on your philosophical preference. Do you think we need it?

> #### Orpheus
>
> No. Besides, I don’t believe there are unbreakable “atoms” being the most fundamental bricks of the world as Democritus believed.

> #### Antigone
>
> Neither do I. So, as “elements” is removed from our primitive notions, $\in$ is solely a relation between sets. But I have another question. Shall we accept the existance of non-set collections like $R = \{x: x \notin x\}$? If sets are the only primitive objects, we can never define any non-set object within our theory.

> #### Orpheus
>
> Well, when I was writing my learning notes on set theory, I invoked Zermelo-Frandel set theory (ZF), because it is famous. In ZF, “sets” and membership form the entire set of primitive notions. So, if we have to accept objects like $R$, we have to accept new axioms.

> #### Antigone
>
> I know, you lack of confidence in exploring set theory along an unfamiliar path. But, I don’t think that can be a problem. Just like we found infinitely many irrational numbers after $\sqrt{2}$ was discovered, I bet there must be infinitely many non-set collections like $R$. Is that fascinating to imagine such beings?

> #### Orpheus
>
> I have the same feeling. Alright, then, let’s try. Let “**classes**” be another primitive notion. Intuitively, a class is a collection of sets. So, essentially, every set is a class, and those non-set classes are called **proper classes**.

> #### Antigone
>
> Mm… But now we have another problem: do we really need sets to be our primitive notion? If classes and $\in$ are primitive notion, a class $x$ is a set if and only if there is a class $y$ such that $x \in y$. So, “sets” is redundant among our primitive notions – just as “elements” is.

> #### Orpheus
>
> Well, I knew discussing this with you would yield some unexpected outcomes. But you’re right so far. Let’s remove “sets” from our primitive notion. Okey, now, we only have two primitive notions:
>
> 1. **Classes**, denoted by letters, $x$, $y$, $X$, $Y$, $\mathbb R$, $\mathcal T$, $\mathscr S$, etc.
> 2. **Membership**, a relation between classes, denoted by $\in$.

> #### Section
>
> ## Class Equality
>
> ###### Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros ante, posuere ac urna nec, rutrum ultrices nunc. Ut tortor lorem, iaculis malesuada arcu in, semper vestibulum mi. Cras vitae tellus commodo, venenatis felis eget, porttitor sem. Fusce interdum sodales magna, mattis ultrices risus suscipit ut. Etiam ac tempor massa, vitae commodo lacus. Nullam nec orci in lacus fringilla convallis non non massa. Nam facilisis nisi ac aliquam aliquet. Mauris nec nisl ullamcorper, iaculis odio ac, interdum tellus. Morbi vehicula eu leo scelerisque congue.

> #### Orpheus
>
> Tell me, Antigone, how do you comprehend class equality? I think it is an important relation between classes. I want to know, if $A$ and $B$ are classes, what means $A = B$?

> #### Antigone
>
> I think it is similar to set equality I learned.
>
> > #### **Definition**: Class Equality
> >
> > If $A$ and $B$ are two classes, $A = B$ if and only if they consist of exactly the same elements. Explicitly,
> >$$
> > A = B \iff \forall x: (x \in A \Leftrightarrow x \in B).
> > $$

> #### Orpheus
>
> In this case, $A$ and $B$ are exactly the same class, namely, $A$ is $B$ and $B$ is $A$. Am I right?

> #### Antigone
>
> Sure.

> #### Orpheus
>
> So, if $P(\cdot)$ is a predicate, then $P(A)$ if and only if $P(B)$. Is that true?

> #### Antigone
>
> Obviously.

> #### Orpheus
>
> So, if $A$ and $B$ are classes,
> $$
> \forall x: (x \in A \Leftrightarrow x \in B) \iff \forall P(\cdot): (P(A) \Leftrightarrow P(B)),
> $$
> as $\Leftrightarrow$ is transitive.

> #### Antigone
>
> Any issue with it?

> #### Orpheus
>
> But, can you prove it?

> #### Antigone
>
> It is a straight consequence following from the definition of $=$.

> But in the definition of class equality, you didn’t formally state anything like “$A = B$ if and only if $A$ and $B$ are identical”, did you?

> #### Antigone
>
> Mm… No.

> #### Orpheus
>
> So, no matter how obvious it is, the explaination of the relation, $=$, remains ambiguous. Shall we accept it as a primitive notion indicating the idea of “being identical”, and then accept your “definition of class equality” as an axiom?

> #### Antigone
>
> Let me think. Well, yes, it is an option. But we have another option. I think we can consider the definition of $=$ is derived from the proposition you just described.

> #### Orpheus
>
> Indeed, and that proposition has a name:
>
> > #### The Axiom of Extensionality
> >
> > Let $A$ and $B$ be two classes. $A$ and $B$ consist of exactly the same elements if and only if they share the same property. Explicitly, that is,
> >$$
> > \forall x: (x \in A \Leftrightarrow x \in B) \iff \forall P(\cdot): (P(A) \Leftrightarrow P(B)),
> > $$
> > where $P(\cdot)$ is a predicate.
> 
> But, I've to admit that this expression is a little bit of different from its customary expression. If you check on Wikipedia, our definition of class equality is considered as the axiom of extensionality, in which case, $=$ has to be a primitive notion.

> #### Antigone
>
> I know, you’re getting nervous, for you can’t avoid using an expression different from the “customary” version.

> #### Orpheus
>
> Yes, I am.

> #### Antigone
>
> Well, it derives nothing wrong, yet. So I think we can bravely accept our version of the axiom.

> #### Orpheus
>
> Thank you, Antigone.
>
> So, do you remember the axiom of abstraction in naïve set theory?

> #### Antigone
>
> Sure, it raises Russell’s paradox, althought it is seemingly obvious and reliable.

> #### Orpheus
>
> It does. Now, let’s “modify” the axiom a little bit.
>
> > #### The Axiom of Class Comprehension
> >
> > Let $P(\cdot)$ be a predicate on elements. That is,
> >$$
> > \forall x: (P(x) \implies \exists C: x \in C).
> > $$
> > Then, there is a class $A$ defined by $P$. Explicitly,
> > $$
> > \forall P(\cdot) : \exists A : \forall x: (x \in A \iff P(x)).
> > $$

> #### Antigone
>
> I see. The axiom of class comprehension thereby avoids Russell’s paradox. That is relief, for the class notations can be safly derived from this axiom with the definition of $=$.
>
> > #### Definition: Class Notations
> >
> > Let $A$ be a class. If there are class $a,b,c \dots$ such that
> >$$
> > a \in A \land b \in A \land c \in A \land \ldots,
> > $$
> > then we can **enumarate** $A$ as
> > $$
> > A = \{a,b,c, \ldots\}.
> > $$
> > If there is a predicate $P(\cdot)$ such that for any class $x$,
> > $$
> > x \in A \iff P(x),
> > $$
> > then, in **class-builder notation**, we write
> > $$
> > A = \{x: P(x)\}.
> > $$

> #### Orpheus
>
> Great job!

> #### Antigone
>
> Not even a challenge.

> #### Section
>
> ## Subclass

> #### Orpheus
>
> Before we continue our conversation, for the sake of connivence, let me introduce a special class, called **universal class**, denoted by $\mathscr V$. It is defined as the class of all elements (sets) within our context. Explicitly, that is
> $$
> \mathscr V = \{ x: \exists C : x \in C \}.
> $$
> So basically, that is
> $$
> \mathscr V = \{x: x \text{ is a set}\}.
> $$
> Okey, then, let’s move on.

> #### Antigone
>
> In my memory, when I was ten-year-old, I was taught Venn diagrams as the first lesson of set theory.
>
> > #### Figure
> >
> > > #### Image
> > >
> > > ![](https://www.gliffy.com/sites/default/files/image/2020-07/image-blog-draw-venn-diagram.jpg)
> >
> > > #### Caption
> > >
> > > An example of Venn diagrams.
>
> In this diagram, $A$, $B$ and $C$ are three sets. Every intersections, for example $A \cap B$, and every unions, for example $A \cup B$, are expressed intuitively. And it is also intuitive that the intersection of any sets is a subset of each of the sets, and the union of any sets is a superset of each of the sets.







