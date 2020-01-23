import React from 'react'

import {
	Button
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

//Change to desired exhibit
import MichiganRivers from '../Exhibits/MichiganRivers'

import images from '../../modules/Images'
import colors from '../../modules/Colors'

export default class HighlightsTourShortStop2 extends React.Component{
	static navigationOptions = ({navigation}) => ({
		title: 'Stop: 2 / 7',
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

	componentDidMount = () => {
		Analytics.logEvent('Viewed_TourStop_2')
	}

	render(){
		return(
			<MichiganRivers
				isOnTour = { true }
				bottomButtonTitle = { 'Next Stop! '}
				bottomButtonTarget = { 'HighlightsTourShortNav3' }
			/>
		)
	}
}