import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import images from '../../modules/Images'

const HighlightsTourShortNav7 = ({navigation}) => {
	return (
		<NavigationScreen
			image1 = { images.navigation.highlightstour_short.stop7.image1 }
			image2 = { images.navigation.highlightstour_short.stop7.image2 }
			header = 'Find: Bristle Mammoth'
			subheader = 'Lower Level - People and the Planet Gallery'
			body = "Exiting Dynamic Planet, pass back through the Under the Microscope gallery to take the elevator down to the Lower Lobby. From here, enter the People and the Planet gallery using the right-hand door. Upon entering, take a sharp left from the welcoming wolf to find the Bristle Mammoth."
			map = "HighlightsTourShortMap7"
			stop = "HighlightsTourShortStop7"
			navigation = { navigation }
		/>
	)
}

export default HighlightsTourShortNav7
