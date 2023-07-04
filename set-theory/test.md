> # From Naïve to Mordern 
> 
> ![](https://i.pinimg.com/564x/62/8b/c5/628bc5549374204b3f0fc1535d17a068.jpg)
>

> #### Section
>
> ## Finding Primitive Notions for Set Theory
>
> ---
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros ante, posuere ac urna nec, rutrum ultrices nunc. Ut tortor lorem, iaculis malesuada arcu in, semper vestibulum mi. Cras vitae tellus commodo, venenatis felis eget, porttitor sem. Fusce interdum sodales magna, mattis ultrices risus suscipit ut. Etiam ac tempor massa, vitae commodo lacus. Nullam nec orci in lacus fringilla convallis non non massa. Nam facilisis nisi ac aliquam aliquet. Mauris nec nisl ullamcorper, iaculis odio ac, interdum tellus. Morbi vehicula eu leo scelerisque congue.

> #### Orpheus
>
> Now, let’s check what we obtained so far. We have two primitive notions, “sets” and membership.
>
> Sets, intuitively, can be comprehended as a specific type of “collections of objects”, denoted by letters, $a$, $b$, $A$, $B$, $\mathbb R$, $\mathcal A$, $\mathscr A$, etc. They are primitive objects in our system.
>
> Membership, on the other hand, is our primitive relation between sets (we don’t need ur-elements). If $x$ and $y$ are sets, the notation, $x \in y$ means $x$ is an element of $y$, or $x$ belongs to $y$.
>
> As sets are the only primitive objects in our system, we can not produce any non-set objects, such as ur-elements, and collections like $R = \{x: x \notin x\}$.

> #### Antigone
>
> I understand that we don't need ur-elements since every element can be modeled as a set. However, I also believe that we should not lose sight of those non-set collections. Just as we know there are infinitely many irrational numbers after the discovery of $\sqrt{2}$, I believe that there must be infinitely many “irrational” collections like $R = \{x: x \notin x\}$. Don't you think it's fascinating to imagine such theoretical beings?

> #### Orpheus
>
> I do. In the famous Zermelo-Fraenkel set theory (ZF), such “beings” do not exists. But in some others, such as Von Neumann–Bernays–Gödel set theory (NBG) and Morse–Kelley set theory (MK), we do have a type of collections called **classes**, which are collections of sets. Within our context, a set is a class since the set is also a collections of sets.
>
> Indeed, classes are interesting, especially if they are **proper classes**, namely, those non-set classes. So, as your wish, we include “classes” as another primitive notion.

> #### Antigone
>
> But now we have another problem: do we really need “sets” to be our primitive notion? If classes and $\in$ are primitive notion, a class $x$ is a set if and only if there is a class $y$ such that $x \in y$. So, “sets” is redundant among our primitive notions, since they are essentially elements.

> #### Orpheus
>
> You’re right. Let’s remove “sets” from our primitive notion. Okey, now, we only have two primitive notions:
>
> 1. **Classes**, denoted by letters, $x$, $y$, $X$, $Y$, $\mathbb R$, $\mathcal T$, $\mathscr S$, etc.
> 2. **Membership**, a relation between classes, denoted by $\in$.

> #### Section
>
> ## Class Equality
>
> ---
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros ante, posuere ac urna nec, rutrum ultrices nunc. Ut tortor lorem, iaculis malesuada arcu in, semper vestibulum mi. Cras vitae tellus commodo, venenatis felis eget, porttitor sem. Fusce interdum sodales magna, mattis ultrices risus suscipit ut. Etiam ac tempor massa, vitae commodo lacus. Nullam nec orci in lacus fringilla convallis non non massa. Nam facilisis nisi ac aliquam aliquet. Mauris nec nisl ullamcorper, iaculis odio ac, interdum tellus. Morbi vehicula eu leo scelerisque congue.

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







