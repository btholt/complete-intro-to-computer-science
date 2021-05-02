---
path: "/merge-sort"
title: "Merge Sort"
order: "4B"
section: "Recursive Sorts"
description: "One of the most versatile and useful sorts, merge sorts has wide applications due to its stabilitiy and reliability for sorting."
---

Our first divide-and-conquer algorithm! Merge sort is actually very useful and one of the easier divide-and-conquer algorithms to understand. It's easier to conceptualize than some of the other ones. A key to merge sort is that it is recursive. If you're struggling to grasp recursion, this is going to be doubly hard to understand this algorithm.

The basic gist of merge sort is that you're going to take your big list, and first divide down in two half size lists and recursively call merge sort on those smaller list, which in turn will do the same. The base case is when you have a list of one, at which point you will return that sorted list of one. On the way up the recursive calls, you will merge those sorted lists together (preferably by another merge function you'll write) that walks through both lists simultaneously and inserts the smaller value first, effectively creating a bigger sorted list.

[1, 5, 6] sublist 1
[2, 7, 8] sublist 2

-> compare 1 and 2, take 1 and put it in new list
-> compare 5 and 2, take 2 and put it in new list
-> compare 5 and 7, take 5 and put it in new list
-> compare 6 and 7, take 6 and put it in new list
-> list one has no more elements
add the rest of list two in order (7 and 8)

This combined merge with the divide-and-conquer recursion proves to be pretty effective. When you call Array.prototype.sort it often uses MergeSort (depending on the engine and the types of the elements in the array.) MergeSort is also stable which just means if you have equivalent elements, it will keep their original order in the array. This is sometimes important and sometimes not.

MergeSort's Big O is O(n log n). Weird, right? We obviously have to compare everything once, but we don't have to compare everything to everything like we do with bubble sort. Rather we just to have to compare to their local lists as we sort. Not too bad.

MergeSort's space complexity is a bit worse than the previous algorithms at O(n) since we have to create new lists as we go. It's not awful but it nonetheless a consideration.
