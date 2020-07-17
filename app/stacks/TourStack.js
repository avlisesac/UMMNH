import React, { Component } from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import colors from '../modules/Colors'

const TourStackNav = createStackNavigator()

import TourPreviewScreen from '../views/TourPreviewScreen'

import TourScreens from '../modules/TourScreens'

import GalleryScreen from '../views/GalleryScreen'

class TourStack extends Component {
  render(){
    return(
      <TourStackNav.Navigator
        screenOptions = {{
          headerStyle: {
            backgroundColor: colors.ummnhLightRed,
          },
          headerTintColor: colors.ummnhDarkBlue,
          headerBackTitle: 'Back'
        }}
      >

      <TourStackNav.Screen
        name = "Highlights Tour"
        component = {TourPreviewScreen}
      />

      {/*Navigation Screens*/}
      <TourStackNav.Screen name = "Find: 1/7" component = { TourScreens.HighlightsTourShortNav1 } />
      <TourStackNav.Screen name = "Find: 2/7" component = { TourScreens.HighlightsTourShortNav2 } />
      <TourStackNav.Screen name = "Find: 3/7" component = { TourScreens.HighlightsTourShortNav3 } />
      <TourStackNav.Screen name = "Find: 4/7" component = { TourScreens.HighlightsTourShortNav4 } />
      <TourStackNav.Screen name = "Find: 5/7" component = { TourScreens.HighlightsTourShortNav5 } />
      <TourStackNav.Screen name = "Find: 6/7" component = { TourScreens.HighlightsTourShortNav6 } />
      <TourStackNav.Screen name = "Find: 7/7" component = { TourScreens.HighlightsTourShortNav7 } />

      {/* Exhibit Screens */}
      <TourStackNav.Screen name = "Stop: 1/7" component = { TourScreens.HighlightsTourShortStop1 } />
      <TourStackNav.Screen name = "Stop: 2/7" component = { TourScreens.HighlightsTourShortStop2 } />
      <TourStackNav.Screen name = "Stop: 3/7" component = { TourScreens.HighlightsTourShortStop3 } />
      <TourStackNav.Screen name = "Stop: 4/7" component = { TourScreens.HighlightsTourShortStop4 } />
      <TourStackNav.Screen name = "Stop: 5/7" component = { TourScreens.HighlightsTourShortStop5 } />
      <TourStackNav.Screen name = "Stop: 6/7" component = { TourScreens.HighlightsTourShortStop6 } />
      <TourStackNav.Screen name = "Stop: 7/7" component = { TourScreens.HighlightsTourShortStop7 } />

      {/* Other Necessary Screens */}
      <TourStackNav.Screen name = "Image Gallery" component = { GalleryScreen } />

      </TourStackNav.Navigator>
    )
  }
}

export default TourStack
