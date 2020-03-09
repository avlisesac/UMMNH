import React from 'react'

import {
	Button
} from 'react-native-elements'

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
				target = { 'HighlightsTourShortNav2' }
			/>
		</DynamicPlanet>
	)
}

export default HighlightsTourShortStop6
