import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import Swiper from 'react-native-swiper'

import PinchableGalleryImage from '../components/PinchableGalleryImage'
import fontSizes from '../modules/FontSizes'
import BodyCopy from '../components/BodyCopy'

function GalleryScreen({route, navigation}){
	const { gallery } = route.params

	console.log(gallery)

	//Create the slides
	const slides = Object.keys(gallery).map( (key, index) => {
		return (
			<View style = { styles.slide } key = { index }>
				<PinchableGalleryImage style = { styles.image } image = { gallery[key].image }/>
			 	<Text style = { styles.text }>
			 		<BodyCopy textString = { gallery[key].description } />
				</Text>
			</View>
		)
	})

	return(
		<SafeAreaView style = { styles.safeArea }>
			<Swiper style = { styles.wrapper } removeClippedSubviews = { false } paginationStyle = { {bottom:5, backgroundColor: 'rgba(255,255,255,0.5)'}} activeDotColor = { 'black' } showsButtons = { true } nextButton = { <Text style = { styles.swipeButtonText }>›</Text>} prevButton = { <Text style = { styles.swipeButtonText }>‹</Text>}>
		 		{ slides }
			</Swiper>
		</SafeAreaView>
	)
}

export default GalleryScreen

// export default class GalleryScreen extends React.Component{
// 	constructor(props){
// 		super(props)
//
// 		// this.state = {
// 		// 	gallery: this.props.navigation.getParam('gallery')
// 		// }
// 		console.log('navigation is:', this.props.navigation)
// 		console.log('gallery is: ', this.props.navigation.getParam('gallery'))
// 	}
//
// 	render(){
// 		let slides = Object.keys(this.state.gallery).map( (key, index) => {
// 			return(
// 				<View style = { styles.slide } key = { index }>
// 					<PinchableGalleryImage style = { styles.image } image = { this.state.gallery[key].image }/>
// 					<Text style = { styles.text }>
// 						<BodyCopy textString = { this.state.gallery[key].description } />
// 					</Text>
// 				</View>
// 			)
// 		})
//
// 		return(
// 			<SafeAreaView style = { styles.safeArea }>
// 				<Swiper style = { styles.wrapper } removeClippedSubviews = { false } paginationStyle = { {bottom:5, backgroundColor: 'rgba(255,255,255,0.5)'}} activeDotColor = { 'black' } showsButtons = { true } nextButton = { <Text style = { styles.swipeButtonText }>›</Text>} prevButton = { <Text style = { styles.swipeButtonText }>‹</Text>}>
// 					{ slides }
// 				</Swiper>
// 			</SafeAreaView>
// 		)
// 	}
// }

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	slide: {
		flex: 1,
		width: '100%',
	},
	text: {
		marginTop: 10,
		marginBottom: 25,
		width: '90%',
		alignSelf: 'center',
		backgroundColor: 'rgba(255,255,255,0.5)',
		textAlign: 'center',
		fontFamily: 'Whitney-Medium',
		fontSize: fontSizes.body
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
})
