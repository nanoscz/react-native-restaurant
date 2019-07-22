import React from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import Input from './template/input';
import { Email, Password} from '../../utils/validation/validation'

export const LoginStruct = t.struct({
  email: Email,
  password: Password
});

export const LoginOptions = {
  fields: {
    email: {
      template: Input,
      config: {
        placeholder: 'Email',
        secureTextEntry: false,
        iconType: 'font-awesome',
        iconName: 'at'
      }
    },
    password: {
      template: Input,
      config: {
        placeholder: 'Password',
        password: true,
        secureTextEntry: true,
        iconType: 'font-awesome',
        iconName: 'lock'
      }
    }
  }
};
