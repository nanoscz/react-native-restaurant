import React from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import Input from './template/input';

export const LoginStruct = t.struct({
  user: t.String,
  password: t.String
});

export const loginOptions = {
  fields: {
      user: {
        template: Input,
        config: {
        placeholder: 'Username',
        secureTextEntry: false,
        iconType: 'font-awesome',
        iconName: 'user'
      }
    },
    password: {
      template: Input,
      config: {
        placeholder: 'Username',
        password: true,
        secureTextEntry: true,
        iconType: 'font-awesome',
        iconName: 'lock'
      }
    }
  }
};
