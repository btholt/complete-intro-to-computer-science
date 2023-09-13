---
path: "/linkedlist/"
title: "LinkedList"
order: "7B"
section: "Lists"
description: ""
---

<video controls autoplay loop><source src="https://btholt.github.io/complete-intro-to-computer-science/linkedlist-480.webm" type="video/webm"></video>

<sup>VisuAlgo <https://visualgo.net> – You may need to open this in Firefox, Chrome, or Edge to see the video above</sup>

For our second data structure, we're going to implement a LinkedList. LinkedList is made of a bunch of nodes that point to the next one in the list. Every node in a LinkedLists has two properties, the value of whatever is being store and a pointer to the next node in the list. These nodes will not be sequential in memory, meaning we don't get the easy lookups but the advantage is that adding things is easy since we don't have to do the compacting we had to do with ArrayList.

So let's talk about look ups. You only have access to a head node. The head node will point to the 1 node. The 1 node points to the 2 node, etc. If we want to lookup index 10,000 we're going to have to make 10,000 jumps. That means the lookups grow with length and therefore the Big O is O(n) for lookups.

Let's chat about where LinkedLists are useful then. What do we need to do if we want to delete index 10? We'll first do a lookup node 9 and we'll change the pointer of node 9's to point at node 11. Done! So these deletions are O(1). Again, remember, we consider lookups and deletions as separate actions.

Let's dissect a delete.

```text
value: [a]   [b]   [c]   [d]
next:  [ ]-> [ ]-> [ ]-> [ ]-> null

-> delete is called on index 2 (value 'c')
-> grab the head (value 'a')
-> loop through the nexts until you get the index
   before the one to be deleted (value 'b')
-> change the the next of index 1 to be the next of index 2
-> decrement length
-> return the value of the deleted node
```

Let's look at insertions. Let's say I want insert at 10. I'd lookup node 9, point its next at the new node, and point the new node's next at the old node 10. Done! O(1) as well.

As you can see, the inserts and deletes work great. This makes it ideals where you're doing a lot of writes and deletions. In general, ArrayList tends to be the most generally useful because the lookup speed is so helpful, but LinkedLists definitely have their place.

There are other variations of LinkedLists as well. One is a doubly LinkedList, where you have a previous and next pointer on each node. This can be helpful if you want to be able to do lookups from the tail or from the head.

## Exercises

[![Edit algorithms-exercises](https://codesandbox.io/static/img/play-codesandbox.svg)][sb]

We're going to work on [/specs/arrays/linkedlist.test.js][gh]. Go give that a shot.

[gh]: https://github.com/btholt/algorithms-exercises/blob/main/specs/arrays/linkedlist.test.js
[sb]: https://codesandbox.io/s/github/btholt/algorithms-exercises/tree/main?file=/specs/arrays/linkedlist.test.js
