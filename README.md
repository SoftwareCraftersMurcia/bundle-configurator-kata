# Bundle Configurator

- Pair-Programming
- Outside-in TDD
- Difficulty: Competent
- Estimated Duration: 1 hour 30 minutes

## Problem

A customer can add single products to their cart. Once the customer is done selecting single products, they go to the
checkout and there will be display the cheapest combination of bundles and single product as possible.

Bundle products are a combination of single products which are usually cheaper than buying them separately. The goal is
to build a function that given a list of single products it will return the best (cheapest) solution, taking in
consideration the prices for single and bundle products.

## Requirements

A Customer can select only single products, so the algorithm should check if there is a bundle that matches those
products, and in that case provide the cheapest option in comparison with the single product prices totals.

### Product, Bundles and Prices

A customer can select single products (P = Product):

| product | single price |
|---------|--------------|
| P1      | 10 EUR       |
| P2      | 20 EUR       |
| P3      | 30 EUR       |
| P4      | 40 EUR       |
| P5      | 50 EUR       |

And internally, the system has better prices when buying these products in combinations. These are known as bundle
products (B = Bundle):

| bundle | products    | bundle price | original price |
|--------|-------------|--------------|----------------|
| B1     | P1,P2       | 25 EUR       | 30 EUR         |
| B2     | P1,P4       | 40 EUR       | 50 EUR         |
| B3     | P3,P4       | 60 EUR       | 70 EUR         |
| B4     | P1,P2,P3,P4 | 80 EUR       | 100 EUR        |
| B5     | P1,P5       | 50 EUR       | 60 EUR         |

## Acceptance Criteria

```gherkin
Given I am a customer
When I add to my cart these products <select>
And I go to the checkout page
Then I will see in the <result> products
```

The order is irrelevant (`P1,P2` === `P2,P1`)

| select      | result         |
|-------------|----------------|
| P1          | P1             |
| P1,P2       | B1             |
| P2,P1       | B1             |
| P1,P2,P3    | B1,P3          |
| P1,P3,P4    | P1,B3          |
| P1,P2,P3,P4 | B4             |
| P2,P4       | P2,P4          |
| P2,P3,P4    | P2,B3          |
| P3,P4       | B3             |

### Extra: the cheapest win

Keep the cheapest when there are multiple possible solutions:

| select   | result |
|----------|--------|
| P1,P2,P5 | B5,P2  |

> For example: `P1,P2,P5` could result into `B1,P5`(price: 25 + 50 = 75) or `B5,P2` (price: 50 + 20 = 70);
> therefore `B5,P2` is the cheapest and the desired solution.

## Tech hint

- Start writing a test that cover one happy path from the requirements.
- It's up to you to define the internal data structure that you want to work on.
- It should be possible to modify the products and bundles without altering the final logic.

### Original idea

- https://github.com/teufelaudio/web-it_katas/tree/master/tdd/bundle-configurator