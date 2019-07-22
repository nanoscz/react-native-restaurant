import React from "react";
import { StyleSheet, View } from 'react-native';
import Spinner from './src/components/spinner/spinner';
import t from 'tcomb-form-native'
const Form = t.form.Form;
import TabsNavigator from './src/components/tabs/tabs'

import firebaseConfig from './src/utils/firebase/config'
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);
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
        <TabsNavigator/>
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
