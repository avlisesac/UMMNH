import React from 'react'
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button,
	Icon
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

import images from '../modules/Images'
import fontSizes from '../modules/FontSizes'
import colors from '../modules/Colors'
import BodyCopy from '../components/BodyCopy'

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

const TourPreviewScreen = ({ navigation }) => {
	console.log('logging nav from preview screen', navigation)
	return(
		<SafeAreaView style = { styles.safeArea }>
			<View style = { styles.mainContainer }>
				<View style = { styles.heroContainer }>
					<Image source = { images.heroImages.feedingfrenzy } style = { styles.heroImage }/>
				</View>

				<Text style = { styles.header }>Self Guided Highlights Tour</Text>

				<View style = { styles.subheaderContainer }>
					<Icon
						name = 'md-time'
						type = 'ionicon'
						size = { fontSizes.subheader }
						color = { colors.ummnhDarkRed }
					/>
					<Text style = { styles.subheader }>35 min.</Text>
				</View>

				<Text style = { styles.body }>
					See the best that the Museum of Natural history has to offer! This tour will last approximately thirty-five minutes and show you our favorite features of this amazing new space. At each stop, you will get additional facts and information that we couldn't quite cram on to the placards. (Trust us, we tried!)
				</Text>

				<View style = { styles.buttonContainer }>
					<ButtonEx
						title = "Let's Go!"
						onPress = { () => {
							Analytics.logEvent('StartedTour')
							navigation.push('Find: 1/7')
						}}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default TourPreviewScreen

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	mainContainer: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
	},
	heroContainer: {
		width: '100%',
		aspectRatio: 1920 / 1080,
		marginTop: 10,
	},
	heroImage: {
		width: '100%',
		flex: 1,
		resizeMode: 'contain'
	},
	header: {
		fontFamily: 'Whitney-Black',
		fontSize: fontSizes.header,
		color: colors.ummnhDarkBlue,
		marginTop: 5,
	},
	subheaderContainer: {
		flexDirection: 'row',
		marginTop: 5,
	},
	subheader: {
		fontFamily: 'Whitney-Semibold',
		fontSize: fontSizes.subheader,
		color: colors.ummnhDarkRed,
		marginLeft: 5,
	},
	body: {
		marginTop: 5,
		marginBottom: 5,
		fontFamily: 'Whitney-Medium',
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
