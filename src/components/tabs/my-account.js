import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
/** Firebase */
import * as  firebase from 'firebase'

export default class MyAccount extends React.Component {

  constructor() {
    super();

    this.state = {
      login: false
    }
  }

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(user => {
      console.log("user", user)
      if (!user) {
        this.setState({ login: false })
      } else {
        this.setState({ login: true })
      }
    })
  }

  goToRegister = (namePage) => {
    this.props.navigation.navigate(namePage)
  }

  onLogout = () => {
    try {
      firebase.auth().signOut();
      console.log("logout")
    } catch (error) {
      this.handlerError(error)
    }
  }

  handlerError(error) {
    console.log(error)
  }

  render() {
    if (this.state.login) {
      return (
        <View>
          <Text> logeado..</Text>
          <Button title='Logout' onPress={() => this.onLogout()} />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>MyAccount</Text>
          <Button title='Login' onPress={() => this.goToRegister('Login')} />
          <Button title='Register' onPress={() => this.goToRegister('Register')} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
