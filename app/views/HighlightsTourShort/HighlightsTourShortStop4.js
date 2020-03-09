import React from 'react'

import {
	Button
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

//Change to desired exhibit
import Majungasaurus from '../Exhibits/Majungasaurus'

import TourStopButtons from '../../components/TourStopButtons'

const HighlightsTourShortStop4 = ({navigation}) => {
	return(
		<Majungasaurus>
			<TourStopButtons
				navigation = { navigation }
				target = { 'HighlightsTourShortNav2' }
			/>
		</Majungasaurus>
	)
}

export default HighlightsTourShortStop4
