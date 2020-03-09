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
      <HomeStackNav.Screen name = "Find: 2/7" component = { TourScreens.HighlightsTourShortNav2 } />
      <HomeStackNav.Screen name = "Find: 3/7" component = { TourScreens.HighlightsTourShortNav3 } />
      <HomeStackNav.Screen name = "Find: 4/7" component = { TourScreens.HighlightsTourShortNav4 } />
      <HomeStackNav.Screen name = "Find: 5/7" component = { TourScreens.HighlightsTourShortNav5 } />
      <HomeStackNav.Screen name = "Find: 6/7" component = { TourScreens.HighlightsTourShortNav6 } />
      <HomeStackNav.Screen name = "Find: 7/7" component = { TourScreens.HighlightsTourShortNav7 } />

      <HomeStackNav.Screen name = "Map: 1/7" component = { TourScreens.HighlightsTourShortMap1 } />
      <HomeStackNav.Screen name = "Map: 2/7" component = { TourScreens.HighlightsTourShortMap2 } />
      <HomeStackNav.Screen name = "Map: 3/7" component = { TourScreens.HighlightsTourShortMap3 } />
      <HomeStackNav.Screen name = "Map: 4/7" component = { TourScreens.HighlightsTourShortMap4 } />
      <HomeStackNav.Screen name = "Map: 5/7" component = { TourScreens.HighlightsTourShortMap5 } />
      <HomeStackNav.Screen name = "Map: 6/7" component = { TourScreens.HighlightsTourShortMap6 } />
      <HomeStackNav.Screen name = "Map: 7/7" component = { TourScreens.HighlightsTourShortMap7 } />

      <HomeStackNav.Screen name = "Stop: 1/7" component = { TourScreens.HighlightsTourShortStop1 } />
      <HomeStackNav.Screen name = "Stop: 2/7" component = { TourScreens.HighlightsTourShortStop2 } />
      <HomeStackNav.Screen name = "Stop: 3/7" component = { TourScreens.HighlightsTourShortStop3 } />
      <HomeStackNav.Screen name = "Stop: 4/7" component = { TourScreens.HighlightsTourShortStop4 } />
      <HomeStackNav.Screen name = "Stop: 5/7" component = { TourScreens.HighlightsTourShortStop5 } />
      <HomeStackNav.Screen name = "Stop: 6/7" component = { TourScreens.HighlightsTourShortStop6 } />
      <HomeStackNav.Screen name = "Stop: 7/7" component = { TourScreens.HighlightsTourShortStop7 } />
    </HomeStackNav.Navigator>
  )
}

export default HomeStack
