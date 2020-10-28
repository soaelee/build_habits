import React, { useState } from 'react';
import './app.css';
import Habits from './components/habits';
import '@fortawesome/fontawesome-free/js/all.js';
import Navbar from './components/navbar';

function App() {

  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "running",
      count: 0
    },
    {
      id: 2,
      name: "coding",
      count: 0
    },
    {
      id: 3,
      name: "drinking water",
      count: 0
    },
    {
      id: 4,
      name: "reading",
      count: 0
    }
  ]);

  const handleIncrement = (habit) => {
    const array = [...habits];
    const index = habits.indexOf(habit);
    array[index].count++;
    setHabits(array);
  }

  const handleDecrement = (habit) => {
    const array = [...habits];
    const index = habits.indexOf(habit);
    const count = array[index].count - 1;
    array[index].count = count < 0 ? 0 : count;
    setHabits(array);
  }

  const handleDelete = (habit) => {
    const array = habits.filter(item => item.id !== habit.id);
    console.log(array);
    setHabits(array);
  }

  const handleAdd = name => {
    const array = [...habits, { id: Date.now(), name, count: 0 }];
    setHabits(array);
  }
  return (
    <div className="container">
      <Navbar total={habits.filter(habit => habit.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  )
}

export default App;
