---
path: "/pathfinding/"
title: "Pathfinding"
order: "9B"
section: "Applying Tree Algorithms"
description: ""
---

Let's take what we've learned and go a step further. Imagine you have a 6 by 6 grid. You have point A at [1,1] and point B at [2,6]. ([0, 0] is top left.)

```text
• • • • • •
• A • • • •
• • • • • •
• • • • • •
• • • • • •
• • B • • •
```

How would you write code that finds the _shortest_ path between A and B (no diagonals.) You could probably write some variant of looking to see if yA (the y of the A coordinate) is less than yB (y of the B coordinate). If it is, move one square from yA to yB. Rinse and repeat for the x axis. This works and given the current constraint will find you one of the shortest paths. It'd look something like:

```text
• • • • • •
• A • • • •
• 1 • • • •
• 2 • • • •
• 3 • • • •
• 4 5 • • •
```

Now let's add a wall to the mix.

```text
• • • • • •
• A • • • •
• • • • • •
• X X X X X
• • • • • •
• • B • • •
```

Suddenly our algorithm falls apart. You could probably devise some strategy to mitigate this but we can keep making more complicated wall structures to make it harder. So let's try something different: Dijkstra's algorithm.

The basic gist of Dijkstra's algorithm is that we'll start at both the beginning and the end node and begin "spiraling" outwards, marking each node with how far away it is from from its original Node. We'll alternate spiraling one level with one node, and then one level with the other. After one iteration of the point A (doesn't matter if you start with the A or B) it'd look like:

```text
• 1 • • • •
1 A 1 • • •
• 1 • • • •
• X X X X X
• • • • • •
• • B • • •
```

Then we'd do the same to point B which would like this:

```text
• 1 • • • •
1 A 1 • • •
• 1 • • • •
• X X X X X
• • 1 • • •
• 1 B 1 • •
```

We'll do this until we intersect the two spirals. As soon as the spiral intersect we know we've found the shortest possible path. Let's keep going with point A:

```text
2 1 2 • • •
1 A 1 2 • •
2 1 2 • • •
• X X X X X
• • 1 • • •
• 1 B 1 • •
```

Notice this algorithm accounts for obstacles: if there's an obstacle, you just skip that node and keep going.

Now point B:

```text
2 1 2 • • •
1 A 1 2 • •
2 1 2 • • •
• X X X X X
• 2 1 2 • •
2 1 B 1 2 •
```

You get the point, we alternate. So let's do the next steps for both point A and B.

```text
2 1 2 3 • •
1 A 1 2 3 •
2 1 2 3 • •
3 X X X X X
3 2 1 2 3 •
2 1 B 1 2 3
```

You can see they've intersected but our algorithm hasn't made that connection yet. But on the next iteration, as the spiraling is happening, those that point will see that the node it's going to has been marked by another origin point. Because of that, we know that we've found one of the shortest paths (there could be other paths that connect of the same length.) As such we've solved our problem: the shortest path is of length six. If you were keeping track of the nodes, you could give the coordinates of the path.

So, given this as the basic gist, let's speak about the more technical details. The way to accomplish is _very_ similar to what we just did with tree traversals. In fact it's literally the same algorithm applied a different way. Let's take point A and reimagine it as a tree.

```text
        A [1,1]
     /  /     \   \
[1,0] [0,1] [1,2] [2,1]
/| |\ /| |\ /| |\ /| |\
  [lots more children]
```

Instead of each node having at most two children like a binary search tree, each node has at most four children. Okay, now that we're thinking of this matrix as a tree, what we want to do is investigate first the nodes surrounding it, or in tree terms: its immediate children. We literally just learned how to do that with trees. It's breadth-first traversal! Let's apply the same secret algorithmic sauce to our problem here. We're going to take the root node (A) and add all of its children (neighbors, really) to a queue, and then begin processing each node as we pop them off the queue. Remember we need to alternate processing point A and point B, so we'll just alternate which ones we're pushing on the queue. Finally we'll have to keep track of visited nodes and distances, we'll just keep a duplicate matrix and mark it with what length it was and which origin point marked it. That's it!

Technically what we're is actually breadth-first search, but the mechanics of Dijkstra's algorithm is the same and so the two are often conflated with each other. [See here][so-bfs-vs-d] for a more thorough explanation.

If you want to see how this works using a visualizer, [check this out][visual].

## Exercises

[![Edit algorithms-exercises](https://codesandbox.io/static/img/play-codesandbox.svg)][sb]

We're going to work on [/specs/pathfinding/pathfinding.test.js][gh]. Go give that a shot.

[gh]: https://github.com/btholt/algorithms-exercises/blob/main/specs/pathfinding/pathfinding.test.js
[sb]: https://codesandbox.io/s/github/btholt/algorithms-exercises/tree/main?file=/specs/pathfinding/pathfinding.test.js
[visual]: https://qiao.github.io/PathFinding.js/visual/
[so-bfs-vs-d]: https://stackoverflow.com/questions/25449781/what-is-difference-between-bfs-and-dijkstras-algorithms-when-looking-for-shorte
