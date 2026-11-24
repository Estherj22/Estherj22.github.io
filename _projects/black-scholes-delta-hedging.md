---
title: Black-Scholes, Monte Carlo and Delta Hedging
status: In progress
order: 3
summary: Prices options with Black-Scholes, checks the price by Monte Carlo, and simulates selling and delta hedging an option.
tags: [Python, NumPy, SciPy, Matplotlib]
repo: https://github.com/Estherj22/black-scholes-delta-hedging
notebook: https://colab.research.google.com/github/Estherj22/black-scholes-delta-hedging/blob/main/black_scholes_hedging.ipynb
---
## The question
If you sell an option and hedge it with shares, when do you make money, and how does that depend on how often you rebalance and on the volatility you priced with?

## How it works
- Black-Scholes prices and the Greeks (delta, gamma, vega) for calls and puts.
- A Monte Carlo price and put-call parity as checks on the code.
- A delta hedging simulation across thousands of paths, with experiments on rebalancing frequency and on real volatility differing from priced volatility.

## Results
FILL IN: whether the Monte Carlo price matched the formula, how risk changed with rebalancing, and who profited when real volatility was above or below the priced level.

<!-- To show a chart, save it in assets/images and add: ![Hedging profit and loss](/assets/images/hedging_pnl.png) -->

## Limitations
Volatility is constant, there are no trading costs, and price paths have no jumps.
