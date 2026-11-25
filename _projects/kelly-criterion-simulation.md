---
title: Kelly Criterion Simulation
status: Built
order: 2
summary: A Monte Carlo simulation of how much to bet when you have an edge, and why over-betting destroys growth.
tags: [Python, NumPy, Matplotlib]
repo: https://github.com/Estherj22/kelly_simulator
notebook: https://colab.research.google.com/github/Estherj22/kelly-criterion-simulation/blob/main/kelly_simulation.ipynb
---
## The question
If you can repeatedly bet on a game where you have an edge, what fraction of your bankroll should you stake each round?

## How it works
- A coin wins 55% of the time and pays even money, so the Kelly fraction is 10%.
- 1,000 simulated players each make 1,000 bets at half Kelly, full Kelly, double Kelly and 50%.
- Simulated growth rates are checked against the theoretical formula.

## Results
| Strategy | Median final bankroll | Ended below start | Median worst drawdown |
|---|---|---|---|
| Half Kelly (5%) | 4,263.2 | 0.8% | 62.0% |
| Full Kelly (10%) | 18,291.8 | 4.4% | 89.3% |
| Double Kelly (20%) | 87.1 | 52.8% | 99.9% |
| Reckless (50%) | 0.0 | 100.0% | 100.0% |

**Finding 1:** Full Kelly (10%) grew fastest, turning a bankroll of 100 into a median of 18,291.8. Its simulated growth of 0.0052 per round was close to the theoretical 0.0050, and the other three strategies matched theory exactly at four decimal places, so the simulation agrees with the formula.

**Finding 2:** Half Kelly gave up some growth for much more safety. Its growth rate (0.0038) was roughly three quarters of full Kelly's, but only 0.8% of players ended below their start, against 4.4%, and the median worst drawdown was 62.0%, against 89.3%. Even at full Kelly the typical player lost almost 90% from a peak at some point, which is why traders often bet a fraction of Kelly.

**Finding 3:** Betting double Kelly (20%) removed all the benefit. Growth was about zero (-0.0001), the median player finished at 87.1, below the starting 100, and 52.8% of players lost money. At 50%, all 1,000 players lost money and the median bankroll was effectively zero, even though every single bet had a positive expected value.

<!-- To show a chart, save it in assets/images and add: ![Median bankroll](/assets/images/kelly_growth.png) -->

## Limitations
The win probability is known exactly, bets are independent, and there are no costs.
