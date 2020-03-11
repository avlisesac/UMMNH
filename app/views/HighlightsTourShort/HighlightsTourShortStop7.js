import React from 'react'

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
				target = { 'End of Tour' }
			/>
		</BristleMammoth>
	)
}

export default HighlightsTourShortStop7
