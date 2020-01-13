import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import colors from '../../modules/Colors'
import images from '../../modules/Images'

export default class HighlightsTourShortNav5 extends React.Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Find: 5 / 7',
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
				image1 = { images.navigation.highlightstour_short.stop5.image1 }
				image2 = { images.navigation.highlightstour_short.stop5.image2 }
				header = 'Find: Quetzalcoatlus'
				subheader = '2nd Floor - West Atrium'
				body = "Continue through the Evolution gallery until you exit on the other side. When you come out to the atrium overlook, you will see <i>Quetzalcoatlus</i> soaring through the air above."
				map = "HighlightsTourShortMap5"
				stop = "HighlightsTourShortStop5"
			/>
		)
	}
}