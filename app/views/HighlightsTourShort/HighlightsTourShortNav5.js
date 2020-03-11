import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import images from '../../modules/Images'

const HighlightsTourShortNav5 = ({navigation}) => {
	return (
		<NavigationScreen
			image1 = { images.navigation.highlightstour_short.stop5.image1 }
			image2 = { images.navigation.highlightstour_short.stop5.image2 }
			header = 'Find: Quetzalcoatlus'
			subheader = '2nd Floor - West Atrium'
			body = "Continue through the Evolution gallery until you exit on the other side. When you come out to the atrium overlook, you will see <i>Quetzalcoatlus</i> soaring through the air above."
			map = { images.mapImages.quetz }
			stop = "Stop: 5/7"
			navigation = { navigation }
		/>
	)
}

export default HighlightsTourShortNav5
