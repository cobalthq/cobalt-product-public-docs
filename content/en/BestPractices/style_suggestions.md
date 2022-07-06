# Style Guidance for Pentester Writers

We're looking for product documentation, What you write here is not a pentest
report, but a guide primarily for developers who want to improve the security of
their products. 

When you write your article, remember your readers. They need your help learning
what to do (and what not to do) to secure their systems.

## Readability

Our readers are typically not English majors. Our concepts are already complex.
It helps our readers if you use the simplest possible language.

To promote readability, use the following checklist. 

- Write in plain English. Provide brief descriptions for technical terms that
  our audience of developers may not know.
- Stay positive. Avoid words like `don't` or `can't`. Readers frequently miss
  the `not` in a sentence.

- Keep your sentences relatively short. Our implementation of [Vale](#add-link)
discourages the use of sentences of more than 28 words.
- Use active voice and the present tense. Examples:
  - Run the _ps_ command.
  - Include at least a second factor for authentication.
  - Encrypt the system with a ECDSA key.

- Exception: it is OK to use passive voice for definitions. Examples:
  - An example for a domain name is example.com.

- In lists, use the serial comma (also known as the Oxford comma)

For more information, see the Google Developer Style Guide discussion on 
[voice and tone](https://developers.google.com/style/tone).
