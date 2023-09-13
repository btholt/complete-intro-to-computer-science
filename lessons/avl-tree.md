---
path: "/avl-tree/"
title: "AVL Tree"
order: "8B"
section: "Trees"
description: ""
---

AVL tree are the answer to the problem that BST have: BST can easily get out of balance. Even if it's not the worst case scenario of ascending or descending lists being added, even a random distribution on numbers on a BST is going to pretty heavy in places. There are several ways to balance these trees and we're going to tackle one of them: AVL trees. AVL is the initials of its authors: Georgy Adelson-Velsky and Evgenii Landis.

AVLs are specialized BSTs. That is to say a valid AVL tree is always a valid BST (but not necessarily vice versa.) AVL trees are a subset of BST trees. When you add a new value to a AVL tree, you do it the same way. The only difference is on the way up your recursive calls you check to see if the node is balanced after you added the new node. A tree is out of balance if its subtrees' difference of heights is greater than one.
Demonstrations of balanced and imbalanced AVL trees source: http://lcm.csa.iisc.ernet.in/dsa/node111.html

So what's the benefit of all this extra effort? We can now guarantee that we won't hit those bad or worst case scenarios of having greatly out-of-balance trees and guarantee we won't hit the O(n) cases. Our worst case becomes O(log n).

## Single Rotation

<video controls autoplay loop><source src="https://btholt.github.io/complete-intro-to-computer-science/avl-single-480.webm" type="video/webm"></video>

<sup>VisuAlgo <https://visualgo.net> – You may need to open this in Firefox, Chrome, or Edge to see the video above</sup>

So let's go through the hardest part of AVL trees, the rebalances (actually deletes may be harder but we're not going to do them!) The basic idea is that if one side of tree gets too heavy (i.e. the max height of one of its children is two more than the max height of the other child) then we need to perform a rotation to get the tree back in balance. Let's take a look at the most basic rotation.

```text
5
 \
  8

-> Currently valid AVL tree
-> .add called with 9

5 - node A
 \
  8 - node B
   \
    9 - node C

(on the way up from the recursion)
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: left height is 0, right height is 1, balanced
-> check balance of node A: left height is 0, right height is 2
unbalanced, right heavy, child is right heavy

-> perform right rotation
-> swap the values of nodes A and B
-> make node B the left child of node A
-> make node C the right child of node A
-> move node B's right child to its left child
(in this case they're both null)
-> make node A's _original_ left child
(which was null in this case) the left child of node B
-> update the heights of all the nodes involved

      8 - node A
    /   \
   5     9
node B   node C
```

This was a right rotation, but a left rotation is mirror of this. This generalized formula works for all but one case which we'll examine now.

## Double Rotations

<video controls autoplay loop><source src="https://btholt.github.io/complete-intro-to-computer-science/avl-double-480.webm" type="video/webm"></video>

<sup>VisuAlgo <https://visualgo.net> – You may need to open this in Firefox, Chrome, or Edge to see the video above</sup>

Even in this special case, all you have to do is perform an extra rotation which you already have the logic for.

```text
5
 \
  8

-> currently valid AVL tree
-> .add called with 7

5 - node A
 \
  8 - node B
 /
7 - node C

(on the way up from the recursion)
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: left height is 0, right height is 1, balanced
-> check balance of node A: left height is 0, right height is 2,
unbalanced, right heavy, child is left heavy

Try performing just a straight right rotation. It's not super helpful because you just end up with a still-unbalanced tree.

  8 - node A'
 /
5 - node B'
 \
  7 - node C'
```

That's a problem, right? So now we have to what's called a double rotation. You perform a double rotation when the opposite child is heavy during a rotation. Look at our example (the 5\8/7 example.) We're doing a right rotation but the left child of the right child is heavy (it's not out of balance, it's just heavier than the right child.) So what we're going to do is before we do a left rotation on the right child before we do a right rotation on the root node of the rotation.

```text
5 - node A
 \
  8 - node B
 /
7 - node C

[ ... previous steps ]
-> check balance of node A: left height is 0, right height is 2
unbalanced - right heavy, child is left heavy
-> perform left rotation on left heavy right child node B

5 - node A
 \
  7 - node B
   \
    8 - node C

-> now perform right rotation on node A

      7 - node A
    /   \
   5     8
node B   node C
```

That's it! Nailing down the logic of those rotations is a pain but once you do AVL trees are just a series of either left or right rotations on a BST. Even deletes follow this pattern; it's just in deletes sometimes you have to do even more rotations.

Want to see it in action yourself? Play around with [VisuAlgo][avl]. It'll help you visualize further what you need to do.

## Exercises

[![Edit algorithms-exercises](https://codesandbox.io/static/img/play-codesandbox.svg)][sb]

We're going to work on [/specs/avl/avl.test.js][gh]. Go give that a shot.

[gh]: https://github.com/btholt/algorithms-exercises/blob/main/specs/avl/avl.test.js
[sb]: https://codesandbox.io/s/github/btholt/algorithms-exercises?file=/specs/avl/avl.test.js
[avl]: https://visualgo.net/en/avl
