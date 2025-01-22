const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// File path for storing todos
const FILE_PATH = path.join(__dirname, 'data/todos.json');

// Initialize file if not exists
if (!fs.existsSync(FILE_PATH)) {
	fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

// Routes
app.get('/todos', (req, res) => {
	const todos = JSON.parse(fs.readFileSync(FILE_PATH));
	res.json(todos);
});

app.post('/todos', (req, res) => {
	const todos = JSON.parse(fs.readFileSync(FILE_PATH));
	const newTodo = { id: Date.now(), text: req.body.text, completed: false };
	todos.push(newTodo);
	fs.writeFileSync(FILE_PATH, JSON.stringify(todos));
	res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
	const todos = JSON.parse(fs.readFileSync(FILE_PATH));
	const updatedTodos = todos.map((todo) =>
		todo.id === Number(req.params.id) ? { ...todo, ...req.body } : todo
	);
	fs.writeFileSync(FILE_PATH, JSON.stringify(updatedTodos));
	res.json(updatedTodos.find((todo) => todo.id === Number(req.params.id)));
});

app.delete('/todos/:id', (req, res) => {
	const todos = JSON.parse(fs.readFileSync(FILE_PATH));
	const filteredTodos = todos.filter(
		(todo) => todo.id !== Number(req.params.id)
	);
	fs.writeFileSync(FILE_PATH, JSON.stringify(filteredTodos));
	res.status(204).send();
});

// Start server
app.listen(PORT, () =>
	console.log(`Backend running on http://localhost:${PORT}`)
);
