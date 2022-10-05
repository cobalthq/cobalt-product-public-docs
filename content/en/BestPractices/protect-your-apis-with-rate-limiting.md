---
Title: "Protect Your APIs With Rate Limiting"
linkTitle: "API Rate Limiting"
# Change this weight, based on where it should go in the "Best Practices"
# section
weight: 600
# The `toc_hide` entry hides the link from the menu. The content still available
# at <URL>/bestpractices/. We'll remove the entry when we publish your work
toc_hide: true
description: >
  According to the OWASP API Top 10, lack of API rate limiting (Lack of resources and rate limiting) accounts for the 4th most common type of vulnerability in APIs. Attackers are always on the lookout for APIs with weak protection. The impact is not always limited to DoS (Denial of Service). For instance, the attacker can misuse a lack of rate limit to make phone calls to premium phone numbers. While doing so, they can easily cause a lot of financial losses to the business.
---

{{% pageinfo %}}
  To protect your APIs against abuse, you should implement rate limiting properly. Rate limiting is often an overlooked area. In this article, we will explore more into why you should prioritize it today rather than in the future.
{{% /pageinfo %}}

## Description
  
According to the OWASP API Top 10, lack of API rate limiting (Lack of resources and rate limiting) accounts for the 4th most common type of vulnerability in APIs. Attackers are always on the lookout for APIs with weak protection. The impact is not always limited to DoS (Denial of Service). For instance, the attacker can misuse a lack of rate limit to make phone calls to premium phone numbers. While doing so, they can easily cause a lot of financial losses to the business.

To protect your APIs against abuse, you should implement rate limiting properly. Rate limiting is often an overlooked area. In this article, we will explore more into why you should prioritize it today rather than in the future. 

Let’s dig deeper into some abuse scenarios to understand this:

## Case Study: Abuse Of Phone Calling API For Toll Fraud
  
### Background
  
APIs may make use of phone calls for verification purposes in an application. So, how can an attacker abuse it? 

Fraudsters often find creative ways to make money off security loopholes. They usually look for websites with lax security measures. The attackers start by locating a phone verification API endpoint in your application without rate limits. Then they quickly spring into action.

### Real-World Example
  
Recently, a colleague told me how a company booked a loss of over $300k in an incident of toll fraud. This figure would only increase when your business is more valuable.

In this case, the attackers generated a lot of calls to premium numbers that cost a lot of money. The attacker took advantage of the lack of rate limiting in the phone verification API endpoint to make many phone calls. Additionally, the attacker picked a time during the weekend when the team was out to delay detection.

### How Feasible Is Such An Attack?
  
You can buy premium phone numbers with a quick google search and get started yourself. That is why attackers are motivated to carry out such attacks. Moreover, communication APIs like Twilio can’t deny payments to carrier partners. Due to certain agreements at the carrier level, you need to pay for all calls regardless of whether or not they are fraudulent. Such fraudsters get away effortlessly due to the lack of deterrents. Ultimately, you are solely responsible for protecting your API against such attacks.

You can reduce their odds of winning by rate-limiting requests hitting your API endpoints. Resultantly, the effort and cost needed for carrying out the attack increase. The attacker would need to cycle through a large pool of IP addresses to get around the rate limits. Hence, it makes your API a rather uninteresting target for them. 

While you might also need other advanced measures for fraud detection, strict rate limiting can go a long way in dissuading such attackers.

### Vulnerable Code
  
Consider the following snippet of code. A POST request with a phone number in the body to this API route triggers a verification phone call to that number.

What is wrong with it?

```
  app.post('/verify-phone number',(req, res) => {
	  const { phone } = req.body;	
    	  verify.call(phone)
	  //...
  })
```

Fraudsters can easily abuse this API endpoint for toll fraud due to the lack of rate limiting.

### Fix

Let’s fix that. Several npm packages can do this. But for this example, we will use `express-rate-limit`:

- Import it first. 
- Then define a custom rate limit for the API endpoint (`callLimiter`). 
- Set a window to 1 hr (60 * 60 * 1000 ms).
- Set max limits for that window as appropriate (10 attempts).
- Optionally, provide a friendly error message to the blocked user (`'Too many verification attempts, please try again after an hour'`)
- Finally, apply the `callLimiter` middleware we defined to the endpoint.

```
import rateLimit from 'express-rate-limit'

//...

const callLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 10, // Limit each IP to 10 phone calls per `window` (here, per hour)
	message:
		'Too many verification attempts, please try again after an hour',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
})
 
//...
app.post('/verify-phone-number', callLimiter, (req, res) => {
	const { phone } = req.body;	
  	verify.call(phone)
	//...
})
```

## Other Scenarios
  
### Denial Of Service
  
Attackers may overload the API with a large number of requests. Thus, the API becomes unavailable to your users if it exceeds the API’s capacity to process requests. This affects the availability of your APIs.
  
### Bruteforce And Credential Stuffing Attacks
  
Attackers often brute force user credentials with lists of common passwords. Similarly, attackers also abuse the lack of rate limiting to perform credential stuffing attacks. In the case of credential stuffing attacks, attackers attempt to log in to user accounts using credentials obtained from other breaches or stolen credentials.
 
### Data Scraping
  
Companies have policies that restrict data scraping from their application. That doesn’t guarantee protection against bad actors. Bad actors try to circumvent your measures by pulling information from your APIs at a very high rate.
  
### Fix
  
Use API rate limiting to protect against these kinds of attacks. Refer to the implementation in the previous scenario.
 
## Some Considerations
  
Before you implement rate limiting for your APIs, also consider these factors:
  
### Will It Impact User Experience?
  
Well, it depends. You might want to give the user more freedom when using certain API functionalities. On the other hand, you might want to be stricter for abuse-prone APIs. This requires planning. Plan and tailor your rate limits to your use case before applying them. Choose the limits based on how many requests you expect from the client applications under normal conditions.

### Is Rate Limit Sufficient Alone?
  
While application layer rate limiting is a very good practice, it might not be sufficient alone if your attackers are more sophisticated. In some cases, attackers can outpace you. They quickly rotate IPs from large numbers of IP addresses belonging to real users that are part of a botnet. In such cases, blocking bad reputation IP addresses from threat intelligence feeds could be a more efficient way.

Furthermore, depending on your use case you might need more advanced anti-fraud and geo-restrictions apart from API rate limiting.
  
### References
- [OWASP API Top 10.](https://owasp.org/www-project-api-security/)
- [Twilio has written a very comprehensive blog post on toll fraud.](https://www.twilio.com/learn/voice-and-video/toll-fraud)
