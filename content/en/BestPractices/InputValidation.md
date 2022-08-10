---
title: Why It Is So Important To Validate User Input Safely
linkTitle: why-safe-input-validation-is-important
weight: 600
toc_hide: true
description: >
  Input validation is a very important aspect of writing secure code. Consider all user input untrusted because attackers can easily manipulate it. If an application fails to properly validate untrusted user input, it might lead to security vulnerabilities such as Business Logic flaws, Denial of Service, Injections, and such. This article explores an attack scenario and walks you through the process of mitigating it. Also, learn the best practices to follow for safely validating user input.

---

{{% pageinfo %}}
Every wondered why your application might be at a huge risk due to improper input validation? What are the best practices for securely validating user input? 
{{% /pageinfo %}}

## Description

[Input validation](https://cwe.mitre.org/data/definitions/20.html) is a very important aspect of writing secure code. Consider all user input untrusted because attackers can easily manipulate it. If an application fails to properly validate untrusted user input, it might lead to security vulnerabilities such as [Business Logic flaws](https://owasp.org/www-community/vulnerabilities/Business_logic_vulnerability), [Denial of Service](https://en.wikipedia.org/wiki/Denial-of-service_attack), [Injection flaws](https://owasp.org/www-community/Injection_Flaws#:~:text=An%20injection%20flaw%20is%20a,connected%20to%20the%20vunlerable%20application.), and such. This article explores an abuse scenario and walks you through the process of mitigating it. Also, learn the best practices to follow for safely validating user input.

Consider the following scenario:

## Scenario: Earning Free Money By Purchasing A Negative Quantity Of Items

Incorrectly checking the input provided by the user can lead to catastrophic vulnerabilities. The following quantity check implementation from the [OWASP Juice Shop](https://github.com/juice-shop/juice-shop) project is a perfect example of how an innocent mistake can cause huge business losses:	

```
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

### Analysis Of The Issue

Here, the [quantityCheck() function](https://github.com/juice-shop/juice-shop/blob/bd7e8f3c7af1a8f38ba4fa866000136cb472449a/routes/basketItems.ts#L590) is called inside a middleware function [mounted on the /api/BasketItems API path](https://github.com/juice-shop/juice-shop/blob/bd7e8f3c7af1a8f38ba4fa866000136cb472449a/server.ts#L370). It checks the quantity in the request payload against some validation logic. However, the validation logic is flawed. It only checks if the quantity exceeds the limit per user and the limit per order (and skips the check if it is a deluxe user). But, it doesn’t check if the quantity is positive.

This small mistake turns out to be very costly. Users can freely input negative values in the `quantity` parameter. An attacker can abuse this by adding a negative quantity of the item (say, `-100`) to their basket. The basket value gets deducted from their wallet balance leading to a net positive amount in the attacker’s wallet. In this way, the attacker earns free money equivalent to `100` times the cost of the item.

### What Is The Impact?
An attacker might execute this process repeatedly. Without timely detection, it might lead to substantial business losses. Thus, it can be a **very high-impact** issue.

### How Could This Be Mitigated? 
1. Check if the quantity is greater than zero (`quantity > 0`),
2. Also, perform decimal integer check with `Number.isInteger(quantity, 10)`. It returns `true` if the value is a decimal integer and `false` otherwise,
3. If the above checks fail, send a `400` error response.

```
async function quantityCheck (req: Request, res: Response, next: NextFunction, id: number, quantity: number) {
  const product = await QuantityModel.findOne({ where: { ProductId: id } })
  if (!product) {
    throw new Error('No such product found!')
  }

 // Check if the quantity is a positive decimal integer value, if not send a `400` error response
 if(!Number.isInteger(quantity, 10) || quantity <= 0) {
      res.status(400).json({ error: res.__(‘Invalid Quantity of items.') })
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

## Input Validation Best Practices
* The rule of thumb is to **consider all inputs malicious**,
* **Validate all user input that comes into the application before further processing**. The OWASP cheat sheet [recommends](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html#:~:text=Input%20validation%20should%20happen%20as%20early%20as%20possible%20in%20the%20data%20flow%2C%20preferably%20as%20soon%20as%20the%20data%20is%20received%20from%20the%20external%20party.) that input validation needs to happen as early as possible in the data flow,
* Implement an **allow list** of valid inputs rather than a deny list. Attackers can often bypass the deny lists. For example, to validate a US zip code, implement it in the following manner:

```
// define the allow list regex for US Zip code
const validZipPattern = /^\d{5}(-\d{4})?$/;
// check if the user input matches our defined allow list regex
if (!validZipPattern.test(userInput) {
 		throw new Error(“InvalidZipCode”);
}	
```

* Log all input validation failures. Logging such errors can be particularly useful to detect intrusions or attackers trying to send invalid inputs to the application. For example, add a logging statement to the previous example (`logger.warn(“Invalid zip code provided.")`):

```
// define the allow list regex for US Zip code
const validZipPattern = /^\d{5}(-\d{4})?$/;
// check if the user input matches our defined allow list regex
if (!validZipPattern.test(userInput) {
  // log the input validation failure
  logger.warn(“Invalid zip code provided.");
  throw new Error(“InvalidZipCode”);
}
```

## References

- https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html
- https://owasp-juice.shop/
- https://github.com/juice-shop/juice-shop/
- https://github.com/juice-shop/juice-shop/blob/master/routes/basketItems.ts
- https://github.com/juice-shop/juice-shop/blob/bd7e8f3c7af1a8f38ba4fa866000136cb472449a/server.ts
