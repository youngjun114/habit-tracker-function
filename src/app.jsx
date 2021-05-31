import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import React, { useState } from 'react';

export default function App() {
  const data = [
    {
      id: 1,
      name: 'Reading',
      count: 0,
    },
    {
      id: 2,
      name: 'Running',
      count: 0,
    },
    {
      id: 3,
      name: 'Coding',
      count: 0,
    },
  ];

  const [habits, setHabits] = useState(data);

  const handleIncrement = (habit) => {
    const newHabits = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(newHabits);
  };

  const handleDecrement = (habit) => {
    const newHabits = habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    setHabits(newHabits);
  };

  const handleDelete = (habit) => {
    const newHabits = habits.filter((item) => item.id !== habit.id);
    setHabits(newHabits);
  };

  const handleAdd = (name) => {
    const newHabits = [
      ...habits,
      {
        id: Date.now(),
        name: name,
        count: 0,
      },
    ];

    setHabits(newHabits);
  };

  const handleReset = () => {
    const newHabits = habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    setHabits(newHabits);
  };

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
}
