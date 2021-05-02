---
path: "/insertion-sort"
title: "Insertion Sort"
order: "3B"
section: "Iterative Sorts"
description: "A more useful tool, insertion sort is a tool that developers will occasionally use. Brian goes over why that is and how to do it"
---

Insertion sort is a step more complex but a bit more useful than bubble sort and is occasionally useful. The worst case scenario for it is similar to bubble sort's but its best case makes it suited for times when you're pretty sure a list almost sorted or likely already sorted.

We're going to start at the beginning of the list and assume we have a sorted list of length 1 where the first element is only sorted element. We're then going to grab the second element, and insert it into the correct spot in our sorted list, either the 0 index or the 1 index, depending if it's smaller or larger than our first element. We now have a sorted list of length 2. We then continue on down the line, inserting elements in our sorted side of the list as the unsorted side dwindles.

What's the Big O? There's an inner loop that goes over your sorted list to find the correct place to insert your item, and an outer loop to go over all the numbers. Two loops means O(n²). However since if your list is sorted or nearly so, it can be O(n) in a best case scenario and thus well adapted to that scenario.
