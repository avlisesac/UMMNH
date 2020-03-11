import React from 'react'

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
				target = { 'Find: 3/7' }
			/>
		</MichiganRivers>
	)
}

export default HighlightsTourShortStop2
