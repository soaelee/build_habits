import React from 'react';
import './habit.css';

export default function Habit(props) {

    const handleIncrement = () => {
        props.onIncrement(props.habit);
    }

    const handleDecrement = () => {
        props.onDecrement(props.habit);
    }

    const handleDelete = () => {
        props.onDelete(props.habit);
    }

    return (
        <li>
            <span className="habit-name">{props.habit.name}</span>
            <span className="habit-count">{props.habit.count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <button
                className="habit-button habit-decrease"
                onClick={handleDecrement}
            >
                <i className="fas fa-minus-square"></i>
            </button>
            <button
                className="habit-button habit-delete"
                onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    )
}
