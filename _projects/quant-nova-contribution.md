---
title: Quant Nova (open source contribution)
status: Open source
order: 5
summary: Added an average time range feature to a public quantitative finance project.
tags: [Python, Open source]
---
## What I added

- Implemented the ATR calculation using True Range (TR) and Wilder's smoothing method. 

- Incorporated three price-movement components into True Range: the high-low range, the absolute difference between the current high and previous close, and the absolute difference between the current low and previous close.

- Implemented an initial ATR using the arithmetic mean of the first 14 True Range observations, followed by Wilder's recursive smoothing to calculate subsequent values.

- Integrated ATR into the dashboard as a selectable volatility indicator, allowing users to observe changes in market volatility alongside other technical indicators.

- Added automated tests covering Wilder's smoothing, price gaps, insufficient historical data, and mismatched OHLC input arrays.

## Quantitative Finance Application

ATR measures market volatility by estimating the average magnitude of price movements over a specified period. Unlike directional indicators, it does not predict whether prices will rise or fall. Instead, it helps traders assess market conditions, compare volatility across periods, and inform risk management decisions such as stop-loss placement and position sizing.

## Testing and Validation

- Added four unit tests for ATR calculation and input validation.

- Contributed to a test suite with 25 passing automated tests.

- Verified successful TypeScript compilation and production build.

Contribution: [Github Link] (https://github.com/Estherj22/QuantNova)
