import React from 'react';

export default function HabitAddForm({ onAdd }) {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='add-input'
        placeholder='Add your habit'
      />
      <button className='add-button'>Add</button>
    </form>
  );
}
