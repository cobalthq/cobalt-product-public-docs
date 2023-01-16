# Style Guidance for Pentester Writers

We're looking for product documentation, What you write here is not a pentest
report, but a guide primarily for developers who want to improve the security of
their products. 

When you write your article, remember your readers. They need your help learning
what to do (and what not to do) to secure their systems.

## Readability

Our readers are typically not English majors. Our concepts are already complex.
It helps our readers if you use the simplest possible language.

While you don't need to define common technical concepts like _domain name_ and
_IP address_, we recommend that you use links to help define more complex terms
like [Server Side Request Forgery](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/).

To promote readability, use the following checklist:

- Write in plain English. Provide brief descriptions for technical terms that
  our audience of developers may not know.
- Stay positive. Avoid words like `don't` or `can't`. Readers frequently miss
  the `not` in a sentence.
- Consider using our implementation of [Vale](https://github.com/cobalthq/cobalt-product-public-docs/blob/main/GrammarLinter.md). When
  integrated with your IDE, it highlights writing styles that we want you to
follow.

- Keep your sentences relatively short. Our implementation of
  [Vale](https://github.com/cobalthq/cobalt-product-public-docs/blob/main/GrammarLinter.md) discourages the use of sentences of more than 28 words.
- Use active voice and the present tense. Examples:
  - Run the _ps_ command.
  - Include a second factor for authentication.
  - Encrypt the system with a ECDSA key.

- Exception: it is OK to use passive voice for definitions. Example:
  - A [Pentest Team Member](https://developer.cobalt.io/glossary/#pentest-team-member) is a customer (organization) representative during a specific pentest.

- In lists, use the serial comma (also known as the Oxford comma)

For more information, see the Google Developer Style Guide discussion on 
[voice and tone](https://developers.google.com/style/tone).
