import React from 'react';
import T from 'prop-types';
import s from './FormTextArea.module.scss';
import { FormContext } from '../FormContainer/FormContainer';

export default function FormTextArea({ name, label, ...props }) {
  return (
    <FormContext.Consumer>
      {({ formState, onChange }) => (
        <label className={s.label} htmlFor={name}>
          {label}
          <textarea
            className={s.textarea}
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

FormTextArea.propTypes = {};
