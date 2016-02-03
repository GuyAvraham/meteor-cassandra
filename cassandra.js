let cassandraDriver = Npm.require('cassandra-driver');

class CassandraClient {
  constructor(options) {
    this.client = new cassandraDriver.Client(options);
    this._execSync = Meteor.wrapAsync(this.client.execute, this.client);
    this._batchSync = Meteor.wrapAsync(this.client.batch, this.client);
    this._connectSync = Meteor.wrapAsync(this.client.connect, this.client);
  }

  execute(...args) {
    if (args.length > 0 && _.isFunction(args[args.length - 1])) {
      return this.client.execute(...args);
    }
    else {
      return this._execSync(...args);
    }
  }

  batch(...args) {
    if (args.length > 0 && _.isFunction(args[args.length - 1])) {
      return this.client.batch(...args);
    }
    else {
      return this._batchSync(...args);
    }
  }

  connect(...args) {
    if (args.length > 0 && _.isFunction(args[args.length - 1])) {
      return this.client.connect(...args);
    }
    else {
      try{
        return this._connectSync(...args);
      } catch (e){
        console.error('Error connecting to',e);
      }
    }
  }
}

Cassandra = {
  Client: CassandraClient
};
