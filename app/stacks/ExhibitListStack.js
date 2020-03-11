import React from 'react'
import moment from 'moment'
import { createStackNavigator } from '@react-navigation/stack'

import ExhibitListScreen from '../views/ExhibitListScreen'

import colors from '../modules/Colors'

const ExhibitListStackNav = createStackNavigator()

//Exhibits
import BristleMammoth from '../views/Exhibits/BristleMammoth'
import DynamicPlanet from '../views/Exhibits/DynamicPlanet'
import Majungasaurus from '../views/Exhibits/Majungasaurus'
import Mastodons from '../views/Exhibits/Mastodons'
import MichiganRivers from '../views/Exhibits/MichiganRivers'
import Quetz from '../views/Exhibits/Quetz'
import UnderTheMicroscope from '../views/Exhibits/UnderTheMicroscope'

//Other
import GalleryScreen from '../views/GalleryScreen'

export default class ExhibitListStack extends React.Component {
  render (){
    return (
      <ExhibitListStackNav.Navigator
        screenOptions = {{
          headerStyle: {
            backgroundColor: colors.ummnhLightRed,
          },
          headerTintColor: colors.ummnhDarkBlue,
          headerBackTitle: 'Back'
        }}
      >
        <ExhibitListStackNav.Screen
          name = "Exhibits"
          component = {ExhibitListScreen}
        />

        {/* Exhibit Screens */}
        <ExhibitListStackNav.Screen name = "Bristle Mammoth" component = { BristleMammoth } />
        <ExhibitListStackNav.Screen name = "Dynamic Planet" component = { DynamicPlanet } />
        <ExhibitListStackNav.Screen name = "Majungasaurus" component = { Majungasaurus } />
        <ExhibitListStackNav.Screen name = "Mastodons" component = { Mastodons } />
        <ExhibitListStackNav.Screen name = "Michigan Rivers" component = { MichiganRivers } />
        <ExhibitListStackNav.Screen name = "Quetzalcoatlus" component = { Quetz } />
        <ExhibitListStackNav.Screen name = "Giant Cell" component = { UnderTheMicroscope } />

        {/* Other Necessary Screens */}
        <ExhibitListStackNav.Screen name = "Image Gallery" component = { GalleryScreen } />

      </ExhibitListStackNav.Navigator>
    )
  }
}
