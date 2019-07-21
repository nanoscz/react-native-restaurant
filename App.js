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
    // const { formValue, textFormError, loaded } = this.state;
    // if (!loaded) {
    //   console.log('loading...');
    //   return <Spinner/>
    // } else {
    //   return (
    //     <View style={styles.container}>
    //       <Form
    //         ref="formLogin"
    //         type={LoginStruct}
    //         options={loginOptions}
    //         value={formValue}
    //         onChange={v => this.onChange(v)}
    //       />
    //       <Button title='Login' onPress={this.sendForm.bind(this)} />
    //       <Text style={styles.textError}>{textFormError}</Text>
    //     </View>
    //   );
    // }
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
