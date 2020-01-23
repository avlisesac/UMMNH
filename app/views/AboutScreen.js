import React from 'react'

import {
	Linking,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View
} from 'react-native'

import {
	Button,
	Icon
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'
import colors from '../modules/Colors'
import fontSizes from '../modules/FontSizes'
import links from '../modules/Links'

const ButtonEx = withPreventDoubleClick(Button)

export default class AboutScreen extends React.Component {
	static navigationOptions = {
		title: "About",
		headerStyle: {
			backgroundColor: colors.ummnhYellow
		},
	}

	componentDidMount = () => {
		Analytics.logEvent('Viewed_AboutScreen')
	}

	render() {
		return (
			<SafeAreaView style = { styles.safeArea }>
				<ScrollView>
					<View style = { styles.mainContainer }>
						<Text style = { styles.sectionHeader }>Version 3.0</Text>
						<Text style = { styles.sectionContent }>New tours!</Text>
						<Text style = { styles.sectionContent }>More stops added</Text>
						<Text style = { styles.sectionContent }>New image galleries and informational content</Text>

						<Text style = { styles.sectionHeader }>About the App</Text>
						<Text style = { styles.sectionContent }>Welcome to the University of Michigan Museum of Natural History app! Our app will help you enjoy and interact with the museum on a deeper level.</Text>
						<Text style = { styles.sectionContent }>Use the Tours feature to take a self-guided audio / text tour of our curated Highlights exhibits. Get a behind-the-scenes look at exhibit prep and additional images of things you can't see in the Museum itself. Get prompted to use your noodle with our Think Like a Scientist questions!</Text>
						<Text style = { styles.sectionContent }>Use the Today @ UMMNH feature to see if there are any special events or Planetarium shows that you can attend today at the museum.</Text>

						<Text style = { styles.sectionHeader }>Connect</Text>
						<View style = { styles.socMedHoler }>
							<View style = { styles.buttonWrapper }>
								<ButtonEx
									icon = {{ name: 'md-globe', type: 'ionicon', size: fontSizes.buttonIcon, style: {marginRight: 0}}}
									onPress = { () => this._openLink(links.ummnhWebsite)}
								/>
							</View>
							<View style = { styles.buttonWrapper }>
								<ButtonEx
									icon = {{ name: 'logo-facebook', type: 'ionicon', size: fontSizes.buttonIcon, style: {marginRight: 0}}}
									onPress = { () => this._openLink(links.ummnhFacebook)}
								/>
							</View>
							<View style = { styles.buttonWrapper }>
								<ButtonEx
									icon = {{ name: 'logo-twitter', type: 'ionicon', size: fontSizes.buttonIcon, style: {marginRight: 0}}}						
									onPress = { () => this._openLink(links.ummnhTwitter)}
								/>
							</View>
							<View style = { styles.buttonWrapper }>
								<ButtonEx
									icon = {{ name: 'logo-instagram', type: 'ionicon', size: fontSizes.buttonIcon, style: {marginRight: 0}}}								
									onPress = { () => this._openLink(links.ummnhInstagram)}
								/>
							</View>
						</View>

						<Text style = { styles.sectionHeader }>Credits</Text>
						<Text style = { styles.sectionContent }>Developed in-house at the University of Michigan Museum of Natural History by Case Silva 👋👋</Text>
						<Text style = { styles.sectionContent }>UMMNH is a part of the University of Michigan's College of Literature, Science, and the Arts.</Text>

						<Text style = { styles.sectionHeader }>Contribute</Text>
						<Text style = { styles.sectionContent }>The museum is partially supported by the generosity of its donors and sponsors. If you would like to support the museum, please follow the link below to make a donation.</Text>
						<View style = { styles.donationButtonWrapper }>
							<ButtonEx
								title = "Make a Donation"
								onPress = { () => this._openLink(links.donationSite)}
							/>
						</View>


					</View>
				</ScrollView>
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

	},
	mainContainer: {
		width: '90%',
		alignSelf: 'center',
		marginBottom: 20,
	},
	sectionHeader: {
		fontFamily: "Whitney-Black",
		paddingTop: 10,
		paddingBottom: 10,
		fontSize: fontSizes.header,
	},
	sectionContent: {
		fontFamily: 'Whitney-Medium',
		paddingBottom: 10,
		textAlign: 'justify',
		fontSize: fontSizes.body,
		lineHeight: fontSizes.body * 1.25,
	},
	socMedHoler: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	buttonWrapper: {
		marginRight: 5,
		marginLeft: 5,
		width: fontSizes.buttonIcon * 2
	},
	donationButtonWrapper: {
		width: '66%',
		alignSelf: 'center'
	},
})