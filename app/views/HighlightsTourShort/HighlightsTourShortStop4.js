import React from 'react'

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
				target = { 'Find: 5/7' }
			/>
		</Majungasaurus>
	)
}

export default HighlightsTourShortStop4
