const { default: Redis } = require('ioredis');

const client = new Redis();

module.exports = client;
