import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import colors from '../../modules/Colors'
import images from '../../modules/Images'

export default class HighlightsTourShortNav3 extends React.Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Find: 3 / 7',
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
		headerRight: (
			<Button
				title = "Exit"
				titleStyle = {{ color: colors.ummnhDarkBlue }}
				buttonStyle = {{ backgroundColor: 'rgba(0,0,0,0)' }}
				onPress = { () => navigation.push('Exit')}
			/>
		)
	})

	render() {
		return (
			<NavigationScreen
				image1 = { images.navigation.highlightstour_short.stop3.image1 }
				image2 = { images.navigation.highlightstour_short.stop3.image2 }
				header = 'Find: Giant Cell'
				subheader = '2nd Floor - Under the Microscope Gallery'
				body = "Exit the Exploring Michigan gallery from the left-hand door and take the elevator at the end of the hall up to the second floor. Upon exiting, follow the hall to the left and enter the Under the Microscope gallery ahead. You will see the Giant Cell filling the center of the gallery."
				map = "HighlightsTourShortMap3"
				stop = "HighlightsTourShortStop3"
			/>
		)
	}
}