import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// File path for storing todos
const FILE_PATH = path.join(__dirname, 'data/todos.json');

// Initialize the todos.json file if it doesn't exist
if (!fs.existsSync(FILE_PATH)) {
	fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

// Routes
app.get('/todos', (req: Request, res: Response) => {
	debugger;
	const todos = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
	res.json(todos);
});

app.post('/todos', (req: Request, res: Response) => {
	const todos = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
	const newTodo = { id: Date.now(), text: req.body.text, completed: false };
	todos.push(newTodo);
	fs.writeFileSync(FILE_PATH, JSON.stringify(todos));
	res.status(201).json(newTodo);
});

app.put('/todos/:id', (req: Request, res: Response) => {
	const todos = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
	const updatedTodos = todos.map((todo: any) =>
		todo.id === Number(req.params.id) ? { ...todo, ...req.body } : todo
	);
	fs.writeFileSync(FILE_PATH, JSON.stringify(updatedTodos));
	res.json(updatedTodos.find((todo: any) => todo.id === Number(req.params.id)));
});

app.delete('/todos/:id', (req: Request, res: Response) => {
	const todos = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
	const filteredTodos = todos.filter(
		(todo: any) => todo.id !== Number(req.params.id)
	);
	fs.writeFileSync(FILE_PATH, JSON.stringify(filteredTodos));
	res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
