import React from 'react';

const AddBudget = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='number'
        placeholder='add more money'
        onChange={props.handleAddClick}
      />
      <input type='submit' />
    </form>
  );
};

export default AddBudget;
