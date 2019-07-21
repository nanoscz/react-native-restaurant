import React, { Component } from 'react';
import t from 'tcomb-form-native';
import { Email, Password} from '../../utils/validation/validation'
import inputTemplate from './template/input'

export const RegisterStruct = t.struct({
  name: t.String,
  email: Email,
  password: Password,
  passwordConfirmation: Password
})

export const RegisterOptions = {
  fields: {
    name: {
      template: inputTemplate,
      config: {
        placeholder: 'Name',
        iconName: 'account-outline',
        iconType: 'material-community',
      }
    },
    email: {
      template: inputTemplate,
      config: {
        placeholder: 'Email',
        iconName: 'at',
        iconType: 'material-community',
      }
    },
    password: {
      template: inputTemplate,
      config: {
        placeholder: 'Password',
        iconName: 'lock-outline',
        iconType: 'material-community',
        password: true,
        secureTextEntry: true,
      }
    },
    passwordConfirmation: {
      template: inputTemplate,
      config: {
        placeholder: 'Repeat Password',
        iconName: 'lock-reset',
        iconType: 'material-community',
        password: true,
        secureTextEntry: true,
      }
    }
  }
}
