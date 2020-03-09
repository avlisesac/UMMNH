import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import images from '../../modules/Images'

const HighlightsTourShortNav1 = ({navigation}) => {
	return (
		<NavigationScreen
			image1 = { images.navigation.highlightstour_short.stop1.image1 }
			image2 = { images.navigation.highlightstour_short.stop1.image2 }
			header = 'Find: The Mastodons'
			subheader = '1st Floor - Main Atrium'
			body = "Enter the museum through the main entrance. You will know you're at the right door if you walk between two pumas. The Mastodons are in the main atrium across from the information desk."
			map = "Map: 1/7"
			stop = "Stop: 1/7"
			navigation = { navigation }
		/>
	)
}

export default HighlightsTourShortNav1
