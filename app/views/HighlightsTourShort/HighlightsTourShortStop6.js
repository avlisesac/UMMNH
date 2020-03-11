import React from 'react'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

//Change to desired exhibit
import DynamicPlanet from '../Exhibits/DynamicPlanet'

import TourStopButtons from '../../components/TourStopButtons'

const HighlightsTourShortStop6 = ({navigation}) => {
	return(
		<DynamicPlanet>
			<TourStopButtons
				navigation = { navigation }
				target = { 'Find: 7/7' }
			/>
		</DynamicPlanet>
	)
}

export default HighlightsTourShortStop6
