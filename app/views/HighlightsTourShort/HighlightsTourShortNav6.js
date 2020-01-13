import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import colors from '../../modules/Colors'
import images from '../../modules/Images'

export default class HighlightsTourShortNav6 extends React.Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Find: 6 / 7',
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
				image1 = { images.navigation.highlightstour_short.stop6.image1 }
				image2 = { images.navigation.highlightstour_short.stop6.image2 }
				header = 'Find: Dynamic Planet'
				subheader = '2nd Floor - West Wing'
				body = "Continue along the pathway that surrounds the West Atrium. When you get to the other side, you will see the entrance to Dynamic Planet."
				map = "HighlightsTourShortMap6"
				stop = "HighlightsTourShortStop6"
			/>
		)
	}
}