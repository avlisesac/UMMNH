import React from 'react'
import moment from 'moment'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../views/HomeScreen'
import TourPreviewScreen from '../views/TourPreviewScreen'
import AboutScreen from '../views/AboutScreen'
import MapScreen from '../views/MapScreen'
import GalleryScreen from '../views/GalleryScreen'
import EndOfTourScreen from '../views/EndOfTourScreen'

import colors from '../modules/Colors'


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
        component = { HomeScreen }
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

      <HomeStackNav.Screen
        name = "About"
        component = { AboutScreen }
      />

      <HomeStackNav.Screen
        name = "Museum Map"
        component = { MapScreen }
      />

      <HomeStackNav.Screen
        name = "Image Gallery"
        component = { GalleryScreen }
      />

      <HomeStackNav.Screen
        name = "End of Tour"
        component = { EndOfTourScreen }
      />


    </HomeStackNav.Navigator>
  )
}

export default HomeStack
