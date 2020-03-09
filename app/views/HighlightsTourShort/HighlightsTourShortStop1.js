import React from 'react'

import {
	Text,
	View,
} from 'react-native'

import {
	Button
} from 'react-native-elements'

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
				target = { 'HighlightsTourShortNav2' }
			/>
		</Mastodons>
	)
}

export default HighlightsTourShortStop1
