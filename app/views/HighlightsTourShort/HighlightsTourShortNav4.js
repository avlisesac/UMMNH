import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import images from '../../modules/Images'

const HighlightsTourShortNav4 = ({navigation}) => {
	return (
		<NavigationScreen
			image1 = { images.navigation.highlightstour_short.stop4.image1 }
			image2 = { images.navigation.highlightstour_short.stop4.image2 }
			header = 'Find: Majungasaurus'
			subheader = '2nd Floor - Evolution Gallery'
			body = "Exit the Under the Microscope gallery on the opposite side and enter the Evolution gallery ahead. Using the numbered ‘Mass Extinction Pillars’ as a guide, continue until you pass pillar #4. When you do, you will see <i>Majungasaurus</i> looming down from above on the left."
			map = "HighlightsTourShortMap4"
			stop = "HighlightsTourShortStop4"
			navigation = { navigation }
		/>
	)
}

export default HighlightsTourShortNav4
