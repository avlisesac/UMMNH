import React from 'react'

import {
	Button
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

//Change to desired exhibit
import Quetz from '../Exhibits/Quetz'

import TourStopButtons from '../../components/TourStopButtons'

const HighlightsTourShortStop5 = ({navigation}) => {
	return(
		<Quetz>
			<TourStopButtons
				navigation = { navigation }
				target = { 'HighlightsTourShortNav2' }
			/>
		</Quetz>
	)
}

export default HighlightsTourShortStop5
