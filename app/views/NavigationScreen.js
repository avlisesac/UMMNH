import React from 'react'
import{
	Button,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import Swiper from 'react-native-swiper'

import colors from '../modules/Colors'
import images from '../modules/Images'
import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

export default class NavigationScreen extends React.Component {
	static navigationOptions = {
		title: 'Find:',
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
		headerRight: (
			<ButtonEx
				title = "Exit"
				onPress = { () => navigation.push('Exit')}
			/>
		)
	}

	render(){
		return(
			<SafeAreaView style = { styles.safeAreaView }>
				<ScrollView style = { styles.scrollView }>
					<View style = { styles.mainContainer }>
						<View style = { styles.upperArea }>
							<View style = { styles.swipeContainer }>
								<Swiper style = { styles.wrapper } showsButtons = { true } activeDotColor = { 'white' } nextButton = { <Text style = { styles.buttonText }>›</Text>} prevButton = { <Text style = { styles.buttonText }>‹</Text>}>
									<Image 
										source = { images.navigation.highlightsTour.stop1.image1 }
										style = { styles.imageStyle }
									/>
									<Image 
										source = { images.navigation.highlightsTour.stop1.image2 }
										style = { styles.imageStyle }
									/>
								</Swiper>
							</View>
						</View>

						<View style = { styles.lowerArea }>
							<Text>Lower</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}
}

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
		backgroundColor: 'red'
	},
	upperArea: {
		flex: 2,
		backgroundColor: 'blue'
	},
	lowerArea: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'green'
	},
	swipeContainer: {
		width: '100%',
		aspectRatio: 1920/1080,
		overflow: 'hidden'
	},
	imageStyle: {
		flex: 1,
		height: null,
		width: null,
		resizeMode: 'contain',
		backgroundColor: 'purple'
	}
})