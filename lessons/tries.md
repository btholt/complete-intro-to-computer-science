---
path: "/tries/"
title: "Tries"
order: "9C"
section: "Applying Tree Algorithms"
description: ""
---

First of all, let's make sure you're saying this word correctly. The word "trie" is a play on the fact that this particular data structure makes it easy to re**trie**ve data, so trie is said just like it is there, tree. However, because tries and trees are often discussed together, you'll here people call them "tries" (as in the plural try) or try to disambiguate them in other methods. Good luck.

Okay, so what is a trie? It's a tree. LOL. It's a tree that's optimized for searching by prefix. The classic example of what you would use this for is autocomplete: you know when you type in "San" and it offers suggestions of what to finish with like "Francisco", "Diego", or "Jose". Tries are really useful for that.

So let's examine what looks like. A trie starts with a root node that doesn't represent anything (often it's given the `value` of `''` (empty string.) It has a bunch of child nodes (as many are necessary) that represent one letter, the first letter of all the words added to the data structure. Each of those letter-nodes will have children nodes for all the _second_ letters of the words that are represented in the data structure. So on and so forth, there will be a chain of nodes that represent each letter in the data structure.

Why is this useful? If a user types `bo` in the text input, you can go through your data structure, find the `o` node in that chain, and then all you have to do is a depth-first traversal of the children nodes to for a list of autocomplete suggestions.

```text
  a – [various children]
 /
b – o – s – t – o – n
     \
      i – s – e
```

So based on this, you'd get suggestions of "Boston" and "Boise".

Since some words are contained within chains of others (for example, there are two separate cities, one called "Salina" and one called "Salinas" or "Sandy" and "Sandy Springs".) You'll often have a flag in there that signifies the node you're on is a complete word so you can just add it to the list and then keep going on the children.

There are more complicated things you can do with tries as well that we won't explore here. You can have autocompletes for mid-word completions (if I type "francisco" it won't autocomplete "san francisco" at the moment.) You can add weights to certain edges/children so they're suggested first (so San Francisco comes before San Mateo.) But this exercise, assume all words weighted equally.

You'll also represent a space in the tree as its own node so when you type `san<space>` it autocompletes San Francisco instead of Santa Fe. In other words, no characters are given special treatment. That can be unintuitve.

## Exercises

[![Edit algorithms-exercises](https://codesandbox.io/static/img/play-codesandbox.svg)][sb]

We're going to work on [/specs/tries/tries.test.js][gh]. Go give that a shot.

[gh]: https://github.com/btholt/algorithms-exercises/blob/main/specs/tries/tries.test.js
[sb]: https://codesandbox.io/s/github/btholt/algorithms-exercises/tree/main?file=/specs/tries/tries.test.js
