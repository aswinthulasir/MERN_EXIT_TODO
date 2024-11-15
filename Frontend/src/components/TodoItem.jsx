import React from 'react';

const TodoItem = ({ todo, onDelete, onStatusChange }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
            <input
                type="checkbox"
                checked={todo.status === 'completed'}
                onChange={() => onStatusChange(todo._id)}
            />
            <span style={{
                textDecoration: todo.status === 'completed' ? 'line-through' : 'none',
                marginLeft: '10px'
            }}>
                {todo.description}
            </span>
            <button onClick={() => onDelete(todo._id)} style={{ marginLeft: 'auto' , backgroundColor: '#6096BA', color: 'white'}}>Delete</button>
        </div>
    );
};

export default TodoItem;
