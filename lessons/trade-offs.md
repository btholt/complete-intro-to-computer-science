---
path: "/trade-offs/"
title: "Trade Offs"
order: "2C"
section: "Algorithm Analysis"
description: "Brian goes over why we use Big O and the art of making trade offs"
---

Besides being useful in interviews, why do we even talk about Big O? It's not because you're actually going to sitting there, write the Big O for every function in your code. You probably won't even think too frequently about Big O at all.

## The Mindset

It's actually the mindset that you're gaining that's actually the useful part. "If I nest a for loop in another for loop, that could be bad." If you gain nothing else from these two sections, gain that!

Really though, it's the additional function in my brain that as I'm writing code is thinking about "can this be done better".

Let's talk about "better" for a second. The temptation after learning about these concepts is to try to optimize every piece of code that you come across. "How can this have the loweset Big O?" is the wrong question to ask. Let's go over some guiding principles.

- There are no rules. "Always do _blank_". Everything has context. These are just tools and loose decision-making frameworks for you to use to make a contextually good choice.
- There are frequently multiple good choices and almost never a perfect, "right" choice.
- Remember how I said that Big O allows you to ignore the coefficients (the `3` in the `3x²`)? Sometimes those actually end up being super important. Big O, again, is just a broad stroke. Sometimes the details are super important.
- Just as frequently, even the broad strokes are super unimportant. If you have a function that is called just once a day as a background job, it doesn't matter if it finishes in 300 milliseconds or 30 seconds (probably, again, context is important.) Don't spin your wheels on unimportant things.
- In my experience, **readability** and **maintainability** are the most important things about code. Code is communication. Clever, performant code is fun to write but hard to maintain later when you have to go figure out what the hell you actually wrote. We write code so that later humans can understand it and secondarily so computers can execute it. If it was just for computers we'd all still be writing assembly. Write your code like you were writing a letter to a future human (probably yourself) on how this works.
- Taking the above into account, err on the side of simple code. Simple code is easier to maintain because you can understand it easier and typically ends up having less bugs.
- Human time is almost always more valuable than computer time.
- Normally it's a good idea to not prematurely optimize code. As a general principle, I try to _have_ a perf problem before I try to solve it. Premature optimization will cause you a lot of problems. Frequently you're not solving the right problem and you're left when harder-to-deal-with code.
- 99% of the time you want to use the built-in features to a language or an existing module to do these sorts of heavy lifting. Rarely are you going to write your own sort, you'll just call `.sort()`. Usually your implementation won't be faster because the built-ins can do tricks you can't (like run it in C/Rust) and they tend to have far less bugs because so many people use them.
