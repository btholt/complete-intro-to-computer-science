---
path: "/bloom-filters/"
title: "Bloom Filters"
order: "10A"
section: "Other Data Structures"
description: ""
icon: "seedling"
---

Bloom filters are an interesting data structure which are designed to tell you quickly and efficiently if an item is in a set. If you need a reminder of what a set is, see the previous course. In exchange for being really fast and memory efficient, bloom filters trade off the fact that it can't tell you definitely if an item is in the set; it can only tell you definitely that item is **not** in the set. Stated differently, bloom filters have a false positive rate but do not have false negatives.

Why is that useful? Sometimes you don't care about false positives, you just want to make sure something is _not_ in the set. [Medium][medium] has a great article on what they use bloom filters for: they use them to filter out articles they don't want to show you in their recommendations, whether those are items you've read before or things they've recommended too many times. What about that false positive rate? Well, they'll just filter out something they could have shown you and then show you something they definitely can show you. It's an acceptable trade off.

Check out [Wikipedia][wiki] for some more examples of applications.

So let's talk about how they work.

Imagine you have an array with ten elements in it. Every element in the array is a `0` bit. This is an empty bloom filter. Now we want to add `"Brian"` to the array. I'm going to run `"Brian"` through three different hashing functions (see previous course for explanation on hashing functions.) Each hashing function should be _fast_ and definitely not cryptographically secure (which are by-design slow.) This means _don't_ use SHA or MD5. They should also have a uniform distribution as much as possible.

Okay, so I run my string through three different hashing functions and they give me `2`, `5`, and `8` (I'm making up the numbers; we won't implement hashing functions so it doesn't really matter how they work.) I'll flip all those bits at those indexes so my new array is `[0, 0, 1, 0, 0, 1, 0, 0, 1, 0]`.

After doing this, I'll check to see if `"Sarah"` is in the array. After running through the hashing function, they give `2`, `2`, and `4`. `2` is flipped but `4` is not, so I can definitively say that `"Sarah"` is not in the data set.

So let's add one more item to the array, `"Simona"`. The indexes we get back `0`, `4`, and `5`. So now our array is `[1, 0, 1, 0, 1, 1, 0, 0, 1, 0]`. We flip both 0 and 4 indexes and 5 was already flipped so we do nothing to it. Now what happens if we check `"Sarah"` again? This time we'll get a false positive that `"Sarah"` is in the dataset. That's why the two answers you can get back from the question "Is X in the bloom filter" are no and maybe.

That's it!

So when you add more items to a bloom filter, you'll increase your false positive rate. You can mitigate this by having a larger array, but you'll be trading off on having a larger memory footprint. You can also have more or less hashing functions, trading off on how quickly memory will fill up versus false positive rates.

## Exercises

[![Edit algorithms-exercises](https://codesandbox.io/static/img/play-codesandbox.svg)][sb]

We're going to work on [/specs/bloom-filters/bloom-filters.test.js][gh]. Go give that a shot.

[gh]: https://github.com/btholt/algorithms-exercises/blob/main/specs/bloom-filters/bloom-filters.test.js
[sb]: https://codesandbox.io/s/github/btholt/algorithms-exercises/tree/main?file=/specs/bloom-filters/bloom-filters.test.js
[medium]: https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff
[wiki]: https://en.wikipedia.org/wiki/Bloom_filter#Examples
[by-example]: http://llimllib.github.io/bloomfilter-tutorial/
