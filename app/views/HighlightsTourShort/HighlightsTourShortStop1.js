import React from 'react'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

//Change to desired exhibit
import Mastodons from '../Exhibits/Mastodons'

import TourStopButtons from '../../components/TourStopButtons'

const HighlightsTourShortStop1 = ({navigation}) => {
	return(
		<Mastodons>
			<TourStopButtons
				navigation = { navigation }
				target = { 'Find: 2/7' }
			/>
		</Mastodons>
	)
}

export default HighlightsTourShortStop1
