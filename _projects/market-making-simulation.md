---
title: Market-Making Simulation
status: Built
order: 1
summary: A Python simulation of a market maker quoting a bid and ask against random and informed traders.
tags: [Python, NumPy, pandas, Matplotlib]
repo: https://github.com/Estherj22/market-making-simulator
---
## The question
How does the size of the bid-ask spread trade off against adverse selection? A tight spread attracts trades but loses money to informed traders. A wide spread protects against them but scares off everyone else.

## How it works
- A hidden true price moves as a random walk.
- The market maker quotes a bid below and an ask above its estimate of fair value, and shifts both quotes to push inventory back toward zero.
- Each step a buyer, a seller or nobody arrives at random, and a fraction of traders are informed.
- Profit is cash plus inventory valued at the true price.


## Limitations
Real order flow is not random, real markets have many competing market makers, and the price model is a simple random walk.
