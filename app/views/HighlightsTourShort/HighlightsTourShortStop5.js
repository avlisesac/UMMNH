import React from 'react'

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
				target = { 'Find: 6/7' }
			/>
		</Quetz>
	)
}

export default HighlightsTourShortStop5
