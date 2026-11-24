---
title: Kelly Criterion Simulation
status: In progress
order: 2
summary: A Monte Carlo simulation of how much to bet when you have an edge, and why over-betting destroys growth.
tags: [Python, NumPy, Matplotlib]
repo: https://github.com/Estherj22/kelly-criterion-simulation
notebook: https://colab.research.google.com/github/Estherj22/kelly-criterion-simulation/blob/main/kelly_simulation.ipynb
---
## The question
If you can repeatedly bet on a game where you have an edge, what fraction of your bankroll should you stake each round?

## How it works
- A coin wins 55% of the time and pays even money, so the Kelly fraction is 10%.
- 1,000 simulated players each make 1,000 bets at half Kelly, full Kelly, double Kelly and 50%.
- Simulated growth rates are checked against the theoretical formula.

## Results
FILL IN: which bet size grew fastest, what happened at double Kelly and 50%, and what happened when the edge was overestimated.

<!-- To show a chart, save it in assets/images and add: ![Median bankroll](/assets/images/kelly_growth.png) -->

## Limitations
The win probability is known exactly, bets are independent, and there are no costs.
