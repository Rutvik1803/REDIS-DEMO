const app = require('express')();
const client = require('./client');

app.get('/todo', async (req, res) => {
  try {
    const cachedTodos = await client.get('todos');

    if (cachedTodos) return res.json(JSON.parse(cachedTodos));

    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    await client.set('todos', JSON.stringify(data), 'EX', 10);

    return res.json(data);
  } catch (error) {
    console.error('Error fetching todos:', error);
    return res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
