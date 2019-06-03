import React from 'react';
import { withRouter } from 'react-router-dom';
import T from 'prop-types';
import s from './Register.module.scss';
// import { routes } from '../../scenes/Router';
import {compose, withHandlers, withStateHandlers} from 'recompose';
import Register from './RegisterView';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';
import { routes } from '../Router';

const mapStateToProps = state =>{
  return {
    isLoading: state.auth.register.isLoading
  }
};

const mapDispathcToProps ={
  register: authOperations.register,
};


const enhancer = compose(
  withRouter,
  connect(mapStateToProps, mapDispathcToProps),
  withStateHandlers(
    {
      fields:{
        email: '',
        fullName:'',
        password: '',
        passwordAgain: '',
      }
    },
    {
      handleFieldChange:(state) => (fieldName, value) =>({
        ...state,
        fields: {
          ...state.fields,
          [fieldName]:value,
        },
      }),
    }
  ),
  withHandlers({
    handleLogin: props => async () =>{
      await props.register(props.fields);
      props.history.push(routes.home);
    }
  }),
);

export default enhancer(Register);
