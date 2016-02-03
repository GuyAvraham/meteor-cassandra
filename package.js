Package.describe({
  name: 'guy1812:cassandra',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'wraps the asynchronous cassandra driver calls into meteor synchronous call style.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/GuyAvraham/meteor-cassandra.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "cassandra-driver": "3.0.0"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('underscore');

  api.addFiles('cassandra.js');

  api.export('Cassandra');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('guy1812:cassandra');
  api.addFiles('cassandra-tests.js');
});
