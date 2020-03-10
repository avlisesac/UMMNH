import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import images from '../../modules/Images'

const HighlightsTourShortNav3 = ({navigation}) => {
	return (
		<NavigationScreen
			image1 = { images.navigation.highlightstour_short.stop3.image1 }
			image2 = { images.navigation.highlightstour_short.stop3.image2 }
			header = 'Find: Giant Cell'
			subheader = '2nd Floor - Under the Microscope Gallery'
			body = "Exit the Exploring Michigan gallery from the left-hand door and take the elevator at the end of the hall up to the second floor. Upon exiting, follow the hall to the left and enter the Under the Microscope gallery ahead. You will see the Giant Cell filling the center of the gallery."
			map = { images.mapImages.underthemicroscope }
			stop = "Stop: 3/7"
			navigation = { navigation }
		/>
	)
}

export default HighlightsTourShortNav3
