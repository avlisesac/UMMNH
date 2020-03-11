import React from 'react'
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button
} from 'react-native-elements'

import images from '../modules/Images'
import colors from '../modules/Colors'
import fontSizes from '../modules/FontSizes'
import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

const HomeScreen = ({navigation}) => {
	return (
		<ImageBackground style = { styles.imageBackground } source = { images.homescreenBackground }>
			<SafeAreaView style = { styles.mainContainer }>
				<View style = { styles.menuContainer }>
					<View style = { styles.messageContainer }>
						<Text style = {[ styles.messageText, styles.messageHeader ]}>Welcome</Text>
						<Text style = {[ styles.messageText, styles.messageBody ]}>to the brand new</Text>
						<Text style = {[ styles.messageText, styles.messageBody ]}>University of Michigan</Text>
						<Text style = {[ styles.messageText, styles.messageBig ]}>Museum of</Text>
						<Text style = {[ styles.messageText, styles.messageBig ]}>Natural History!</Text>
					</View>
					<View style = { styles.buttonContainer }>
						<View style = { styles.buttonWrapper }>
							<ButtonEx
								title = "Tour"
								onPress = { () => navigation.push('Highlights Tour')}
							/>
						</View>
						<View style = { styles.buttonWrapper }>
							<ButtonEx
								title = "Map"
								onPress = { () => navigation.push('Museum Map', {
									image: images.mapImages.blank
								})}
							/>
						</View>
						<View style = { styles.buttonWrapper }>
							<ButtonEx
								title = "About"
								onPress = { () => navigation.push('About')}
							/>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</ImageBackground>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: '90%',
		alignItems: 'center',
	},
	imageBackground: {
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center',
	},
	menuContainer: {
		flex: 1,
		width: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		marginTop: 10,
		marginBottom: 10,
		alignItems: 'center'
	},
	messageContainer: {
		flex: 1,
		width: '100%',
		paddingTop: 10,
		paddingRight: 10,
	},
	messageText: {
		fontFamily: "Whitney-Black",
		color: colors.ummnhLightBlue,
		textAlign: 'right'
	},
	messageHeader: {
		fontSize: fontSizes.welcomeHeader,
	},
	messageBig: {
		fontSize: fontSizes.welcomeBig,
	},
	messageBody: {
		fontSize: fontSizes.welcomeBody,
	},
	buttonContainer: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 10,
	},
	buttonWrapper: {
		width: '66%',
		marginTop: 5,
		marginBottom: 5,
	},
	buttonMainStyle: {
		backgroundColor: 'red'
	}
})
