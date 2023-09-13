---
path: "/spatial-complexity/"
title: "Spatial Complexity"
order: "2B"
section: "Algorithm Analysis"
description: "Brian talks about Big O as it's applied to how much space something needs"
---

So far we've just talked about _computational complexity_. In general if someone talks about Big O and doesn't specify what type they're talking about, it's usually about computational complexity, or analyzing how long something takes to run. Let's talk about _spatial complexity_ or how much space (e.g. how much RAM or disk space) an algorithm needs to complete.

## Linear

Let's say we have an algorithm that for every item in the array, it needs to create another array in the process of sorting it. So for an array of length 10, our algorithm will create 10 arrays. For an array of 100, it'd create 100 extra arrays (or something close, remember these are broad strokes, not exact.) This would be O(n) in terms of its spatial complexity. We'll do some sorts that do this.

## Logrithmic

What about another for every item in the array, it needed to create a diminishing amount of extra arrays. For example: for an array of length 10, it'd create 7 arrays. For an array of 100, it'd create 12 arrays. For an array of 1000, it'd created 20 arrays. This would be O(log n).

## Constant

What if we didn't create any extra arrays when we did our algorithm? We just used the same space we were given when we first started. Or if we created just 10 arrays, no matter how long the array is? This would be O(1) since it's constant no matter what. Its spatial need don't increase with longer arrays.

## Quadratic

Lastly, what if we had an app that calculates the distances between zip / postal codes?

> A zip code in the United States is a five digit number that represents a fairly small area of land. 98109 is in the middle of Seattle, Washington while 10001 is in the middle of New York City, NY.

If a user asks what's the distance between 98109 and 10001, we'd spit out something like 2,800 miles or 4,500 km. Now, let's say for every zip code we add to our system, we calculate the distance between every other zip code in our system and store it. If there were only 10 zip codes, sure, that'd be easy, but there are nearly 42,000 zip codes in the United States with more being added. The spatial complexity on this would be O(n²) because for every new zip code we add, we'd have to add 42,000 new items as well.

Is this a good idea? It depends! A company I used to work at did exactly this because calling the API to get this data was really expensive so they did all the computational work once to find out and just stored it. It was a huge database but that ended up being way cheaper than the API.

I will say O(n²) in spatial complexity is pretty rare and a big red flag.

## Okay, sure, but why

As before, this is just a tool to make sure your design fits your needs. One isn't necessarily better than the other. And very frequently you need to make the trade off of computational complexity vs spatial. Some algoriths eat a lot of memory but go fast and there are lots that eat zero memory but go slow. It just depends on what your needs are.

Here's an example: let's say you're writing code that's going to be run a PlayStation 3 and it needs to sort 1000 TV shows according to what show you think the customer is going to want to see. PS3s have a decent processor but very little memory available to apps. In this case, we'd want to trade off in favor of spatial complexity and trade off against computational complexity: the processor can do more work so we can save memory.

Okay, now same problem but we have 1,000,000 videos and a big, beefy server in the cloud to do the work for us. In this case we're not resource constrained by either memory or compute so we can feel free to trade off in favor of computational since we want to respond to the user as soon as we can.
