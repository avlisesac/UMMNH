import React from 'react'
import moment from 'moment'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../views/HomeScreen'

import colors from '../modules/Colors'

const HomeStackNav = createStackNavigator()

const HomeStack = () => {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen
        name = "Home"
        component = {HomeScreen}
        options = {{
          headerStyle: {
            backgroundColor: colors.ummnhLightBlue
          },
        }}
      />
    </HomeStackNav.Navigator>
  )
}

export default HomeStack
