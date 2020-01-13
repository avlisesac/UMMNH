import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import colors from '../../modules/Colors'
import images from '../../modules/Images'

export default class HighlightsTourShortNav2 extends React.Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Find: 2 / 7',
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
				image1 = { images.navigation.highlightstour_short.stop2.image1 }
				image2 = { images.navigation.highlightstour_short.stop2.image2 }
				header = 'Find: Michigan Rivers'
				subheader = '1st Floor - Exploring Michigan Gallery'
				body = "From the mastodons, turn right and go down the hallway. Once you pass the Museum store, turn left and you will see the entrance to the Exploring Michigan gallery. You will find the Michigan Rivers diorama on the opposite wall, a large cottonwood tree and black bear are both easily visible."
				map = "HighlightsTourShortMap2"
				stop = "HighlightsTourShortStop2"
			/>
		)
	}
}