import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Slice
const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		setTodos: (state, action) => action.payload,
		addTodo: (state, action) => void state.push(action.payload),
		updateTodo: (state, action) =>
			state.map((todo) =>
				todo.id === action.payload.id ? action.payload : todo
			),
		deleteTodo: (state, action) =>
			state.filter((todo) => todo.id !== action.payload)
	}
});

export const { setTodos, addTodo, updateTodo, deleteTodo } = todoSlice.actions;

// Async actions
export const fetchTodos = () => async (dispatch) => {
	const response = await axios.get('http://localhost:5000/todos');
	dispatch(setTodos(response.data));
};

export const createTodo = (text) => async (dispatch) => {
	const response = await axios.post('http://localhost:5000/todos', { text });
	dispatch(addTodo(response.data));
};

export const editTodo = (todo) => async (dispatch) => {
	const response = await axios.put(
		`http://localhost:5000/todos/${todo.id}`,
		todo
	);
	dispatch(updateTodo(response.data));
};

export const removeTodo = (id) => async (dispatch) => {
	await axios.delete(`http://localhost:5000/todos/${id}`);
	dispatch(deleteTodo(id));
};

// Store
const store = configureStore({
	reducer: {
		todos: todoSlice.reducer
	}
});

export default store;
