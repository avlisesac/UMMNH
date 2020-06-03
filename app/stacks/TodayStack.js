import React, { useEffect } from 'react'
import moment from 'moment'
import { createStackNavigator } from '@react-navigation/stack'

import TodayAtUMMNHScreen from '../views/TodayAtUMMNHScreen'

import colors from '../modules/Colors'

const TodayStackNav = createStackNavigator()

const TodayStack = () => {
  return (
    <TodayStackNav.Navigator>
      <TodayStackNav.Screen
        name = "Today"
        component = {TodayAtUMMNHScreen}
        options = {{
          title: 'Today @ UMMNH',
          headerStyle: {
            backgroundColor: colors.ummnhLightGreen
          },
        }}
      />
    </TodayStackNav.Navigator>
  )
}

export default TodayStack
