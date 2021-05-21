---
path: "/intro"
title: "Introduction"
order: "1A"
section: "Welcome"
description: "Brian introduces to himself, the course, and what you can expect to learn in the next few hours"
---

# Sections

- Algorithms
  - Basics
    - Big O
    - Trade offs
  - Iterative Sort
    - Bubble
    - Insertion
  - Recursive Sorts
    - Recursion
    - Merge
    - Quick
  - Non-Comparison Sorts
    - Radix
  - Search
    - Binary Search
- Data Structures
  - Interfaces
    - Set
    - Map / Dictionaries
    - Queue
  - Lists
    - Array
    - Linked
  - Trees
    - BST
    - Self-balancing tree
    - B-Tree
    - Tree Traversals
      - Pre
      - Post
      - In
  - Heaps
    - Heap sort
  - Graphs
  - Tries
  - Mazes
    - Path finding
    - Generating
  - Bloom Filters
  - Hash tables - maybe not
  - Trade offs
    - Optimizing for insertion vs read vs space
    - Stability
    - Adaptability
    - Examples

Maybe do a memoization section?

```javascript
let ans = { 2: 1, 1: 1, 0: 0 };

// negative numbers will crash this
function fibonacci(n) {
  // base case
  if (typeof ans[n] === "number") {
    return ans[n];
  }

  const x = fibonacci(n - 1);
  ans[n - 1] = x;
  const y = fibonacci(n - 2);
  ans[n - 2] = y;

  // recursive calls
  return x + y;
}
```
