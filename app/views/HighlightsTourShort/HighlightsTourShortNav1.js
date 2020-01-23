import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import colors from '../../modules/Colors'
import images from '../../modules/Images'

export default class HighlightsTourShortNav1 extends React.Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Find: 1 / 7',
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
				image1 = { images.navigation.highlightstour_short.stop1.image1 }
				image2 = { images.navigation.highlightstour_short.stop1.image2 }
				header = 'Find: The Mastodons'
				subheader = '1st Floor - Main Atrium'
				body = "Enter the museum through the main entrance. You will know you're at the right door if you walk between two pumas. The Mastodons are in the main atrium across from the information desk."
				map = "HighlightsTourShortMap1"
				stop = "HighlightsTourShortStop1"
			/>
		)
	}
}