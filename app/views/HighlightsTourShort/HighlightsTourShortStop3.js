import React from 'react'

import {
	Button
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

//Change to desired exhibit
import UnderTheMicroscope from '../Exhibits/UnderTheMicroscope'

import TourStopButtons from '../../components/TourStopButtons'

const HighlightsTourShortStop3 = ({navigation}) => {
	return(
		<UnderTheMicroscope>
			<TourStopButtons
				navigation = { navigation }
				target = { 'HighlightsTourShortNav2' }
			/>
		</UnderTheMicroscope>
	)
}

export default HighlightsTourShortStop3
