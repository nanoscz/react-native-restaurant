import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button }  from 'react-native-elements'
export default class MyAccount extends React.Component {

  goToRegister = (namePage) => {
    this.props.navigation.navigate(namePage)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>MyAccount</Text>
        <Button title='Login' onPress={()=>this.goToRegister('Login')}/>
        <Button title='Register' onPress={()=>this.goToRegister('Register')}/>
      </View>
    );
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
