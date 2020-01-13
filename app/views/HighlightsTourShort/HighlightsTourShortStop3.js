import React from 'react'

import {
	Button
} from 'react-native-elements'

//Change to desired exhibit
import UnderTheMicroscope from '../Exhibits/UnderTheMicroscope'

import images from '../../modules/Images'
import colors from '../../modules/Colors'

export default class HighlightsTourShortStop3 extends React.Component{
	static navigationOptions = ({navigation}) => ({
		title: 'Stop: 3 / 7',
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
			<UnderTheMicroscope
				isOnTour = { true }
				bottomButtonTitle = { 'Next Stop! '}
				bottomButtonTarget = { 'HighlightsTourShortNav4' }
			/>
		)
	}
}