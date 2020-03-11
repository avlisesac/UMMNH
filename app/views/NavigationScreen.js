import React from 'react'
import{
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import {
	Button,
	Icon,
} from 'react-native-elements'
import {
	withNavigation
} from 'react-navigation'

import Swiper from 'react-native-swiper'

import colors from '../modules/Colors'
import images from '../modules/Images'
import fontSizes from '../modules/FontSizes'
import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

import BodyCopy from '../components/BodyCopy'

const ButtonEx = withPreventDoubleClick(Button)

const NavigationScreen = (props) => {
	const navigation = props.navigation

	return(
		<SafeAreaView style = { styles.safeAreaView }>
			<ScrollView style = { styles.scrollView }>
				<View style = { styles.mainContainer }>
					<View style = { styles.upperArea }>

						<View style = { styles.swipeContainer }>
							<Swiper style = { styles.wrapper } removeClippedSubviews = { false } showsButtons = { true } activeDotColor = { 'white' } nextButton = { <Text style = { styles.swipeButtonText }>›</Text>} prevButton = { <Text style = { styles.swipeButtonText }>‹</Text>}>
								<Image
									source = { props.image1 }
									style = { styles.imageStyle }
								/>
								<Image
									source = { props.image2 }
									style = { styles.imageStyle }
								/>
							</Swiper>
						</View>

						<Text style = { styles.header }>{ props.header }</Text>

						<View style = { styles.subheaderContainer }>
							<Icon name = 'md-pin' type = 'ionicon' size = { fontSizes.subheader } color = { colors.ummnhDarkRed } />
							<Text style = { styles.subheader }>{ props.subheader }</Text>
						</View>

						<Text style = { styles.bodyCopy }>
							<BodyCopy textString = { props.body }/>
						</Text>
					</View>

					<View style = { styles.lowerArea }>
						<View style = { styles.buttonContainer }>
							<View style = { styles.buttonWrapper }>
								<ButtonEx
									title = 'Show on Map'
									onPress = { () => navigation.push("Museum Map", {
										image: props.map
									})}
								/>
							</View>
							<View style = { styles.buttonWrapper }>
								<ButtonEx
									title = 'Found It!'
									onPress = { () => navigation.push(props.stop)}
								/>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default NavigationScreen

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
	mainContainer: {
		flex: 1,
		width: '90%',
		marginTop: 10,
		marginBottom: 10,
		alignItems: 'center',
		alignSelf: 'center',
	},
	upperArea: {
		flex: 2,
		width: '100%',
	},
	lowerArea: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
	},
	swipeContainer: {
		width: '100%',
		aspectRatio: 1920/1080,
		overflow: 'hidden'
	},
	swipeButtonText: {
		fontSize: 65,
		color: 'white',
		textShadowColor: 'black',
		textShadowOffset: {
			width: 1.5,
			height: 1.5,
		},
		textShadowRadius: 1,
	},
	imageStyle: {
		flex: 1,
		height: null,
		width: null,
		resizeMode: 'contain',
	},
	header: {
		color: colors.ummnhDarkBlue,
		fontSize: fontSizes.header,
		fontFamily: 'Whitney-Black',
		marginTop: 10
	},
	subheaderContainer: {
		flexDirection: 'row',
		marginTop: 5,
	},
	subheader: {
		color: colors.ummnhDarkRed,
		fontSize: fontSizes.subheader,
		fontFamily: 'Whitney-Semibold',
		marginLeft: 5
	},
	bodyCopy: {
		fontSize: fontSizes.body,
		fontFamily: 'Whitney-Medium',
		textAlign: 'justify',
		lineHeight: (fontSizes.body * 1.25),
		marginTop: 5,
	},
	buttonContainer: {
		width: '66%',
		marginTop: 10,
		marginBottom: 10,
	},
	buttonWrapper: {
		marginTop: 10,
		marginBottom: 10,
	},
	exitButtonStyle: {
		backgroundColor: 'rgba(0,0,0,0)'
	},
	exitButtonTitleStyle: {
		color: colors.ummnhDarkBlue
	}
})
