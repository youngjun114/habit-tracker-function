import Habit from './habit';
import HabitAddForm from './habitAddForm';
import React from 'react';

export default function Habits({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) {
  return (
    <>
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => {
          return (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
      <button className='reset-button' onClick={onReset}>
        Reset All
      </button>
    </>
  );
}
