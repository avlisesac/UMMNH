import React from 'react'
import {
	Linking,
	StyleSheet,
	Text,
	View
} from 'react-native'
import {
	Button,
} from 'react-native-elements'

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'
import links from '../modules/Links'

const ButtonEx = withPreventDoubleClick(Button)

export default class WebScheduleLinks extends React.Component {
	_openLink = (link) => {
		Linking.canOpenURL(link).then(supported => {
			if(supported){
				Linking.openURL(link)
			} else {
				console.log('can not open url:', link)
			}
		})
	}

	render(){
		return(
			<View style = { styles.webLinkHolder }>
				<Text style = { styles.notifText }>Like to plan ahead? See full schedules on our website!</Text>
				<View style = { styles.buttonContainer }>
					<View style = { styles.buttonWrapper }>
						<ButtonEx
							title = 'Museum Events'
							onPress = { () => this._openLink(links.museumEvents) }
						/>
					</View>

					<View style = { styles.buttonWrapper }>
						<ButtonEx
							title = 'Planetarium Shows'
							buttonStyle = { styles.buttonStyle }
							onPress = { () => this._openLink(links.planetariumShows) }
						/>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	webLinkHolder: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	buttonWrapper: {
		marginTop: 10,
		marginBottom: 10,
	}
})