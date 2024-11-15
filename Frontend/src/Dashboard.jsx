import React, { useState, useEffect } from 'react';
import api from './api';
import TodoItem from './components/TodoItem';

const Dashboard = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const fetchTodos = async () => {
        const response = await api.get('/');
        setTodos(response.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleAddTodo = async () => {
        if (!newTodo) return;
        await api.post('/', { description: newTodo });
        setNewTodo('');
        fetchTodos();
    };

    const handleDelete = async (id) => {
        await api.delete(`/${id}`);
        fetchTodos();
    };

    const handleStatusChange = async (id) => {
        const todo = todos.find(t => t._id === id);
        const newStatus = todo.status === 'completed' ? 'ongoing' : 'completed';
        await api.put(`/${id}`, { status: newStatus });
        fetchTodos();
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Hello Guys ! Here is your ToDo</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTodo} style={{padding:'20px, 0', marginLeft:'170px', backgroundColor:'#6096BA', width:'80px', color:'white'}}>Add</button>
            {todos.map((todo) => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    onDelete={handleDelete}
                    onStatusChange={handleStatusChange}
                />
            ))}
        </div>
    );
};

export default Dashboard;
