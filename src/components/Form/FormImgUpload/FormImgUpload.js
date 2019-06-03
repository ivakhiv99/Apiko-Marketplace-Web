import React from 'react';
import T from 'prop-types';
import s from './FormImgUpload.module.scss';
import { FormContext } from '../FormContainer/FormContainer';

export default function FormImgUpload({ name, label, ...props }) {
  return (
    <FormContext.Consumer>
      {({ formState, onChange }) => (
        <label className={s.label} htmlFor={name}>
          {label}
          <input
            type='file'
            accept='image/*'
            multiple
            className={s.input}
            id={name}
            value={formState[name]}
            onChange={(e) => onChange(name, e.target.value)}
            {...props}
          />
        </label>
      )}
    </FormContext.Consumer>
  );

}

FormImgUpload.propTypes = {};
