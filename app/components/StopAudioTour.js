import React from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button
} from 'react-native-elements'
import SoundPlayer from 'react-native-sound-player'

import BodyCopy from '../components/BodyCopy'

import fontSizes from '../modules/FontSizes'
import colors from '../modules/Colors'
import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

export default class StopAudioTour extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			showFullDescription: false,
			playPauseIcon: 'md-play',
		}
	}

	render() {
		return (
			<View style = { styles.mainContainer }>
				<View style = { styles.audioPlayer }>
					<Text style = { styles.audioPlayerHeader }>Audio Tour</Text>

					<View style = { styles.audioPlayerButtonContainer }>
						<View style = { styles.audioButtonWrapper }>
						<Button
							buttonStyle = { styles.button }
							icon = {{ name: this.state.playPauseIcon, type: 'ionicon', size: fontSizes.button, style: {marginRight: 0}}}
							onPress = { () => {
								console.log('play/pause pressed')
							}}
						/>
						</View>
						
						<View style = { styles.audioButtonWrapper }>
						<Button
							buttonStyle = { styles.button }
							icon = {{ name: 'md-square', type: 'ionicon', size: fontSizes.button, style: {marginRight: 0}}}
							onPress = { () => {
								console.log('stop pressed')
							}}
						/>
						</View>

						<View style = { styles.textButtonWrapper }>
						<Button
							buttonStyle = { styles.button }
							titleStyle = { styles.buttonTitle }
							title = 'Show/Hide Text'
							onPress = { () => {
								this.setState({
									showFullDescription: !this.state.showFullDescription
								})
							}}
						/>
						</View>
					</View>
				</View>

				{ this.state.showFullDescription && 
					<Text style = { styles.fullDescription }>
						<BodyCopy textString = { this.props.fullText }/>
					</Text>
				}
			</View>
			
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