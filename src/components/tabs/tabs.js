import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import HomeScreen from './home'
import SearchScreen from './search'
import MyAccountScreen from './my-account'
import TopFiveScreen from './top-five'

import Login from '../login/login'
import Register from '../register/register'

const homeScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home'
    })
  }
})

const topFiveScreenStack = createStackNavigator({
  TopFive: {
    screen: TopFiveScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Top Five'
    })
  }
})

const searchScreenStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Search'
    })
  }
})

const myAccountScreenStack = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'My Account'
    })
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login'
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: 'Register'
    })
  }
})

const RootStack = createBottomTabNavigator({
  Home: {
    screen: homeScreenStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='compass-outline'
          type='material-community'
          size={22}
          color={tintColor} />
      )
    })
  },
  TopFive: {
    screen: topFiveScreenStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Top Five',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='star-outline'
          type='material-community'
          size={22}
          color={tintColor} />
      )
    })
  },
  Search: {
    screen: searchScreenStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='magnify'
          type='material-community'
          size={22}
          color={tintColor} />
      )
    })
  },
  MyAccount: {
    screen: myAccountScreenStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'My Account',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='face-profile'
          type='material-community'
          size={22}
          color={tintColor} />
      )
    })
  }
}, {
    initialRouteName: 'MyAccount',
    order: ['Home','Search','TopFive','MyAccount'],
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  })

export default createAppContainer(RootStack)
