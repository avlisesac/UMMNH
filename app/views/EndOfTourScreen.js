import React from 'react'
import {
	Linking,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button
} from 'react-native-elements'

import fontSizes from '../modules/FontSizes'
import links from '../modules/Links'

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

export default class EndOfTourScreen extends React.Component{
	render(){
		return(
			<SafeAreaView style = { styles.safeArea }>
				<View style = { styles.mainContainer }>
					<Text style = { styles.header }>That's the end!</Text>
					<Text style = { styles.body }>You've reached the end of the tour. We hope you've enjoyed your time at the new University of Michigan Museum of Natural History. Be on the lookout for more tours to be added as we settle in to our new space. Hopefully your visit has taught you about the Earth and its history, and we hope you're hungry for more!</Text>

					<View style = { styles.buttonContainer }>
						<View style = { styles.buttonWrapper }>
							<ButtonEx
								title = 'Home'
								onPress = { () => this.props.navigation.popToTop() }
							/>
						</View>

						<View style = { styles.buttonWrapper }>
							<ButtonEx
								title = 'Make a Donation'
								onPress = { () =>  this._openLink(links.donationSite) }
							/>
						</View>
					</View>
				</View>
			</SafeAreaView>
		)
	}

	_openLink = (link) => {
		Linking.canOpenURL(link).then(supported => {
			if(supported){
				Linking.openURL(link)
			} else {
				console.log('can not open url:', link)
			}
		})
	}
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	mainContainer: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
		justifyContent: 'center',
	},
	header: {
		fontFamily: 'Whitney-Black',
		fontSize: fontSizes.header
	},
	body: {
		marginTop: 5,
		marginBottom: 5,
		textAlign: 'justify',
		fontSize: fontSizes.body,
		lineHeight: (fontSizes.body * 1.25),


	},
	buttonContainer: {
		width: '66%',
		alignSelf: 'center',
		marginTop: 10,
		marginBottom: 10,
	},
	buttonWrapper: {
		marginTop: 10,
		marginBottom: 10,
	}
})