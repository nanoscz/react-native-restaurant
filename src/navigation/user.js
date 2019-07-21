import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import HomeScreen from '../components/tabs/home'
import SearchScreen from '../components/tabs/search'
import MyAccountScreen from '../components/tabs/my-account'
import TopFiveScreen from '../components/tabs/top-five'

import Register from '../components/login/register'

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