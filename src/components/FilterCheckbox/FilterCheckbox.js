import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onClickBox, filterOn }) {
  const checkBoxClassName = `filter-checkbox__label ${
    filterOn ? `filter-checkbox__label_active` : null
  }`;

  return (
    <div className='filter-checkbox'>
      <h2 className='filter-checkbox__title'>Короткометражки</h2>
      <input
        className='filter-checkbox__input'
        type='checkbox'
        name='short-film'
        id='checkbox'
      />
      <label
        htmlFor='checkbox'
        className={checkBoxClassName}
        onClick={onClickBox}
      ></label>
    </div>
  );
}

export default FilterCheckbox;
