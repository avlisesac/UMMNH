import React from 'react'
import { Button } from 'react-native-elements'
import NavigationScreen from '../NavigationScreen'

import colors from '../../modules/Colors'
import images from '../../modules/Images'

export default class HighlightsTourShortNav4 extends React.Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Find: 4 / 7',
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
				image1 = { images.navigation.highlightstour_short.stop4.image1 }
				image2 = { images.navigation.highlightstour_short.stop4.image2 }
				header = 'Find: Majungasaurus'
				subheader = '2nd Floor - Evolution Gallery'
				body = "Exit the Under the Microscope gallery on the opposite side and enter the Evolution gallery ahead. Using the numbered ‘Mass Extinction Pillars’ as a guide, continue until you pass pillar #4. When you do, you will see <i>Majungasaurus</i> looming down from above on the left."
				map = "HighlightsTourShortMap4"
				stop = "HighlightsTourShortStop4"
			/>
		)
	}
}