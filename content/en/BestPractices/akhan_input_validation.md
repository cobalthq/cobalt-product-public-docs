---
title: Validate User Input
linkTitle: Validate User Input
weight: 610
description: >
  Here's an attack scenario that could cost you money
---

{{% pageinfo %}}
Protect your systems from bad user input. In this article, we share best
practices to validate user input, securely.
{{% /pageinfo %}}

To create secure software, you need code that checks user input. Without such
checks, you could see security vulnerabilities such as:

- [Business logic flaws](https://owasp.org/www-community/vulnerabilities/Business_logic_vulnerability)
- [Denial of Service attacks](https://en.wikipedia.org/wiki/Denial-of-service_attack)
- [Injection
  flaws](https://owasp.org/www-community/Injection_Flaws#:~:text=An%20injection%20flaw%20is%20a,connected%20to%20the%20vunlerable%20application.)

In this article, we explore an attack scenario. We also show how you can minimize your risks. 
Read further to learn best practices to safely validate user input.

## Description

Developers who write secure code use [Input
Validation](https://cwe.mitre.org/data/definitions/20.html). Black hat hackers
frequently attack websites with questionable input.

## Attack Scenario

An attacker might think: "I can earn free money. All I need to do is find a
website that allows me to buy a negative quantity of products."

Review this code sample from the [OWASP Juice Shop](https://github.com/juice-shop/juice-shop/).
It's a perfect example of how an innocent mistake can cause huge business losses:	

```ts
 async function quantityCheck (req: Request, res: Response, next: NextFunction, id: number, quantity: number) {
  const product = await QuantityModel.findOne({ where: { ProductId: id } })
  if (!product) {
    throw new Error('No such product found!')
  }

  if (!product.limitPerUser || (product.limitPerUser && product.limitPerUser >= quantity) || security.isDeluxe(req)) {
    if (product.quantity >= quantity) { // enough in stock?
      next()
    } else {
      res.status(400).json({ error: res.__('We are out of stock! Sorry for the inconvenience.') })
    }
  } else {
    res.status(400).json({ error: res.__('You can order only up to {{quantity}} items of this product.', { quantity: product.limitPerUser.toString() }) })
  }
}
```

### Analysis

The OWASP Juice Shop uses an [API
Post](https://github.com/juice-shop/juice-shop/blob/bd7e8f3c7af1a8f38ba4fa866000136cb472449a/server.ts#L370)
to call a
[`quantityCheck()`](https://github.com/juice-shop/juice-shop/blob/bd7e8f3c7af1a8f38ba4fa866000136cb472449a/routes/basketItems.ts#L90)
function.

It checks the quantity in the request payload with validation logic, using
`product.limitPerUser`. However, it does not check if the quantity exceeds the:

- Limit per user
- Limit per order

It even skips the check for deluxe users (`security.isDeluxe(req)`). However, it
does *not* check if the quantity is positive.

This small mistake is costly. Users can freely input negative values for
`quantity`. If an attacker adds `-100` to their basket, the Juice Shop adds 100
times the value of the item to their wallet.

### Impact

Without such checks, this error could lead to substantial business losses.

### Prevention

In the following code sample, we include code that:

- Checks if the quantity is greater than zero (`quantity > 0`)
- Runs a boolean check for decimal integers (`Number.isInteger(quantity, 10)`)
- Returns an HTTP 400 error if the noted checks fail

```ts
async function quantityCheck (req: Request, res: Response, next: NextFunction, id: number, quantity: number) {
  const product = await QuantityModel.findOne({ where: { ProductId: id } })
  if (!product) {
    throw new Error('No such product found!')
  }

 // Check if the quantity is a positive decimal integer value, if not send a `400` error response
 if(!Number.isInteger(quantity, 10) || quantity <= 0) {
      res.status(400).json({ error: res.__('Invalid Quantity of items.') })
 }

  if (!product.limitPerUser || (product.limitPerUser && product.limitPerUser >= quantity) || security.isDeluxe(req)) {
    if (product.quantity >= quantity) { // enough in stock?
      next()
    } else {
      res.status(400).json({ error: res.__('We are out of stock! Sorry for the inconvenience.') })
    }
  } else {
    res.status(400).json({ error: res.__('You can order only up to {{quantity}} items of this product.', { quantity: product.limitPerUser.toString() }) })
  }
}
```

## Best Practices

- Assume that any input can be an attack.
- Validate all user input before processing it.
  - The [OWASP Input Validation Cheat Sheet
    recommends](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html#goals-of-input-validation)
    that you use input validation as early as possible in the data flow.
- Check if the user input matches the right format.
  - For example, the application should limit date of birth entries to ISO 8601 format (DD-MM-YYYY).
- Make sure user input fits the given business context. For example:
  - Limit entries in quantity fields to positive whole numbers. Prevent negative or fractional entries.
  - Set sensible minimum and maximum values for the quantity. Small quantities may not be financially viable for a given transaction.
- Include an **allow list** of valid inputs. Attackers can often bypass the deny
  lists. For example, you could use the following to validate a US zip code:

  ```ts
  // define the allow list regex for US Zip code
  const validZipPattern = /^\d{5}(-\d{4})?$/;
  // check if the user input matches our defined allow list regex
  if (!validZipPattern.test(userInput) {
   		throw new Error("InvalidZipCode");
  }	
  ```

- Log all input validation failures. The information you get can help you detect
  intrusions, and identify attackers who try to send invalid inputs. For this
  code sample, you can add the following logging statement: `logger.warn("Invalid zip code provided.")`:

  ```ts
  // define the allow list regex for US Zip code
  const validZipPattern = /^\d{5}(-\d{4})?$/;
  // check if the user input matches our defined allow list regex
  if (!validZipPattern.test(userInput) {
    // log the input validation failure
    logger.warn("Invalid zip code provided.");
    throw new Error("InvalidZipCode");
  }
  ```

## References

- https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html
- https://owasp-juice.shop/
- https://github.com/juice-shop/juice-shop/
- https://github.com/juice-shop/juice-shop/blob/master/routes/basketItems.ts
- https://github.com/juice-shop/juice-shop/blob/bd7e8f3c7af1a8f38ba4fa866000136cb472449a/server.ts
