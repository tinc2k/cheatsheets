// javascript


// console.log
console.log(object, otherObject, string);
console.log('I like %s but I do not like %s.', 'Skittles', 'pus');
console.warn();
console.table([{}, {}, {}]);
console.trace();
console.time();
console.timeEnd();

// return sync/async or throw from promise
getUserByName('nolan').then(user => {
  if (user.isLoggedOut()) {
    throw new Error('user logged out!'); // throwing a synchronous error
  }
  if (inMemoryCache[user.id]) {
    return inMemoryCache[user.id]; // returning a synchronous value
  }
  return getUserAccountById(user.id); // returning a promise
}).then(function (userAccount) {
  // do something w/ userAccount
}).catch(function (err) {
  // handle
});


// checking for errors in Mocha
it('should throw an error', function () {
  return doSomethingThatThrows().then(function () {
    throw new Error('I expected an error!');
  }, function (err) {
    should.exist(err);
  });
});


//executing promises sequentially
function myPromiseFactory() {
  return somethingThatCreatesAPromise();
}
function executeSequentially(promiseFactories) {
  var result = Promise.resolve();
  promiseFactories.forEach(function (promiseFactory) {
    result = result.then(promiseFactory);
  });
  return result;
}


// refs
// http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html?utm_source=javascriptweekly&utm_medium=email

// TODO

// https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript

// https://medium.com/javascript-scene/forget-the-click-bait-here-s-what-the-javascript-job-market-really-looks-like-in-2016-ddfe0d39b467#.939cvrfpo

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
// http://www.slideshare.net/rossbruniges/lwsg-writing-javascript-that-doesnt-suck
// https://medium.com/javascript-scene/must-see-javascript-dev-tools-that-put-other-dev-tools-to-shame-aca6d3e3d925#.jlw35nc2f
// http://developer.telerik.com/featured/leveling-up-your-javascript/?utm_source=javascriptweekly&utm_medium=email
// http://www.mariocasciaro.me/dependency-injection-in-node-js-and-other-architectural-patterns

// https://medium.com/vanilla-javascript/choosing-vanilla-javascript-in-2016-6f38a8302ee5#.4bqamj8e2
// https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3#.23ldbj1p6
// https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4#.ouk2wv9bt
// http://bjorn.tipling.com/all-this
// http://shichuan.github.io/javascript-patterns/
// https://plainjs.com/javascript/?utm_source=javascriptweekly&utm_medium=email

// https://github.com/getify/You-Dont-Know-JS/blob/master/README.md#you-dont-know-js-book-series

// http://www.breck-mckye.com/blog/2014/12/the-state-of-javascript-in-2015/
// https://andywalpole.me/#!/blog/142134/2015-the-end-the-monolithic-javascript-framework
// http://bitworking.org/news/2014/05/zero_framework_manifesto

// http://www.quirksmode.org/blog/archives/2015/01/the_problem_wit.html

// http://techblog.netflix.com/2014/11/nodejs-in-flames.html
// https://www.youtube.com/watch?v=XE692Clb5LU
// https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#.gw9m62llw
// https://labs.mlssoccer.com/javascript-at-scale-achieving-high-velocity-160c7d78af03#.nt7ngthug
