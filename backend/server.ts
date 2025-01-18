import express, { Request, Response } from 'express';
// import cors from 'cors';
const cors = require('cors');
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Alternatively, configure CORS for specific origins
const corsOptions = {
	origin: 'http://localhost:5173', // Replace with your frontend URL
	methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
	allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
};

app.use(cors());

// Read data from the JSON file
// const dataFilePath = path.join(__dirname, 'data/data.json');

// Read data from the JSON file
// const readData = () => {
// 	const data = fs.readFileSync(dataFilePath, 'utf-8');
// 	return JSON.parse(data);
// };

// Write data to the JSON file
// const writeData = (data: any) => {
// 	fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
// };
//READ DATA End

// Routes
app.get('/api', (req: Request, res: Response) => {
	// const data = readData();
	// console.log(data);
	//	res.json(data.data);
	res.json({ message: 'Hello from the backend!' });
});

// Start Server
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
