import React from 'react'
import moment from 'moment'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../views/HomeScreen'
import TourPreviewScreen from '../views/TourPreviewScreen'

import colors from '../modules/Colors'
import TourScreens from '../modules/TourScreens'

const HomeStackNav = createStackNavigator()

const HomeStack = () => {
  return (
    <HomeStackNav.Navigator
      screenOptions = {{
        headerStyle: {
          backgroundColor: colors.ummnhLightBlue,
        },
        headerTintColor: colors.ummnhDarkBlue,
        headerBackTitle: 'Back'
      }}
    >
      <HomeStackNav.Screen
        name = "Home"
        component = {HomeScreen}
        options = {{
          headerStyle: {
            backgroundColor: colors.ummnhLightBlue
          },
        }}
      />
      <HomeStackNav.Screen
        name = "Highlights Tour"
        component = { TourPreviewScreen }
      />

      <HomeStackNav.Screen name = "Find: 1/7" component = { TourScreens.HighlightsTourShortNav1 } />

      <HomeStackNav.Screen name = "Map: 1/7" component = { TourScreens.HighlightsTourShortMap1 } />

      <HomeStackNav.Screen name = "Stop: 1/7" component = { TourScreens.HighlightsTourShortStop1 } />
    </HomeStackNav.Navigator>
  )
}

export default HomeStack
