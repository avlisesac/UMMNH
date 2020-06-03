import React, { useEffect } from 'react'
import moment from 'moment'
import { createStackNavigator } from '@react-navigation/stack'

import DiscoverScreen from '../views/DiscoverScreen'

import colors from '../modules/Colors'


const DiscoverStackNav = createStackNavigator()

const DiscoverStack = ({ route, navigation }) => {
  return (
    <DiscoverStackNav.Navigator>
      <DiscoverStackNav.Screen
        name = "Discover"
        component = {DiscoverScreen}
        options = {{
          headerStyle: {
            backgroundColor: colors.ummnhYellow
          },
        }}
      />
    </DiscoverStackNav.Navigator>
  )
}

export default DiscoverStack
