import React from 'react'
import {
	Image,
	SafeAreaView,
	View,
	StyleSheet,
	Text,
} from 'react-native'

import GallerySwiper from "react-native-gallery-swiper";

import colors from '../modules/Colors'
import images from '../modules/Images'

const MapScreen = ({route, navigation}) => {
	const { image } = route.params

	return(
		<SafeAreaView style = { styles.mainContainer }>
			<GallerySwiper style = {{ flex: 1, backgroundColor: 'white' }}
				images = {[
					{
						source: image,
						dimensions: { width: 1680, height: 1280}
					}
				]}
			/>
		</SafeAreaView>
	)
}

export default  MapScreen

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: '100%',
		backgroundColor: 'white'
	},
})
