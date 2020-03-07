import React from 'react'
import {
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button
} from 'react-native-elements'
import {
	useNavigation
} from '@react-navigation/native'

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

function StopHero(props){
	const navigation = useNavigation()

	return (
		<View style = { styles.mainContainer }>
			<Image
				source = { props.image }
				style = { styles.image }
			/>

			<View style = { styles.buttonWrapper }>
				<ButtonEx
					title = 'Image Gallery'
					onPress = { () => {
						navigation.push('Image Gallery', {
						gallery: props.gallery
					})
					}}
				/>
			</View>
		</View>
	)
}

export default StopHero

const styles = StyleSheet.create({
	mainContainer:{
		width: '100%',
		aspectRatio: 1920/1080,
	},
	image: {
		width: '100%',
		flex: 1,
		resizeMode: 'contain'
	},
	buttonWrapper: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		marginLeft: 5,
		marginRight: 5,
	},
})
