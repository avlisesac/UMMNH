import React from 'react'

import {
	Button
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

//Change to desired exhibit
import MichiganRivers from '../Exhibits/MichiganRivers'

import TourStopButtons from '../../components/TourStopButtons'

const HighlightsTourShortStop2 = ({navigation}) => {
	return(
		<MichiganRivers>
			<TourStopButtons
				navigation = { navigation }
				target = { 'HighlightsTourShortNav2' }
			/>
		</MichiganRivers>
	)
}

export default HighlightsTourShortStop2
