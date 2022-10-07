---
Title: "Protect Your APIs With Rate Limiting"
linkTitle: "API Rate Limiting"
weight: 640
description: >
  Protect your APIs. Use rate limits. According to the [OWASP API Top 10](https://owasp.org/www-project-api-security/), "Lack of Resources and Rate Limiting" is number 4 in the API Security Top 10 for 2019. Attackers are always on the lookout for vulnerable APIs. The impact goes beyond DoS (Denial of Service). For instance, the attacker can misuse a lack of rate limits to make phone calls to [premium phone numbers](https://en.wikipedia.org/wiki/Premium-rate_telephone_number). While doing so, they can easily cause a lot of financial losses to the business.
---

{{% pageinfo %}}
  To protect your APIs against abuse, you should implement rate limiting. In this article, we explore why you should prioritize it today rather than in the future.
{{% /pageinfo %}}

## Description
  
Let’s dig deeper into some abuse scenarios to understand this:

## Case Study: Abuse Of Phone Calling API For Toll Fraud
  
### Background
  
APIs may make use of phone calls for verification purposes in an application. So, how can an attacker abuse it? 

Fraudsters often find creative ways to make money off security loopholes. They usually look for websites with lax security measures. 
Attackers start by locating a phone verification API endpoint in your application. If they find one without rate limits, they quickly spring into action.

### Real-World Example
  
Recently, a colleague told me how a company booked a loss of over $300k in an incident of toll fraud. This figure would only increase when your business is more valuable.

The attacker took advantage of the lack of rate limiting in the phone verification API endpoint to make many phone calls. Additionally, the attacker picked a time during the weekend to delay detection.

### How Feasible Is Such An Attack?
  
Anyone can buy premium phone numbers online and get started quickly. That is why attackers are motivated to carry out such attacks. 
Moreover, communication APIs like Twilio can’t deny payments to carrier partners. Due to agreements at the carrier level,
you need to pay for all calls regardless of whether or not they are fraudulent. Many fraudsters get the money that they steal.
Ultimately, you are solely responsible for protecting your API against such attacks.

You can protect yourself by rate-limiting requests to your API endpoints. While attackers can get around rate limits by cycling through
a large pool of IP addresses, many attackers prefer easier targets. 

### Vulnerable Code
  
Consider the following snippet of code. A POST request with a phone number in the body to this API route triggers a verification phone call to that number.

What is wrong with it?

```
  app.post('/verify-phone number',(req, res) => {
	  const { phone } = req.body;	
    	  verify.call(phone);
	  //...
  });
```

Fraudsters can easily abuse this API endpoint for toll fraud due to the lack of rate limiting.

### Fix

Let’s fix that. We can choose from several npm packages. But for this example, let's use [`express-rate-limit`](https://www.npmjs.com/package/express-rate-limit):

In the following code sample, we:

- Import the 'express-rate-limit' package. 
- Define a custom rate limit for the API endpoint (`callLimiter`). 
  - Set a time window of 1 hour (60 * 60 * 1000 ms).
  - Set max limits for that window (10 attempts).
  - Provide a friendly error message to the blocked user (`'Too many verification attempts, please try again after an hour'`)
- Apply the `callLimiter` middleware we defined to the endpoint.

```
import rateLimit from 'express-rate-limit'

//...

const callLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 10, // Limit each IP to 10 phone calls per `window` (here, per hour)
	message:
		'Too many verification attempts, please try again after an hour',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
});
 
//...
app.post('/verify-phone-number', callLimiter, (req, res) => {
	const { phone } = req.body;	
  	verify.call(phone);
	//...
});
```

## Other Scenarios
  
### Denial Of Service
  
Attackers may overload the API with a large number of requests. If the requests exceed the capacity of the API, your users won't be able to access your API.
  
### Bruteforce And Credential Stuffing Attacks
  
Attackers can use multiple methods to attack your systems:

- They can brute force user credentials with lists of common passwords. 
- They can abuse the lack of rate limiting to perform credential stuffing attacks. 
  - With credential stuffing attacks, attackers attempt to log in to user accounts using credentials obtained from other breaches or stolen credentials.
 
### Data Scraping
  
You may have configured your code to restrict data scraping from your application. Bad actors may try to get around your measures by pulling information from your APIs at a very high rate.
  
## The Fix
  
Use API rate limiting to protect against these kinds of attacks.
 
## Considerations
  
Before you implement rate limiting for your APIs, consider these factors:
  
### Will It Impact User Experience?
  
Well, it depends. You might want to give the user more freedom when using certain API functionalities. On the other hand, you might want to be stricter for abuse-prone APIs. This requires planning. Plan and tailor your rate limits to your use case before applying them. Choose the limits based on how many requests you expect from the client applications under normal conditions.

### Going Further
  
While application layer rate limiting is a good practice, you may need to do more. Sophisticated attackers may
set up attacks from a large numbers of IP addresses. Some botnets include IP addresses from real users.
In response, you could review threat intelligence feeds to block bad reputation IP addresses.

Furthermore, depending on your use case you might need more advanced anti-fraud measures and geo-restrictions.

  
### References
- [OWASP API Top 10.](https://owasp.org/www-project-api-security/)
- [Twilio has written a very comprehensive blog post on toll fraud.](https://www.twilio.com/learn/voice-and-video/toll-fraud)
