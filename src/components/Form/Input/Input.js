import React from 'react';
import T from 'prop-types';
import s from './Input.module.scss';


export default function Input({ label, onChange, fields, name, ...props }) {
  // console.log(label);
  return (
    <label className={s.label} htmlFor={name}>
      {label}
      <input
        className={s.input}
        id={name}
        value={fields[name]}
        onChange={(e) => onChange(name, e.target.value)}
        {...props}
      />
    </label>
  );

}

Input.propTypes = {};
