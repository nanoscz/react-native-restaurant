import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { RegisterStruct, RegisterOptions } from '../forms/register'
import { Button } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

import t from 'tcomb-form-native';
const Form = t.form.Form;
import * as firebase from 'firebase';

let messagePasswordError = 'The password is not the same.'
let messageFormNotValid = 'Form is not valid.'
let messageFormCreatedSuccess = 'Successfully created user.'
let messageRegisterError = 'The email is not valid'
export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions,
      formData: {
        name: '',
        email: '',
        password: ''
      },
      textError: ''
    }
  }
  onChange = (formData) => {
    this.setState({
      formData
    })
  }
  onRegister = () => {
    const value = this.refs.formRegister.getValue();
    console.log(this.state.formData)
    if (value) {
      if (value.password === value.passwordConfirmation) {
        this.setState({ textError: '' })
        try {
          firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
          .then((resolve) => {
            this.refs.toast.show(messageFormCreatedSuccess, 2000, () => {
             this.props.navigation.goBack()
            });
          })
          .catch(error => {
            this.refs.toast.show(messageRegisterError, 1500);
          })
        } catch (error) {
          this.handlerError(error)
        }
      } else {
        this.setState({textError: messagePasswordError})
      }
    } else {
      this.setState({textError: messageFormNotValid})
    }
  }

  handlerError(error) {
    console.log(error.message | 'Error')
  }

  render() {
    const { registerStruct, registerOptions, formData, textError } = this.state
    return (
      <View style={styles.container}>
        <Form
          ref="formRegister"
          type={registerStruct}
          value={formData}
          options={registerOptions}
          onChange={value => this.onChange(value)}
        />
        <Button buttonStyle={styles.btnRegister} title='Register' onPress={this.onRegister} />
        <Text style={styles.textError}>{textError}</Text>
        <Toast
          ref="toast"
          style={styles.toast}
          position='center'
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: '#fff' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 25
  },
  btnRegister: {
    marginLeft: 10,
    marginRight: 10
  },
  textError: {
    color: 'red',
    padding: 30,
    textAlign: 'center'
  },
  toast: {
  }
})
