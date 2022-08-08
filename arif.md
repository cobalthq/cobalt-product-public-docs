Why it is so important to safely validate user input
Description
When you put too much faith in the user, attackers often take advantage of it. User input is considered untrusted because it can be easily manipulated by attackers. If an application fails to validate untrusted user input, it might lead to all kinds of security vulnerabilities such as Denial of Service, Injections, and so on.

Below you can find a few example abuse scenarios:
Earning free money by buying a negative quantity of items
Consider an application that allows users to purchase an item using wallet credits. Through careful review of the code, you can find that it allows arbitrary values in the quantity parameter:

Insert JS code here

This can be abused by an attacker who adds a negative quantity of the item (say, -10) to their cart, and purchases it using wallet credits. When they pay for the item with their wallet balance, the negative cart value would be deducted from their wallet balance. This would then lead to a net positive amount in the attacker’s wallet, effectively earning them free money (equal to 10 times the cost of the item).
What is the impact?
If this process can be reliably repeated over and over without timely detection, it would clearly lead to huge business losses. Thus, it could be a very high impact issue with a high likelihood of occurrence.
How could this be avoided? 
Validating the input could have avoided this. User input can’t be trusted, and it is generally your responsibility to check what they input into your application. 
You should also write unit and integration tests to make sure the application can’t be abused in this manner.

Here are a few ways to validate input data:

Implementing JSON schema validation
Using SafeInteger to validate integer input

Insert Javascript Code
Crashing an application by entering a large number
Short description of the scenario
Add JS code snippet, explain the issue. 
Explain the impact
Explain the solution to this
Best Practices
It is important to validate all user input that comes into your application before further processing. The OWASP cheat sheet recommends that “input validation should happen as early as possible in the data flow”. 
It is also better to make an allow list of valid inputs rather than a deny list as attackers can often bypass deny lists.
You should also log all input validation failures.
References
Add references
