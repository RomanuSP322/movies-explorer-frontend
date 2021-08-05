import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <h2 className='filter-checkbox__title'>Короткометражки</h2>
      <input
        className='filter-checkbox__input'
        type='checkbox'
        name='short-film'
        id='checkbox'
      />
      <label htmlFor='checkbox' className='filter-checkbox__label'></label>
    </div>
  );
}

export default FilterCheckbox;
