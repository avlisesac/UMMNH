import React from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button
} from 'react-native-elements'
import AudioPlayer from '../components/AudioPlayer'

import BodyCopy from '../components/BodyCopy'

import fontSizes from '../modules/FontSizes'
import colors from '../modules/Colors'

export default class StopAudioTour extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			showFullDescription: false,
			playPauseIcon: 'md-play',
			audioState: null,
			audioPlaying: false,
			audioLoaded: false,
		}
	}

	componentDidMount(){

	}

	render() {
		return (
			

		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {

	},
	audioPlayer: {
		backgroundColor: colors.ummnhLightBlue,
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 5,
	},
	audioPlayerHeader: {
		width: '100%',
		textAlign: 'center',
		fontFamily: 'Whitney-Black',
		fontSize: fontSizes.header,
		marginTop: 5,
		marginBottom: 5,
	},
	audioPlayerButtonContainer: {
		flex: 1,
		flexDirection: 'row',
		//justifyContent: 'space-around',
		marginBottom: 10,
	},
	audioButtonWrapper: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5,
	},
	textButtonWrapper: {
		flex: 3,
		marginLeft: 5,
		marginRight: 5,
	},
	button: {
		height: '100%',
		backgroundColor: colors.ummnhYellow,
		paddingLeft: 10,
		paddingRight: 10,
	},
	buttonTitle: {
		fontSize: fontSizes.button,
		fontFamily: 'Whitney-Black',
		color: colors.ummnhDarkBlue,
	},
	fullDescription:  {
		fontSize: fontSizes.body,
		fontFamily: 'Whitney-Medium',
		lineHeight: (fontSizes.body * 1.25),
		textAlign: 'justify',
	}
})
