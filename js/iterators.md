# Interators and Generators

**Interator** is an object that implements [Iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol) by implementing `next()` which returns an `{ value: value, done: true|false }` object.

- iterator object can be iterated explicitly by repeatedly calling next()
- if `done=true` value is optional, if value is provided then `done=false` implicly
- after terminating value has been yielded additional `next()` calls simply continue to return `{ done: true}`
- not possible to know reflectively whether a particular object is an iterator


**Generators**

- generator functions are written using `function*` syntax
- when a value is consumed by calling the generator's `next()` method, the Generator function executes until it encounters the `yield` keyword
- when called initially, generator functions do not execute code but return a type of iterator called a Generator
- 


**Iterables**

## References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*