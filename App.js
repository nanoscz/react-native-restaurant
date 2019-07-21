import React from "react";
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { LoginStruct, loginOptions } from './src/components/forms/login';
import Spinner from './src/components/spinner/spinner'
import t from 'tcomb-form-native';
const Form = t.form.Form;
import UserNavigator from './src/navigation/user'

export default class App extends React.Component {
  constructor(){
    super();
  }
  componentDidMount() {
    console.log("init")
    setTimeout(()=>{
      this.setState({loaded: true})
    }, 2000)
  }

  render(){
    return (
      <View style={styles.container}>
        <UserNavigator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textError: {
    color: 'red',
    textAlign: 'center'
  }
});
