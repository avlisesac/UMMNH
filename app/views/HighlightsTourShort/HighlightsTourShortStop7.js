import React from 'react'

import {
	Button
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

//Change to desired exhibit
import BristleMammoth from '../Exhibits/BristleMammoth'

import TourStopButtons from '../../components/TourStopButtons'

const HighlightsTourShortStop7 = ({navigation}) => {
	return(
		<BristleMammoth>
			<TourStopButtons
				navigation = { navigation }
				target = { 'HighlightsTourShortNav2' }
			/>
		</BristleMammoth>
	)
}

export default HighlightsTourShortStop7
