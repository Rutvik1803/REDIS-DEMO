const client = require('./client');

async function init() {
  await client.set('msg:1', 'Hello, Rana!', 'EX', 10);
  const result = await client.get('msg:1');
  console.log('=> Result from Redis: ', result);
}

init();
