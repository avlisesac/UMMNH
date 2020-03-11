import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import images from '../../modules/Images'

const HighlightsTourShortNav6 = ({navigation}) => {
	return (
		<NavigationScreen
			image1 = { images.navigation.highlightstour_short.stop6.image1 }
			image2 = { images.navigation.highlightstour_short.stop6.image2 }
			header = 'Find: Dynamic Planet'
			subheader = '2nd Floor - West Wing'
			body = "Continue along the pathway that surrounds the West Atrium. When you get to the other side, you will see the entrance to Dynamic Planet."
			map = { images.mapImages.dynamicplanet }
			stop = "Stop: 6/7"
			navigation = { navigation }
		/>
	)
}

export default HighlightsTourShortNav6
