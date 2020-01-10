import React from 'react'

import {
	Button
} from 'react-native-elements'

import Mastodons from '../Exhibits/Mastodons'

import images from '../../modules/Images'
import colors from '../../modules/Colors'

export default class HighlightsTourShortStop1 extends React.Component{
	static navigationOptions = ({navigation}) => ({
		title: 'Stop: 1 / 10',
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

	render(){
		return(
			<Mastodons
				isOnTour = { true }
				bottomButtonTitle = { 'Next Stop! '}
				bottomButtonTarget = { 'HighlightsTourShortNav2' }
			/>
		)
	}
}