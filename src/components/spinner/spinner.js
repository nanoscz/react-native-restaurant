import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

export default class Spinner extends React.Component {
  render(){
    return(
      <View style={style.spinner}>
        <ActivityIndicator color='#fff' size='large'/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  spinner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007b6d'
  }
})
