import React, { useState } from 'react'
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import Swiper from 'react-native-swiper'

//import Gallery from 'react-native-image-gallery'
import GallerySwiper from "react-native-gallery-swiper";

import PinchableGalleryImage from '../components/PinchableGalleryImage'
import fontSizes from '../modules/FontSizes'
import BodyCopy from '../components/BodyCopy'

function GalleryScreen({route, navigation}){
	const { gallery } = route.params
	const [index, setIndex] = useState(0)
	const [caption, setCaption] = useState("")

	onChangeImage = (index) => {
		setIndex(index)
	}

	return(
		<View style = { styles.safeArea }>
			<Text style = { styles.text }>(swipe to navigate)</Text>
			<GallerySwiper style = {{ flex: 1, backgroundColor: 'white' }}
				images = { gallery }
				onPageSelected = { this.onChangeImage }
			/>
			<Text style = { styles.text }>{ gallery[index].caption }</Text>
		</View>
	)
}

export default GalleryScreen

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: 'white',
	},
	slide: {
		flex: 1,
		width: '100%',
	},
	text: {
		marginTop: 10,
		marginBottom: 10,
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
