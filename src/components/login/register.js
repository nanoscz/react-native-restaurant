import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {RegisterStruct, RegisterOptions} from '../forms/register'
import { Button } from 'react-native-elements'
import t from 'tcomb-form-native';
const Form = t.form.Form;


export default class Register extends React.Component {
  constructor() {
    super();
    this.state ={
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
    if (value) {
      if (value.password === value.passwordConfirmation) {
        this.setState({textError: ''})
      } else {
        this.setState({textError: 'The password is not the same.'})
      }
    } else {
      this.setState({textError: 'Form is not valid.'})
    }
  }

  render() {
    const {registerStruct, registerOptions, formData, textError } = this.state
    return (
      <View style={styles.container}>
        <Form
          ref="formRegister"
          type={registerStruct}
          value={formData}
          options={registerOptions}
          onChange={value => this.onChange(value)}
          />
          <Button buttonStyle={styles.btnRegister} title = 'Register' onPress={this.onRegister}/>
          <Text style={styles.textError}>{textError}</Text>
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
    paddingRight: 10
  },
  btnRegister: {
    marginLeft: 10,
    marginRight: 10
  },
  textError:{
    color: 'red',
    padding: 30,
    textAlign: 'center'
  }
})
