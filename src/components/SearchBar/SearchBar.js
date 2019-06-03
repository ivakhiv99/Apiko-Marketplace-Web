import React from 'react';
import T from 'prop-types';
import s from './SearchBar.module.scss';

export default function SearchBar(){
  return(
    <div className={s.container}>
      <input type="text"
             placeholder='Search products by name'
             name='name'
             className={`${s.name} ${s.input}`}

      />
      <input type="text"
             placeholder='Location'
             name='location'
             className={`${s.location} ${s.input}`}

      />
      <button type='button' className={s.searchBtn}>search</button>
    </div>
  );
}

SearchBar.propTypes = {};

 // UserInfo;
