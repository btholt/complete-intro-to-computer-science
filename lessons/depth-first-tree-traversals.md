---
path: "/depth-first-tree-traversals/"
title: "Depth-First Tree Traversals"
order: "8C"
section: "Trees"
description: ""
---

Trees are an essential part of storing data, or at computer scientists like to refer them as, data structures. Among their benefits is that they're optimized to be searchable. Occasionally you need to serialize the entire tree into a flat data structure. Today we'll show you how to do that.

![binary search tree](./images/bst.png)

<sup>Public domain, via Wikimedia Commons</sup>

The picture tree is a valid binary search tree (BST.) We're going to show you four different ways serialization of this BST: three variations of depth-first traversal and one that is breadth-first traversal.

## Depth-first Traversal

Let's start with one variant depth-first traversals: pre-order traversal. The basic gist is that for each of the nodes, you process the node (in our case, save it to an array since we're serializing this tree,) then process the left subtree and then the right tree. Let's write out that works.

Given the above tree:

```text

-> Call our method (let's call it preorderTraverse) on the root node, 8.
-> Add 8 to our array.
-> Call preorderTraverse on the left child, 3.
-> Add 3 to our array.
-> Call preorderTraverse on the left child, 1.
-> Add 1 to our array.
-> Has no children, returns.
-> Going back up the tree, we'll call preorderTraverse on 6.
-> Add 6 to our array.
-> Call preorderTraverse on the left child, 4.
-> Add 4 to our array.
-> No children, returns.
-> Going back up the tree, we'll call preorderTraverse on 7.
-> Add 7 to the array.
-> So on and so forth.

```

We end up with the array of [8, 3, 1, 6, 4, 7, 10, 14, 13]. This is called preorder traversal.

The other variants are quite similar; the only thing we do is change the order. When I say "process the node," I mean you do whatever operation you're going to do: add it to an array, copy the node, or whatever that may be.

In preorder traversal, you process the node, then recursively call the method on the left subtree and then the right subtree.

In inorder traversal, you first recursively call the method on the left tree, then process the node, and then call the method on the right tree.

Postorder traversal, as you have guessed, you recursively call the method on the left subtree, then the left subtree, then you process the node. The results of these are as follows:

```text
// preorder
[8, 3, 1, 6, 4, 7, 10, 14, 13]

// inorder
[1, 3, 5, 6, 7, 8, 10, 13, 14]

// postorder
[1, 4, 7, 6, 3, 13, 14, 10, 8]
```

As you can see, it depends on what you're doing on which of these you use. For a sorted list out of a BST, you'd want to use inorder. If you're making a deep copy of a tree, preorder traversal is super useful since you'd copy a node, and then add its left child and then its right tree. Postorder would be useful if you're deleting a tree since you'd process the left tree, then the right, and only after the children had been deleted would you delete the node you're working on.

So let's go give this a shot!

## Exercises

[![Edit algorithms-exercises](https://codesandbox.io/static/img/play-codesandbox.svg)][sb]

We're going to work on [/specs/traversals/depth-first.test.js][gh]. Go give that a shot.

[gh]: https://github.com/btholt/algorithms-exercises/blob/main/specs/traversals/depth-first.test.js
[sb]: https://codesandbox.io/s/github/btholt/algorithms-exercises/tree/main?file=/specs/traversals/depth-first.test.js
