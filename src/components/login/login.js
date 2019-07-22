import React from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'
import { Image, Button } from 'react-native-elements';
import Toast from 'react-native-easy-toast'
import t from 'tcomb-form-native';
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from '../forms/login'
/** Firebase */
import * as firebase from 'firebase'

let messageLoginSuccess = 'Successfully'
let messageLoginError = 'Email or password is incorrect'
let messageFormNotValid = 'Form is not valid.'
export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      formData: {
        username: '',
        password: ''
      },
      formError: ''
    }
  }

  onChange = (formData) => {
    this.setState({
      formData
    })
  }

  onLogin = () => {
    console.log(this.state.formData)
    const value = this.refs.formLogin.getValue();
    if (!value) {
      this.setState({formError: messageFormNotValid})
    } else {
      console.log('correrectyp')
      try {
        this.setState({ formError: '' })
        firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(()=>{
          this.refs.toast.show(messageLoginSuccess, 200, () => {
            this.props.navigation.goBack()
          });
        })
        .catch(error=>{
          this.refs.toast.show(messageLoginError, 1500);
        })
      } catch (error) {
        this.handlerError(error)
      }
    }
  }

  handlerError(error) {
    console.log(error.message | 'Error')
  }

  render() {
    const { formData, formError} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            source={require('../../../assets/icon.png')}
            style={styles.logo}
            PlaceholderContent={<ActivityIndicator />}
            resizeMode='contain'
          />
        </View>
        <Form
          ref="formLogin"
          type={LoginStruct}
          value={formData}
          options={LoginOptions}
          onChange={value => this.onChange(value)}
        />
        <Button buttonStyle={styles.btnLogin} title='Login' onPress={this.onLogin} />
        <Text style={styles.formError}>{formError}</Text>
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
  containerLogo: {
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 300,
    height: 150,
  },
  btnLogin: {
    marginLeft: 10,
    marginRight: 10
  },
  formError: {
    color: 'red',
    padding: 30,
    textAlign: 'center'
  },
})