---
path: "/graphs/"
title: "Graphs"
order: "9A"
section: "Applying Tree Algorithms"
description: ""
icon: "map-signs"
---

Let's chat about a datastructure that is extremely useful, you probably interact with many on a daily basis, but you may not use them in your code on a day-to-day: graphs. Graphs are all about modeling relations between many items. For example, think of Facebook's Social Graph. I'm friends with you and you're friends with me. But you're also friends with six hundred other people which is about five hundred fifty too many. Those people in turn also have too friends. But many of my friends are your friends, so the connections aren't linear, they're … well, they're graph-like.

In the Facebook example, each person would be a node. A node represents some entity, much like a row in an SQL database. Every so-called "friendship" would be called an edge. An edge represents some connection between two items. In this case, our Facebook friendship is bidirectional: if I'm friends with you then you're friends with me. Twitter would be an example of a unidirectional edge: just because I follow you doesn't mean you follow me.

Graphs are **everywhere**. Your various social networks, your Internet of Things devices that have relationships with each other, your neural-networks machine-learning libraries, everywhere. As we continue to model more-and-more of the natural world in virtual space graphs become ever-more important since relationships between things and beings exist all around us.

In your example, you'll be tracing a made-up social network. In this social network, you're going to be trying to find the most common job title amongst the people you follow. At the first level, it's easy, you just look at your immediate connections and loop over them and see what their jobs are. However, if we go further than that, we have to look at connections' connections! Hopefully this sounds vaguely familiar … it sort of sounds like working with trees! Aw 💩 we have to use those same algorithms again!! So let's visualize a basic graph

```text
   Bob — Sally
  /    \
me    Alice
  \    /
   Maria
```

In this case, let's say I'm looking for what the job titles are for the people within my second degree network: my connections and their connections, or no more than two edges away from me. If hop first to Bob, then I'll count Sally and Alice in his connections. If I hop to Maria, then I'll count Alice in her connections … for the second time. This is where graphs differ a bit: since there's no clear parent-child relationship you need to be aware there will be cycles (e.g. A points to B, B points to C, C points to A, circles in graphs) and other more difficult patterns to deal with. In this case, I'll just keep track of users I've crawled before and not add them to my total the second time.

So traversing algorithm fits best here? We're analysizing everything in a limited depth of a sub-tree and breadth-first is well equipped to do that. Instead of letting breadth-first traversal run to completion, we'll just limit how many times that outer loop runs, effectively limiting how many levels down it goes, or how many degrees of separation!

So let's see how you'd do it with out little graph

```text
   Bob — Sally
  /    \
me    Alice
  \    /
   Maria

-> Add me to queue
-> Dequeue me
-> Add my job to the tally (program manager)
-> Queue my connections, Bob and Maria
-> Dequeue Bob
-> Add Bob's job to the tally (designer)
-> Queue Bob's connection, Sally and Alice
-> Dequeue Maria
-> Add Maria's job to the tally (program manager)
-> Queue Maria's connections. Alice has already been queued so don't add any.

-> Finish first iteration, one degree of separation
```

Now if we did another degree of separation, we'd add Alice and Sally's jobs to the tallys. So we have an outter for loop that goes for each degree of separation. Then you have an inner loop (probably a while loop) that dequeues items from your queue and processes them. You'll then queue up their connections to be processed for the next iteration.

## Databases

There are whole databases that just deal with graphs! In one of my other courses, [The Complete Intro to Databases][dbs] we go over one in depth, Neo4j. It's great to know what's actually happening under the hood.

## Exercises

[![Edit algorithms-exercises](https://codesandbox.io/static/img/play-codesandbox.svg)][sb]

We're going to work on [/specs/graph/graph.test.js][gh]. Go give that a shot.

[gh]: https://github.com/btholt/algorithms-exercises/blob/main/specs/graph/graph.test.js
[sb]: https://codesandbox.io/s/github/btholt/algorithms-exercises/tree/main?file=/specs/graph/graph.test.js
[dbs]: https://frontendmasters.com/courses/databases/
