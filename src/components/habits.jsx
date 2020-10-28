import React from 'react'
import Habit from './habit.jsx'
import HabitForm from './habitForm.jsx';

export default function Habits(props) {

    const handleIncrement = (habit) => {
        props.onIncrement(habit);
    }

    const handleDecrement = (habit) => {
        props.onDecrement(habit);
    }

    const handleDelete = (habit) => {
        props.onDelete(habit);
    }

    const handleAdd = name => {
        props.onAdd(name);
    }
    return (
        <>
            <HabitForm
                onAdd={handleAdd}
            />
            <ul>
                {props.habits.map((item) => (
                    <Habit
                        key={item.id}
                        habit={item}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </>
    )
}
