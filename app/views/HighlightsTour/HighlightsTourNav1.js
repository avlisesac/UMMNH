import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import colors from '../../modules/Colors'

export default class HighlightsTourNav1 extends React.Component {
	static navigationOptions = {
		title: 'Find: 1 / 10',
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
	}

	render() {
		return (
			<NavigationScreen
				header = 'Find: The Mastodons'
				subheader = '1st Floor - Main Atrium'
				body = "Enter the museum through the main entrance. You will know you're at the right door if you walk between two Puma's. The Mastodons are in the main atrium across from the information desk."
				map = "HighlightsTourMap1"
				stop = "HighlightsTourStop1"
			/>
		)
	}
}