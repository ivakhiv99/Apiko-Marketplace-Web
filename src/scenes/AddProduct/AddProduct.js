import React from 'react';
import T from 'prop-types';
import s from './AddProduct.module.scss';
import {FormContainer, FormInput, FormTextArea, FormImgUpload} from '../../components/Form';

export default function AddProduct() {

  const initialValue={
    title:'',
    location: '',
    description:'',
    photos:[],
    price:'',
  };

  console.log('photos : ',initialValue.photos);

  return (
    <div className={s.container}>
      <h2 className={s.formTitle}>Add product</h2>
      <FormContainer initialValue={initialValue}>
        <FormInput
          name='title'
          lable='TITLE'
          placeholder='For example: Iron Man suit'
        />
        <FormInput
          name='location'
          lable='LOCATION'
          placeholder='For example: Los Angeles, CA'
        />
        <FormTextArea
          name='description'
          lable='DESCRIPTION'
          placeholder='For example: Iron Man suit'
        />
        <FormImgUpload
          name='photos'
          lable='PHOTOS'
        />
        <FormInput
          name='price'
          lable='PRICE'
          placeholder='For example: 399$'
        />
      </FormContainer>
    </div>
  );
}

AddProduct.propTypes = {};
