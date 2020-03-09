import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import images from '../../modules/Images'

const HighlightsTourShortNav2 = ({navigation}) => {
	return (
		<NavigationScreen
			image1 = { images.navigation.highlightstour_short.stop2.image1 }
			image2 = { images.navigation.highlightstour_short.stop2.image2 }
			header = 'Find: Michigan Rivers'
			subheader = '1st Floor - Exploring Michigan Gallery'
			body = "From the mastodons, turn right and go down the hallway. Once you pass the Museum store, turn left and you will see the entrance to the Exploring Michigan gallery. You will find the Michigan Rivers diorama on the opposite wall, a large cottonwood tree and black bear are both easily visible."
			map = "HighlightsTourShortMap2"
			stop = "HighlightsTourShortStop2"
			navigation = { navigation }
		/>
	)
}

export default HighlightsTourShortNav2
