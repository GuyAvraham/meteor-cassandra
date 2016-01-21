// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  let cassandraDriver = Npm.require('cassandra-driver');
  test.isNotUndefined(cassandraDriver, "cassandra npm driver not found");
});
