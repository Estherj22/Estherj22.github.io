---
title: Black-Scholes, Monte Carlo and Delta Hedging
status: Built
order: 3
summary: Prices options with Black-Scholes, checks the price by Monte Carlo, and simulates selling and delta hedging an option.
tags: [Python, NumPy, SciPy, Matplotlib]
repo: https://github.com/Estherj22/black_scholes_hedging
notebook: https://colab.research.google.com/github/Estherj22/black-scholes-delta-hedging/blob/main/black_scholes_hedging.ipynb
---
## The question
If you sell an option and hedge it with shares, when do you make money, and how does that depend on how often you rebalance and on the volatility you priced with?

## How it works
- Black-Scholes prices and the Greeks (delta, gamma, vega) for calls and puts.
- A Monte Carlo price and put-call parity as checks on the code.
- A delta hedging simulation across thousands of paths, with experiments on rebalancing frequency and on real volatility differing from priced volatility.

## Results
The Monte Carlo price (4.3627) matched the formula (4.3576) to within a third of a standard error. Quadrupling how often the hedge was rebalanced roughly halved the risk, with the standard deviation falling from 1.626 to 0.219 between 4 and 252 rebalances. A seller who priced at 20% volatility earned +0.99 when real volatility was 15% and lost 2.00 when it was 30%, in line with the option's vega.
<!-- To show a chart, save it in assets/images and add: ![Hedging profit and loss](/assets/images/hedging_pnl.png) -->

## Limitations
Volatility is constant, there are no trading costs, and price paths have no jumps.
